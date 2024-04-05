import React, { useEffect, useRef } from "react";
import underline from "../../assets/home/underline.png";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import heroVideo from "../../assets/home/hero-video.mp4";
import { useNavigate } from "react-router-dom";

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
      <div className="p-2 flex flex-col  items-center justify-center lg:flex-row  lg:gap-4 lg:w-full lg:h-[80vh] lg:p-0">
        <div className="w-full p-4 lg:p-0 lg:w-1/2 flex flex-col items-start justify-start lg:gap-4  ">
          <div className="">
            <h3 className="primary-font text-2xl text-heading-color">
              Essential Harvest
            </h3>
            <h4 className="primary-font text-sub-heading-color">
              Why Choose Us
            </h4>
            <img src={underline} alt="" className="mt-4" />
          </div>
          <div
            className="secondary-font mt-4
             lg:mt-0 "
          >
            <div className="text-sub-heading-color ">
              At Essential Harvest, we meticulously craft our products with
              attention to detail. Our commitment to integrity and care ensures
              the quality of every Essential Harvest item. We prioritize
              excellent customer service and satisfaction with every purchase.
            </div>
          </div>
          <div
            className="mt-4
             lg:mt-0 flex items-center justify-start gap-3 text-center focus:outline-none text-black  font-medium text-sm px-4 py-2  bg-white rounded-lg hover:scale-105 ease-in duration-300 hover:bg-primary-600 secondary-font cursor-pointer"
            onClick={() => navigate("/allproducts")}
          >
            Shop now
            <IoIosArrowDroprightCircle className="w-5 h-5" />
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
