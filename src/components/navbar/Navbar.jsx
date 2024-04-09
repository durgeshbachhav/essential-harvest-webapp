import { Fragment, useContext, useState } from "react";
import myContext from "../../context/data/myContext";
// import { BsFillCloudSunFill } from 'react-icons/bs'
// import { FiSun } from 'react-icons/fi'
import { Link } from "react-router-dom";
import { Dialog, Transition } from "@headlessui/react";
import { RxCross2 } from "react-icons/rx";
import { useSelector } from "react-redux";
import "./Navbar.scss";
import { FaShoppingCart } from "react-icons/fa";

import logo from "../../assets/home/logo.svg";

function Navbar() {
  const context = useContext(myContext);
  const { mode } = context;

  const [open, setOpen] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.clear("user");
    window.location.href = "/login";
  };

  const cartItems = useSelector((state) => state.cart);

  return (
    <div className="bg-[#cea352] sticky top-0 z-50">
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative block z-40 lg:hidden"
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel
                className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl"
                style={{
                  backgroundColor: mode === "dark" ? "rgb(40, 44, 52)" : "",
                  color: mode === "dark" ? "white" : "",
                }}
              >
                <div className="flex px-4 pb-2 pt-20">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <RxCross2 />
                  </button>
                </div>
                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  <div className="flow-root">
                    <Link
                      to={"/"}
                      className="text-sm font-medium text-gray-900 "
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      Home
                    </Link>
                  </div>
                  {user?.providerUid ===
                    import.meta.env.VITE_APP_ADMIN_EMAIL && (
                    <div className="flow-root">
                      <Link
                        to={"/dashboard"}
                        className="text-sm font-medium text-gray-900 "
                        style={{ color: mode === "dark" ? "white" : "" }}
                      >
                        Dashboard
                      </Link>
                    </div>
                  )}
                  <div className="flow-root">
                    <Link
                      to={"/about"}
                      className="text-sm font-medium text-gray-900 "
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      About
                    </Link>
                  </div>
                  <div className="flow-root">
                    <Link
                      to={"/allproducts"}
                      className="text-sm font-medium text-gray-900 "
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      All Products
                    </Link>
                  </div>

                  {user ? (
                    <div className="flow-root">
                      <Link
                        to={"/order"}
                        style={{ color: mode === "dark" ? "white" : "" }}
                        className="-m-2 block p-2 text-sm font-medium text-gray-900"
                      >
                        Order
                      </Link>
                    </div>
                  ) : (
                    ""
                  )}

                  {user ? (
                    <div className="flow-root">
                      <a
                        onClick={logout}
                        className="-m-2 block p-2 text-sm font-medium text-gray-900 cursor-pointer"
                        style={{ color: mode === "dark" ? "white" : "" }}
                      >
                        Logout
                      </a>
                    </div>
                  ) : (
                    <div className="flow-root">
                      <Link
                        to={"/signup"}
                        className="-m-2 block p-2 font-medium text-gray-900 cursor-pointer"
                        style={{ color: mode === "dark" ? "white" : "" }}
                      >
                        Signup
                      </Link>
                    </div>
                  )}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
      <header className="relative">
        <nav aria-label="Top" className=" px-4 sm:px-6 lg:px-8  nav-height">
          <div className="">
            <div className="flex nav-height nav-width items-center">
              <button
                type="button"
                className=" p-2  lg:hidden"
                onClick={() => setOpen(true)}
                style={{
                  backgroundColor: mode === "dark" ? "rgb(80 82 87)" : "",
                  color: mode === "dark" ? "white" : "",
                }}
              >
                <span className="sr-only">Open menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <Link to={"/"} className="flex">
                  <div className="flex">
                    <img src={logo} alt="" className="w-20 h-20 logo p-1" />
                    {/* <h1 className=' text-2xl font-bold text-black  px-2 py-1 rounded' style={{ color: mode === 'dark' ? 'white' : '', }}>Essential Harvest</h1> */}
                  </div>
                </Link>
              </div>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <Link
                    to={"/"}
                    className="text-sm font-medium  "
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    Home
                  </Link>

                  {user?.providerUid ===
                    import.meta.env.VITE_APP_ADMIN_EMAIL && (
                    <Link
                      to={"/dashboard"}
                      className="text-sm font-medium  "
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      Dashboard
                    </Link>
                  )}
                  <Link
                    to={"/About"}
                    className="text-sm font-medium  "
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    About
                  </Link>
                  <Link
                    to={"/allproducts"}
                    className="text-sm font-medium  "
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    All Products
                  </Link>
                  {user ? (
                    <Link
                      to={"/order"}
                      className="text-sm font-medium  "
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      Order
                    </Link>
                  ) : (
                    <Link
                      to={"/signup"}
                      className="text-sm font-medium  "
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      Signup
                    </Link>
                  )}

                  {user ? (
                    <Link
                      onClick={logout}
                      className="text-sm font-medium  cursor-pointer  "
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      Logout
                    </Link>
                  ) : (
                    ""
                  )}
                </div>

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6 custom-border">
                  <Link
                    to={"/cart"}
                    className="group  flex items-center p-2 "
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    <FaShoppingCart
                      color="black"
                      className="w-5 h-5 lg:w-8 lg:h-8"
                    />

                    <div className="custom-count">
                      <span
                        className="ml-2 text-sm font-medium   "
                        style={{ color: mode === "dark" ? "white" : "" }}
                      >
                        {cartItems.length}
                      </span>
                      <span className="sr-only">items in cart, view bag</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
