import React, { useCallback, useContext, useEffect, useState } from "react";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { account } from "../../appwrite/appwriteConfig";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import myContext from "../../context/data/myContext";

const SocialLogin = () => {
  const navigate = useNavigate();
  const context = useContext(myContext);
  const { loading, setLoading } = context;
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleLoginWithGoogle = async () => {
    try {
      account.createOAuth2Session(
        "google",
        "https://essential-harvest-webapp.vercel.app/#/cart",
        "https://essential-harvest-webapp.vercel.app/#/nopage"
      );

      // "http://localhost:5173/#/cart", "http://localhost:5173/#/nopage";

      const user = await account.get();
      console.log("user", user);
      const userinfo = localStorage.setItem("user", JSON.stringify(user));
      console.log("google user", userinfo);
      setLoggedInUser(user);
      console.log("user", loggedInUser);
    } catch (error) {
      console.error("Error logging in with Google:", error);
    }
  };

  return (
    <div className="flex flex-col gap-3">
      <button
        onClick={handleLoginWithGoogle}
        className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg"
      >
        <FaGoogle color="red" />
        Google
      </button>
      
    </div>
  );
};

export default SocialLogin;
