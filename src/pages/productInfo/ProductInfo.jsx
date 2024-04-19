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

  console.log("products id", products);
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

  return (
    <Layout>
      <section className="text-gray-600 body-font overflow-hidden product bg-50-100">
        <div className="container px-5 py-10 mx-auto ">
          {products && (
            <div>
              <div className="lg:w-4/5 mx-auto flex flex-wrap items-center justify-center lg:py-4">
                <img
                  alt="ecommerce"
                  className="lg:w-1/3 content-center h-96 lg:h-auto  object-cover object-center rounded"
                  src={products.imageUrl}
                />
                <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                  <h2 className="text-sm primary-font text-primary-950 tracking-widest">
                    Essential Harvest
                  </h2>
                  <h1 className="text-primary-800 text-xl border-b py-4 secondary-font font-medium mb-1">
                    {products.title}
                  </h1>
                  <div className="flex mb-4"></div>

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
              <div className="border-t-2 mt-4 pt-4">
                <div>
                  <h4 className="font-semibold text-xl primary-font">
                    Product Description:
                  </h4>
                  <p className="secondary-font">{products.description}</p>
                </div>
                <div className="border-t-2 mt-4 pt-4">
                  <h4 className="font-semibold text-xl primary-font">
                    About this item:
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
                    Benefits of Item:
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
      </section>
    </Layout>
  );
}

export default ProductInfo;
