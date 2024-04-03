import React, { useContext, useState } from "react";
import myContext from "../../../context/data/myContext";

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
        <div className=" bg-gradient-to-tr from-primary-300 to-primary-400 border-opacity-20  px-10 py-10  rounded-lg ">
          <div className="">
            <h1 className="text-center text-white text-xl mb-4 font-bold">
              Update Order Status
            </h1>
          </div>
          <div>
            <select
              id="orderStatus"
              className=" bg-gray-600 rounded-lg mb-4 px-2 py-2 w-full lg:w-[20em]  text-white placeholder:text-white outline-none"
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

            {/* <input type="text"
                            value={order.status}
                            onChange={(e) => setOrder({ ...order, status: e.target.value })}
                            name='title'
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em]  text-white placeholder:text-gray-200 outline-none'
                            placeholder='Order Status'
                        /> */}
          </div>

          <div className=" flex justify-center mb-3">
            <button
              onClick={updateOrderStatus}
              className="focus:outline-none text-white  font-medium text-xl w-full px-4 py-2  bg-blue-500 rounded-lg hover:scale-105 ease-in duration-300 hover:bg-blue-800  "
            >
              Update Status
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateOrderStatus;
