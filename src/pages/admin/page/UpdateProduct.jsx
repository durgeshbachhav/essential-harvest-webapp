import React, { useContext } from "react";
import myContext from "../../../context/data/myContext";

function UpdateProduct() {
  const context = useContext(myContext);
  const { products, setProducts, updateProduct } = context;
  return (
    <div className="w-full h-full">
      <div className="flex justify-center items-center   bg-primary-50">
        <div className="  bg-gradient-to-tr from-primary-300 to-primary-400 border-opacity-20  px-10 py-10  rounded-lg">
          <div className="">
            <h1 className="text-center text-white text-xl mb-4 font-bold">
              Update Product
            </h1>
          </div>
          <div>
            <input
              type="text"
              value={products.title}
              onChange={(e) =>
                setProducts({ ...products, title: e.target.value })
              }
              name="title"
              className=" bg-gray-600 rounded-lg mb-4 px-2 py-2 w-full lg:w-[20em]  text-white placeholder:text-white outline-none"
              placeholder="Product title"
            />
          </div>
          <div>
            <input
              type="text"
              value={products.price}
              onChange={(e) =>
                setProducts({ ...products, price: e.target.value })
              }
              name="price"
              className=" bg-gray-600 rounded-lg mb-4 px-2 py-2 w-full lg:w-[20em]  text-white placeholder:text-white outline-none"
              placeholder="Product price"
            />
          </div>
          <div>
            <input
              type="text"
              value={products.imageUrl}
              onChange={(e) =>
                setProducts({ ...products, imageUrl: e.target.value })
              }
              name="imageurl"
              className=" bg-gray-600 rounded-lg mb-4 px-2 py-2 w-full lg:w-[20em]  text-white placeholder:text-white outline-none"
              placeholder="Product imageUrl"
            />
          </div>
          <div>
            <input
              type="text"
              value={products.category}
              onChange={(e) =>
                setProducts({ ...products, category: e.target.value })
              }
              name="category"
              className=" bg-gray-600 rounded-lg mb-4 px-2 py-2 w-full lg:w-[20em]  text-white placeholder:text-white outline-none"
              placeholder="Product category"
            />
          </div>
          <div>
            <textarea
              cols="15"
              rows="3"
              name="title"
              value={products.description}
              onChange={(e) =>
                setProducts({ ...products, description: e.target.value })
              }
              className=" bg-gray-600 rounded-lg mb-4 px-2 py-2 w-full lg:w-[20em]  text-white placeholder:text-white outline-none"
              placeholder="Product desc"
            ></textarea>
          </div>
          <div>
            <textarea
              cols="15"
              rows="3"
              name="title"
              value={products.benefitsOfProducts}
              onChange={(e) =>
                setProducts({ ...products, benefitsOfProducts: e.target.value })
              }
              className=" bg-gray-600 rounded-lg mb-4 px-2 py-2 w-full lg:w-[20em]  text-white placeholder:text-white outline-none"
              placeholder="Product benefits"
            ></textarea>
          </div>
          <div>
            <textarea
              cols="15"
              rows="3"
              name="aboutTheProduct"
              value={products.aboutTheProduct}
              onChange={(e) =>
                setProducts({
                  ...products,
                  aboutTheProduct: e.target.value.split("."),
                })
              }
              className=" bg-gray-600 rounded-lg mb-4 px-2 py-2 w-full lg:w-[20em]  text-white placeholder:text-white outline-none"
              placeholder="About the Product"
            ></textarea>
          </div>
          <div className=" flex justify-center mb-3">
            <button
              onClick={updateProduct}
              className=" focus:outline-none text-white  font-medium text-xl w-full px-4 py-2  bg-blue-500 rounded-lg hover:scale-105 ease-in duration-300 hover:bg-blue-800 "
            >
              Update Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateProduct;
