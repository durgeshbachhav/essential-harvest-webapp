import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import myContext from "../../context/data/myContext";
import { toast } from "sonner";
import Loader from "../../components/loader/Loader";

import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/home/logo.svg";
import "./Register.scss";
import { account } from "../../appwrite/appwriteConfig";

function Signup() {
  const navigate = useNavigate();
  const context = useContext(myContext);
  const { loading, setLoading } = context;

  const [user, setUser] = useState({
    name: "",
    email: "",
    phoneNum: "",
    password: "",
  });

  const signup = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (
      user.name === "" ||
      user.phoneNum === "" ||
      user.email === "" ||
      user.password === ""
    ) {
      return toast.error("All fields are required");
    }
    const accountPromise = account.create(
      uuid(),
      user.email,
      user.password,
      user.name,
      user.phoneNum
    );
    accountPromise.then(
      function (response) {
        //navigate user to the login page
        console.log(response);
        navigate("/login");
        toast.success("Signup Succesfully");
        setLoading(false);
      },

      //handle error
      function (error) {
        console.log(error);
        toast.error("Signup Failed");
        setLoading(false);
      }
    );
  };

  return (
    <div className=" flex justify-center items-center h-screen flex-col bg-primary-50">
      {loading && <Loader />}
      <img src={logo} alt="" className="w-24 mb-5  rounded-full p-2" />
      <div className="px-10 py-10 bg-gradient-to-tr from-gray-300 to-gray-400 border-opacity-20 rounded-lg">
        <div className="">
          <h1 className="text-center text-gray-900 text-xl mb-4 font-bold ">
            Signup
          </h1>
        </div>
        <div>
          <input
            type="text"
            value={user.name}
            // onChange={(e) => setName(e.target.value)}
            onChange={(e) => {
              setUser({
                ...user,
                name: e.target.value,
              });
            }}
            name="name"
            className=" bg-gray-600 rounded-lg mb-4 px-2 py-2 w-full lg:w-[20em]  text-white placeholder:text-white outline-none"
            placeholder="Name"
          />
        </div>

        <div>
          <input
            type="email"
            value={user.email}
            // onChange={(e) => setEmail(e.target.value)}
            onChange={(e) => {
              setUser({
                ...user,
                email: e.target.value,
              });
            }}
            name="email"
            className=" bg-gray-600 rounded-lg mb-4 px-2 py-2 w-full lg:w-[20em]  text-white placeholder:text-white outline-none"
            placeholder="Email"
          />
        </div>
        <div>
          <input
            type="number"
            value={user.phoneNum}
            // onChange={(e) => setEmail(e.target.value)}
            onChange={(e) => {
              setUser({
                ...user,
                phoneNum: e.target.value,
              });
            }}
            name="phoneNum"
            className=" bg-gray-600 rounded-lg mb-4 px-2 py-2 w-full lg:w-[20em]  text-white placeholder:text-white outline-none"
            placeholder="Phone Number"
          />
        </div>
        <div>
          <input
            type="password"
            value={user.password}
            // onChange={(e) => setPassword(e.target.value)}
            onChange={(e) => {
              setUser({
                ...user,
                password: e.target.value,
              });
            }}
            className=" bg-gray-600 rounded-lg mb-4 px-2 py-2 w-full lg:w-[20em]  text-white placeholder:text-white outline-none"
            placeholder="Password"
          />
        </div>
        <div className=" flex justify-center mb-3">
          <button
            onClick={signup}
            className="focus:outline-none text-white   text-xm font-bold px-4 py-2  bg-blue-400 rounded-lg hover:scale-105 ease-in duration-300 hover:bg-blue-800 secondary-font w-full"
          >
            Signup
          </button>
        </div>
        <div>
          <h2 className="text-blue-500">
            Have an account?{" "}
            <Link
              className=" text-white hover:underline hover:text-blue-500 font-bold"
              to={"/login"}
            >
              Login
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Signup;
