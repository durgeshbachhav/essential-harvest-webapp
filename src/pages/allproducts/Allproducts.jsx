import React, { useContext, useEffect } from "react";
import Filter from "../../components/filter/Filter";
import ProductCard from "../../components/productCard/ProductCard";
import Layout from "../../components/layout/Layout";
import myContext from "../../context/data/myContext";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import "../../components/productCard/ProductCard.scss";
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
  return (
    <Layout>
      <Filter />
      <section className=" body-font">
        <div className="container px-5 py-8 md:py-16 mx-auto">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-10">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-primary-500 primary-font">
              Our Products
            </h1>
            <div className="h-1 w-40 bg-primary-500 rounded"></div>
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
                    onClick={() =>
                      (window.location.href = `/#/productinfo/${id}`)
                    }
                    key={index}
                    className="p-4 md:w-1/4  rounded-lg   "
                  >
                    <div
                      className="h-full border-2 rounded-lg  duration-300 ease-in-out border-opacity-20  overflow-hidden cursor-pointer bg-gradient-to-tr from-gray-50 to-gray-200 "
                      style={{
                        backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
                        color: mode === "dark" ? "white" : "",
                      }}
                    >
                      <div className="flex justify-center cursor-pointer">
                        <img
                          className=" rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110  duration-300 ease-in-out coverobject"
                          src={imageUrl}
                          alt="product"
                        />
                      </div>
                      <div className="p-5 border-t-2">
                        <h2 className="tracking-widest text-xs title-font font-medium text-heading-color mb-1 primary-font">
                          Essential Harvest
                        </h2>
                        <h1
                          className=" text-xl font-medium text-heading-color mb-3 secondary-font truncate "
                          style={{ color: mode === "dark" ? "white" : "" }}
                        >
                          {title}
                        </h1>
                        
                        <div className="flex items-center justify-between">
                          <p
                            className="leading-relaxed mb-3 secondary-font"
                            style={{ color: mode === "dark" ? "white" : "" }}
                          >
                            ₹{price}
                          </p>
                          <div className=" flex justify-center">
                            <button
                              type="button"
                              className="focus:outline-none text-white  font-medium text-sm px-4 py-2  bg-primary-500 rounded-lg hover:scale-105 ease-in duration-300 hover:bg-primary-800 secondary-font"
                            >
                              Order Now
                            </button>
                          </div>
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
