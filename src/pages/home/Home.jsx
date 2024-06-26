import Layout from "../../components/layout/Layout";
import SwiperComponent from "../../components/swiper/Swiper";

import AboutSectionOne from "../../components/heroSection/AboutSectionOne";
import AboutSectionTwo from "../../components/heroSection/AboutSectionTwo";

import Track from "../../components/track/Track";
import myContext from "../../context/data/myContext";
import { useContext, useEffect, useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import underline from "../../assets/home/underline.png";

import { FaStar } from "react-icons/fa";
import Popup from "../../components/emailPopup/Popup";

function Home() {
  const context = useContext(myContext);
  const { mode, product } = context;
  const stars = [];
  for (let index = 0; index < 5; index++) {
    stars.push(<FaStar color="green" key={index} />);
  }
  const [showPopup, setShowPopup] = useState(false);
  useEffect(() => {
    const hasSeenPopup = localStorage.getItem("hasSeenPopup");
    if (!hasSeenPopup) {
      setShowPopup(true);
      localStorage.setItem("hasSeenPopup", "true");
    }
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <Layout>
      <div>
        {showPopup && <Popup handleClose={handleClosePopup} />}
        {/* Your existing content goes here */}
      </div>
      <div className="relative">
        <div className="z-30">
          <SwiperComponent />
        </div>
        <div className="bg-link-water">
          <AboutSectionOne />
        </div>
        <AboutSectionTwo />
        <div className="py-10 bg-cavern-pink">
          {/* <ProductCard /> */}
          {/* for design purpose directly fetching the items */}
          <div className="w-full lg:px-8 flex flex-col items-center justify-center">
            <div className=" w-full flex items-center justify-center flex-col">
              <h1 className=" px-4  text-2xl   text-heading-color secondary-font ">
                Our Products
              </h1>
              <div className="">
                <img src={underline} alt="" className="mt-4 content-center" />
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center py-4 w-full">
              {product
                // .filter((obj) => obj.title.toLowerCase().includes(searchkey))
                // .filter((obj) => obj.category.toLowerCase().includes(filterType))
                // .filter(
                //   (obj) =>
                //     Array.isArray(obj.price) && obj.price.includes(filterPrice)
                // )
                .slice(0, 4)
                .map((item, index) => {
                  const { title, price, imageUrl, id } = item;
                  return (
                    <div
                      key={index}
                      className="p-8 w-full md:w-1/3 secondary-font"
                    >
                      <div
                        className="h-full bottom-5  duration-300 ease-in-out bg-mist border-4 hover:border-pearl shadow-md  overflow-hidden cursor-pointer "
                        onClick={() =>
                          (window.location.href = `/#/productinfo/${id}`)
                        }
                      >
                        <div className="flex w-full h-full justify-center">
                          <img
                            className="w-full h-60 p-2 hover:scale-110 transition-scale-110  duration-300 ease-in-out coverobject"
                            src={imageUrl}
                            alt="blog"
                          />
                        </div>
                        <div className="p-4  ">
                          <h2
                            className="tracking-widest text-xs title-font font-medium text-heading-color mb-1 primary-font"
                            style={{ color: mode === "dark" ? "white" : "" }}
                          >
                            Essential Harvest
                          </h2>
                          <div className="flex mb-4">{stars}</div>
                          <h1
                            className="text-xl font-medium text-heading-color mb-3 secondary-font truncate "
                            style={{ color: mode === "dark" ? "white" : "" }}
                          >
                            {title}
                          </h1>
                          {/* <p className="leading-relaxed mb-3">{item.description.}</p> */}
                          <p className="focus:outline-none flex items-center justify-between text-white  font-medium text-sm px-4 py-2 w-32 bg-chestnut  hover:bg-everglade ease-in duration-300  secondary-font">
                            order now
                            <FaAngleDoubleRight />
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
        <Track />
      </div>
    </Layout>
  );
}

export default Home;
