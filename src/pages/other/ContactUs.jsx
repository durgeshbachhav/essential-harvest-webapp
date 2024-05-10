import React, { useContext } from "react";
import Layout from "../../components/layout/Layout";
import underline from "../../assets/home/underline.png";
import "./Other.scss";
import { FaLocationArrow } from "react-icons/fa";
import { PiContactlessPaymentFill } from "react-icons/pi";
import { FaAngleDoubleRight } from "react-icons/fa";
function Contact() {
  return (
    <Layout>
      <div className="contact">
        <section className="" id="contact">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <div className="mb-4">
              <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12 custom-container">
                <h2 className=" mb-4  tracking-tight   text-3xl  secondary-font uppercase">
                  Get in Touch
                </h2>
                <img src={underline} alt="" />
              </div>
            </div>
            <div className="flex items-stretch justify-center secondary-font">
              <div className="grid md:grid-cols-2 w-full lg:px-20">
                <div className="h-full pr-6">
                  <p className="mt-3 mb-12 secondary-font text-lg text-gray-600 text-center md:text-start">
                    Feel free to reach out to us for any query
                  </p>
                  <ul className="mb-6 md:mb-0 px-4">
                    <li className="flex">
                      <div className="flex h-10 w-10 items-center justify-center   ">
                        <FaLocationArrow size={30} color="green" />
                      </div>
                      <div className="ml-4 mb-4">
                        <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 secondary-font">
                          Our Address
                        </h3>

                        <p className="text-gray-600 secondary-font">Nashik</p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="flex h-10 w-10 items-center justify-center   ">
                        <PiContactlessPaymentFill size={30} color="green" />
                      </div>
                      <div className="ml-4 mb-4">
                        <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 secondary-font">
                          Contact
                        </h3>
                        <p className="text-gray-600 secondary-font">
                          Mobile: +91 9881900022
                        </p>
                        <p className="text-gray-600 secondary-font">
                          Mail: care@essentialharvest.in
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="card h-fit max-w-6xl p-5 md:p-12" id="form">
                  <h2 className="mb-4 text-xl primary-font text-heading-color">
                    Ready to Get Started?
                  </h2>
                  <form id="contactForm">
                    <div className="mb-6">
                      <div className="mx-0 mb-1 sm:mb-4">
                        <div className="mx-0 mb-1 sm:mb-4">
                          <label
                            for="name"
                            className="pb-1 text-xs uppercase tracking-wider"
                          ></label>
                          <input
                            type="text"
                            id="name"
                            autocomplete="given-name"
                            placeholder="Your name"
                            className="bg-gray-600 rounded-lg mb-4 px-2 py-2 w-full  text-white placeholder:text-white outline-none"
                            name="name"
                          />
                        </div>
                        <div className="mx-0 mb-1 sm:mb-4">
                          <label
                            for="email"
                            className="pb-1 text-xs uppercase tracking-wider"
                          ></label>
                          <input
                            type="email"
                            id="email"
                            autocomplete="email"
                            placeholder="Your email address"
                            className="bg-gray-600 rounded-lg mb-4 px-2 py-2 w-full   text-white placeholder:text-white outline-none"
                            name="email"
                          />
                        </div>
                      </div>
                      <div className="mx-0 mb-1 sm:mb-4">
                        <label
                          for="textarea"
                          className="pb-1 text-xs uppercase tracking-wider"
                        ></label>
                        <textarea
                          id="textarea"
                          name="textarea"
                          cols="5"
                          rows="2"
                          placeholder="Write your message..."
                          className="bg-gray-600 rounded-lg mb-4 px-2 py-2 w-full   text-white placeholder:text-white outline-none"
                        ></textarea>
                      </div>
                    </div>
                    <div className="text-center">
                      <button
                        type="submit"
                        className="focus:outline-none flex items-center justify-between text-white  font-medium text-sm px-4 py-2 w-40 bg-everglade   ease-in duration-300  secondary-font"
                      >
                        Send Message
                        <FaAngleDoubleRight />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default Contact;
