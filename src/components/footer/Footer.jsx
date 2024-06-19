import { useContext } from "react";
import myContext from "../../context/data/myContext";
// import logo from "../../assets/home/footer.svg";
import logo from "../../assets/logo1.png";
import { Link } from "react-router-dom";
import "./Footer.scss";
function Footer() {
  const context = useContext(myContext);
  const { mode } = context;
  return (
    <div>
      <footer className=" bg-leaf ">
        <div className="container px-5 lg:pt-14 mx-auto cust-footer-container">
          <div className="flex flex-wrap md:text-left text-center order-first footer-custom">
            <div className="mt-3 lg:w-1/4 md:w-1/2 w-full px-4 flex items-center justify-center  lg:mt-0 lg:items-start lg:justify-start">
              <Link to={"/"}>
                <img src={logo} alt="" className=" scale-150" />
              </Link>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="mt-4 md:mt-0 primary-font text-heading-color font-extrabold tracking-widest  mb-3">
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
                  <Link to="/ourstory" className="text-sub-heading-color">
                    Our Story
                  </Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="primary-font text-heading-color font-extrabold tracking-widest text-sm mb-3 uppercase">
                Customer Service
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <Link to={"/contact"} className="text-sub-heading-color">
                    Contact Us
                  </Link>
                </li>

                <li>
                  <Link
                    to={"/shipping-and-delivery"}
                    className="text-sub-heading-color"
                  >
                    Shipping And Delivery
                  </Link>
                </li>


                <li>
                  <Link to={"/cancellation-and-refund"} className="text-sub-heading-color">
                    Cancellation and Refund
                  </Link>
                </li>
                <li>
                  <Link to={"/return-policy"} className="text-sub-heading-color">
                    Return Policy
                  </Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4 ">
              <h2 className="primary-font text-heading-color font-extrabold tracking-widest text-sm mb-3">
                OTHERS
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <Link
                    to={"/privacypolicy"}
                    className="text-sub-heading-color"
                  >
                    Privacy Policy
                  </Link>

                </li>
                <li>
                  <Link
                    to={"/term-and-condition"}
                    className="text-sub-heading-color"
                  >
                    Terms And Condition
                  </Link>

                </li>
              </nav>
            </div>
          </div>
        </div>

        <div
          className="bg-leaf border-t border-pearl"
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
                className="text-primary-800 rounded-lg p-2 border-2 hover:bg-chestnut hover:text-white "
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
                className="ml-3 text-primary-800 rounded-lg p-2 border-2 hover:bg-chestnut hover:text-white"
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
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
