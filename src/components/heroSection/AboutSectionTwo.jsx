import React, { useEffect, useRef, useState } from "react";
import underline from "../../assets/home/underline.png";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import heroVideo from "../../assets/videos/VID-20240510-WA0003.mp4";
import { useNavigate } from "react-router-dom";
import { GiTwirlyFlower } from "react-icons/gi";
import "./aboutsection.css";

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

  const [activePopup, setActivePopup] = useState(null);

  const togglePopup = (index) => {
    setActivePopup(activePopup === index ? null : index);
  };

  return (
    <>
      <div className="bg-leaf p-4 flex flex-col  items-center justify-center lg:flex-row  lg:gap-4  lg:mx-auto  lg:px-16 lg:py-12 ">
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
            <div className="secondary-font text-sub-heading-color   max-w-xl flex flex-col gap-2">
              <div className="flex items-start justify-start gap-1">
                <GiTwirlyFlower color="green" />
                <div className="flex items-start justify-start">
                  <p className="secondary-font relative">
                    <span
                      className="font-bold primary-font cursor-pointer"
                      onClick={() => togglePopup(1)}
                      onMouseEnter={() => togglePopup(1)}
                      onMouseLeave={() => togglePopup(1)}
                    >
                      Pure Beauty, Naturally
                    </span>
                    {activePopup === 1 && (
                      <div className="absolute top-5 left-0 bg-green-600 text-white p-4 rounded-md z-10 ">
                        Dive into a realm of botanical bliss with Essential
                        Harvests, where every drop of skincare is a celebration
                        of nature's finest.
                      </div>
                    )}
                  </p>
                </div>
              </div>

              <div className="flex items-start justify-start gap-1">
                <GiTwirlyFlower color="green" />
                <div className="flex items-start justify-start">
                  <p className="secondary-font relative">
                    <span
                      className="font-bold primary-font cursor-pointer"
                      onClick={() => togglePopup(2)}
                      onMouseEnter={() => togglePopup(2)}
                      onMouseLeave={() => togglePopup(2)}
                    >
                      Unleash Nature's Potency
                    </span>
                    {activePopup === 2 && (
                      <div className="absolute top-5 left-0 bg-green-600 text-white p-4 rounded-md z-10">
                        From field to formula, we meticulously curate each
                        ingredient to unlock nature's most potent secrets,
                        delivering skincare that dazzles and delights.
                      </div>
                    )}
                  </p>
                </div>
              </div>
              <div className="flex items-start justify-start gap-1">
                <GiTwirlyFlower color="green" />
                <div className="flex items-start justify-start">
                  <p className="secondary-font relative">
                    <span
                      className="font-bold primary-font cursor-pointer"
                      onClick={() => togglePopup(3)}
                      onMouseEnter={() => togglePopup(3)}
                      onMouseLeave={() => togglePopup(3)}
                    >
                      Skin-Loving Solutions
                    </span>
                    {activePopup === 3 && (
                      <div className="absolute top-5 left-0 bg-green-600 text-white p-4 rounded-md z-10">
                        Bid adieu to skin woes and embrace a love with your
                        complexion, as our gentle-yet-effective concoctions
                        lavish your skin with pure goodness.
                      </div>
                    )}
                  </p>
                </div>
              </div>
              <div className="flex items-start justify-start gap-1">
                <GiTwirlyFlower color="green" />
                <div className="flex items-start justify-start">
                  <p className="secondary-font relative">
                    <span
                      className="font-bold primary-font cursor-pointer"
                      onClick={() => togglePopup(4)}
                      onMouseEnter={() => togglePopup(4)}
                      onMouseLeave={() => togglePopup(4)}
                    >
                      Radiate Confidence
                    </span>
                    {activePopup === 4 && (
                      <div className="absolute top-5 left-0 bg-green-600 text-white p-4 rounded-md z-10">
                        Effortlessly exude confidence as our products unveil
                        your natural allure, leaving you luminous, revitalized,
                        and ready to conquer the world.
                      </div>
                    )}
                  </p>
                </div>
              </div>
              <div className="flex items-start justify-start gap-1">
                <GiTwirlyFlower color="green" />
                <div className="flex items-start justify-start">
                  <p className="secondary-font relative">
                    <span
                      className="font-bold primary-font cursor-pointer"
                      onClick={() => togglePopup(5)}
                      onMouseEnter={() => togglePopup(5)}
                      onMouseLeave={() => togglePopup(5)}
                    >
                      Results You Can See and Feel
                    </span>
                    {activePopup === 5 && (
                      <div className="absolute top-5 left-0 bg-green-600 text-white p-4 rounded-md z-10">
                        Witness the transformation as your skin drinks in our
                        elixirs of radiance, delivering tangible, touchable
                        results that ignite your senses.
                      </div>
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex items-center justify-center flex-col">
            <img src={underline} alt="" className="mt-4 content-center" />
            <div
              className="mt-4 focus:outline-none flex items-center justify-between text-white  font-medium text-sm px-4 py-2 w-32 bg-everglade  hover:bg-everglade ease-in duration-300  secondary-font cursor-pointer"
              onClick={() => navigate("/allproducts")}
            >
              Shop Now
              <IoIosArrowDroprightCircle className="w-5 h-5" />
            </div>
          </div>
        </div>
        <div className="w-full p-4 lg:p-0  lg:w-1/2 rounded-lg flex gap-2 items-center justify-center">
          <video
            ref={videoRef}
            // width="320"
            // height="240"
            controls={true}
            autoPlay
            loop
            muted
            className="rounded-lg w-64"
          >
            <source
              src={heroVideo}
              className="w-40 rounded-lg"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          {/* <video
            ref={videoRef}
            // width="320"
            // height="240"
            controls={false}
            autoPlay
            loop
            muted
            className="rounded-lg hidden w-64 md:block"
          >
            <source
              src={heroVideo}
              className="w-40 rounded-lg"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video> */}
        </div>
      </div>
    </>
  );
}

export default AboutSectionTwo;
