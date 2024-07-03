import React, { useContext } from "react";
import { FaUserTie } from "react-icons/fa";
import myContext from "../../../context/data/myContext";
import Layout from "../../../components/layout/Layout";
import DashboardTab from "./DashboardTab";
import "../Admin.scss";

function Dashboard() {
  const context = useContext(myContext);
  const { mode, totalOrder, totalProduct } = context;
  console.log('totalorder : ', totalOrder)
  return (
    <Layout>
      <section className=" body-font pt-10 pb-10 ">
        <div className="container px-4  mb-10 md:px-11">
          <div className="flex flex-wrap gap-2 text-center">
            <div className=" md:w-1/4 sm:w-1/2 w-full">
              <div
                className=" border-2   bg-link-water     px-4 py-3 "
                style={{
                  backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
                  color: mode === "dark" ? "white" : "",
                }}
              >
                <div
                  className="text-primary-gold w-12 h-12 mb-3 inline-block"
                  viewBox="0 0 24 24"
                >
                  <FaUserTie color="black" size={50} />
                </div>
                <h2
                  className=" font-medium text-3xl text-heading-color "
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  {totalProduct}
                </h2>
                <p
                  className=" text-heading-color primary-font  "
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  Total Products
                </p>
              </div>
            </div>
            <div className=" md:w-1/4 sm:w-1/2 w-full">
              <div
                className=" border-2  bg-link-water     px-4 py-3  "
                style={{
                  backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
                  color: mode === "dark" ? "white" : "",
                }}
              >
                <div
                  className="text-primary-gold w-12 h-12 mb-3 inline-block"
                  viewBox="0 0 24 24"
                >
                  <FaUserTie color="black" size={50} />
                </div>
                <h2
                  className="font-medium text-3xl text-heading-color"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  {totalOrder}
                </h2>
                <p
                  className=" text-heading-color primary-font "
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  Total Orders
                </p>
              </div>
            </div>
          </div>
        </div>
        <DashboardTab />
      </section>
    </Layout>
  );
}

export default Dashboard;
