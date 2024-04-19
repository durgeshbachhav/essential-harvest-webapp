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
      const res = account.createOAuth2Session(
        "google",
        "http://localhost:5173",
        "http://localhost:5173/fail"
      );
      console.log(res);
      const user = await account.get();

      localStorage.setItem("user", JSON.stringify(user));

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
        <FaGoogle />
        Google
      </button>
      <button className="flex items-center gap-2 bg-blue-800 text-white px-4 py-2 rounded-lg">
        <FaFacebook />
        Facebook
      </button>
    </div>
  );
};

export default SocialLogin;
