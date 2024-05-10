import React, { useContext, useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import myContext from "../../context/data/myContext";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "sonner";
import { addToCart } from "../../redux/cartSlice";
import { Query } from "appwrite";
import { databases } from "../../appwrite/appwriteConfig";
import { FaStar } from "react-icons/fa";
import { MdCrueltyFree } from "react-icons/md";
import { FaHandsBound } from "react-icons/fa6";
import { RiHandHeartFill } from "react-icons/ri";
import { FaAirFreshener } from "react-icons/fa";
import { PiDnaFill } from "react-icons/pi";
import { GiRoundBottomFlask } from "react-icons/gi";
import Accordion from "../../components/accordion/Accordion";
import { accordionDataHydrosol } from "../../customData/accordionforhydrosol.js";
import { accordionDataForHydrosolWhy } from "../../customData/accordionWhyforhydrosol.js";
import { accordionDataOil } from "../../customData/accordionoil.js";
import { accordionDataOilWhy } from "../../customData/accordionwhyforoil.js";

import SwiperCard from "../../components/swiperCard/SwiperCard";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { IoBagAdd } from "react-icons/io5";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import LoaderTwo from "../../components/loader/LoaderTwo";
import oilVideo from "../../assets/videos/Video-928.mp4";
import hydrosolVideo from "../../assets/videos/Video-366.mp4";

function ProductInfo() {
  const navigate = useNavigate();
  const context = useContext(myContext);
  const { loading, setLoading } = context;

  const [products, setProducts] = useState("");
  const params = useParams();

  const [isInCart, setIsInCart] = useState(false);

  const getProductData = async () => {
    setLoading(true);
    const productData = databases.listDocuments(
      import.meta.env.VITE_APP_DATABASE_ID,
      import.meta.env.VITE_APP_PRODUCTS_COLLECTION_ID,
      [Query.equal("$id", params.id)]
    );
    productData.then(
      function (response) {
        const productArray = response.documents[0];
        setProducts(productArray);
        setLoading(false);
      },
      function (error) {
        console.log(error);
        setLoading(false);
      }
    );
  };

  useEffect(() => {
    getProductData();
  }, []);

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // console.log("products id", products);
  useEffect(() => {
    const isProductInCart = cartItems.find((item) => item.$id === products.$id);
    setIsInCart(!!isProductInCart);
  }, [cartItems, products.$id]);

  const addCart = () => {
    if (isInCart) {
      navigate("/cart");
    } else {
      dispatch(addToCart(products));
      navigate("/cart");
      toast.success("Added to cart");
    }
  };

  // rating logic

  const stars = [];
  for (let index = 0; index < 5; index++) {
    stars.push(<FaStar color="green" key={index} />);
  }

  // image and title  why we’re the real deal.
  const data = [
    {
      image: <MdCrueltyFree color="green" size={80} />,
      title: "Cruelty Free and Vegan",
    },
    {
      image: <FaHandsBound color="green" size={80} />,
      title: "Handmade Products",
    },
    {
      image: <RiHandHeartFill color="green" size={80} />,
      title: "Clean Ingredients",
    },
    {
      image: <FaAirFreshener color="green" size={80} />,
      title: "Freshly Made",
    },
    {
      image: <PiDnaFill color="green" size={80} />,
      title: "GMO free",
    },
    {
      image: <GiRoundBottomFlask color="green" size={80} />,
      title: "No Synthetic Fragrances",
    },
    {
      image: <MdCrueltyFree color="green" size={80} />,
      title: "Zero Dyes",
    },
    {
      image: <MdCrueltyFree color="green" size={80} />,
      title: "Zero Sulphates",
    },
  ];

  //
  console.log("productdata", products);

  return (
    <Layout>
      <section className=" overflow-hidden  ">
        <div className="">
          {loading ? (
            <LoaderTwo />
          ) : (
            <div>
              {products && (
                <div>
                  <div className=" px-4 py-10  flex flex-wrap items-center justify-center md:px-16">
                    <img
                      alt="ecommerce"
                      className="lg:w-1/3 content-center h-96 lg:h-auto   object-cover object-center rounded hover:scale-105 cursor-pointer "
                      src={products.imageUrl}
                    />
                    <div className="p-4 lg:w-1/2 w-full lg:px-10 lg:py-6 mt-6 lg:mt-0  ">
                      <h2 className="text-sm primary-font text-primary-950 tracking-widest">
                        Essential Harvest
                      </h2>
                      <div className="flex mb-4">{stars}</div>
                      {/* <h1 className="text-primary-800 text-3xl  py-4 secondary-font font-medium mb-1">
                        {products.title}
                      </h1> */}
                      <h1 className="text-primary-800 text-3xl py-4 secondary-font font-medium mb-1">
                        {products.title.split("-").map((item, index) => (
                          <React.Fragment key={index}>
                            {item.trim()}{" "}
                            {/* Trim removes leading/trailing spaces */}
                            <br />
                          </React.Fragment>
                        ))}
                      </h1>

                      <div className="flex flex-row justify-between">
                        <div className="flex items-center justify-center">
                          <div className="font-mono">₹</div>
                          <span className="font-bold text-3xl">
                            {products.price}
                          </span>
                          <span className="text-xs flex justify-end">
                            MRP INCLUSIVE OF ALL TAXES
                          </span>
                        </div>

                        <button
                          onClick={addCart}
                          className={`focus:outline-none border flex items-center justify-between text-white  font-medium text-sm px-4 py-4 w-40 bg-chestnut  hover:bg-everglade ease-in duration-300  secondary-font`}
                        >
                          {!isInCart ? (
                            <>
                              <span>ADD TO CART</span>
                              <IoBagAdd size={20} />
                            </>
                          ) : (
                            <>
                              <span>GO TO CART</span>
                              <MdKeyboardDoubleArrowRight size={20} />
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* product desciption */}
                  <div className="py-8  bg-everglade px-4 md:px-16 md:py-16 text-white">
                    <div>
                      <h4 className="font-semibold text-xl primary-font mb-4">
                        Product Description
                      </h4>
                      <p className="secondary-font flex items-start justify-start gap-3">
                        <div className="w-4 h-4">
                          <IoIosCheckmarkCircleOutline
                            color="yellow"
                            size={20}
                          />
                        </div>
                        {products.description}
                      </p>
                    </div>
                    <div className="border-t-2 mt-4 pt-4">
                      <h4 className="font-semibold text-xl primary-font mb-4">
                        About this item
                      </h4>
                      <ul className="">
                        {products.aboutTheProduct

                          .filter((benefit) => benefit.trim() !== "")
                          .map((benefit, index) => (
                            <li
                              className="secondary-font flex items-start justify-start gap-3"
                              key={index}
                            >
                              <div className="w-4 h-4">
                                <IoIosCheckmarkCircleOutline
                                  color="yellow"
                                  size={20}
                                />
                              </div>
                              {benefit}
                            </li>
                          ))}
                      </ul>
                    </div>
                    <div className="border-t-2 mt-4 pt-4">
                      <h4 className="font-semibold text-xl primary-font mb-4">
                        Benefits of Item
                      </h4>
                      <ul className=" ">
                        {products.benefitsOfProducts

                          .filter((benefit) => benefit.trim() !== "")
                          .map((benefit, index) => (
                            <li
                              className="secondary-font flex items-start justify-start gap-3"
                              key={index}
                            >
                              <div className="w-4 h-4">
                                <IoIosCheckmarkCircleOutline
                                  color="yellow"
                                  size={20}
                                />
                              </div>
                              {benefit}
                            </li>
                          ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* for oil */}
        {products.category == "Oil" && (
          <div>
            <div className="bg-pearl w-full h-full py-12">
              {/* how to use it  */}
              <div className="text-2xl text-center font-bold mb-10">
                How do I use it?
              </div>
              <div className="w-full px-4 mx-auto  flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between md:px-16 md:py-4 md:gap-12">
                {/* image container */}
                <div className="w-full h-full md:w-1/2  flex items-center justify-center">
                  <video
                    controls={true}
                    autoPlay
                    loop
                    muted
                    className="rounded-lg w-64"
                  >
                    <source
                      src={oilVideo}
                      className="w-40 rounded-lg"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
                {/* how to use description */}
                <div className="w-full md:w-1/2 ">
                  {/* <h2 className="text-xl font-bold mb-4">
                    Here's how you should use our Rose Water Facial Toner:
                  </h2> */}

                  <div className="flex items-center mb-6">
                    <div>
                      <h3 className="font-bold">Important :</h3>
                      <p>
                        For every 10 grams of carrier, incorporate just one drop
                        of essential oil.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center mb-6">
                    <div>
                      <h3 className="font-bold">FOR SKIN & HAIR</h3>
                    </div>
                  </div>
                  <div className="flex items-center mb-6">
                    <div>
                      <h3 className="font-bold">STEP 1:</h3>
                      <p>
                        Take carrier of your choice Cream / Lotion / Serum /
                        Oil.{" "}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center mb-6">
                    <div>
                      <h3 className="font-bold">STEP 2:</h3>
                      <p>
                        Mix a few drops* of Rose Geranium Essential Oil to it.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center mb-6">
                    <div>
                      <h3 className="font-bold">STEP 3:</h3>
                      <p>Mix well and store.</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div>
                      <h3 className="font-bold">STEP 4:</h3>
                      <p>Apply normally as earlier.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* why we’re the real deal section */}
            <div className="bg-mist">
              <div className=" px-4 mx-auto py-6 md:py-12 md:px-16">
                <div className="text-center text-2xl font-bold  mb-16">
                  Here’s why we’re the real deal.
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-8 gap-4">
                  {data.map((item, index) => (
                    <div
                      className="flex flex-col items-center justify-center"
                      key={index}
                    >
                      <div className="flex items-center justify-center w-full h-full">
                        {item.image}
                      </div>
                      <p className="text-sm font-medium text-center">
                        {item.title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* accordion section */}

            <div className="flex flex-col md:flex-row ">
              {/* more info section */}
              <div className="w-full md:w-1/2 lg:w-1/2  bg-cloud py-4 px-4 md:px-16">
                <h2 className="text-2xl font-bold py-2 mb-5 text-center">
                  More info
                </h2>
                <div>
                  <Accordion data={accordionDataOil} style={"border-t"} />
                </div>
              </div>
              {/* ask us why */}
              <div className="w-full md:w-1/2 lg:w-1/2 bg-cavern-pink py-4 px-4 md:px-16">
                <h2 className="text-2xl font-bold py-2 mb-5 text-center">
                  Ask us why
                </h2>
                <div>
                  <Accordion
                    data={accordionDataOilWhy}
                    style={"border border-green-900"}
                  />
                </div>
              </div>
            </div>

            {/* carousel section */}
            <div className="bg-chestnut">
              <h2 className="text-center text-2xl font-bold text-white pt-12 px-4">
                Our go-to starting point? Asking Why.
              </h2>
              <p className="text-center font-medium text-white text-[15px] px-4  md:px-36 py-5 md:py-8">
                We're extremely curious people. We can only assume you too are
                curious when it comes to the world of personal care, and
                rightfully so. That’s why we insist on addressing the ‘Whys’
                you'd need to know before you buy.
              </p>
            </div>
            <div className="">
              <SwiperCard />
            </div>
          </div>
        )}

        {/* for hydrosol */}
        {products.category == "Hydrosol" && (
          <div>
            <div className="bg-pearl w-full h-full py-12">
              {/* how to use it  */}
              <div className="text-2xl text-center font-bold mb-10">
                How do I use it?
              </div>
              <div className="w-full px-4 mx-auto  flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between md:px-16 md:py-4 md:gap-12">
                {/* image container */}
                <div className="w-full h-full md:w-1/2  flex items-center justify-center">
                  <video
                    controls={true}
                    autoPlay
                    loop
                    muted
                    className="rounded-lg w-64"
                  >
                    <source
                      src={hydrosolVideo}
                      className="w-40 rounded-lg"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
                {/* how to use description */}
                <div className="w-full md:w-1/2 ">
                  {/* <h2 className="text-xl font-bold mb-4">
                    Here's how you should use our Rose Water Facial Toner:
                  </h2> */}

                  <div className="flex items-center mb-6">
                    <div>
                      <h3 className="font-bold">STEP 1:</h3>
                      <p>Wash your face at pat it Dry</p>
                    </div>
                  </div>

                  <div className="flex items-center mb-6">
                    <div>
                      <h3 className="font-bold">STEP 2:</h3>
                      <p>
                        Spray the rose geranium hydrosol on your face a couple
                        of times.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center mb-6">
                    <div>
                      <h3 className="font-bold">STEP 3:</h3>
                      <p>Let it get completely absorbed in your skin.</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div>
                      <h3 className="font-bold">STEP 4:</h3>
                      <p>After 15-20 min apply your cream / moisturizer.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* why we’re the real deal section */}
            <div className="bg-mist">
              <div className=" px-4 mx-auto py-6 md:py-12 md:px-16">
                <div className="text-center text-2xl font-bold  mb-16">
                  Here’s why we’re the real deal.
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-8 gap-4">
                  {data.map((item, index) => (
                    <div
                      className="flex flex-col items-center justify-center"
                      key={index}
                    >
                      <div className="flex items-center justify-center w-full h-full">
                        {item.image}
                      </div>
                      <p className="text-sm font-medium text-center">
                        {item.title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* accordion section */}

            <div className="flex flex-col md:flex-row ">
              {/* more info section */}
              <div className="w-full md:w-1/2 lg:w-1/2  bg-cloud py-4 px-4 md:px-16">
                <h2 className="text-2xl font-bold py-2 mb-5 text-center">
                  More info
                </h2>
                <div>
                  <Accordion data={accordionDataHydrosol} style={"border-t"} />
                </div>
              </div>
              {/* ask us why */}
              <div className="w-full md:w-1/2 lg:w-1/2 bg-cavern-pink py-4 px-4 md:px-16">
                <h2 className="text-2xl font-bold py-2 mb-5 text-center">
                  Ask us why
                </h2>
                <div>
                  <Accordion
                    data={accordionDataForHydrosolWhy}
                    style={"border border-green-900"}
                  />
                </div>
              </div>
            </div>

            {/* carousel section */}
            <div className="bg-chestnut">
              <h2 className="text-center text-2xl font-bold text-white pt-12 px-4">
                Our go-to starting point? Asking Why.
              </h2>
              <p className="text-center font-medium text-white text-[15px] px-4  md:px-36 py-5 md:py-8">
                We're extremely curious people. We can only assume you too are
                curious when it comes to the world of personal care, and
                rightfully so. That’s why we insist on addressing the ‘Whys’
                you'd need to know before you buy.
              </p>
            </div>
            <div className="">
              <SwiperCard />
            </div>
          </div>
        )}

        {/* info section */}
      </section>
    </Layout>
  );
}

export default ProductInfo;
