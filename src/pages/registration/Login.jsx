import { useContext, useState } from "react";
import myContext from "../../context/data/myContext";
import { toast } from "sonner";
import Loader from "../../components/loader/Loader";
import { account } from "../../appwrite/appwriteConfig";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/home/logo.svg";
import "./Register.scss";

function Login() {
  const context = useContext(myContext);
  const { loading, setLoading } = context;

  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const login = async () => {
    setLoading(true);
    try {
      const result = await account.createEmailSession(
        user.email,
        user.password
      );
      toast.success("Login successful");
      console.log(result);
      localStorage.setItem("user", JSON.stringify(result));
      navigate("/");
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(loading);
    }
  };

  return (
    <div className=" flex justify-center items-center h-screen flex-col bg-gray-50">
      {loading && <Loader />}

      <div className="px-10 py-10 bg-gray-200 border rounded-lg">
        <div className=" flex items-center justify-center">
          <img src={logo} alt="" className="w-24   rounded-full " />
        </div>
        <div>
          <input
            type="email"
            value={user.email}
            // onChange={(e)=> setEmail(e.target.value)}
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
            type="password"
            value={user.password}
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
            onClick={login}
            className=" focus:outline-none text-white  font-medium text-xm font-bold px-4 py-2  bg-blue-400 rounded-lg hover:scale-105 ease-in duration-300 hover:bg-blue-800 secondary-font w-full"
          >
            Login
          </button>
        </div>
        <div>
          <h2 className="text-blue-500">
            Don't have an account?{" "}
            <Link
              className=" text-blue-500 hover:underline hover:text-blue-500 font-bold"
              to={"/signup"}
            >
              Signup
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Login;
