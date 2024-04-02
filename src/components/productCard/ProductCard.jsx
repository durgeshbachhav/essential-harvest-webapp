import React, { useContext, useEffect } from "react";
import myContext from "../../context/data/myContext";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import { toast } from "sonner";
import "./ProductCard.scss";

function ProductCard() {
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
    toast.success("added to cart");
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);
  return (
    <section className="w-full ">
      <div className="w-full ">
        <div className=" w-full mb-6 lg:mb-10">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-1 text-heading-color rale-font">
            Our Products
          </h1>
          <div className="h-1 w-32 gold-primary rounded"></div>
        </div>

        <div className="flex flex-wrap -m-4">
          {product
            // .filter((obj) => obj.title.toLowerCase().includes(searchkey))
            // .filter((obj) => obj.category.toLowerCase().includes(filterType))
            // .filter(
            //   (obj) =>
            //     Array.isArray(obj.price) && obj.price.includes(filterPrice)
            // )
            .slice(0, 4)
            .map((item, index) => {
              const { title, price, description, imageUrl, id } = item;
              return (
                <div key={index} className="p-4 md:w-1/4  rounded-lg z-50 ">
                  <div
                    className="h-full bottom-5  duration-300 ease-in-out    rounded-lg bg-gradient-to-tr from-primary-300 to-primary-400 border-opacity-20  overflow-hidden cursor-pointer hover:scale-110"
                    style={{
                      backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
                      color: mode === "dark" ? "white" : "",
                    }}
                    onClick={() =>
                      (window.location.href = `/#/productinfo/${id}`)
                    }
                  >
                    <div className="flex justify-center">
                      <img
                        className=" h-40 w-40 p-2 hover:scale-110 transition-scale-110  duration-300 ease-in-out coverobject"
                        src={imageUrl}
                        alt="blog"
                      />
                    </div>
                    <div className="p-4 border-t border-opacity-20  ">
                      <h2
                        className="tracking-widest text-xs title-font font-medium text-heading-color mb-1 rale-font"
                        style={{ color: mode === "dark" ? "white" : "" }}
                      >
                        Essential Harvest
                      </h2>
                      <h1
                        className="title-font text-lg font-medium text-sub-heading-color mb-3 rale-font"
                        style={{ color: mode === "dark" ? "white" : "" }}
                      >
                        {title}
                      </h1>
                      {/* <p className="leading-relaxed mb-3">{item.description.}</p> */}
                      <p
                        className="leading-relaxed mb-3 w-20 py-2 bg-gradient-to-bl from-primary-500 to-primary-600 rounded-lg flex items-center justify-center font-bold text-heading-color"
                        style={{ color: mode === "dark" ? "white" : "" }}
                      >
                        ₹ {price}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}

export default ProductCard;
