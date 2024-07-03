// import React, { useContext, useState } from "react";
// import myContext from "../../context/data/myContext";
// import Layout from "../../components/layout/Layout";
// import "../../pages/cart/Cart.scss";
// import more from "../../assets/order/more.png";
// import less from "../../assets/order/close.png";
// import { useNavigate } from "react-router-dom";

// import { TiShoppingCart } from "react-icons/ti";

// function Order() {
//   const userid = JSON.parse(localStorage.getItem("user")).userId;
//   const context = useContext(myContext);
//   const { mode, order } = context;
//   const [expandedOrderId, setExpandedOrderId] = useState(null);
//   const navigate = useNavigate();

//   const getStatusStyles = (status) => {
//     switch (status) {
//       case "Yet to confirm":
//         return { backgroundColor: "#FF5757", color: "#fff" };
//       case "Processing":
//         return { backgroundColor: "#578CFF", color: "#fff" };
//       case "Shipped":
//         return { backgroundColor: "#FFA74D", color: "#fff" };
//       case "Delivered":
//         return { backgroundColor: "#6AFF57", color: "#111" };
//       default:
//         return { backgroundColor: "gray", color: "#111" };
//     }
//   };

//   const handleToggle = (orderId) => {
//     setExpandedOrderId(orderId === expandedOrderId ? null : orderId);
//   };
//   const [showMessage, setShowMessage] = useState(false);
//   console.log('order detail from order page ', order)
//   return (

//     <Layout>
//       {order?.length > 0 ? (
//         <div className="container mx-auto py-10 px-4">
//           <div className="space-y-8">
//             {order
//               .filter((obj) => obj.userid == userid)
//               .map((order, index) => (
//                 <div
//                   key={index}
//                   className="bg-white rounded-lg  overflow-hidden"
//                   style={{
//                     backgroundColor: mode === "dark" ? "#282c34" : "",
//                     color: mode === "dark" ? "white" : "",
//                   }}
//                 >
//                   <div className="p-6">
//                     {order?.cartItems.slice(0, 1).map((item) => (
//                       <div key={item.id} className="flex flex-col md:flex-row md:items-center md:space-x-6">
//                         <div className="md:w-1/3 mb-4 md:mb-0">
//                           <div className="aspect-w-16 aspect-h-9">
//                             <img
//                               src={item.imageUrl}
//                               alt={item.title}
//                               className="object-cover w-full h-full rounded-md"
//                               loading="lazy"
//                             />
//                           </div>
//                         </div>
//                         <div className="md:w-2/3">
//                           <h2 className="text-xl font-bold mb-2">{item.title}</h2>
//                           <p className="text-sm mb-2">{item.description}</p>
//                           <p className="text-lg font-semibold mb-2">₹ {item.price}</p>
//                           <p className="text-sm inline-block px-2 py-1 border rounded">
//                             Quantity: {item.quantity || ""}
//                           </p>
//                         </div>
//                       </div>
//                     ))}

//                     <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-4">
//                       <p className="text-sm mb-2 md:mb-0">
//                         Status:{" "}
//                         <span
//                           className="px-2 py-1 rounded bg-green-500 text-white"
//                           style={getStatusStyles(order?.status)}
//                         >
//                           {order.status || "processing"}
//                         </span>
//                       </p>
//                       <p className="text-sm">
//                         Last Update:{" "}
//                         <span>
//                           {!order.statusDate
//                             ? new Date().toLocaleDateString()
//                             : new Date(order.statusDate).toLocaleDateString()}
//                         </span>
//                       </p>
//                     </div>

//                     {order?.cartItems.length > 1 && (
//                       <button
//                         className="mt-4 flex items-center text-blue-500 hover:text-blue-700 transition-colors duration-200"
//                         onClick={() => handleToggle(order.paymentId)}
//                       >
//                         {expandedOrderId === order.paymentId ? (
//                           <>
//                             <FaChevronUp className="mr-2" />
//                             Hide complete order
//                           </>
//                         ) : (
//                           <>
//                             <FaChevronDown className="mr-2" />
//                             Show complete order
//                           </>
//                         )}
//                       </button>
//                     )}
//                   </div>

//                   {expandedOrderId === order?.paymentId && (
//                     <div className="px-6 pb-6 space-y-4 transition-all duration-300 ease-in-out">
//                       {order.cartItems.slice(1).map((item) => (
//                         <div key={item.id} className="flex items-center space-x-4">
//                           <img
//                             src={item.imageUrl}
//                             alt={item.title}
//                             className="w-20 h-20 object-cover rounded"
//                             loading="lazy"
//                           />
//                           <div>
//                             <h3 className="font-semibold">{item.title}</h3>
//                             <p className="text-sm">₹{item.price}</p>
//                             <p className="text-xs">Quantity: {item.quantity || ""}</p>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               ))}
//           </div>
//         </div>
//       ) : (
//         <div className="h-[60vh] flex flex-col items-center justify-center gap-6">
//           <TiShoppingCart size={70} color="green" />
//           <p className="text-sm">No orders</p>
//           <button
//             onClick={() => navigate("/allproducts")}
//             className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors duration-200"
//           >
//             Shop Now
//           </button>
//         </div>
//       )}
//     </Layout>
//   );
// }

