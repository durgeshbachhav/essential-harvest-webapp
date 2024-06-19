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
import SocialLogin from "./SocialLogin";
import { IoMdLogIn } from "react-icons/io";

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

    if (
      user.name === "" ||
      user.phoneNum === "" ||
      user.email === "" ||
      user.password === ""
    ) {
      return toast.error("All fields are required");
    }
    const result = account.create(
      uuid(),
      user.email,
      user.password,
      user.name,
      user.phoneNum
    );

    result.then(
      function (response) {
        localStorage.setItem("user", JSON.stringify(response));
        console.log("user", response);
        navigate("/login");
        toast.success("Signup Succesfully");
      },
      function (error) {
        console.log(error); // Failure
        toast.error("response ffaied");
      }
    );
  };

  return (
    <div className=" flex justify-center items-center h-screen flex-col bg-gray-50">
      <div className="px-10 py-10 border bg-white rounded-lg">
        <div className=" flex items-center justify-center">
          <img src={logo} alt="" className="w-24  rounded-full " />
        </div>
        <div>
          <input
            type="text"
            value={user.name}
            onChange={(e) => {
              setUser({
                ...user,
                name: e.target.value,
              });
            }}
            name="name"
            className=" bg-gray-600 rounded-lg mb-4 px-2 py-2 w-full   text-white placeholder:text-white outline-none"
            placeholder="Name"
          />
        </div>

        <div>
          <input
            type="email"
            value={user.email}
            onChange={(e) => {
              setUser({
                ...user,
                email: e.target.value,
              });
            }}
            name="email"
            className=" bg-gray-600 rounded-lg mb-4 px-2 py-2 w-full   text-white placeholder:text-white outline-none"
            placeholder="Email"
          />
        </div>
        <div>
          <input
            type="number"
            value={user.phoneNum}
            onChange={(e) => {
              setUser({
                ...user,
                phoneNum: e.target.value,
              });
            }}
            name="phoneNum"
            className=" bg-gray-600 rounded-lg mb-4 px-2 py-2 w-full   text-white placeholder:text-white outline-none"
            placeholder="Phone Number"
          />
        </div>
        <div>
          <input
            type="password"
            value={user.password}
            onChange={(e) => {
              setUser({
                ...user,
                password: e.target.value,
              });
            }}
            className=" bg-gray-600 rounded-lg mb-4 px-2 py-2 w-full   text-white placeholder:text-white outline-none"
            placeholder="Password"
          />
        </div>
        <div>
          <h2 className="text-blue-500 font-medium text-xm mb-2">
            Have an account?{" "}
            <Link
              className=" text-blue-500 hover:underline font-bold"
              to={"/login"}
            >
              Login
            </Link>
          </h2>
        </div>
        <div className=" flex justify-center mb-3">
          <button
            onClick={signup}
            className="w-full flex items-center justify-center gap-4 bg-blue-600  text-white font-bold px-4 py-2 rounded-lg "
          >
            <IoMdLogIn size={20} />
            Signup
          </button>
        </div>
        <SocialLogin />
      </div>
    </div>
  );
}

export default Signup;
