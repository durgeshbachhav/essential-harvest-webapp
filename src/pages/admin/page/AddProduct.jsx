import { useContext } from "react";
import myContext from "../../../context/data/myContext";
import { FaAngleDoubleRight } from "react-icons/fa";
function AddProduct() {
  const context = useContext(myContext);
  const { products, setProducts, addProduct } = context;
  return (
    <div>
      <div className="flex justify-center items-center   bg-primary-50">
        <div className=" bg-leaf border-opacity-20  px-10 py-10  ">
          <div className="">
            <h1 className="text-center text-black text-xl mb-4 font-bold">
              Add New Product
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
              className=" bg-gray-600  mb-4 px-2 py-2 w-full lg:w-[20em]  text-white placeholder:text-white outline-none"
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
              className=" bg-gray-600  mb-4 px-2 py-2 w-full lg:w-[20em]  text-white placeholder:text-white outline-none"
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
              className=" bg-gray-600  mb-4 px-2 py-2 w-full lg:w-[20em]  text-white placeholder:text-white outline-none"
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
              className=" bg-gray-600  mb-4 px-2 py-2 w-full lg:w-[20em]  text-white placeholder:text-white outline-none"
              placeholder="Product category"
            />
          </div>
          <div>
            <textarea
              cols="15"
              rows="3"
              name="description"
              value={products.description}
              onChange={(e) =>
                setProducts({ ...products, description: e.target.value })
              }
              className=" bg-gray-600  mb-4 px-2 py-2 w-full lg:w-[20em]  text-white placeholder:text-white outline-none"
              placeholder="Product desc"
            ></textarea>
          </div>
          <div>
            <textarea
              cols="15"
              rows="3"
              name="benefitsOfProducts"
              value={products.benefitsOfProducts}
              onChange={(e) =>
                setProducts({
                  ...products,
                  benefitsOfProducts: e.target.value.split("."),
                })
              }
              className=" bg-gray-600  mb-4 px-2 py-2 w-full lg:w-[20em]  text-white placeholder:text-white outline-none"
              placeholder="Product Benefits"
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
              className=" bg-gray-600  mb-4 px-2 py-2 w-full lg:w-[20em]  text-white placeholder:text-white outline-none"
              placeholder="About the Product"
            ></textarea>
          </div>
          <div className=" flex justify-center mb-3">
            <button
              onClick={addProduct}
              className=" focus:outline-none flex items-center justify-between text-white  text-center text-sm px-4 py-4 w-full font-bold bg-chestnut  hover:bg-everglade ease-in duration-300  secondary-font  "
            >
              Add Product
              <FaAngleDoubleRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
