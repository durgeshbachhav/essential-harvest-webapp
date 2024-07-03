import { useContext, useEffect, useState } from "react";
import myContext from "../../context/data/myContext";
import Layout from "../../components/layout/Layout";
import Modal from "../../components/modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromCart, clearCart } from "../../redux/cartSlice";
import { toast } from "sonner";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "../../assets/logo1.png";
import { IoIosCloseCircle } from "react-icons/io";



// appwrite
import { account, databases } from "../../appwrite/appwriteConfig";
import { ID } from "appwrite";
import "./Cart.scss";
import { TiShoppingCart } from "react-icons/ti";
import { MdRemoveShoppingCart } from "react-icons/md";
import { FaAngleDoubleRight } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

function Cart() {

  const [showDeliveryChargesModal, setShowDeliveryChargesModal] = useState(false);

  // Function to toggle visibility of delivery charges modal
  const toggleDeliveryChargesModal = () => {
    setShowDeliveryChargesModal(!showDeliveryChargesModal);
  };



  const deliveryChargesModal = (
    <div onClick={toggleDeliveryChargesModal} className="fixed inset-0 flex items-center justify-center z-50 ">
      <div className="absolute inset-0 bg-black opacity-50 z-40"></div>
      <div className="bg-white p-4 rounded-md z-50">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold mb-2">Delivery Charges</h2>
          <IoIosCloseCircle color="red" size={20} />

        </div>
        <p className="mb-2">Maharashtra: <span className="font-bold">₹69</span></p>
        <p>All Over India (Except Maharashtra): <span className="font-bold"> ₹99</span></p>

      </div>
    </div>
  );


  const navigate = useNavigate();
  const context = useContext(myContext);
  const { mode, getOrderData } = context;
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart);

  const deleteCart = (item) => {
    dispatch(deleteFromCart(item));
    toast.success("Deleted item from cart");
  };

  const clearAllCart = () => {
    dispatch(clearCart());
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const [totalAmount, setTotalAmount] = useState(0);

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
      [itemId]: (prevQuantityMap[itemId] || 1) + 1,
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

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const user = JSON.parse(localStorage.getItem("user"));
  const [loggedIn, setLoggedIn] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleBuyNow = () => {
    if (loggedIn) {
      setShowModal(true);
    } else {
      navigate("/login");
    }
  };

  const handleLogin = () => {
    if (user) {
      setLoggedIn(true);
    }
  };

  useEffect(() => {
    handleLogin();
  }, []);

  const calculateShipping = () => {
    // Check if total amount is eligible for free shipping
    if (totalAmount >= 699) return 0;

    // Normalize address to lowercase
    const normalizedAddress = address.toLowerCase();

    // Use regular expression to match any variant of "Maharashtra"
    const maharashtraPattern = /maharashtra|maharastra|maharstra/;
    if (maharashtraPattern.test(normalizedAddress)) return 69;

    // Default shipping charge
    return 99;
  };

  // Calculate shipping based on the address and total amount
  const shipping = calculateShipping();
  // Calculate grand total including shipping
  const grandTotal = shipping + totalAmount;
  const buyNow = async () => {
    if (!name || !address || !pincode || !phoneNumber) {
      return toast.error("All fields are required");
    }
    const addressInfo = {
      name,
      address,
      pincode,
      phoneNumber,
      date: new Date(),
    };
    let orderInfo;
    var options = {
      key: import.meta.env.VITE_PAYMENT_GATEWAY_KEY,
      key_secret: import.meta.env.VITE_PAYMENT_GATEWAY_KEY_SECRET,
      amount: parseInt(grandTotal * 100), // Use grandTotal here
      currency: "INR",
      order_receipt: "order_rcptid_" + name,
      name: "Essential Harvest",
      image: logo,
      notes: {
        name: name,
        mobile: phoneNumber
      },
      handler: function (response) {
        toast.success("Payment Successful");
        const paymentId = response.razorpay_payment_id;
        const addressInfoJsonString = JSON.stringify(addressInfo);
        const cartItemsJsonString1 = cartItems.reduce((acc, curr, index) => {
          acc[index] = {
            category: curr.category,
            date: new Date(curr.date).toDateString(),
            description: curr.description,
            title: curr.title,
            imageUrl: curr.imageUrl,
            price: curr.price,
            quantity: quantityMap[curr.id] || 1,
            time: new Date(curr.date).toDateString(),
          };
          return acc;
        }, {});
        const cartItemsJsonString = JSON.stringify(cartItemsJsonString1);

        orderInfo = {
          cartItemsJsonString,
          addressInfoJsonString,
          date: new Date(),
          email: user.providerUid || user.profileInfo.email,
          userid: user.userId,
          grand: String(grandTotal), // Use grandTotal here
          paymentId,
        };

        databases.createDocument(
          import.meta.env.VITE_APP_DATABASE_ID,
          import.meta.env.VITE_APP_ORDERS_COLLECTION_ID,
          ID.unique(),
          orderInfo
        ).then(
          function (response) {
            console.log('order response ; ', response)
            clearAllCart();
            getOrderData();
            window.location.href = "#/order";
          },
          function (error) {
            console.log("error", error);
          }
        );

        axios.post(
          "https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjUwNTZhMDYzNjA0MzQ1MjZhNTUzNDUxMzMi_pc",
          {
            paymentId: paymentId,
            name,
            address,
            pincode,
            phoneNumber,
            orderInfo: orderInfo,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        ).then((response) => {
          toast.success("Your Order is confirmed");
        }).catch((error) => {
          console.error("Error calling webhook:", error);
        });
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
      {cartItems?.length > 0 ? (
        <Layout className="cart">
          <div className="pt-5 mb-[0%]" style={{ backgroundColor: mode === "dark" ? "#282c34" : "", color: mode === "dark" ? "white" : "" }}>
            <h1 className="mt-5 mb-10 text-center text-4xl font-bold primary-font text-heading-color">Cart items</h1>
            <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0 py-4">
              <div className="md:w-2/3">
                {cartItems.map((item, index) => {
                  const { id, title, price, description, imageUrl } = item;
                  const quantity = quantityMap[item.$id] || 1;

                  return (
                    <div key={index} className="w-full justify-between mb-6 shadow-xl bg-mist p-6 sm:flex sm:justify-start" style={{ backgroundColor: mode === "dark" ? "rgb(32 33 34)" : "", color: mode === "dark" ? "white" : "" }}>
                      <img src={imageUrl} alt="product-image" className="w-full sm:w-40" />
                      <div className="sm:flex sm:w-full sm:justify-between">
                        <div className="mt-5 sm:mt-0">
                          <h2 className="text-xl font-semibold text-heading-color border-b-2 py-4" style={{ color: mode === "dark" ? "white" : "" }}>{title}</h2>
                          <div className="flex items-start justify-start mt-3">
                            <div className="font-mono">₹</div>
                            <span className="font-bold text-3xl">{price}</span>
                            <span className="text-[10px] flex justify-end">MRP INCLUSIVE OF ALL TAXES</span>
                          </div>
                        </div>
                        <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                          <div className="flex justify-center items-center">
                            <button type="button" onClick={() => decreaseQuantity(item.$id)} className="text-white bg-chestnut font-medium rounded-l-lg text-sm px-4 py-2">-</button>
                            <p className="text-heading-color font-bold mx-2" style={{ color: mode === "dark" ? "white" : "" }}>{quantity}</p>
                            <button type="button" onClick={() => increaseQuantity(item.$id)} className="text-white bg-chestnut font-medium rounded-r-lg text-sm px-4 py-2">+</button>
                          </div>
                          <div onClick={() => deleteCart(item)} className="cursor-pointer bg-chestnut p-2 shadow-lg w-12">
                            <MdRemoveShoppingCart color="white" size={30} />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="mt-6 h-full border-4 bg-link-water shadow-lg p-6 md:mt-0 md:w-1/3" style={{ backgroundColor: mode === "dark" ? "rgb(32 33 34)" : "", color: mode === "dark" ? "white" : "" }}>
                <p className="font-bold mb-4 text-chestnut">🎉enjoy FREE delivery on purchases up to ₹699!🚚 </p>
                <div className="mb-2 flex justify-between">

                  <p className="text-heading-color" style={{ color: mode === "dark" ? "white" : "" }}>Subtotal</p>
                  <p className="text-heading-color" style={{ color: mode === "dark" ? "white" : "" }}>₹{totalAmount}</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-sub-heading-color" style={{ color: mode === "dark" ? "white" : "" }}>Shipping</p>
                  <button className="text-sub-heading-color underline" onClick={toggleDeliveryChargesModal}>{totalAmount >= 699 ? `Free Delivery` : `Check Delivery Charges`}</button>
                  {/* Conditionally render the delivery charges modal */}
                  {showDeliveryChargesModal && deliveryChargesModal}
                  {/* <p className="text-sub-heading-color" style={{ color: mode === "dark" ? "white" : "" }}>₹{shipping}</p> */}
                  {/* Added shipping display */}
                </div>
                <hr className="my-4" />
                <div className="flex justify-between mb-3">
                  <p className="text-lg text-heading-color font-bold" style={{ color: mode === "dark" ? "white" : "" }}>Total</p>
                  <div className>
                    <p className="mb-1 text-heading-color text-lg font-bold" style={{ color: mode === "dark" ? "white" : "" }}>₹{totalAmount}  <span className="text-sm  font-light">{totalAmount >= 699 ? `` : ` + Delivery Charges`}</span></p> {/* Updated to use grandTotal */}
                  </div>
                </div>
                {user ? (
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
                ) : (
                  <button className="focus:outline-none flex items-center justify-between text-white font-medium text-sm px-4 py-2 w-32 bg-chestnut hover:bg-everglade ease-in duration-300 secondary-font" type="button" onClick={handleBuyNow}>
                    continue
                    <FaAngleDoubleRight />
                  </button>
                )}
              </div>
            </div>
          </div>
        </Layout>
      ) : (
        <Layout>
          <div className="w-100 h-[60vh] cart flex flex-col items-center justify-center gap-6">
            <TiShoppingCart size={70} color="green" />
            <p className="text-sm secondary-font">Cart is Empty</p>
            <button onClick={() => navigate("/allproducts")} className="focus:outline-none flex items-center justify-between text-white font-medium text-sm px-4 py-2 w-32 bg-chestnut hover:bg-everglade ease-in duration-300 secondary-font">
              Shop Now
              <FaAngleDoubleRight />
            </button>
          </div>
        </Layout>
      )}
    </div>
  );
}

export default Cart;


