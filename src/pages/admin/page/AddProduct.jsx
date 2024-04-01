import { useContext } from "react";
import myContext from "../../../context/data/myContext";

function AddProduct() {
  const context = useContext(myContext);
  const { products, setProducts, addProduct } = context;
  return (
    <div>
      <div className="flex justify-center items-center h-screen rounded-lg bg-primary-50">
        <div className=" bg-primary-900 px-10 py-10  rounded-lg">
          <div className="">
            <h1 className="text-center text-white text-xl mb-4 font-bold">
              Add Product
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
              className=" bg-primary-600 mb-4 px-2 py-2 w-full lg:w-[20em]  text-white placeholder:text-gray-200 outline-none"
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
              className=" bg-primary-600 mb-4 px-2 py-2 w-full lg:w-[20em]  text-white placeholder:text-gray-200 outline-none"
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
              className=" bg-primary-600 mb-4 px-2 py-2 w-full lg:w-[20em]  text-white placeholder:text-gray-200 outline-none"
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
              className=" bg-primary-600 mb-4 px-2 py-2 w-full lg:w-[20em]  text-white placeholder:text-gray-200 outline-none"
              placeholder="Product category"
            />
          </div>
          <div>
            <textarea
              cols="15"
              rows="10"
              name="title"
              value={products.description}
              onChange={(e) =>
                setProducts({ ...products, description: e.target.value })
              }
              className=" bg-primary-600 mb-4 px-2 py-2 w-full lg:w-[20em]  text-white placeholder:text-gray-200 outline-none"
              placeholder="Product desc"
            ></textarea>
          </div>
          <div className=" flex justify-center mb-3">
            <button
              onClick={addProduct}
              className="  focus:outline-none text-white  font-medium text-xl w-full px-4 py-2  bg-primary-500 rounded-lg hover:scale-105 ease-in duration-300 hover:bg-primary-800  "
            >
              Add Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
