import { useContext, useState } from "react";
import myContext from "../../context/data/myContext";
import { toast } from "sonner";
import Loader from "../../components/loader/Loader";
import { account } from "../../appwrite/appwriteConfig";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/home/logo.svg";
import "./Register.scss";
import SocialLogin from "./SocialLogin";
import { IoMdLogIn } from "react-icons/io";

function Login() {
  const context = useContext(myContext);
  const { loading, setLoading } = context;
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  // In your Login.jsx
  const login = async () => {
    try {
      setLoading(true);
      // This creates a session for a manually created user
      const session = await account.createEmailSession(user.email, user.password);
      
      // This fetches the user details
      const userDetails = await account.get();
      
      // Combine session and user details
      const userInfo = { ...session, ...userDetails };
      localStorage.setItem("user", JSON.stringify(userInfo));
      
      toast.success("Login Successful");
      navigate("/allproducts");
    } catch (error) {
      // Your error handling...
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className=" flex justify-center items-center h-screen flex-col bg-gray-50">
      <div className="px-10 py-10 border bg-white rounded-lg">
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
            className=" bg-gray-600 rounded-lg mb-4 px-2 py-2 w-full   text-white placeholder:text-white outline-none"
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
            className=" bg-gray-600 rounded-lg mb-4 px-2 py-2 w-full   text-white placeholder:text-white outline-none"
            placeholder="Password"
          />
        </div>
        <div>
          <h2 className="text-blue-500 font-medium text-xm mb-2">
            Don't have an account?{" "}
            <Link
              className="text-blue-500 hover:underline font-bold"
              to={"/signup"}
            >
              Sign up
            </Link>
          </h2>
        </div>

        <div className="w-full flex justify-center mb-3">
          <button
            onClick={login}
            className="w-full flex items-center justify-center gap-4 bg-blue-600  text-white font-bold px-4 py-2 rounded-lg "
          >
            <IoMdLogIn size={20} />
            Login
          </button>
        </div>

        <SocialLogin />
      </div>
    </div>
  );
}

export default Login;
