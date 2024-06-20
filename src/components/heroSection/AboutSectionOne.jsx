import React, { useEffect, useRef } from "react";
import underline from "../../assets/home/underline.png";
import arrow from "../../assets/home/up-arrow.png";
import heroVideo from "../../assets/home/hero-video.mp4";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowDroprightCircle } from "react-icons/io";

function AboutSectionOne() {
  const navigate = useNavigate();
  const whyContent = [
    {
      point:
        "At Essential Harvest, we meticulously craft our products with attention to detail.",
    },
    {
      point:
        "Our commitment to integrity and care ensures the quality of every Essential Harvest item.",
    },
    {
      point:
        "We prioritize excellent customer service and satisfaction with every purchase.",
    },
    {
      point:
        "Customize your Essential Harvest products to reflect your unique style.",
    },
    {
      point:
        "Experience the luxury of Essential Harvest's natural offerings at an affordable price point.",
    },
  ];

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

    // <div className="py-8 md:py-16">
    //   <div className="flex flex-col w-full items-center justify-center">
    //     <h3
    //       className="  animate__animated animate__slideInUp text-center secondary-font  text-sub-heading-color text-2xl"
    //       ref={titleRef}
    //     >
    //       Welcome To Essential Harvest
    //     </h3>

    //     <img src={underline}  alt="" ref={imageRef} className="py-2" />
    //   </div>
    //   <div className="flex flex-col w-full items-center justify-center">

    //     <p className="secondary-font text-sub-heading-color max-w-2xl text-center px-4"  ref={titleRef}>
    //       Essential Harvest is Nature's wellness, crafted sustainably.
    //       Discover our signature Rose Geranium Hydrosol and Essential Oil,
    //       offering pure, effective solutions for holistic self-care.
    //     </p>
    //     <img src={underline} className="py-4" ref={imageRef} alt="" />
    //   </div>
    // </div>


    <div className="container mx-auto px-4 py-8">
      {/* Personalized Skincare Routine */}
      <div className="mb-8 flex items-center justify-center flex-col text-heading-color">
        <h2 className="text-3xl text-center font-semibold font-primary mb-4">Let us know Your Skin Better</h2>
        
        <Link to={`/routine-recommender-page`} className="mt-4 focus:outline-none flex items-center justify-between text-white  font-medium text-sm px-4 py-2 w-32 bg-everglade  hover:bg-everglade ease-in duration-300  secondary-font cursor-pointer">Build Now
          <IoIosArrowDroprightCircle className="w-5 h-5" />

        </Link>
      </div>


    </div>

  );
}

export default AboutSectionOne;
