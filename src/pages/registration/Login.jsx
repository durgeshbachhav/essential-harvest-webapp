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
      // First, check if there's an existing session
      let session;
      try {
        session = await account.getSession('current');
      } catch (sessionError) {
        // If there's no session, this will throw an error, which is expected
        console.log("No active session found");
      }

      if (session) {
        // If there's an existing session, use it
        console.log("Already logged in", session);
        localStorage.setItem("user", JSON.stringify(session));
        toast.success(" logged in");
        navigate("/allproducts");
      } else {
        // If no session exists, create a new one
        const result = await account.createEmailSession(user.email, user.password);
        localStorage.setItem("user", JSON.stringify(result));
        console.log("Login successful", result);
        toast.success("Login Successful");
        navigate("/allproducts");
      }
    } catch (error) {
      console.error("Error:", error);
      if (error.type === 'user_invalid_credentials') {
        toast.error("Invalid credentials. Please check your email and password.");
      } else if (error.code === 401) {
        toast.error("Authentication failed. Please try again.");
      } else {
        toast.error("An unexpected error occurred. Please try again.");
      }
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
