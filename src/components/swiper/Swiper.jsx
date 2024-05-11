import { useContext, useRef } from "react";
import eh1 from "../../assets/home/bottle5.png";
import eh2 from "../../assets/home/newbottle.png";

import AboutSectionOne from "../heroSection/AboutSectionOne";
import AboutSectionTwo from "../heroSection/AboutSectionTwo";
import ProductCard from "../productCard/ProductCard";
import { useNavigate } from "react-router-dom";
import Track from "../track/Track";
import myContext from "../../context/data/myContext";
import "./swiper.css";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./swiper.css";
// import required modules
import {
  Mousewheel,
  Pagination,
  Parallax,
  EffectCreative,
  Navigation,
} from "swiper/modules";

import flowerTopLeft from "../../assets/home/flowerstopleft.png";
import flowerTopRight from "../../assets/home/flowerstopright.png";
import flowerBottomLeft from "../../assets/home/flowersbottomleft.png";
import flowerBottomRight from "../../assets/home/flowersbottomright.png";
// import TextureOne from '../../assets/textures/Freebie-GradientTextures-01'
// import TextureTwo from '../../assets/textures/Freebie-GradientTextures-01'

const SwiperComponent = () => {
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

  const { product } = useContext(myContext);

  return (
    <Swiper
      direction={"vertical"}
      slidesPerView={1}
      // spaceBetween={30}
      mousewheelControl={true}
      // pagination={{
      //   clickable: true,
      // }}
      watchSlidesProgress={true}
      mousewheel={{
        releaseOnEdges: true,
      }}
      // mousewheel={true}
      speed={600}
      parallax={true}
      data-swiper-parallax="3%"
      grabCursor={true}
      loop={true}
      effect={"creative"}
      creativeEffect={{
        prev: {
          translate: ["-125%", 0, -200],
          rotate: [0, 100, -90],
        },
        next: {
          translate: ["125%", 0, -200],
          rotate: [0, 0, 90],
        },
      }}
      modules={[Mousewheel, Pagination, Parallax, Navigation, EffectCreative]}
      className="mySwiper  swiperr"
    >
      <div className=" absolute  -bottom-20 -left-52 md:-bottom-10 md:-left-10 swinging-image">
        <img src={flowerBottomLeft} alt="" className="w-96 " />
      </div>
      <div className="absolute -bottom-20 -right-24 md:bottom-0 swinging-image">
        <img src={flowerBottomRight} alt="" className="w-96 " />
      </div>
      <SwiperSlide
        style={{
          backgroundColor: ``,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="flex flex-col items-center justify-center "
      >
        <div className=" absolute -top-20 rotate-12 md:-top-10 md:rotate-0 left-0">
          <img src={flowerTopLeft} alt="" className="w-96 " />
        </div>
        <div className="hidden md:block  absolute -top-20 right-0">
          <img src={flowerTopRight} alt="" className="w-96 " />
        </div>
        <img src={eh1} className="w-96 h-96 z-20" />
        <h1 className="text-4xl font-extrabold text-gray-700 z-20">
          Rose Gerenium Hydrosol
        </h1>
      </SwiperSlide>

      <SwiperSlide
        className="flex flex-col items-center justify-center "
        style={{
          backgroundColor: ``,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="hidden md:block absolute -top-20 rotate-12 md:-top-10 md:rotate-0 left-0">
          <img src={flowerTopLeft} alt="" className="w-96 " />
        </div>
        <div className="  absolute -top-20 right-0">
          <img src={flowerTopRight} alt="" className="w-96 " />
        </div>
        <img src={eh2} alt="" className="w-96 h-96 " />
        <h1 className="text-4xl font-extrabold text-gray-700 z-20">
          Rose Geranium Essential Oil
        </h1>
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperComponent;
