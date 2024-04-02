import { Navigate } from "react-router-dom";

const ProtectedRouteForAdmin = ({ children }) => {
  const admin = JSON.parse(localStorage.getItem("user"));

  console.log("admin", admin);

  if (admin && admin.providerUid === import.meta.env.VITE_APP_ADMIN_EMAIL) {
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
};

export default ProtectedRouteForAdmin;
