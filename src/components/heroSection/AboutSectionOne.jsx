import React, { useEffect, useRef } from "react";
import underline from "../../assets/home/underline.png";
import arrow from "../../assets/home/up-arrow.png";
import heroVideo from "../../assets/home/hero-video.mp4";
import { useNavigate } from "react-router-dom";

function  AboutSectionOne() {
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
    <div className="md:py-4">
      <div className="about">
        <div className="about-content">
          <h3
            className="primary-font text-primary animate__animated animate__slideInUp text-heading-color"
            ref={titleRef}
          >
            Welcome To
          </h3>
          <h4
            className="primary-font animate__animated animate__slideInUp text-heading-color"
            ref={subtitleRef}
          >
            Essential Harvest
          </h4>
          <img src={underline} ref={imageRef} alt="" className="py-2" />
        </div>
        <div className="flex flex-col w-full items-center justify-center">
         
          <p className="secondary-font text-sub-heading-color">
            Essential Harvest is Nature's wellness, crafted sustainably.
            Discover our signature Rose Geranium Hydrosol and Essential Oil,
            offering pure, effective solutions for holistic self-care.
          </p>
          <img src={underline} className="py-4" alt="" />
        </div>
      </div>
    </div>
  );
}

export default AboutSectionOne;
