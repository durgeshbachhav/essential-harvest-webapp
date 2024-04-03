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

  console.log("products id", products);
  useEffect(() => {
    const isProductInCart = cartItems.find((item) => item.$id === products.$id);
    setIsInCart(!!isProductInCart);
  }, [cartItems, products.$id]);

  const user = JSON.parse(localStorage.getItem("user"));

  const addCart = () => {
    if (user) {
      if (isInCart) {
        navigate("/cart");
      } else {
        dispatch(addToCart(products));
        navigate("/cart");
        toast.success("Added to cart");
      }
    } else {
      toast.error("Please log in to add items to cart.");
    }
  };

  return (
    <Layout>
      <section className="text-gray-600 body-font overflow-hidden product bg-primary-100">
        <div className="container px-5 py-10 mx-auto lg:h-[80vh]">
          {products && (
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              <img
                alt="ecommerce"
                className="lg:w-1/3 w-full lg:h-auto  object-cover object-center rounded"
                src={products.imageUrl}
              />
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 className="text-sm primary-font text-primary-950 tracking-widest">
                  Essential Harvest
                </h2>
                <h1 className="text-primary-800 text-3xl secondary-font font-medium mb-1">
                  {products.title}
                </h1>
                <div className="flex mb-4">{/* ... existing code */}</div>
                <p className="leading-relaxed border-b-2 mb-5 pb-5">
                  {products.description}
                </p>

                <div className="flex">
                  <span className="title-font font-medium text-2xl text-primary-950">
                    ₹{products.price}
                  </span>
                  <button
                    onClick={addCart}
                    className={`flex ml-auto text-white  border-0 py-2 px-6 focus:outline-none   font-medium text-sm bg-primary-900 rounded-lg hover:scale-105 ease-in duration-300 hover:bg-primary-700 `}
                  >
                    {!isInCart ? "Add to Cart" : "Go to Cart"}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}

export default ProductInfo;
