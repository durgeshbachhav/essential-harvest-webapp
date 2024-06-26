import React from "react";
import "./popup.css";
import { MdCancel } from "react-icons/md";

const Popup = ({ handleClose }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const name = e.target.name.value;

    const formData = new FormData();
    formData.append("email", email);
    formData.append("name", name);

    try {
      const response = await fetch(
        "https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjUwNTZhMDYzMjA0MzE1MjZjNTUzMTUxMzQi_pc",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        console.log("Form data sent successfully");
        handleClose(); // Close the pop-up form after successful submission
      } else {
        console.error("Failed to send form data");
      }
    } catch (error) {
      console.error("Error occurred while sending form data:", error);
    }
  };

  return (
    <div className="popup rounded-xl">
      <div className="popup-inner">
        <div className="mb-4 sm:mb-8 lg:mb-4 flex items-center justify-between">
          <h2 className="text-center text-xl font-bold text-green-500 sm:text-xl lg:text-left lg:text-2xl">
            Stay Updated
          </h2>
          <MdCancel size={20} color="red" onClick={handleClose} />
        </div>

        <div className="flex flex-col items-center lg:items-end">
          <form
            onSubmit={handleSubmit}
            className="mb-3 flex flex-col w-full max-w-md gap-2"
          >
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="bg-gray-white w-full flex-1 rounded border border-gray-300 px-3 py-2 text-gray-800 placeholder-gray-400 outline-none ring-green-300 transition duration-100 focus:ring"
            />
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="bg-gray-white w-full flex-1 rounded border border-gray-300 px-3 py-2 text-gray-800 placeholder-gray-400 outline-none ring-green-300 transition duration-100 focus:ring"
            />

            <button
              type="submit"
              className="inline-block rounded bg-green-500 px-8 py-2 text-center text-sm font-semibold text-white outline-none ring-green-300 transition duration-100 hover:bg-green-600 focus-visible:ring active:bg-green-700 md:text-base"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Popup;
