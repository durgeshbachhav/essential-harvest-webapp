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
    setLoading(true);
    try {
      // Create OAuth2 session with Google
      await account.createOAuth2Session(
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
      setLoading(false);
    } catch (error) {
      console.error("Error logging in with Google:", error);
      setLoading(false);
      toast.error("Failed to log in with Google");
    }
  };

  // Function to fetch user profile information using provider UID
  const fetchUserProfile = async (providerUid) => {
    const profileEndpoint = `https://www.googleapis.com/oauth2/v3/userinfo?alt=json&access_token=${providerUid}`;

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