// export default Order;













import React, { useContext, useState, useEffect } from "react";
import myContext from "../../context/data/myContext";
import Layout from "../../components/layout/Layout";
import "../../pages/cart/Cart.scss";
import { useNavigate } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import LoaderTwo from "../../components/loader/LoaderTwo";

function Order() {
  const userid = JSON.parse(localStorage.getItem("user"))?.userId;
  const context = useContext(myContext);
  const { mode, order } = context;
  const [expandedOrderId, setExpandedOrderId] = useState(null);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [userOrders, setUserOrders] = useState([]);

  useEffect(() => {
    if (order) {
      const filteredOrders = order.filter((obj) => obj.userid === userid);
      setUserOrders(filteredOrders);
      setIsLoading(false);
    }
  }, [order, userid]);

  const getStatusStyles = (status) => {
    // ... (keep the existing status styles)
  };

  const handleToggle = (orderId) => {
    setExpandedOrderId(orderId === expandedOrderId ? null : orderId);
  };

  if (isLoading) {
    return <Layout><LoaderTwo /></Layout>;
  }

  return (
    <Layout>
      {userOrders.length > 0 ? (
        <div className="container mx-auto py-10 px-4">
          <div className="space-y-8">
            {userOrders.map((order, index) => (
              <div
                key={index}
                className="bg-white rounded-lg  overflow-hidden"
                style={{
                  backgroundColor: mode === "dark" ? "#282c34" : "",
                  color: mode === "dark" ? "white" : "",
                }}
              >
                <div className="p-6">
                  {order?.cartItems.slice(0, 1).map((item) => (
                    <div key={item.id} className="flex flex-col md:flex-row md:items-center md:space-x-6">
                      <div className="md:w-1/3 mb-4 md:mb-0">
                        <div className="aspect-w-16 aspect-h-9">
                          <img
                            src={item.imageUrl}
                            alt={item.title}
                            className="object-cover w-full h-full rounded-md"
                            loading="lazy"
                          />
                        </div>
                      </div>
                      <div className="md:w-2/3">
                        <h2 className="text-xl font-bold mb-2">{item.title}</h2>
                        <p className="text-sm mb-2">{item.description}</p>
                        <p className="text-lg font-semibold mb-2">₹ {item.price}</p>
                        <p className="text-sm inline-block px-2 py-1 border rounded">
                          Quantity: {item.quantity || ""}
                        </p>
                      </div>
                    </div>
                  ))}

                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-4">
                    <p className="text-sm mb-2 md:mb-0">
                      Status:{" "}
                      <span
                        className="px-2 py-1 rounded bg-green-500 text-white"
                        style={getStatusStyles(order?.status)}
                      >
                        {order.status || "processing"}
                      </span>
                    </p>
                    <p className="text-sm">
                      Last Update:{" "}
                      <span>
                        {!order.statusDate
                          ? new Date().toLocaleDateString()
                          : new Date(order.statusDate).toLocaleDateString()}
                      </span>
                    </p>
                  </div>

                  {order?.cartItems.length > 1 && (
                    <button
                      className="mt-4 flex items-center text-blue-500 hover:text-blue-700 transition-colors duration-200"
                      onClick={() => handleToggle(order.paymentId)}
                    >
                      {expandedOrderId === order.paymentId ? (
                        <>
                          <FaChevronUp className="mr-2" />
                          Hide complete order
                        </>
                      ) : (
                        <>
                          <FaChevronDown className="mr-2" />
                          Show complete order
                        </>
                      )}
                    </button>
                  )}
                </div>

                {expandedOrderId === order?.paymentId && (
                  <div className="px-6 pb-6 space-y-4 transition-all duration-300 ease-in-out">
                    {order.cartItems.slice(1).map((item) => (
                      <div key={item.id} className="flex items-center space-x-4">
                        <img
                          src={item.imageUrl}
                          alt={item.title}
                          className="w-20 h-20 object-cover rounded"
                          loading="lazy"
                        />
                        <div>
                          <h3 className="font-semibold">{item.title}</h3>
                          <p className="text-sm">₹{item.price}</p>
                          <p className="text-xs">Quantity: {item.quantity || ""}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="h-[60vh] flex flex-col items-center justify-center gap-6">
          <TiShoppingCart size={70} color="green" />
          <p className="text-sm">You don't have any orders yet</p>
          <button
            onClick={() => navigate("/allproducts")}
            className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors duration-200"
          >
            Shop Now
          </button>
        </div>
      )}
    </Layout>
  );
}

export default Order;