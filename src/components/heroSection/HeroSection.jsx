import React from "react";
import hero from "../../assets/home/hero5.png";
import heroH5 from "../../assets/home/hero3.png";
import { useNavigate } from "react-router-dom";

function HeroSection({ head, para }) {
  const navigate = useNavigate();
  return (
    <div className="hero">
      <img className="w-full h-full" src={hero} alt="" />
      <img
        className="height-adjust animate__animated animate__fadeIn mob"
        src={heroH5}
        alt=""
      />
      <div className="hero-content">
        <h1 className="primary-font text-primary-800 mb-4 text-5xl animate__animated animate__slideInUp  ">
          {head}
        </h1>
        {/* <h2>CELEBRATING 25 YEARS IN UAE</h2> */}
        <h2 className="maven-pro-font text-3xl animate__animated animate__slideInUp">
          {para}
        </h2>
        <button
          onClick={() => navigate("/allproducts")}
          className="animate__animated animate__slideInUp focus:outline-none text-white  font-medium mt-10 secondary-font px-10 py-2  bg-primary-500 rounded-lg hover:scale-105 ease-in duration-300 hover:bg-primary-800 text-2xl secondary-font"
        >
          Shop Now
        </button>
      </div>
    </div>
  );
}

export default HeroSection;
