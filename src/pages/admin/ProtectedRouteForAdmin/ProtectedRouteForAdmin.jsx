// import { Navigate } from "react-router-dom";

// const ProtectedRouteForAdmin = ({ children }) => {
//   const admin = JSON.parse(localStorage.getItem("user"));

//   console.log("admin", admin);

//   if (
//     admin &&
//     (admin.providerUid || admin.email || admin.profileInfo?.email) ===
//     import.meta.env.VITE_APP_ADMIN_EMAIL
//   ) {
//     return children;
//   } else {
//     return <Navigate to={"/login"} />;
//   }
// };

// export default ProtectedRouteForAdmin;

import { Navigate } from "react-router-dom";

const ProtectedRouteForAdmin = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const adminEmail = import.meta.env.VITE_APP_ADMIN_EMAIL;

  if (user && (user.providerUid === adminEmail || user.email === adminEmail || user.profileInfo?.email === adminEmail)) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};

export default ProtectedRouteForAdmin;