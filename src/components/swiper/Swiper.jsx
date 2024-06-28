import { useContext, useRef, useState, useEffect } from "react";
import eh1 from "../../assets/productsNew/spraydesk.webp";
import eh2 from "../../assets/productsNew/oildesk.webp";
import eh1forMobile from "../../assets/productsNew/one1.webp";
import eh2forMobile from "../../assets/productsNew/two2.webp";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./swiper.css";
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

const SwiperComponent = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const slides = [
    {
      image: isMobile ? eh1forMobile : eh1,
      title: "Rose Geranium Hydrosol",
      link: "/allproducts",
    },
    {
      image: isMobile ? eh2forMobile : eh2,
      title: "Rose Geranium Essential Oil",
      link: "/allproducts",
    },
  ];

  return (
    <Swiper
      direction={"vertical"}
      slidesPerView={1}
      mousewheelControl={true}
      watchSlidesProgress={true}
      mousewheel={{
        releaseOnEdges: true,
      }}
      speed={600}
      parallax={true}
      data-swiper-parallax="1%"
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
      className="mySwiper swiperr"
    // navigation={true}
    >
      {slides.map((slide, index) => (
        <SwiperSlide
          key={index}
          className="flex flex-col items-center justify-center w-full h-full relative"
        >
          <div className="absolute -top-20 rotate-12 md:-top-10 md:rotate-0 left-0">
            <img src={flowerTopLeft} alt="" className="w-96" />
          </div>
          <div className="hidden md:block absolute -top-20 right-0">
            <img src={flowerTopRight} alt="" className="w-96" />
          </div>
          <div className="hidden md:block absolute -bottom-20 rotate-12 md:-bottom-10 md:rotate-0 left-0">
            <img src={flowerBottomLeft} alt="" className="w-96" />
          </div>
          <div className="hidden md:block absolute -bottom-20 rotate-12 md:-bottom-10 md:rotate-0 right-0">
            <img src={flowerBottomRight} alt="" className="w-96" />
          </div>
          <img
            src={slide.image}
            className="w-full h-full object-cover md:object-scale-down"
            alt={slide.title}
          />
          <h1 className="absolute bottom-20 text-2xl md:text-4xl font-extrabold text-everglade md:text-white z-20 text-center px-4">
            {slide.title}
          </h1>
          <button
            onClick={() => navigate(slide.link)}
            className="absolute bottom-5 bg-everglade text-white py-2 px-4 rounded-full hover:bg-green-600 transition-colors z-30"
          >
            Learn More
          </button>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperComponent;