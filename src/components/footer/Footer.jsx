import React, { useContext } from "react";
import myContext from "../../context/data/myContext";
import logo from "../../assets/home/footer.svg";
import { Link } from "react-router-dom";
import "./Footer.scss";
function Footer() {
  const context = useContext(myContext);
  const { mode } = context;
  return (
    <div>
      <footer className=" bg-gray-100 ">
        <div className="container px-5 py-24 mx-auto cust-footer-container">
          <div className="flex flex-wrap md:text-left text-center order-first footer-custom">
            <div className="lg:w-1/4 md:w-1/2 w-full flex items-start justify-between flex-col  ">
              <img src={logo} alt="" className="w-full" />
              <h5 className="text-green-800 text-2xl primary-font">
                Essential Harvest
              </h5>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="secondary-font text-heading-color font-extrabold tracking-widest  mb-3">
                PAGES
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <Link to="/" className="text-sub-heading-color">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/allproducts" className="text-sub-heading-color">
                    Shop now
                  </Link>
                </li>

                <li>
                  <Link to="/cart" className="text-sub-heading-color">
                    Cart
                  </Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="secondary-font text-heading-color font-extrabold tracking-widest text-sm mb-3 uppercase">
                Customer Service
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <Link
                    to={"/return-policy"}
                    className="text-sub-heading-color"
                  >
                    Return Policy
                  </Link>
                </li>
                <li>
                  <Link to={"/about"} className="text-sub-heading-color">
                    About
                  </Link>
                </li>
                <li>
                  <Link to={"/contact"} className="text-sub-heading-color">
                    Contact Us
                  </Link>
                </li>
              </nav>
            </div>

            <div className="lg:w-1/4 md:w-1/2 w-full px-4 secondary-font">
              <h2 className="secondary-font text-heading-color font-extrabold tracking-widest text-sm mb-3">
                OTHERS
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <Link
                    to={"/privacypolicy"}
                    className="text-sub-heading-color"
                  >
                    Privacy
                  </Link>
                </li>
              </nav>
            </div>
          </div>
        </div>

        <div
          className="bg-gradient-to-tl from-primary-50 to-primary-100"
          style={{
            backgroundColor: mode === "dark" ? "rgb(55 57 61)" : "",
            color: mode === "dark" ? "white" : "",
          }}
        >
          <div className="px-10   py-3 mx-auto flex items-center justify-around sm:flex-row flex-col">
            <p className="text-sm text-black sm:ml-6 sm:mt-0 mt-4">
              Copyright © 2024
              <Link
                to="https://www.instagram.com/essential_harvest_india"
                rel="noopener noreferrer"
                className="text-green ml-1"
                target="_blank"
              >
                Essential Harvest
              </Link>
            </p>

            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
              <Link
                className="text-primary-800 rounded-lg p-2 border-2 hover:bg-primary-900 hover:text-white "
                target="_blank"
                to="https://www.instagram.com/essential_harvest_india"
              >
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </Link>
              <Link
                className="ml-3 text-primary-800 rounded-lg p-2 border-2 hover:bg-primary-900 hover:text-white"
                target="_blank"
                to="https://www.instagram.com/essential_harvest_india"
              >
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </Link>
              <Link
                className="ml-3 text-primary-800 rounded-lg p-2 border-2 hover:bg-primary-900 hover:text-white"
                target="_blank"
                to="https://www.instagram.com/essential_harvest_india"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                </svg>
              </Link>
              <Link
                className="ml-3 text-primary-800 rounded-lg p-2 border-2 hover:bg-primary-900 hover:text-white"
                target="_blank"
                to="https://www.instagram.com/"
              >
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={0}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  />
                  <circle cx={4} cy={4} r={2} stroke="none" />
                </svg>
              </Link>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
