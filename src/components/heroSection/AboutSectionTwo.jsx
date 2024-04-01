import React, { useEffect, useRef } from "react";
import underline from "../../assets/home/underline.png";
import arrow from "../../assets/home/up-arrow.png";
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
      <div className="flex items-center justify-center gap-4 w-full h-[80vh]">
        <div className="w-1/2 flex flex-col items-start justify-start gap-4  ">
          <div className="">
            <h3 className="bilbo-font text-2xl text-heading-color">
              Essential Harvest
            </h3>
            <h4 className=" text-sub-heading-color">Why Choose Us</h4>
            <img src={underline} alt="" className="mt-4" />
          </div>
          <div className="">
            <div className="text-sub-heading-color">
              At Essential Harvest, we meticulously craft our products with
              attention to detail. Our commitment to integrity and care ensures
              the quality of every Essential Harvest item. We prioritize
              excellent customer service and satisfaction with every purchase.
            </div>
          </div>
          <div
            className="flex items-center justify-start gap-3 text-center px-4 rounded-lg text-sub-heading-color w-40  h-10 bg-primary-400"
            onClick={() => navigate("/allproducts")}
          >
            Shop now
            <img src={arrow} alt="" className="w-5 h-5" />
          </div>
        </div>
        <div className="w-1/2 rounded-lg">
          <video
            ref={videoRef}
            // width="320"
            // height="240"
            controls={false}
            autoPlay
            mute
            loop
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
