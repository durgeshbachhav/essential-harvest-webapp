import React, { useCallback, useContext, useEffect, useState } from "react";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { account } from "../../appwrite/appwriteConfig";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import myContext from "../../context/data/myContext";

const SocialLogin = () => {
  const context = useContext(myContext);

  const redirectUrl = import.meta.env.VITE_APP_OAUTH_REDIRECT_URL;
  const callbackUrl = import.meta.env.VITE_APP_OAUTH_CALLBACK_URL;

  const handleLoginWithGoogle = async () => {
    // Create OAuth2 session with Google
    account.createOAuth2Session(
      "google",
      "https://essential-harvest-webapp.vercel.app/#/cart",
      "https://essential-harvest-webapp.vercel.app/#/login"
    );
    const session = await account.getSession("current");
    console.log("session", session);
    const providerUid = session.providerAccessToken;
    const userId = session.userId;
    const profileInfo = await fetchUserProfile(providerUid);
    console.log("profileInfo", profileInfo);
    const userInfo = {
      userId,
      profileInfo,
    };
    localStorage.setItem("user", JSON.stringify(userInfo));
    console.log("Session:", session);
    console.log("User Profile:", profileInfo);
  };

  // Function to fetch user profile information using provider UID
  const fetchUserProfile = async (providerUid) => {
    const profileEndpoint = `${
      import.meta.env.VITE_APP_GOOGLE_PROFILE_URL
    }${providerUid}`;

    try {
      const response = await fetch(profileEndpoint);
      if (!response.ok) {
        throw new Error("Failed to fetch user profile information");
      }
      console.log("response", response);
      const profileData = await response.json();
      console.log("profileData", profileData);
      return profileData;
    } catch (error) {
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
