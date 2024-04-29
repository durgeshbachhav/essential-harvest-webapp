import React from "react";
import Layout from "../../components/layout/Layout";
import HeroSection from "../../components/heroSection/HeroSection";
import aboutus from "../../assets/home/aboutusbg.jpg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Layout>
      <section>
        <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
            <div className="relative z-10 lg:py-16">
              <div className="relative h-64 sm:h-80 lg:h-full">
                <img
                  alt=""
                  src={aboutus}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="relative flex items-center bg-gray-100">
              <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"></span>

              <div className="p-8 sm:p-16 lg:p-24">
                <h2 className="text-2xl font-bold sm:text-3xl">About Us</h2>

                <p className="mt-4 text-gray-600">
                  Essential Harvest is a leading organic cosmetic producer based
                  in Nashik, India. We specialize in creating high-quality
                  skincare products using natural ingredients, with a focus on
                  rose geranium and rose hydrosol.
                </p>

                <Link
                  to={"/ourstory"}
                  className="mt-8 focus:outline-none flex items-center justify-between text-white  font-medium text-sm px-4 py-2 w-32 bg-chestnut  hover:bg-everglade ease-in duration-300  secondary-font"
                >
                  Our Story
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container mx-auto px-4 py-8 ">
        <span className="flex items-center mb-4">
          <span className="pr-6 text-2xl font-bold sm:text-3xl">
            Our Products
          </span>
          <span className="h-px flex-1 bg-black"></span>
        </span>

        <p className="mb-4">
          At Essential Harvest, we believe in harnessing the power of nature to
          create effective skincare solutions.<br></br> Our flagship products
          include: Rose Geranium Cosmetics and Rose Hydrosol Skincare
        </p>

        <span className="flex items-center mb-4">
          <span className="pr-6 text-2xl font-bold sm:text-3xl">
            Our Mission
          </span>
          <span className="h-px flex-1 bg-black"></span>
        </span>
        <p className="mb-4">
          Our mission is to provide our customers with the highest quality
          organic skincare products while promoting sustainability and
          environmental responsibility. We are committed to sourcing our
          ingredients ethically and minimizing our environmental footprint
          throughout the production process.
        </p>

        <span className="flex items-center mb-4">
          <span className="pr-6 text-2xl font-bold sm:text-3xl">Location</span>
          <span className="h-px flex-1 bg-black"></span>
        </span>
        <p className="mb-4">
          Essential Harvest is located in the beautiful city of Nashik, known
          for its picturesque landscapes and rich agricultural heritage.
        </p>

        <span className="flex items-center mb-4">
          <span className="pr-6 text-2xl font-bold sm:text-3xl">Delivery</span>
          <span className="h-px flex-1 bg-black"></span>
        </span>
        <p className="mb-4">
          We deliver our products nationwide across India, ensuring that
          customers from all corners of the country can enjoy the benefits of
          our organic skincare offerings.
        </p>
        {/* Feel free to add more sections or customize the content further */}
      </div>
    </Layout>
  );
};

export default About;
