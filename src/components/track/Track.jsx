import React, { useContext, useRef, useEffect } from "react";
import myContext from "../../context/data/myContext";

import confirmIcon from "../../assets/home/orderConfirm.svg";
import deliveredIcon from "../../assets/home/deliver.svg";
import deliveryIcon from "../../assets/home/order.svg";
import checkoutIcon from "../../assets/home/cart.svg";
import underline from "../../assets/home/underline.png";
import { useNavigate } from "react-router-dom";

function Track() {
  const context = useContext(myContext);

  const { mode } = context;
  const cardContent = [
    {
      icon: checkoutIcon,
      heading: "Order from our website",
      desc: "Order with your full address and complete the payment.",
    },
    {
      icon: confirmIcon,
      heading: "Your Confirmation",
      desc: "Once we have shipped your order you will receive a confirmation email. ",
    },
    {
      icon: deliveryIcon,
      heading: "Your Order is on Its Way",
      desc: "You can login to our website to track the Order",
    },
    {
      icon: deliveredIcon,
      heading: "Carriers and Notifications",
      desc: "You will get your orders within 7-10 business days.",
    },
  ];
  const titleRef = useRef();
  const subtitleRef = useRef();
  const imageRef = useRef();
  const ctaRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const titleTop = titleRef.current.getBoundingClientRect().top;
      const subtitleTop = subtitleRef.current.getBoundingClientRect().top;
      const imageTop = imageRef.current.getBoundingClientRect().top;
      const ctaTop = ctaRef.current.getBoundingClientRect().top;

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
      if (ctaTop < window.innerHeight) {
        ctaRef.current.classList.add("animate__animated", "animate__slideInUp");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <section className="lg:px-12">
        <div className="flex  flex-col items-center text-heading-color">
          <h3 className="secondary-font" ref={titleRef}>
            How To
          </h3>
          <h4
            className="text-sub-heading-color secondary-font"
            ref={subtitleRef}
          >
            Track your Order?
          </h4>
          <img src={underline} alt="" className="mt-3" ref={imageRef} />
        </div>
        <div className="mt-3">
          <div className="flex flex-wrap  text-center">
            {cardContent.map((item, index) => (
              <div key={index} className="p-4 w-1/2 md:w-1/4  lg:w-1/4 ">
                <div className="hover:shadow-sm w-full h-full  flex items-center justify-center flex-col  border-5 border-primary-800 rounded-lg bg-gradient-to-tl from-gray-100 to-gray-200 px-4 py-4 hover:scale-105 ease-in-out duration-300 cursor-progress">
                  <img
                    src={item.icon}
                    className="w-10 h-10 md:w-20 md:h-20 items-center"
                    alt=""
                  />
                  <h2
                    className="text-xs font-bold title-font  md:text-xl text-heading-color secondary-font"
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    {item.heading}
                  </h2>
                  <p className="hidden lg:block text-sub-heading-color secondary-font">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Track;
