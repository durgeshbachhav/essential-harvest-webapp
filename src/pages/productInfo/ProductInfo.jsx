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
import "./ProductInfo.scss";
import { FaStar } from "react-icons/fa";
import { MdCrueltyFree } from "react-icons/md";
import { FaHandsBound } from "react-icons/fa6";
import { RiHandHeartFill } from "react-icons/ri";
import { FaAirFreshener } from "react-icons/fa";
import { PiDnaFill } from "react-icons/pi";
import { GiRoundBottomFlask } from "react-icons/gi";
import Accordion from "../../components/accordion/Accordion";
import { accordionData } from "../../customData/accordion";
import { accordionDatawhy } from "../../customData/accordionWhy";
import SwiperCard from "../../components/swiperCard/SwiperCard";

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
    stars.push(<FaStar key={index} />);
  }

  // image and title  why we’re the real deal.
  const data = [
    {
      image: <MdCrueltyFree size={80} />,
      title: "Cruelty Free and Vegan",
    },
    {
      image: <FaHandsBound size={80} />,
      title: "Handmade Products",
    },
    {
      image: <RiHandHeartFill size={80} />,
      title: "Clean Ingredients",
    },
    {
      image: <FaAirFreshener size={80} />,
      title: "Freshly Made",
    },
    {
      image: <PiDnaFill size={80} />,
      title: "GMO free",
    },
    {
      image: <GiRoundBottomFlask size={80} />,
      title: "No Synthetic Fragrances",
    },
    {
      image: <MdCrueltyFree size={80} />,
      title: "Zero Dyes",
    },
    {
      image: <MdCrueltyFree size={80} />,
      title: "Zero Sulphates",
    },
  ];

  //

  return (
    <Layout>
      <section className=" body-font overflow-hidden product bg-50-100">
        <div className="">
          {products && (
            <div>
              <div className="container px-4 py-10 lg:w-4/5 mx-auto flex flex-wrap items-center justify-center lg:py-4">
                <img
                  alt="ecommerce"
                  className="lg:w-1/3 content-center h-96 lg:h-auto  object-cover object-center rounded"
                  src={products.imageUrl}
                />
                <div className="p-3 lg:w-1/2 w-full lg:px-10 lg:py-6 mt-6 lg:mt-0 bg-link-water ">
                  <h2 className="text-sm primary-font text-primary-950 tracking-widest">
                    Essential Harvest
                  </h2>
                  <div className="flex mb-4">{stars}</div>
                  <h1 className="text-primary-800 text-xl  py-4 secondary-font font-medium mb-1">
                    {products.title}
                  </h1>

                  <div className="flex flex-row justify-between">
                    <span className="border-2 bg-everglade text-white font-medium text-2xl px-4 flex items-center justify-center">
                      ₹{products.price}
                    </span>

                    <button
                      onClick={addCart}
                      className={`focus:outline-none border flex items-center justify-between text-white  font-medium text-sm px-4 py-2 w-32 bg-chestnut  hover:bg-everglade ease-in duration-300  secondary-font`}
                    >
                      {!isInCart ? "ADD TO CART" : "GO TO CART"}
                    </button>
                    <button
                      // onClick={addCart}
                      className={`flex  border  bg-primary-900   hover:bg-primary-700 focus:outline-none  items-center justify-between text-white  font-medium text-sm px-4   bg-chestnut  hover:bg-everglade ease-in duration-300  secondary-font`}
                    >
                      {/* {!isInCart ? "Add to Cart" : "Go to Cart"} */}
                      BUY IT NOW
                    </button>
                  </div>
                </div>
              </div>
              {/* product desciption */}
              <div className="py-8  bg-leaf px-4 md:px-16 md:py-16">
                <div>
                  <h4 className="font-semibold text-xl primary-font">
                    Product Description
                  </h4>
                  <p className="secondary-font">{products.description}</p>
                </div>
                <div className="border-t-2 mt-4 pt-4">
                  <h4 className="font-semibold text-xl primary-font">
                    About this item
                  </h4>
                  <ul className="list-disc pl-5">
                    {products.aboutTheProduct

                      .filter((benefit) => benefit.trim() !== "")
                      .map((benefit, index) => (
                        <li className="secondary-font" key={index}>
                          {benefit}
                        </li>
                      ))}
                  </ul>
                </div>
                <div className="border-t-2 mt-4 pt-4">
                  <h4 className="font-semibold text-xl primary-font">
                    Benefits of Item
                  </h4>
                  <ul className="list-disc pl-5">
                    {products.benefitsOfProducts

                      .filter((benefit) => benefit.trim() !== "")
                      .map((benefit, index) => (
                        <li className="secondary-font" key={index}>
                          {benefit}
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* info section */}
        <div className="bg-[#f7cfc1] w-full h-full py-12">
          {/* how to use it  */}
          <div className="text-2xl text-center font-bold mb-10">
            How do I use it?
          </div>
          <div className="w-full px-4 mx-auto  flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between md:px-16 md:py-4 md:gap-12">
            {/* image container */}
            <div className="w-full h-full md:w-1/2  flex items-center justify-center">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/2BIWJw-HMS8?si=q3rZ0D5iSEmSEUp0"
                title="YouTube video player"
                className="w-full h-60 md:h-80"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            {/* how to use description */}
            <div className="w-full md:w-1/2 ">
              <h2 className="text-xl font-bold mb-4">
                Here's how you should use our Rose Water Facial Toner:
              </h2>

              <div className="flex items-center mb-6">
                <div>
                  <h3 className="font-bold">STEP 1:</h3>
                  <p>Clean your face with a cleanser pat dry.</p>
                </div>
              </div>

              <div className="flex items-center mb-6">
                <div>
                  <h3 className="font-bold">STEP 2:</h3>
                  <p>
                    Close your eyes and place the bottle a couple of inches away
                    from the face.
                  </p>
                </div>
              </div>

              <div className="flex items-center mb-6">
                <div>
                  <h3 className="font-bold">STEP 3:</h3>
                  <p>
                    Spray the rose water (gulab) toner lightly over your face.
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <div>
                  <h3 className="font-bold">STEP 4:</h3>
                  <p>
                    Let it partially absorb and follow up with a moisturizer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* why we’re the real deal section */}
        <div className="">
          <div className="bg-[#f4eee6] px-4 mx-auto py-6 md:py-12 md:px-16">
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
              <Accordion data={accordionData} />
            </div>
          </div>
          {/* ask us why */}
          <div className="w-full md:w-1/2 lg:w-1/2 bg-leaf py-4 px-4 md:px-16">
            <h2 className="text-2xl font-bold py-2 mb-5 text-center">
              Ask us why
            </h2>
            <div>
              <Accordion
                data={accordionDatawhy}
                style={"border border-gray-700"}
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
            curious when it comes to the world of personal care, and rightfully
            so. That’s why we insist on addressing the ‘Whys’ you'd need to know
            before you buy.
          </p>
        </div>
        <div className="">
          <SwiperCard />
        </div>
      </section>
    </Layout>
  );
}

export default ProductInfo;
