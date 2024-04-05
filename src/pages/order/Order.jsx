import React, { useContext, useState } from "react";
import myContext from "../../context/data/myContext";
import Layout from "../../components/layout/Layout";
import Loader from "../../components/loader/Loader";
import "../../pages/cart/Cart.scss";
import more from "../../assets/order/more.png";
import less from "../../assets/order/close.png";
import nocart from "../../assets/home/nocart.png";
import { useNavigate } from "react-router-dom";
import LoaderTwo from "../../components/loader/LoaderTwo";
import { TiShoppingCart } from "react-icons/ti";

function Order() {
  const userid = JSON.parse(localStorage.getItem("user")).userId;
  const context = useContext(myContext);
  const { mode, loading, order } = context;
  const [expandedOrderId, setExpandedOrderId] = useState(null);
  const navigate = useNavigate();

  const getStatusStyles = (status) => {
    switch (status) {
      case "Yet to confirm":
        return { backgroundColor: "#FF5757", color: "#fff" };
      case "Processing":
        return { backgroundColor: "#578CFF", color: "#fff" };
      case "Shipped":
        return { backgroundColor: "#FFA74D", color: "#fff" };
      case "Delivered":
        return { backgroundColor: "#6AFF57", color: "#111" };
      default:
        return { backgroundColor: "gray", color: "#111" };
    }
  };

  const handleToggle = (orderId) => {
    setExpandedOrderId(orderId === expandedOrderId ? null : orderId);
  };
  const [showMessage, setShowMessage] = useState(false);

  return (
    <Layout>
      {loading && <LoaderTwo />}
      {order?.length > 0 ? (
        <>
          <div className="h-full py-10 ">
            {order
              .filter((obj) => obj.userid == userid)
              .map((order, index) => {
                return (
                  <div
                    key={index}
                    className="mx-auto flex flex-col max-w-5xl justify-center content-center px-6 md:flex-row md:space-x-6 xl:px-0   "
                  >
                    {order?.cartItems.slice(0, 1).map((item) => (
                      <div className="md:w-2/3 " key={item.id}>
                        <div
                          className="justify-between my-2 mx-2  bg-white p-6  rounded-lg sm:flex sm:justify-start"
                          style={{
                            backgroundColor: mode === "dark" ? "#282c34" : "",
                            color: mode === "dark" ? "white" : "",
                          }}
                        >
                          <img
                            src={item.imageUrl}
                            alt="product-image"
                            className="w-full  sm:w-40"
                          />
                          <div className="sm:ml-4 sm:flex sm:w-full  sm:justify-between">
                            <div className="mt-5 sm:mt-0">
                              <h2
                                className="text-lg font-bold primary-font text-gray-900"
                                style={{
                                  color: mode === "dark" ? "white" : "",
                                }}
                              >
                                {item.title}
                              </h2>
                              <p
                                className="mt-1 text-xs secondary-font text-gray-700"
                                style={{
                                  color: mode === "dark" ? "white" : "",
                                }}
                              >
                                {item.description}
                              </p>
                              <p
                                className="mt-2 mb-4 text-sm secondary-font font-bold text-gray-700"
                                style={{
                                  color: mode === "dark" ? "white" : "",
                                }}
                              >
                                ₹ {item.price}
                              </p>
                              <p
                                className="mt-8 text-xs p-2 text-gray-700 border-2 rounded-lg inline "
                                style={{
                                  color: mode === "dark" ? "white" : "",
                                }}
                              >
                                Quantity :{" "}
                                {item.quantity !== undefined
                                  ? String(item.quantity)
                                  : ""}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}

                    {order?.cartItems.length > 1 && (
                      <div className="cust-image-container bg-primary-400">
                        <div
                          className="toggle-btn"
                          onClick={() => handleToggle(order.paymentId)}
                        >
                          <img
                            src={
                              expandedOrderId === order.paymentId ? less : more
                            } // Replace with your image source
                            alt="Your Image Alt Text"
                            className="hover-image"
                            onMouseEnter={() => setShowMessage(true)}
                            onMouseLeave={() => setShowMessage(false)}
                          />
                          {showMessage && (
                            <div className="tooltip">
                              {expandedOrderId === order.paymentId
                                ? "Hide complete order"
                                : "Show complete order"}
                            </div>
                          )}
                        </div>
                      </div>
                    )}

                    {expandedOrderId === order?.paymentId && (
                      <>
                        {order.cartItems.slice(1).map((item) => (
                          <div className="md:w-2/3 custom-margin" key={item.id}>
                            <div
                              className="justify-between my-2 mx-2  bg-white p-6 border sm:flex sm:justify-start"
                              style={{
                                backgroundColor:
                                  mode === "dark" ? "#282c34" : "",
                                color: mode === "dark" ? "white" : "",
                              }}
                            >
                              <img
                                src={item.imageUrl}
                                alt="product-image"
                                className="w-full  sm:w-40"
                              />
                              <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                                <div className="mt-5 sm:mt-0">
                                  <h2
                                    className="text-lg font-bold text-gray-900"
                                    style={{
                                      color: mode === "dark" ? "white" : "",
                                    }}
                                  >
                                    {item.title}
                                  </h2>
                                  <p
                                    className="mt-1 text-xs text-gray-700"
                                    style={{
                                      color: mode === "dark" ? "white" : "",
                                    }}
                                  >
                                    {item.description}
                                  </p>
                                  <p
                                    className="mt-1 text-s text-gray-700"
                                    style={{
                                      color: mode === "dark" ? "white" : "",
                                    }}
                                  >
                                    ₹{item.price}
                                  </p>
                                  <p
                                    className="mt-1 text-xs p-1 text-gray-700 border rounded-sm inline border-yellow-500"
                                    style={{
                                      color: mode === "dark" ? "white" : "",
                                    }}
                                  >
                                    X
                                    {item.quantity !== undefined
                                      ? String(item.quantity)
                                      : ""}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </>
                    )}

                    <div className="border-t-2 pt-2 md:pt-0 md:border-t-0 px-8 md:py-8 flex flex-col items-start justify-start gap-4">
                      <p
                        className="mt-2 md:mt-8 text-xs text-heading-color "
                        style={{
                          color: mode === "dark" ? "white" : "",
                        }}
                      >
                        Status:{" "}
                        <span
                          className="p-1 secondary-font text-sub-heading-color rounded-lg px-2"
                          style={{
                            backgroundColor: getStatusStyles(order?.status)
                              .backgroundColor,
                            color: getStatusStyles(order?.status).color,
                          }}
                        >
                          {order.status}
                        </span>
                      </p>
                      {/* updated Date */}
                      <p
                        className="mt-1 text-xs font-bold secondary-font text-sub-heading-color "
                        style={{
                          color: mode === "dark" ? "white" : "",
                        }}
                      >
                        Last Update:{" "}
                        <span className="text-sub-heading-color ">
                          {!order.statusDate
                            ? new Date().toLocaleDateString()
                            : new Date(order.statusDate).toLocaleDateString()}
                        </span>
                      </p>
                    </div>
                  </div>
                );
              })}
          </div>
        </>
      ) : (
        <div className=" w-100 h-[60vh]  cart  flex flex-col items-center justify-center gap-6">
          <TiShoppingCart size={70} color="green" />
          <p className=" text-sm secondary-font"> no order</p>
          <button
            onClick={() => navigate("/allproducts")}
            className=" focus:outline-none text-white  font-medium text-sm px-4 py-2  bg-primary-500 rounded-lg hover:scale-105 ease-in duration-300 hover:bg-primary-800 secondary-font"
          >
            Shop Now
          </button>
        </div>
      )}
    </Layout>
  );
}

export default Order;
