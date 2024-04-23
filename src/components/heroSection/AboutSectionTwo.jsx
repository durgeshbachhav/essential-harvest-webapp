import React, { useEffect, useRef } from "react";
import underline from "../../assets/home/underline.png";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import heroVideo from "../../assets/home/hero-video.mp4";
import { useNavigate } from "react-router-dom";
import { GiTwirlyFlower } from "react-icons/gi";
function AboutSectionTwo() {
  const navigate = useNavigate();

  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.controls = false;
      videoRef.current.autoplay = true;
      videoRef.current.muted = true; // Mute the video
    }
  }, [videoRef.current]); // Include videoRef.current as a dependency

  const titleRef = useRef();
  const subtitleRef = useRef();
  const imageRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const titleTop = titleRef.current.getBoundingClientRect().top;
      const subtitleTop = subtitleRef.current.getBoundingClientRect().top;
      const imageTop = imageRef.current.getBoundingClientRect().top;

      if (titleTop < window.innerHeight) {
        titleRef.current.classList.add(
          "animate__animated",
          "animate__slideInUp"
        );
      }

      if (subtitleTop < window.innerHeight) {
        subtitleRef.current.classList.add(
          "animate__animated",
          "animate__slideInUp"
        );
      }

      if (imageTop < window.innerHeight) {
        imageRef.current.classList.add(
          "animate__animated",
          "animate__slideInUp"
        );
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div className="bg-leaf    p-4 flex flex-col  items-center justify-center lg:flex-row  lg:gap-4  lg:mx-auto  lg:px-16">
        <div className="w-full p-4 lg:p-0 lg:w-1/2 flex flex-col items-start justify-center md:justify-start lg:gap-4  ">
          <div className="w-full flex items-center justify-center flex-col">
            <h4 className="text-center secondary-font  text-sub-heading-color md:text-start text-2xl">
              Why Choose Us
            </h4>
            <img src={underline} alt="" className="mt-4 content-center" />
          </div>
          <div
            className="secondary-font mt-4
             lg:mt-0 flex items-center justify-center w-full"
          >
            <div className="secondary-font text-sub-heading-color   max-w-xl ">
              <div className="flex items-start justify-start gap-1">
                <GiTwirlyFlower color="green" />
                <div className="flex items-start justify-start">
                  <p className="secondary-font">
                    <span className="font-bold primary-font">
                      Naturally You :{" "}
                    </span>
                    Pure botanicals & essential oils, kind to your skin
                  </p>
                </div>
              </div>
              <div className="flex items-start justify-start gap-1">
                <GiTwirlyFlower color="green" />
                <div className="flex items-start justify-start">
                  <p className="secondary-font">
                    <span className="font-bold primary-font">
                      Inner & Outer Glow :{" "}
                    </span>
                    Nourish skin, hair, & well-being, naturally.
                  </p>
                </div>
              </div>
              <div className="flex items-start justify-start gap-1">
                <GiTwirlyFlower color="green" />
                <div className="flex items-start justify-start">
                  <p className="secondary-font">
                    <span className="font-bold primary-font">
                      Quality You Trust :{" "}
                    </span>
                    Meticulously crafted for real results & sustainability.
                  </p>
                </div>
              </div>
              <div className="flex items-start justify-start gap-1">
                <GiTwirlyFlower color="green" />
                <div className="flex items-start justify-start">
                  <p className="secondary-font">
                    <span className="font-bold primary-font">
                      Empower Your Choices :{" "}
                    </span>
                    Learn about natural solutions for holistic wellness.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex items-center justify-center flex-col">
            <img src={underline} alt="" className="mt-4 content-center" />
            <div
              className="mt-4 focus:outline-none flex items-center justify-between text-white  font-medium text-sm px-4 py-2 w-32 bg-everglade  hover:bg-everglade ease-in duration-300  secondary-font"
              onClick={() => navigate("/allproducts")}
            >
              Shop now
              <IoIosArrowDroprightCircle className="w-5 h-5" />
            </div>
          </div>
        </div>
        <div className="w-full p-4 lg:p-0  lg:w-1/2 rounded-lg">
          <video
            ref={videoRef}
            // width="320"
            // height="240"
            controls={false}
            autoPlay
            loop
            className="rounded-lg"
          >
            <source
              src={heroVideo}
              className="w-full rounded-lg"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </>
  );
}

export default AboutSectionTwo;
