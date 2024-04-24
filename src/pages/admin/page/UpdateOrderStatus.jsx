import React, { useContext, useState } from "react";
import myContext from "../../../context/data/myContext";
import { FaAngleDoubleRight } from "react-icons/fa";
function UpdateOrderStatus() {
  const context = useContext(myContext);
  const { order, setOrder, updateOrderStatus } = context;
  const [selectedStatus, setSelectedStatus] = useState("");
  const orderStatusOptions = ["Processing", "Shipped", "Delivered"];
  const handleStatusChange = (event) => {
    setSelectedStatus(event.target.value);
    setOrder({ ...order, status: event.target.value });
  };
  return (
    <div>
      <div className=" flex justify-center items-center h-screen bg-primary-50 ">
        <div className=" bg-leaf  px-10 py-10   ">
          <div className="">
            <h1 className="text-center text-black text-xl mb-4 font-bold">
              Update Order Status
            </h1>
          </div>
          <div>
            <select
              id="orderStatus"
              className=" bg-gray-600  mb-4 px-2 py-2 w-full lg:w-[20em]  text-white placeholder:text-white cursor-pointer outline-none"
              value={selectedStatus}
              onChange={handleStatusChange}
            >
              <option className="text-white bg-black" value="" disabled>
                Select an option
              </option>
              {orderStatusOptions.map((status, index) => (
                <option key={index} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </div>

          <div className=" flex justify-center mb-3">
            <button
              onClick={updateOrderStatus}
              className="focus:outline-none flex items-center justify-between text-white  text-center text-xl px-4 py-4 w-full font-bold bg-chestnut  hover:bg-everglade ease-in duration-300  secondary-font  "
            >
              Update Status
              <FaAngleDoubleRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateOrderStatus;
