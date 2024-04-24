import React, { useEffect, useState } from "react";
import MyContext from "./myContext";
import { toast } from "sonner";
import { v4 as uuid } from "uuid";
// appwrite
import { account, databases } from "../../appwrite/appwriteConfig";

function myState(props) {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(17, 24, 39)";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  const [loading, setLoading] = useState(false);
  const productId = uuid();
  const [products, setProducts] = useState({
    id: productId,
    title: null,
    price: null,
    imageUrl: null,
    category: null,
    description: null,
    date: new Date(),
  });

  // console.log("id", productId);
  const addProduct = async () => {
    if (
      products.title == null ||
      products.price == null ||
      products.imageUrl == null ||
      products.category == null ||
      products.description == null ||
      products.aboutTheProduct == [null] ||
      products.benefitsOfProducts == [null]
    ) {
      console.log(products);
      return toast.error("all fields are required");
    }

    console.log("products", product);
    setLoading(true);
    const addPromise = databases.createDocument(
      import.meta.env.VITE_APP_DATABASE_ID,
      import.meta.env.VITE_APP_PRODUCTS_COLLECTION_ID,
      uuid(),
      products
    );

    addPromise.then(
      function (response) {
        console.log(response);
        toast.success("Added product successfully");
        setTimeout(() => {
          window.location.href = "/#/dashboard";
        }, 800);
        setLoading(false);
        setProducts({
          id: products.id,
          title: products.title,
          price: products.price,
          imageUrl: products.imageUrl,
          category: products.category,
          description: products.description,
          about: products.aboutTheProduct,
          benefits: products.benefitsOfProducts,
          date: products.date,
        });
      },
      function (error) {
        console.log(error);
        setLoading(false);
      }
    );
    setProducts("");
  };

  const [product, setProduct] = useState([]);
  const [totalProduct, setTotalProduct] = useState(0);

  const getProductData = async () => {
    setLoading(true);
    const productData = databases.listDocuments(
      import.meta.env.VITE_APP_DATABASE_ID,
      import.meta.env.VITE_APP_PRODUCTS_COLLECTION_ID
    );
    // console.log("productdata", productData);
    productData.then(
      function (response) {
        console.log(response);
        setTotalProduct(response.total);
        const productArray = response.documents.map((doc) => ({
          ...doc,
          id: doc.$id,
        }));
        setProduct(productArray);
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
    
  }, [products]);

  // update product
  const edithandle = (item) => {
    setProducts(item);
  };
  const updateProduct = async () => {
    setLoading(true);
    const updatePromise = databases.updateDocument(
      import.meta.env.VITE_APP_DATABASE_ID,
      import.meta.env.VITE_APP_PRODUCTS_COLLECTION_ID,
      products.$id,
      {
        title: products.title,
        price: products.price,
        imageUrl: products.imageUrl,
        category: products.category,
        description: products.description,
        aboutTheProduct: products.aboutTheProduct,
        benefitsOfProducts: products.benefitsOfProducts,
        date: new Date().toLocaleString("en-US", {
          month: "short",
          day: "2-digit",
          year: "numeric",
        }),
      }
    );
    updatePromise.then(
      function (response) {
        console.log(response);
        toast.success("Product Updated successfully");
        setTimeout(() => {
          window.location.href = "/#/dashboard";
        }, 800);
        getProductData();
        setLoading(false);
      },
      function (error) {
        console.log(error);
        setLoading(false);
      }
    );
  };
  // delete product
  const deleteProduct = async (item) => {
    setLoading(true);
    const deletePromise = databases.deleteDocument(
      import.meta.env.VITE_APP_DATABASE_ID,
      import.meta.env.VITE_APP_PRODUCTS_COLLECTION_ID,
      item.id
    );
    deletePromise.then(
      function (response) {
        console.log(response);
        toast.success("Product Deleted successfully");
        getProductData();
        setLoading(false);
      },
      function (error) {
        console.log(error);
        setLoading(false);
      }
    );
  };

  const [order, setOrder] = useState([]);
  const [totalOrder, seTotalOrder] = useState([]);
  // update OrderStatus
  const editOrderhandle = (item) => {
    setOrder(item);
  };
  // console.log("orderid", order);
  const updateOrderStatus = async () => {
    setLoading(true);
    const updateStatusPromise = databases.updateDocument(
      import.meta.env.VITE_APP_DATABASE_ID,
      import.meta.env.VITE_APP_ORDERS_COLLECTION_ID,
      order.id,
      {
        status: order.status,
        statusDate: new Date(),
      }
    );
    updateStatusPromise.then(
      function (response) {
        toast.success("Order Status Updated Status");
        console.log(response);
        setTimeout(() => {
          window.location.href = "/#/dashboard";
        }, 800);
        getOrderData();
        setLoading(false);
      },
      function (error) {
        console.log(error);
        setLoading(false);
      }
    );
  };
  // end
  const getOrderData = async () => {
    setLoading(true);
    const orderDataPromise = databases.listDocuments(
      import.meta.env.VITE_APP_DATABASE_ID,
      import.meta.env.VITE_APP_ORDERS_COLLECTION_ID
    );
    orderDataPromise.then(
      function (response) {
        console.log("order response", response);
        seTotalOrder(response.total);
        // Extract data from the documents
        const originalOrdersArray = response.documents.map((doc) => ({
          ...doc,
          id: doc.$id,
        }));
        //   format
        const ordersArray = originalOrdersArray?.map((item) => {
          const addressInfo = JSON.parse(item.addressInfoJsonString ?? "{}");
          const cartItems = JSON.parse(item.cartItemsJsonString ?? "{}");
          const formattedCartItems = Object.values(cartItems).map(
            (cartItem) => ({
              id: cartItem.id,
              title: cartItem.title,
              category: cartItem.category,
              price: cartItem.price,
              description: cartItem.description,
              imageUrl: cartItem.imageUrl,
              date: cartItem.date,
              time: cartItem.time,
              quantity: cartItem.quantity,
              //   grand: cartItem.grand,
            })
          );

          return {
            id: item.id,
            userid: item.userid,
            email: item.email,
            grand: item.grand,
            status: item.status,
            statusDate: item.statusDate,
            paymentId: item.paymentId,
            date: item.date,
            addressInfo: {
              name: addressInfo.name,
              address: addressInfo.address,
              pincode: addressInfo.pincode,
              phoneNumber: addressInfo.phoneNumber,
              date: addressInfo.date,
            },
            cartItems: formattedCartItems,
          };
        });

        // Set the product state and update loading status
        setOrder(ordersArray);
        setLoading(false);
      },
      function (error) {
        console.log(error);
        setLoading(false);
      }
    );
  };

  useEffect(() => {
    getOrderData();
  }, []);

  const [searchkey, setSearchkey] = useState("");
  const [filterType, setFilterType] = useState("");
  const [filterPrice, setFilterPrice] = useState("");

  const resetFilters = () => {
    setSearchkey("");
    setFilterType("");
    setFilterPrice("");
  };

  return (
    <MyContext.Provider
      value={{
        mode,
        toggleMode,
        loading,
        setLoading,
        products,
        setProducts,
        addProduct,
        product,
        edithandle,
        updateProduct,
        deleteProduct,
        editOrderhandle,
        updateOrderStatus,
        order,
        setOrder,
        searchkey,
        setSearchkey,
        filterType,
        setFilterType,
        filterPrice,
        setFilterPrice,
        resetFilters,
        totalOrder,
        totalProduct,
        getOrderData,
        // user,
        // setUser,
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
}

export default myState;
