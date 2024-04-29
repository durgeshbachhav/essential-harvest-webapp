import React, { useContext, useEffect } from "react";
import { account } from "../../appwrite/appwriteConfig";
import { Link, useNavigate } from "react-router-dom";
import myContext from "../../context/data/myContext";
import Layout from "../../components/layout/Layout";
import "./loading.css";
import { toast } from "sonner";

const Verify = () => {
  //   const redirectUrl = `${import.meta.env.VITE_APP_OAUTH_REDIRECT_URL}#/cart`;
  //   const callbackUrl = `${import.meta.env.VITE_APP_OAUTH_FAILED_URL}#/login`;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const session = await account.getSession("current");
        // const session = await account.get();
        localStorage.setItem("user", JSON.stringify(session));
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
        navigate("/cart");
        toast.success("Login Successfully");

        console.log("data after oauth", userInfo);
        // You might want to navigate here, or handle the navigation externally
      } catch (error) {
        console.log("Error fetching user data:", error);
        toast.error("failed to login....!");
        // Handle error appropriately
      }
    };

    fetchUserData();
  }, []);

  const fetchUserProfile = async (providerUid) => {
    return (async () => {
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
        console.error("Error fetching user profile:", error);
        throw new Error("Error fetching user profile:", error);
      }
    })();
  };

  return (
    <Layout>
      <div className="w-full h-80 flex items-center justify-center">
        <div className="three-body">
          <div className="three-body__dot"></div>
          <div className="three-body__dot"></div>
          <div className="three-body__dot"></div>
        </div>
      </div>
    </Layout>
  );
};

export default Verify;
