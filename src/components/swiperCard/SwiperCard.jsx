import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./swipercard.css";
// import required modules
import { Pagination } from "swiper/modules";

import { cardData } from "./swipercardData";

const SwiperCard = () => {
  return (
    <div className="py-12 px-4 md:px-16   bg-chestnut">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        // pagination={{
        //   clickable: true,
        // }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },

          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper "
      >
        {cardData.map((data, index) => (
          <SwiperSlide key={index} className="border-2 bg-link-water p-4">
            <img src={data.img} alt="" className="w-40 h-40" />
            <h1 className="text-2xl font-bold mb-4 ">{data.heading}</h1>
            <div>
              {data.desc.map((para, index) => (
                <p key={index} className="text-[15px] mb-2">
                  {para}
                </p>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperCard;
