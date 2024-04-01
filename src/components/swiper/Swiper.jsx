import React, { useRef } from "react";
import eh1 from "../../assets/home/eh1.png";
import eh2 from "../../assets/home/eh2.png";

import "./swiper.css";

import AboutSectionOne from "../heroSection/AboutSectionOne";
import AboutSectionTwo from "../heroSection/AboutSectionTwo";
import ProductCard from "../productCard/ProductCard";
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
    <div className="swipe-container  gap-4">
      <section className="relative w-full swipe-section  rounded-lg border bg-secondary flex flex-col-reverse md:px-12  snap-always  lg:flex-row lg:px-20 ">
        <div className="px-4 lg:w-1/2">
          <h1 className="text-3xl font-bold text-start text-heading-color">
            Introduction to Essential Harvest
          </h1>
          <p className="text-lg text-sub-heading-color">
            Essential Harvest is a leading provider of high-quality cosmetic and
            herbal products. We believe in harnessing the power of nature to
            create exceptional beauty and wellness solutions.
          </p>
        </div>
        <div className="lg:w-1/2">
          <img src={eh1} alt="w-full mt-4 lg:mt-0" />
        </div>
      </section>
      <section className="relative w-full swipe-section  rounded-lg border bg-secondary flex flex-col md:px-12  snap-always  lg:flex-row lg:px-20 my-4">
        <div className="lg:w-1/2 h-full">
          <img src={eh2} alt="" className="mt-4 lg:mt-0 lg:w-[70%]" />
        </div>
        <div className="px-4 mb-2 lg:w-1/2">
          <h1 className="text-3xl font-bold text-heading-color">
            Essential Harvest Rose Geranium Hydrosol
          </h1>
          <p className="text-lg text-sub-heading-color">
            A skincare elixir harvested from rose geranium leaves, offering a
            natural toner with a captivating floral scent, promoting refreshed
            and soothed skin.
          </p>
        </div>
      </section>
      <section className="relative w-full swipe-section  rounded-lg border bg-secondary flex flex-col-reverse md:px-12  snap-always   lg:flex-row lg:px-20 my-4 ">
        <div className="py-10">
          <AboutSectionOne />
        </div>
      </section>
      <section className="relative w-full swipe-section  rounded-lg border bg-secondary flex flex-col-reverse md:px-12  snap-always   lg:flex-row lg:px-20 my-4 ">
        <div className="py-10">
          <AboutSectionTwo />
        </div>
      </section>
      <section className="relative w-full swipe-section  rounded-lg border bg-secondary flex flex-col-reverse md:px-12  snap-always   lg:flex-row lg:px-20 my-4 ">
        <div className="py-10">
          <ProductCard />
        </div>
      </section>
      <section className="relative w-full swipe-section  rounded-lg border bg-secondary flex flex-col-reverse md:px-12  snap-always   lg:flex-row lg:px-20 my-4 ">
        <div className="py-10">
          <Track />
        </div>
      </section>
      <section className="relative w-full swipe-section  rounded-lg border bg-secondary flex flex-col-reverse md:px-12  snap-always   lg:flex-row lg:px-20 my-4 ">
        <div className=" p-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center" ref={ctaRef}>
              <h2 className="text-3xl font-bold text-heading-color mb-4">
                DON’T WASTE TIME! ORDER YOUR BAG NOW
              </h2>
              <p className="text-lg text-sub-heading-color mb-6">
                Everything you need to feel Lux...
              </p>
              <div className="flex justify-center">
                <button
                  className="bg-primary-500 hover:bg-primary-600 hover:border-2 text-white font-semibold py-2 px-4 rounded mr-4"
                  onClick={() => navigate("/contact")}
                >
                  Contact us
                </button>
                <button
                  className="bg-primary-500 hover:bg-primary-600 hover:border-2 text-white font-semibold py-2 px-4 rounded"
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
