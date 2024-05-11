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
import { BsFillHandbagFill } from "react-icons/bs";
import logo from "../../assets/logo1.png";
import { account } from "../../appwrite/appwriteConfig";

function Navbar() {
  const context = useContext(myContext);
  const { mode } = context;

  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const user = JSON.parse(localStorage.getItem("user"));
  // console.log("user ", user);

  const logout = () => {
    // Clear user data from local storage
    localStorage.clear("user");

    // Redirect the user to the login page

    // Delete sessions associated with the user's account
    const promise = account.deleteSessions();

    // Handle the promise resolution
    promise.then(
      function (response) {
        console.log(response); // Success
      },
      function (error) {
        console.log(error); // Failure
      }
    );
    window.location.href = "/login";
  };

  const cartItems = useSelector((state) => state.cart);
  var useremail = JSON.parse(localStorage.getItem("user"));
  var getuser = JSON.parse(localStorage.getItem("getuser"));
  console.log("getuser", getuser);
  console.log("useremail", useremail);
  return (
    <div className="bg-[#FFCBCB] sticky top-0 z-50">
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
                className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-cavern-pink pb-12 shadow-xl"
                style={{
                  backgroundColor: mode === "dark" ? "rgb(40, 44, 52)" : "",
                  color: mode === "dark" ? "white" : "",
                }}
              >
                <div className="flex px-4 pb-2 pt-20">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-black"
                    onClick={() => setOpen(false)}
                  >
                    <RxCross2 />
                  </button>
                </div>
                <div className=" border-t border-black ">
                  <div className=" hover:bg-leaf px-4 py-2 border-b-2">
                    <Link
                      to="/"
                      className="text-sm font-medium text-white "
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      Home
                    </Link>
                  </div>
                  <div className=" hover:bg-leaf px-4 py-2 border-b-2">
                    <Link
                      to="/about"
                      className="text-sm font-medium text-white "
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      About
                    </Link>
                  </div>
                  {user?.providerUid ===
                    import.meta.env.VITE_APP_ADMIN_EMAIL && (
                    <div className=" hover:bg-leaf px-4 py-2 border-b-2">
                      <Link
                        to="/dashboard"
                        className="text-sm font-medium text-white "
                        style={{ color: mode === "dark" ? "white" : "" }}
                      >
                        Dashboard
                      </Link>
                    </div>
                  )}
                  <div className=" hover:bg-leaf px-4 py-2 border-b-2">
                    <Link
                      to="/ourstory"
                      className="text-sm font-medium text-white "
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      Our Story
                    </Link>
                  </div>
                  <div className=" hover:bg-leaf px-4 py-2 border-b-2">
                    <Link
                      to="/allproducts"
                      className="text-sm font-medium text-white "
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      All Products
                    </Link>
                  </div>

                  {/* {user ? (
                    <div>
                      <div className="hover:bg-leaf px-4 py-2">
                        <Link
                          onClick={toggleDropdown}
                          style={{ color: mode === "dark" ? "white" : "" }}
                          className="-m-2 block p-2 text-sm font-medium text-white"
                        >
                          My Account
                        </Link>
                      </div>
                      {isOpen && (
                        <div>
                          <div className="block font-bold px-4 py-2 text-sm text-everglade bg-leaf hover:bg-gray-100">
                            Hi,{" "}
                            {user?.profileInfo?.name ||
                              user?.providerUid ||
                              user?.name}
                          </div>
                          <div className="bg-chestnut text-white hover:bg-leaf px-4 py-2 border-b-2">
                            <Link
                              to="/order"
                              className="-m-2 block p-2 text-sm font-medium text-white cursor-pointer"
                              style={{ color: mode === "dark" ? "white" : "" }}
                            >
                              Orders
                            </Link>
                          </div>
                          <div className="bg-chestnut hover:bg-leaf px-4 py-2 border-b-2">
                            <Link
                              onClick={logout}
                              className="-m-2 block p-2 text-sm font-medium text-white cursor-pointer"
                              style={{ color: mode === "dark" ? "white" : "" }}
                            >
                              Logout
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="bg-chestnut hover:bg-leaf px-4 py-2 border-b-2">
                      <Link
                        to={"/signup"}
                        className="-m-2 block p-2 font-medium text-gray-900 cursor-pointer"
                        style={{ color: mode === "dark" ? "white" : "" }}
                      >
                        Signup
                      </Link>
                    </div>
                  )} */}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
      <header className="relative shadow">
        <nav aria-label="Top" className=" px-4 sm:px-6 lg:px-8  nav-height">
          <div className="">
            <div className="flex nav-height nav-width items-center justify-center">
              <button
                type="button"
                className=" p-2  lg:hidden"
                onClick={() => setOpen(true)}
                style={{
                  backgroundColor: mode === "dark" ? "rgb(80 82 87)" : "",
                  color: mode === "dark" ? "white" : "",
                }}
              >
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
              <div className="flex ">
                <Link to={"/"} className="flex">
                  <div className="flex items-center justify-center">
                    <img src={logo} alt="" className="w-20 h-20 md:w-32 md:h-32 logo p-2" />
                  </div>
                </Link>
              </div>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-2">
                  <Link
                    to={"/"}
                    className="text-sm p-2 font-medium  transition  duration-300 hover:bg-chestnut   hover:text-white"
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    Home
                  </Link>
                  <Link
                    to={"/about"}
                    className="text-sm p-2 font-medium  transition  duration-300 hover:bg-chestnut   hover:text-white"
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    About
                  </Link>

                  {user?.providerUid ===
                    import.meta.env.VITE_APP_ADMIN_EMAIL && (
                    <Link
                      to={"/dashboard"}
                      className="text-sm p-2 font-medium  transition  duration-300 hover:bg-chestnut   hover:text-white"
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      Dashboard
                    </Link>
                  )}
                  <Link
                    to={"/ourstory"}
                    className="text-sm p-2 font-medium  transition  duration-300 hover:bg-chestnut   hover:text-white "
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    Our Story
                  </Link>
                  <Link
                    to={"/allproducts"}
                    className="text-sm p-2 font-medium  transition  duration-300 hover:bg-chestnut   hover:text-white"
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    All Products
                  </Link>
                  {/* {user ? (
                    <div className="relative ">
                      <button
                        onClick={toggleDropdown}
                        className="text-sm p-2 font-medium transition  duration-300 hover:bg-chestnut hover:text-white"
                        style={{ color: mode === "dark" ? "white" : "" }}
                      >
                        My Account
                      </button>
                      {isOpen && (
                        <div className="absolute top-full -left-10 mt-1 border rounded-xl bg-mist shadow-lg">
                          <div className="block font-bold px-4 py-2 text-sm  rounded-t-xl text-chestnut bg-white ">
                            Hi,{" "}
                            {user?.profileInfo?.name ||
                              user?.providerUid ||
                              user?.name}
                          </div>
                          <Link
                            to={"/order"}
                            className="block text-sm p-2 font-medium transition duration-300 hover:bg-chestnut hover:text-white w-full"
                            style={{ width: "100%" }}
                          >
                            Orders
                          </Link>
                          <button
                            onClick={logout}
                            className="block text-sm p-2 font-medium transition rounded-b-xl  duration-300 hover:bg-chestnut hover:text-white w-full text-start"
                            style={{ width: "100%" }}
                          >
                            Logout
                          </button>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={"/signup"}
                      className="text-sm p-2 font-medium  transition  duration-300 hover:bg-chestnut   hover:text-white"
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      Signup
                    </Link>
                  )} */}
                </div>

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6 custom-border">
                  <Link
                    to={"/cart"}
                    className="group  flex items-center p-2 "
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    <BsFillHandbagFill
                      color="#019f16"
                      className="w-5 h-5 lg:w-8 lg:h-8"
                    />

                    <div className="custom-count">
                      <span
                        className="ml-2 text-sm font-medium   "
                        style={{ color: mode === "#019f16" ? "#019f16" : "" }}
                      >
                        {cartItems.length}
                      </span>
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
