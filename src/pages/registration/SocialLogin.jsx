import React, { useCallback, useContext, useEffect, useState } from "react";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { account } from "../../appwrite/appwriteConfig";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import myContext from "../../context/data/myContext";

const SocialLogin = () => {
  const context = useContext(myContext);
  const { loggedIn, setLoggedIn } = context;
  const redirectUrl = `${import.meta.env.VITE_APP_OAUTH_REDIRECT_URL}#/verify`;
  const callbackUrl = `${import.meta.env.VITE_APP_OAUTH_FAILED_URL}#/login`;
  // const navigate = useNavigate();
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

  // useEffect(() => {
  //   const fetchUserData = async () => {
  //     if (loggedIn) {
  //       try {
  //         const session = await account.getSession("current");
  //         // const session = await account.get();
  //         localStorage.setItem("user", JSON.stringify(session));
  //         console.log("session", session);
  //         const providerUid = session.providerAccessToken;
  //         const userId = session.userId;
  //         const profileInfo = await fetchUserProfile(providerUid);
  //         console.log("profileInfo", profileInfo);
  //         const userInfo = {
  //           userId,
  //           profileInfo,
  //         };
  //         localStorage.setItem("user", JSON.stringify(userInfo));
  //         console.log("data after oauth", userInfo);
  //         // You might want to navigate here, or handle the navigation externally
  //       } catch (error) {
  //         console.log("Error fetching user data:", error);
  //         // Handle error appropriately
  //       }
  //     }
  //   };

  //   fetchUserData();
  // }, [loggedIn]);

  // const fetchUserProfile = async (providerUid) => {
  //   return (async () => {
  //     const profileEndpoint = `${
  //       import.meta.env.VITE_APP_GOOGLE_PROFILE_URL
  //     }${providerUid}`;

  //     try {
  //       const response = await fetch(profileEndpoint);
  //       if (!response.ok) {
  //         throw new Error("Failed to fetch user profile information");
  //       }
  //       console.log("response", response);
  //       const profileData = await response.json();
  //       console.log("profileData", profileData);
  //       return profileData;
  //     } catch (error) {
  //       console.error("Error fetching user profile:", error);
  //       throw new Error("Error fetching user profile:", error);
  //     }
  //   })();
  // };

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
