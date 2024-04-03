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
        <h1 className="primary-font animate__animated animate__slideInUp  ">
          {head}
        </h1>
        {/* <h2>CELEBRATING 25 YEARS IN UAE</h2> */}
        <h2 className="maven-pro-font animate__animated animate__slideInUp">
          {para}
        </h2>
        <button
          onClick={() => navigate("/allproducts")}
          className="animate__animated animate__slideInUp focus:outline-none text-white  font-medium text-sm px-4 py-2  bg-primary-500 rounded-lg hover:scale-105 ease-in duration-300 hover:bg-primary-800 secondary-font"
        >
          Shop Now
        </button>
      </div>
    </div>
  );
}

export default HeroSection;
