import React from "react";
import hero from "../../assets/productsNew/herosection.webp";
import heroH5 from "../../assets/productsNew/herosectionmobile.webp";
import { useNavigate } from "react-router-dom";

function HeroSection({ head, para }) {
  const navigate = useNavigate();
  return (
    <div className="hero">
      <img className="hidden w-full h-full md:block" src={hero} alt="" />
      <img
        className=" height-adjust animate__animated animate__fadeIn mob "
        src={heroH5}
        alt=""
      />
      <div className="hero-content">
        <h1 className="text-3xl primary-font text-white mb-4 lg:text-5xl animate__animated animate__slideInUp  ">
          {head}
        </h1>
        <h2 className="maven-pro-font text-xl text-white lg:text-3xl animate__animated animate__slideInUp">
          {para}
        </h2>
        {/* <button
          onClick={() => navigate("/allproducts")}
          className="animate__animated animate__slideInUp focus:outline-none text-white  font-medium mt-10 secondary-font px-10 py-2  bg-primary-500 rounded-lg hover:scale-105 ease-in duration-300 hover:bg-primary-800 text-2xl secondary-font"
        >
          Shop Now
        </button> */}
      </div>
    </div>
  );
}

export default HeroSection;
