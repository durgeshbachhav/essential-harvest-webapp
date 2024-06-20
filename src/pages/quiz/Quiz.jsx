import { useState } from "react";
import Layout from "../../components/layout/Layout";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";
import acne from '../../assets/skin/Acne.jpg'
import Darkspots from '../../assets/skin/Darkspots.jpg'
import Dryness from '../../assets/skin/Dryness.jpg'
import Other from '../../assets/skin/Other.jpg'
import Wrinkles from '../../assets/skin/Wrinkles.jpg'
import skin from "../../assets/skin/skin.jpg";

const Quiz = () => {
  const questions = [
    {
      type: "input",
      question: "Hi, let's get to know your skin better! What's your name?",
      key: "name"
    },
    {
      type: "select",
      question: "Hi [name], are you new to skincare?",
      options: ["Yes", "No"],
      key: "newToSkincare"
    },
    {
      type: "select",
      question: "What is your gender identity?",
      options: ["Male", "Female", "Prefer not to say"],
      key: "gender"
    },
    {
      type: "select",
      question: "What age group are you in?",
      options: ["Under 18", "18-24", "25-34", "35-44", "45-54", "55-64", "65 or above"],
      key: "ageGroup"
    },
    {
      type: "select",
      question: "Which of the below best describes your skin type, [name]?",
      options: ["Oily", "Dry", "Normal", "I am not sure"],
      key: "skinType"
    },
    {
      type: "select",
      question: "Is your skin sensitive?",
      options: ["Yes", "No", "I am not sure"],
      key: "skinSensitive"
    },
    {
      type: "select_with_images",
      question: "Which of these best describes your current skin concern?",
      options: [
        { label: "Acne", image: acne, key: "skinConcern" },
        { label: "Wrinkles", image: Wrinkles, key: "skinConcern" },
        { label: "Dark spots", image: Darkspots, key: "skinConcern" },
        { label: "Dryness", image: Dryness, key: "skinConcern" },
        { label: "Other", image: Other, key: "skinConcern" }
      ]
    },
    {
      type: "select",
      question: "Have you been facing pigmentation on your skin?",
      options: ["Yes", "No"],
      key: "pigmentation"
    },
    {
      type: "select",
      question: "Do you have dark circles under your eyes?",
      options: ["Yes", "No"],
      key: "darkCircles"
    },
    {
      type: "select",
      question: "Has your skin texture become noticeably rougher or more uneven in recent weeks?",
      options: ["Yes", "No"],
      key: "skinTexture"
    }
    // Add more questions as needed
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responses, setResponses] = useState({});
  const [name, setName] = useState("");

  const handleResponseChange = (event) => {
    const { name, value } = event.target;
    if (name === "name") {
      setName(value);
    }
    setResponses(prevResponses => ({
      ...prevResponses,
      [name]: value
    }));
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrevQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
  };

  const handleSubmitQuiz = async () => {
    try {
      // Prepare data to send
      const payload = {
        name: responses.name,
        newToSkincare: responses.newToSkincare,
        gender: responses.gender,
        ageGroup: responses.ageGroup,
        skinType: responses.skinType,
        skinSensitive: responses.skinSensitive,
        skinConcern: responses.skinConcern,
        pigmentation: responses.pigmentation,
        darkCircles: responses.darkCircles,
        skinTexture: responses.skinTexture
        // Add more fields as per your questions
      };

      // Send data to webhook
      const response = await fetch("https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjUwNTZhMDYzMjA0MzE1MjZjNTUzMTUxMzQi_pc", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error("Failed to send data to webhook.");
      }

      // Handle success (e.g., show a success message, navigate to a thank-you page)
      alert("Quiz submitted successfully!");
      // Reset state or navigate to another page after submission if needed
      // Example: setResponses({});
      // Example: setCurrentQuestionIndex(0);
    } catch (error) {
      console.error("Error sending data to webhook:", error);
      // Handle error (e.g., show an error message to the user)
      alert("Failed to submit quiz. Please try again later.");
    }
  };

  const currentQuestion = questions[currentQuestionIndex];
  const questionText = currentQuestion.question.replace("[name]", name);

  return (
    <Layout>
      <div className="container px-5 py-8 md:py-16 mx-auto flex flex-col items-center justify-center md:flex-row max-w-7xl gap-12">
        <div className="md:w-1/2">
          <img src={skin} alt="" />
        </div>
        <div className="flex items-center justify-center flex-col md:w-1/2">
          <h2 className="text-3xl text-center font-semibold font-primary mb-4">
             Essential Harvest Quiz
          </h2>
          <p className="text-lg mb-4 font-secondary text-center">
            {questionText}
          </p>

          {currentQuestion.type === "input" && (
            <input
              type="text"
              name={currentQuestion.key}
              value={responses[currentQuestion.key] || ""}
              onChange={handleResponseChange}
              className="bg-gray-600 max-w-sm rounded-lg mb-4 px-2 py-2 w-full text-white placeholder:text-white outline-none"
              placeholder="Enter your answer"
            />
          )}

          {currentQuestion.type === "select" && (
            <div className="  grid grid-cols-2 gap-1">
              {currentQuestion.options.map((option, index) => (
                <label key={index} htmlFor={`quiz_option_${index}`} className="block cursor-pointer rounded-lg border border-gray-300 bg-white p-4 text-sm font-medium shadow-sm mt-2 hover:border-blue-500 hover:bg-blue-50 transition-colors duration-150">
                  <input
                    type="radio"
                    name={currentQuestion.key}
                    value={option}
                    id={`quiz_option_${index}`}
                    onChange={handleResponseChange}
                    checked={responses[currentQuestion.key] === option}
                    className="hidden"
                  />
                  <div className="flex items-center">
                    <div className="relative flex-shrink-0 w-4 h-4 border border-gray-400 rounded-full">
                      {responses[currentQuestion.key] === option && (
                        <div className="absolute inset-0 bg-green-500 rounded-full"></div>
                      )}
                    </div>
                    <span className="ml-3 text-gray-700">{option}</span>
                  </div>
                </label>
              ))}
            </div>
          )}

          {currentQuestion.type === "select_with_images" && (
            <div className="grid grid-cols-2 gap-2">
              {currentQuestion.options.map((option, index) => (
                <label key={index} htmlFor={`select_with_images_${index}`} className="block cursor-pointer rounded-lg border border-gray-200 bg-white p-2 text-sm font-medium shadow-sm hover:border-gray-300 mb-4 flex items-center">
                  <input
                    type="radio"
                    name={option.key}
                    value={option.label}
                    id={`select_with_images_${index}`}
                    onChange={handleResponseChange}
                    checked={responses[option.key] === option.label}
                    className="sr-only"
                  />
                  <div className="relative flex-shrink-0 w-10 h-10 mr-2">
                    <img
                      src={option.image}
                      alt={option.label}
                      className={`w-full h-full rounded-lg ${responses[option.key] === option.label ? 'ring-2 ring-blue-500' : ''}`}
                    />
                    {responses[option.key] === option.label && (
                      <div className="absolute inset-0 bg-blue-500 opacity-50 rounded-lg"></div>
                    )}
                  </div>
                  <span className="text-gray-700">{option.label}</span>
                </label>
              ))}
            </div>
          )}

          {currentQuestionIndex < questions.length - 1 ? (
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={handlePrevQuestion}
                className="mt-4 focus:outline-none flex items-center justify-between text-white font-medium text-sm px-4 py-4 w-60 bg-everglade hover:bg-everglade-dark ease-in duration-300 secondary-font cursor-pointer"
              >
                <IoIosArrowDropleftCircle className="w-5 h-5" />
                Prev
              </button>
              <button
                onClick={handleNextQuestion}
                className="mt-4 focus:outline-none flex items-center justify-between text-white font-medium text-sm px-4 py-4 w-60 bg-everglade hover:bg-everglade-dark ease-in duration-300 secondary-font cursor-pointer"
              >
                Next
                <IoIosArrowDroprightCircle className="w-5 h-5" />
              </button>
            </div>
          ) : (
            <button
              onClick={handleSubmitQuiz}
              className="mt-4 focus:outline-none flex items-center justify-between text-white font-medium text-sm px-4 py-4 w-60 bg-everglade hover:bg-everglade-dark ease-in duration-300 secondary-font cursor-pointer"
            >
              Submit
              <IoIosArrowDroprightCircle className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Quiz;
