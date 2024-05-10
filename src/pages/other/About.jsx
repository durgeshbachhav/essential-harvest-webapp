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
                  Essential Harvest is a growing cosmetic producer based in
                  Nashik, India. We specialize in nature's bliss, creating
                  high-quality skincare products using natural ingredients,
                  starting with a focus on rose geranium and rose hydrosol.
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

        <p className="mb-2">
          At Essential Harvest, we believe in harnessing the power of nature to
          create effective skincare solutions.
        </p>
        <p className="mb-4">
          Our flagship products include: Rose Geranium Essential Oil and Rose
          Hydrosol for Skin and Hair Care.
        </p>

        <span className="flex items-center mb-4">
          <span className="pr-6 text-2xl font-bold sm:text-3xl">
            Our Mission
          </span>
          <span className="h-px flex-1 bg-black"></span>
        </span>
        <p className="mb-4">
          We are dedicated to crafting a comprehensive range of skin and hair
          care, aromatherapy, and cosmetics that harmonize nature's bounty with
          scientific innovation. Our mission is to empower individuals to
          prioritize their well-being by providing them with products that
          nurture and celebrate their innate beauty. We commit to
        </p>
        <div className=" py-6 sm:py-8 lg:py-12">
          <div className="mx-auto max-w-screen-2xl px-4 md:px-4">
            <div className="grid grid-cols-2 gap-4 rounded-lg md:grid-cols-3 lg:gap-6">
              <div className="flex flex-col items-center justify-center rounded-lg  bg-green-100 p-4">
                <h2 className="text-xl font-medium text-center sm:text-2xl mb-3">
                  Holistic Wellness
                </h2>
                <p className="text-center">
                  {" "}
                  Develop products that promote holistic wellness, recognizing
                  the interconnectedness of physical, mental, and emotional
                  health.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center rounded-lg  bg-green-100 p-4">
                <h2 className="text-xl font-medium text-center sm:text-2xl mb-3">
                  Natural Purity
                </h2>
                <p className="text-center">
                  {" "}
                  Source the purest botanicals, herbs, and essential oils to
                  create formulations that are free from harmful chemicals,
                  ensuring the well-being of our customers and the planet.
                </p>
              </div>

              <div className="flex flex-col items-center justify-center rounded-lg  bg-green-100 p-4">
                <h2 className="text-xl font-medium text-center sm:text-2xl mb-3">
                  Innovation with Purpose
                </h2>
                <p className="text-center">
                  {" "}
                  Blend traditional wisdom with modern science to create
                  effective and innovative solutions for skin, hair, and overall
                  health.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center rounded-lg  bg-green-100 p-4">
                <h2 className="text-xl font-medium text-center sm:text-2xl mb-3">
                  Education and Empowerment
                </h2>
                <p className="text-center">
                  {" "}
                  Provide resources and information that empower individuals to
                  make informed choices about their well-being, fostering a
                  community committed to self-care.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center rounded-lg  bg-green-100 p-4">
                <h2 className="text-xl font-medium text-center sm:text-2xl mb-3">
                  Sustainable Practices
                </h2>
                <p className="text-center">
                  {" "}
                  Embrace sustainable and eco-friendly practices throughout our
                  supply chain and product development, contributing to the
                  preservation of the environment.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center rounded-lg  bg-green-100 p-4">
                <h2 className="text-xl font-medium text-center sm:text-2xl mb-3">
                  Inclusivity
                </h2>
                <p className="text-center">
                  {" "}
                  Celebrate the diverse beauty of individuals by offering a wide
                  range of products suitable for all skin and hair types,
                  ensuring that everyone feels seen, valued, and catered to.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center rounded-lg  bg-green-100 p-4">
                <h2 className="text-xl font-medium text-center sm:text-2xl mb-3">
                  Customer Experience
                </h2>
                <p className="text-center">
                  {" "}
                  Strive for excellence in customer satisfaction by delivering
                  high-quality products and cultivating a supportive and
                  engaging community.
                </p>
              </div>
            </div>
          </div>
        </div>
        <p className="mb-4">
          Through our mission, Essential Harvest aims to be a catalyst for
          positive change, where health is embraced as the ultimate form of
          wealth, and beauty is an outward reflection of inner vitality.
        </p>
        <span className="flex items-center mb-4">
          <span className="pr-6 text-2xl font-bold sm:text-3xl">
            Our Vision
          </span>
          <span className="h-px flex-1 bg-black"></span>
        </span>
        <p className="mb-4">
          At Essential Harvest, our vision is to be a beacon of holistic
          well-being, inspiring individuals to embrace the profound connection
          between health and beauty. We envision a world where Essential Harvest
          is synonymous with the transformative power of nature, guiding people
          on a journey of self-discovery and self-care. Our vision is to
          redefine the standards of beauty, making health the true measure of
          wealth in every individual's life.
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
          our natural skincare offerings
        </p>
        {/* Feel free to add more sections or customize the content further */}
      </div>
    </Layout>
  );
};

export default About;
