import React, { useContext, useEffect } from "react";
import Filter from "../../components/filter/Filter";
import ProductCard from "../../components/productCard/ProductCard";
import Layout from "../../components/layout/Layout";
import myContext from "../../context/data/myContext";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import "../../components/productCard/ProductCard.scss";
import { FaStar } from "react-icons/fa";
import { FaAngleDoubleRight } from "react-icons/fa";
function Allproducts() {
  const context = useContext(myContext);
  const {
    mode,
    product,
    searchkey,
    setSearchkey,
    filterType,
    setFilterType,
    filterPrice,
    setFilterPrice,
  } = context;

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  const addCart = (product) => {
    dispatch(addToCart(product));
    toast.success("add to cart");
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  console.log("product", product);

  const stars = [];
  for (let index = 0; index < 5; index++) {
    stars.push(<FaStar color="green" key={index} />);
  }
  return (
    <Layout>
      <Filter />
      <section className=" body-font">
        <div className="container px-5 py-8 md:py-16 mx-auto">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-10">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-primary-500 primary-font">
              Our Products
            </h1>
            <div className="h-1 w-40 bg-leaf rounded"></div>
          </div>

          <div className="flex flex-wrap -m-4">
            {product
              .filter((obj) => obj.title.toLowerCase().includes(searchkey))
              // .filter((obj) => obj.category.toLowerCase().includes(filterType))
              // .filter(
              //   (obj) =>
              //     Array.isArray(obj.price) && obj.price.includes(filterPrice)
              // )
              .map((item, index) => {
                const { title, price, imageUrl, id } = item;
                console.log("item", item);
                return (
                  <div
                    key={index}
                    className="p-4 w-full md:w-1/2 lg:w-1/3    secondary-font"
                  >
                    <div
                      className="h-full bottom-5  duration-300 ease-in-out     bg-mist border-4 hover:border-pearl shadow-md  overflow-hidden cursor-pointer "
                      onClick={() =>
                        (window.location.href = `/#/productinfo/${id}`)
                      }
                    >
                      <div className="flex justify-center">
                        <img
                          className=" w-full h-60 p-2 hover:scale-110 transition-scale-110  duration-300 ease-in-out coverobject"
                          src={imageUrl}
                          alt="blog"
                        />
                      </div>
                      <div className="p-4  ">
                        <h2
                          className="tracking-widest text-xs title-font font-medium text-heading-color mb-1 primary-font"
                          style={{ color: mode === "dark" ? "white" : "" }}
                        >
                          Essential Harvest
                        </h2>
                        <div className="flex mb-4">{stars}</div>
                        <h1
                          className="text-xl font-medium text-heading-color mb-3 secondary-font truncate "
                          style={{ color: mode === "dark" ? "white" : "" }}
                        >
                          {title}
                        </h1>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center justify-center">
                            <div className="font-mono">₹</div>
                            <span className="font-bold text-3xl">
                              {item.price}
                            </span>
                            <span className="text-[10px] flex justify-end">
                              MRP INCLUSIVE OF ALL TAXES
                            </span>
                          </div>
                          <p className="focus:outline-none flex items-center justify-between text-white  font-medium text-sm px-4 py-2 w-32 bg-chestnut  hover:bg-everglade ease-in duration-300  secondary-font">
                            order now
                            <FaAngleDoubleRight />
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Allproducts;
