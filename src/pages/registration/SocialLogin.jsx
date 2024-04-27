import React, { useCallback, useContext, useEffect, useState } from "react";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { account } from "../../appwrite/appwriteConfig";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import myContext from "../../context/data/myContext";

const SocialLogin = () => {
  const context = useContext(myContext);
  const { setLoggedIn } = context;
  const redirectUrl = `${import.meta.env.VITE_APP_OAUTH_REDIRECT_URL}#/cart`;
  const callbackUrl = `${import.meta.env.VITE_APP_OAUTH_REDIRECT_URL}#/login`;

  const handleLoginWithGoogle = (e) => {
    e.preventDefault();
    try {
      account.createOAuth2Session("google", redirectUrl, callbackUrl);
      setLoggedIn(true);
      // "http://localhost:5173/#/cart", //navigate to success
      // "http://localhost:5173/#/login" //navigate to failed
      // "https://essential-harvest-webapp.vercel.app/#/cart",
      // "https://essential-harvest-webapp.vercel.app/#/login"
    } catch (error) {
      console.log("error while login with google: ", error);
      throw new Error("Error fetching user profile:", error);
    }
  };

  return (
    <div className="flex flex-col gap-3">
      <button
        onClick={handleLoginWithGoogle}
        className="flex items-center justify-center gap-4 bg-blue-600  text-white font-bold px-4 py-2 rounded-lg"
      >
        <FaGoogle size={20} />
        Google
      </button>
    </div>
  );
};

export default SocialLogin;
