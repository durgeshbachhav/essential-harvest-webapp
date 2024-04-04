import React, { useContext, useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import myContext from "../../../context/data/myContext";
import Layout from "../../../components/layout/Layout";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { FaUser, FaCartPlus } from "react-icons/fa";
import { AiFillShopping, AiFillPlusCircle, AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import "../Admin.scss";
function DashboardTab() {
  const context = useContext(myContext);
  const {
    mode,
    product,
    edithandle,
    deleteProduct,
    order,
    editOrderhandle,
    user,
  } = context;

  let [isOpen, setIsOpen] = useState(false);

  console.log("order", order);
  console.log("product", product);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const add = () => {
    window.location.href = "#/addproduct";
  };
  return (
    <>
      <div className="container mx-auto">
        <div className="tab container mx-auto ">
          <Tabs defaultIndex={0} className=" ">
            <TabList className="md:flex md:space-x-8 bg-  grid grid-cols-2 text-center gap-4   md:justify-center mb-10 ">
              <Tab>
                <button
                  type="button"
                  className="focus:outline-none text-white  font-bold text-xl px-4 py-2  bg-primary-500 rounded-lg hover:scale-105 ease-in duration-300 hover:bg-primary-800 secondary-font"
                >
                  <div className="flex gap-2 items-center ">
                    <MdOutlineProductionQuantityLimits color="white" />
                    Products
                  </div>{" "}
                </button>
              </Tab>
              <Tab>
                <button
                  type="button"
                  className="focus:outline-none text-white  font-medium text-xl px-4 py-2  bg-primary-500 rounded-lg hover:scale-105 ease-in duration-300 hover:bg-primary-800 secondary-font"
                >
                  <div className="flex gap-2 items-center">
                    <AiFillShopping /> Order
                  </div>
                </button>
              </Tab>
            </TabList>
            {/* product  */}
            <TabPanel>
              <div className="  px-4 md:px-0 mb-16">
                <h1
                  className=" text-center mb-5 text-3xl font-semibold primary-font "
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  Product Details
                </h1>

                <div className=" flex justify-end">
                  <button
                    onClick={add}
                    type="button"
                    className="focus:outline-none text-white  font-medium text-xl px-4 py-2  bg-primary-500 rounded-lg hover:scale-105 ease-in duration-300 hover:bg-primary-800 secondary-font mb-8"
                    style={{
                      backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
                      color: mode === "dark" ? "white" : "",
                    }}
                  >
                    {" "}
                    <div className="flex gap-2 items-center ">
                      Add Product <FaCartPlus size={20} />
                    </div>
                  </button>
                </div>
                <div className="relative  overflow-x-auto rounded-lg">
                  <table className="w-full border-2 text-sm text-left rounded-lg  bg-primary-300  ">
                    <thead className="text-bold     uppercase rounded-lg ">
                      <tr className="">
                        <th scope="col" className="px-6 py-3">
                          S.No
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Image
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Title
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Price
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Category
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Date
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Action
                        </th>
                      </tr>
                    </thead>
                    {product.map((item, index) => {
                      const {
                        title,
                        price,
                        imageUrl,
                        category,
                        description,
                        date,
                      } = item;
                      let formattedDate = new Date(date).toLocaleString();

                      return (
                        <tbody key={index} className="bg-white ">
                          <tr className=" border-2  ">
                            <td
                              className="px-6 py-4 text-black border "
                              style={{ color: mode === "dark" ? "white" : "" }}
                            >
                              {index + 1}.
                            </td>
                            <th
                              scope="row"
                              className="px-6 py-4 font-medium  whitespace-nowrap"
                            >
                              <img className="w-16" src={imageUrl} alt="img" />
                            </th>
                            <td
                              className="px-6 py-4 text-heading-color font-bold border"
                              style={{ color: mode === "dark" ? "white" : "" }}
                            >
                              {title}
                            </td>
                            <td
                              className="px-6 py-4 text-heading-color font-bold border"
                              style={{ color: mode === "dark" ? "white" : "" }}
                            >
                              ₹{price}
                            </td>
                            <td
                              className="px-6 py-4 text-heading-color font-bold border"
                              style={{ color: mode === "dark" ? "white" : "" }}
                            >
                              {category}
                            </td>
                            <td
                              className="px-6 py-4 text-sub-heading-color secondary-font font-medium border"
                              style={{ color: mode === "dark" ? "white" : "" }}
                            >
                              {formattedDate}
                            </td>
                            <td className="px-6 py-4">
                              <div className=" flex gap-2">
                                <div
                                  className=" flex gap-2 cursor-pointer text-black "
                                  style={{
                                    color: mode === "dark" ? "white" : "",
                                  }}
                                >
                                  <div onClick={() => deleteProduct(item)}>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      strokeWidth={1.5}
                                      stroke="currentColor"
                                      className="w-6 h-6"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                      />
                                    </svg>
                                  </div>

                                  <Link to={"/updateproduct"}>
                                    <div onClick={() => edithandle(item)}>
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-6 h-6"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                        />
                                      </svg>
                                    </div>
                                  </Link>
                                </div>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      );
                    })}
                  </table>
                </div>
              </div>
            </TabPanel>
            {/* Order History */}
            <TabPanel>
              {/* <Order order={order} setOrder={setOrder} setLoading={setLoading} /> */}
              <div className="relative overflow-x-auto  mb-16   rounded-lg">
                <h1 className=" text-center primary-font mb-5 text-3xl font-semibold ">
                  Order Details
                </h1>

                {order.map((allorder, index) => {
                  return (
                    <div
                      key={index}
                      className="relative  overflow-x-auto rounded-lg"
                    >
                      <table className="w-full  border-2   text-sm text-left font-bold  rounded-lg  ">
                        <thead className="border  bg-primary-300 secondary-font  text-heading-color  uppercase rounded-lg  ">
                          <tr className="rounded-lg ">
                            <th scope="col" className="px-6 py-3">
                              Payment Id
                            </th>
                            <th scope="col" className="px-6 py-3">
                              Image
                            </th>
                            <th scope="col" className="px-6 py-3">
                              Title
                            </th>
                            <th scope="col" className="px-6 py-3">
                              Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                              Category
                            </th>
                            <th scope="col" className="px-6 py-3">
                              Name
                            </th>
                            <th scope="col" className="px-6 py-3 ">
                              Address
                            </th>
                            <th scope="col" className="px-6 py-3">
                              Pincode
                            </th>
                            <th scope="col" className="px-6 py-3">
                              Phone Number
                            </th>
                            <th scope="col" className="px-6 py-3">
                              Email
                            </th>
                            <th scope="col" className="px-6 py-3">
                              Date
                            </th>
                            <th scope="col" className="px-6 py-3">
                              Status
                            </th>
                            <th scope="col" className="px-6 py-3">
                              Update
                            </th>
                          </tr>
                        </thead>

                        {allorder.cartItems.map((item, index) => {
                          const { title, category, imageUrl, price } = item;
                          let formattedDateforadmin = new Date(
                            allorder.date
                          ).toLocaleString();
                          console.log();
                          return (
                            <tbody key={index}>
                              <tr className="bg-white font-bold  text-sub-heading-color  secondary-font">
                                <td
                                  className="px-6 py-4 font-bold border "
                                  style={{
                                    color: mode === "dark" ? "white" : "",
                                    cursor: "pointer", // Change cursor to pointer
                                    userSelect: "all", // Allow text selection
                                    WebkitUserSelect: "all", // For Safari
                                    MozUserSelect: "all", // For Firefox
                                    msUserSelect: "all",
                                  }}
                                >
                                  <div className="w-full px-5 py-1 bg-primary-200 rounded-lg">
                                    {allorder.paymentId}
                                  </div>
                                </td>
                                <th
                                  scope="row"
                                  className="px-6 py-4 font-bold  whitespace-nowrap"
                                >
                                  <img
                                    className="w-16"
                                    src={imageUrl}
                                    alt="img"
                                  />
                                </th>
                                <td
                                  className="px-6 py-4 font-bold  border"
                                  style={{
                                    color: mode === "dark" ? "white" : "",
                                  }}
                                >
                                  {title}
                                </td>
                                <td
                                  className="px-6 py-4 font-medium border"
                                  style={{
                                    color: mode === "dark" ? "white" : "",
                                  }}
                                >
                                  ₹{price}
                                </td>
                                <td
                                  className="px-6 py-4 font-medium border"
                                  style={{
                                    color: mode === "dark" ? "white" : "",
                                  }}
                                >
                                  {category}
                                </td>

                                <td
                                  className="px-6 py-4 font-medium border"
                                  style={{
                                    color: mode === "dark" ? "white" : "",
                                  }}
                                >
                                  {allorder.addressInfo.name}
                                </td>
                                <td
                                  className="px-6 py-4 font-medium border"
                                  style={{
                                    color: mode === "dark" ? "white" : "",
                                  }}
                                >
                                  {allorder.addressInfo.address}
                                </td>
                                <td
                                  className="px-6 py-4 font-medium border"
                                  style={{
                                    color: mode === "dark" ? "white" : "",
                                  }}
                                >
                                  {allorder.addressInfo.pincode}
                                </td>
                                <td
                                  className="px-6 py-4 font-medium border"
                                  style={{
                                    color: mode === "dark" ? "white" : "",
                                  }}
                                >
                                  {allorder.addressInfo.phoneNumber}
                                </td>
                                <td
                                  className="px-6 py-4 font-medium border"
                                  style={{
                                    color: mode === "dark" ? "white" : "",
                                  }}
                                >
                                  {allorder.email}
                                </td>
                                <td
                                  className="px-6 py-4 font-medium border"
                                  style={{
                                    color: mode === "dark" ? "white" : "",
                                  }}
                                >
                                  {formattedDateforadmin}
                                </td>
                                <td
                                  className="px-6 py-4 font-medium border"
                                  style={{
                                    color: mode === "dark" ? "white" : "",
                                  }}
                                >
                                  {allorder.status}
                                </td>
                                <td className="">
                                  {/* <Link to={'/updateproduct'}>  */}
                                  <Link to={"/updateOrderStatus"}>
                                    <div
                                      className="flex items-center justify-center mx-auto text-center"
                                      onClick={() => editOrderhandle(allorder)}
                                    >
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-6 h-6"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                        />
                                      </svg>
                                    </div>
                                  </Link>
                                </td>
                              </tr>
                            </tbody>
                          );
                        })}
                      </table>
                    </div>
                  );
                })}
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </>
  );
}

export default DashboardTab;
