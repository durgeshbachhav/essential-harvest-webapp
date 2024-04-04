import { useContext, useEffect, useState } from "react";
import myContext from "../../context/data/myContext";
import Layout from "../../components/layout/Layout";
import Modal from "../../components/modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromCart, clearCart } from "../../redux/cartSlice";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
// appwrite
import { databases } from "../../appwrite/appwriteConfig";
import { ID } from "appwrite";
import "./Cart.scss";
import { TiShoppingCart } from "react-icons/ti";
import { MdRemoveShoppingCart } from "react-icons/md";

function Cart() {
  const navigate = useNavigate();
  const context = useContext(myContext);
  const { mode, getOrderData } = context;

  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart);

  const deleteCart = (item) => {
    dispatch(deleteFromCart(item));
    toast.success("Delete cart");
  };

  const clearAllCart = (item) => {
    dispatch(clearCart());
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const [totalAmout, setTotalAmount] = useState(0);

  useEffect(() => {
    let temp = 0;
    cartItems.forEach((cartItem) => {
      temp = temp + parseInt(cartItem.price);
    });
    setTotalAmount(temp);
  }, [cartItems]);

  const [quantityMap, setQuantityMap] = useState({});
  const increaseQuantity = (itemId) => {
    setQuantityMap((prevQuantityMap) => ({
      ...prevQuantityMap,
      [itemId]: (prevQuantityMap[itemId] || 0) + 1,
    }));
  };

  const decreaseQuantity = (itemId) => {
    setQuantityMap((prevQuantityMap) => {
      const newQuantity = (prevQuantityMap[itemId] || 1) - 1;
      return {
        ...prevQuantityMap,
        [itemId]: newQuantity > 0 ? newQuantity : 1,
      };
    });
  };

  const updateTotalAmount = () => {
    let temp = 0;
    cartItems.forEach((cartItem) => {
      const itemId = cartItem.$id;
      const quantity = quantityMap[itemId] || 1;
      temp += parseInt(cartItem.price) * quantity;
    });

    setTotalAmount(temp);
  };

  useEffect(() => {
    updateTotalAmount();
  }, [cartItems, quantityMap]);

  const shipping = parseInt(100);

  const grandTotal = shipping + totalAmout;
  // new ends

  /**========================================================================
   *!                           Payment Intigration
   *========================================================================**/

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const buyNow = async () => {
    if (name === "" || address == "" || pincode == "" || phoneNumber == "") {
      return toast.error("All fields are required");
    }

    const addressInfo = {
      name,
      address,
      pincode,
      phoneNumber,
      date: new Date(),
    };
    // razorpay
    var options = {
      key: import.meta.env.VITE_PAYMENT_GATEWAY_KEY,
      key_secret: import.meta.env.VITE_PAYMENT_GATEWAY_KEY_SECRET,
      amount: parseInt(grandTotal * 100),
      currency: "INR",
      order_receipt: "order_rcptid_" + name,
      name: "Essential Harvest",
      description: "for testing purpose",
      // razorpay
      handler: function (response) {
        toast.success("Payment Successful");
        console.log(response);
        const paymentId = response.razorpay_payment_id;
        // const cartItemsJsonString = JSON.stringify(cartItems);
        const addressInfoJsonString = JSON.stringify(addressInfo);
        // Transform the array into the desired format
        const cartItemsJsonString1 = cartItems.reduce((acc, curr, index) => {
          acc[index] = {
            category: curr.category,
            date: new Date(curr.date).toDateString(),
            description: curr.description,
            title: curr.title,
            imageUrl: curr.imageUrl,
            price: curr.price,
            quantity: quantityMap[curr.id] || 1,
            // grand: grandTotal,
            time: new Date(curr.date).toDateString(),
          };
          return acc;
        }, {});
        const cartItemsJsonString = JSON.stringify(cartItemsJsonString1);
        // console.log("cart item json string", cartItemsJsonString);
        // console.log("address json string", addressInfoJsonString);
        // console.log("cart item json string", cartItemsJsonString);
        // console.log("cart item json string", cartItemsJsonString);
        // console.log("cart item json string", cartItemsJsonString);

        const orderInfo = {
          cartItemsJsonString,
          addressInfoJsonString,
          date: new Date(),
          email: JSON.parse(localStorage.getItem("user")).providerUid,
          userid: JSON.parse(localStorage.getItem("user")).userId,
          grand: String(grandTotal),
          paymentId,
        };

        console.log("new order", orderInfo);
        const addPromise = databases.createDocument(
          import.meta.env.VITE_APP_DATABASE_ID,
          import.meta.env.VITE_APP_ORDERS_COLLECTION_ID,
          ID.unique(),
          orderInfo
        );
        addPromise.then(
          function (response) {
            console.log("response", response);
            clearAllCart();
            getOrderData();
            navigate("/order");
          },
          function (error) {
            console.log("error", error);
          }
        );
      },

      theme: {
        color: "#3399cc",
      },
    };

    var pay = new window.Razorpay(options);
    pay.open();
  };
  return (
    <div>
      {cartItems.length > 0 ? (
        <Layout className="cart">
          <div
            className=" bg-gray-50 pt-5 mb-[0%]"
            style={{
              backgroundColor: mode === "dark" ? "#282c34" : "",
              color: mode === "dark" ? "white" : "",
            }}
          >
            <h1 className="mt-5 mb-10 text-center text-4xl font-bold primary-font text-heading-color">
              Cart items
            </h1>
            <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0 py-4">
              <div className=" md:w-2/3">
                {cartItems.map((item, index) => {
                  const { id, title, price, description, imageUrl } = item;
                  // const quantity = quantityMap[id] || 1; // Default to 1 if quantity is not set
                  const quantity = quantityMap[item.$id] || 1; // Default to 1 if quantity is not set

                  return (
                    <div
                      key={index}
                      className="justify-between mb-6  border-3 border-gray-500 rounded-lg  drop-shadow-sm bg-white  p-6  sm:flex  sm:justify-start"
                      style={{
                        backgroundColor: mode === "dark" ? "rgb(32 33 34)" : "",
                        color: mode === "dark" ? "white" : "",
                      }}
                    >
                      <img
                        src={imageUrl}
                        alt="product-image"
                        className="w-full  sm:w-40 rounded-lg"
                      />
                      <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                        <div className="mt-5 sm:mt-0">
                          <h2
                            className="text-lg font-bold text-heading-color"
                            style={{ color: mode === "dark" ? "white" : "" }}
                          >
                            {title}
                          </h2>
                          <h2
                            className="text-sm  text-sub-heading-color"
                            style={{ color: mode === "dark" ? "white" : "" }}
                          >
                            {description}
                          </h2>
                          <p
                            className="mt-1 text-xl  text-heading-color font-bold"
                            style={{ color: mode === "dark" ? "white" : "" }}
                          >
                            ₹{price}
                          </p>
                        </div>
                        <div className="mt-4 flex  justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                          <div className=" flex justify-center items-center">
                            <button
                              type="button"
                              onClick={() => decreaseQuantity(item.$id)}
                              className=" text-white bg-primary-800   font-medium rounded-l-lg text-sm px-4 py-2"
                            >
                              -
                            </button>
                            <p
                              className="text-heading-color font-bold mx-2"
                              style={{ color: mode === "dark" ? "white" : "" }}
                            >
                              {quantity}
                            </p>
                            <button
                              type="button"
                              onClick={() => increaseQuantity(item.$id)}
                              className=" text-white bg-primary-900  font-medium rounded-r-lg text-sm px-4 py-2"
                            >
                              +
                            </button>
                          </div>

                          <div
                            onClick={() => deleteCart(item)}
                            className="cursor-pointer"
                          >
                            <MdRemoveShoppingCart size={30} />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div
                className="mt-6 h-full  border-1 bg-white rounded-lg  p-6 shadow-md md:mt-0 md:w-1/3"
                style={{
                  backgroundColor: mode === "dark" ? "rgb(32 33 34)" : "",
                  color: mode === "dark" ? "white" : "",
                }}
              >
                <div className="mb-2 flex justify-between">
                  <p
                    className="text-heading-color"
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    Subtotal
                  </p>
                  <p
                    className="text-heading-color"
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    ₹{totalAmout}
                  </p>
                </div>
                <div className="flex justify-between">
                  <p
                    className="text-sub-heading-color"
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    Shipping
                  </p>
                  <p
                    className="text-sub-heading-color"
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    ₹{shipping}
                  </p>
                </div>
                <hr className="my-4" />
                <div className="flex justify-between mb-3">
                  <p
                    className="text-lg text-heading-color font-bold"
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    Total
                  </p>
                  <div className>
                    <p
                      className="mb-1 text-heading-color text-lg font-bold"
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      ₹{grandTotal}
                    </p>
                  </div>
                </div>
                {/* <Modal  /> */}
                <Modal
                  name={name}
                  address={address}
                  pincode={pincode}
                  phoneNumber={phoneNumber}
                  setName={setName}
                  setAddress={setAddress}
                  setPincode={setPincode}
                  setPhoneNumber={setPhoneNumber}
                  buyNow={buyNow}
                />
              </div>
            </div>
          </div>
        </Layout>
      ) : (
        <Layout>
          <div className=" w-100 h-[60vh]  cart  flex flex-col items-center justify-center gap-6">
            <TiShoppingCart size={70} color="green" />
            <p className=" text-sm secondary-font"> Cart is Empty</p>
            <button
              onClick={() => navigate("/allproducts")}
              className=" focus:outline-none text-white  font-medium text-sm px-4 py-2  bg-primary-500 rounded-lg hover:scale-105 ease-in duration-300 hover:bg-primary-800 secondary-font"
            >
              Shop Now
            </button>
          </div>
        </Layout>
      )}
    </div>
  );
}

export default Cart;
