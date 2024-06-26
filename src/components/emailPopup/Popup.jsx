import React from "react";
import "./popup.css";
import { MdCancel } from "react-icons/md";
import img from '../../assets/productsNew/herosectionmobile.webp';
import imgforMobileScreen from '../../assets/productsNew/herosection.webp'
import { Link } from "react-router-dom";

const Popup = ({ handleClose }) => {



  return (
    <div className="popup-container" onClick={handleClose}>
      <section className="popup  overflow-hidden rounded-lg shadow-2xl md:grid md:grid-cols-3" onClick={(e) => e.stopPropagation()}>

        <img
          alt=""
          src={img}
          className="hidden h-32 w-full object-cover md:h-full md:block"
        />
        <img
          alt=""
          src={imgforMobileScreen}
          className="h-32 w-full object-cover md:hidden"
        />
        <div className="p-4 relative text-center sm:p-6 md:col-span-2 lg:p-8">
          <div onClick={handleClose} className="absolute right-4 top-4 cursor-pointer">
            <MdCancel color="green" size={24} />
          </div>
          <p className="text-sm text-everglade font-semibold uppercase tracking-widest">Let Us Know</p>
          <h2 className="mt-6 font-black uppercase">
            <span className="text-4xl text-everglade sm:text-5xl lg:text-6xl">Your Skin</span>
            <span className="mt-2 block text-everglade text-sm">fill the form now!</span>
          </h2>
          <Link
            className="mt-8 inline-block w-full bg-everglade py-4 text-sm font-bold uppercase tracking-widest text-white"
            to={`/routine-recommender-page`}
          >
            Let Start
          </Link>

        </div>
      </section>
    </div>
  );
};

export default Popup;