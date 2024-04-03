import React, { useRef } from "react";
import eh1 from "../../assets/home/eh1.png";
import eh2 from "../../assets/home/eh2.png";
import podium from "../../assets/home/podium.png";

import "./swiper.css";

import AboutSectionOne from "../heroSection/AboutSectionOne";
import AboutSectionTwo from "../heroSection/AboutSectionTwo";
import ProductCard from "../productCard/ProductCard";

import twoleaf from "../../assets/home/two-leaf.png";
import leaf1 from "../../assets/home/leaf-1.png";
import manyLeaves from "../../assets/home/manyleaves.png";
import branches from "../../assets/home/branches.png";

import { useNavigate } from "react-router-dom";
import Track from "../track/Track";

const Swiper = () => {
  const ctaRef = useRef();
  const navigate = useNavigate();
  const projects = [
    {
      image: eh1,
      title: "Rose Generium",
      description:
        "Our cosmetic products are formulated with natural and organic ingredients, free from harsh chemicals, to promote healthy and radiant skin.",
      link: "",
    },
    {
      image: eh2,
      title: "Rose Generium Oil",
      description:
        "From cleansers and moisturizers to serums and masks, our skincare range offers a comprehensive regimen for all skin types.",
      link: "",
    },
  ];
  return (
    <div className="swipe-container   gap-4 py-10">
      <section className="bg-gradient-to-tr from-primary-400 to-primary-100     relative w-full swipe-section   border-5  border-primary-100 flex flex-col-reverse md:px-12  snap-always  lg:flex-row lg:px-20 overflow-hidden">
        <div className="absolute w-full h-full">
          <img
            src={branches}
            alt=""
            className="absolute top-0 -right-10 w-80 h-80 blur-sm animate__animated "
          />
        </div>
        <div className="absolute w-full h-full overflow-hidden ">
          <img
            src={manyLeaves}
            className="absolute top-0 -left-1/4 object-contain w-full h-full blur-sm"
            style={{
              animation: "floatingRose 22s ease-out infinite ",
            }}
            alt=""
          />
          <img
            src={twoleaf}
            className="absolute top-0 right-0 object-contain w-96 h-80 blur-sm"
            style={{
              animation: "rotatePetals 12s ease-in-out infinite ",
            }}
            alt=""
          />
          <img
            src={leaf1}
            className="absolute  object-contain w-20 h-20 blur-sm bottom-0 left-16"
            style={{
              animation: "rotatePetals 12s ease-in-out infinite ",
            }}
            alt=""
          />
        </div>
        <div className="px-4 lg:w-1/2 z-10">
          <h1 className="text-3xl primary-font font-bold text-start text-heading-color  animate__animated animate__slideInUp  ">
            Introduction to Essential Harvest
          </h1>
          <p className="text-lg secondary-font  text-sub-heading-color animate__animated animate__slideInUp">
            Essential Harvest is a leading provider of high-quality cosmetic and
            herbal products. We believe in harnessing the power of nature to
            create exceptional beauty and wellness solutions.
          </p>
        </div>
        <div className="lg:w-1/2 z-10 relative flex items-center justify-center lg:p-20">
          <img
            src={podium}
            alt=""
            className="-z-50 w-full h-full absolute  lg:top-10 lg:p-20 DownToTopElement"
          />
          <img
            src={eh1}
            className="z-2000 w-full h-full mt-4 lg:mt-0 topToDownelement "
          />
        </div>
      </section>
      <section className="bg-gradient-to-tr from-primary-400 to-primary-100 relative w-full swipe-section   border-5 border-primary-100 bg-secondary flex flex-col md:px-12  snap-always  lg:flex-row lg:px-20 my-4 overflow-hidden ">
        <div className="absolute w-full h-full overflow-hidden ">
          <img
            src={manyLeaves}
            className="absolute top-0 -left-1/4 object-contain w-full h-full blur-[2px]"
            style={{
              animation: "floatingRose 22s ease-out infinite ",
            }}
            alt=""
          />
          <img
            src={twoleaf}
            className="absolute top-0 right-0 object-contain w-96 h-80 blur-sm"
            style={{
              animation: "rotatePetals 12s ease-in-out infinite ",
            }}
            alt=""
          />
          <img
            src={leaf1}
            className="absolute  object-contain w-20 h-20 blur-sm bottom-0 left-16"
            style={{
              animation: "rotatePetals 12s ease-in-out infinite ",
            }}
            alt=""
          />
        </div>
        <div className="lg:w-1/2 z-10  relative flex items-center justify-center lg:p-20">
          <img
            src={podium}
            className="absolute top-16 z-12  w-96 h-96  animate__animated animate__fadeInUp"
            alt=""
          />
          <img
            src={eh2}
            alt=""
            className="mt-4 lg:mt-0  lg:w-[70%] animate__animated animate__fadeInUp"
          />
        </div>
        <div className="px-4 mb-2 lg:w-1/2">
          <h1 className="text-3xl font-bold primary-font text-heading-color animate__animated animate__slideInUp">
            Essential Harvest Rose Geranium Hydrosol
          </h1>
          <p className="text-lg text-sub-heading-color animate__animated animate__fadeInUp">
            A skincare elixir harvested from rose geranium leaves, offering a
            natural toner with a captivating floral scent, promoting refreshed
            and soothed skin.
          </p>
        </div>
      </section>
      <section className="bg-gradient-to-tr from-primary-400 to-primary-100 relative w-full swipe-section   border-5 bg-secondary flex flex-col-reverse md:px-12  snap-always   lg:flex-row lg:px-20 my-4 ">
        <div className="py-10">
          <AboutSectionOne />
        </div>
      </section>
      <section className="bg-gradient-to-tr from-primary-400 to-primary-100 relative w-full swipe-section   border-5 border-primary-50 bg-secondary flex flex-col-reverse md:px-12  snap-always   lg:flex-row lg:px-20 my-4 ">
        <div className="py-10">
          <AboutSectionTwo />
        </div>
      </section>
      <section className="bg-gradient-to-tr from-primary-400 to-primary-100 border-5 border-primary-100 relative w-full swipe-section    bg-secondary flex flex-col-reverse md:px-12  snap-always   lg:flex-row lg:px-20 my-4 ">
        <div className="w-full h-full overflow-hidden relative">
          <div className="absolute w-full h-full  ">
            <img
              src={manyLeaves}
              className="absolute top-0 -left-1/4 object-contain w-full h-full blur-sm"
              style={{
                animation: "floatingRose 22s ease-out infinite ",
              }}
              alt=""
            />
            <img
              src={twoleaf}
              className="absolute top-0 right-0 object-contain w-96 h-80 blur-sm"
              style={{
                animation: "rotatePetals 12s ease-in-out infinite ",
              }}
              alt=""
            />
            <img
              src={leaf1}
              className="absolute  object-contain w-20 h-20 blur-sm bottom-0 left-16"
              style={{
                animation: "rotatePetals 12s ease-in-out infinite ",
              }}
              alt=""
            />
          </div>
          <div className="py-10 px-8">
            <ProductCard />
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-tr from-primary-400 to-primary-100 border-5 border-primary-100 relative w-full swipe-section   border bg-secondary flex flex-col-reverse md:px-12  snap-always   lg:flex-row lg:px-20 my-4 ">
        <div className="py-10">
          <Track />
        </div>
      </section>
      <section className="bg-gradient-to-tr from-primary-400 to-primary-100 border-5 border-primary-100 relative w-full swipe-section   border bg-secondary flex flex-col-reverse md:px-12  snap-always   lg:flex-row lg:px-20 my-4 ">
        <div className=" p-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center" ref={ctaRef}>
              <h2 className="primary-font text-3xl font-bold text-heading-color mb-4">
                DON’T WASTE TIME! ORDER NOW
              </h2>
              <p className="secondary-font text-lg text-sub-heading-color mb-6">
                Everything you need to feel Lux...
              </p>
              <div className="flex gap-2 justify-center">
                <button
                  className="focus:outline-none text-white  font-medium text-sm px-4 py-2  bg-primary-500 rounded-lg hover:scale-105 ease-in duration-300 hover:bg-primary-800 secondary-font"
                  onClick={() => navigate("/contact")}
                >
                  Contact us
                </button>
                <button
                  className="focus:outline-none text-white  font-medium text-sm px-4 py-2  bg-primary-500 rounded-lg hover:scale-105 ease-in duration-300 hover:bg-primary-800 secondary-font"
                  onClick={() => navigate("/allproducts")}
                >
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Swiper;
