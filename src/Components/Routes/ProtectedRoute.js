import { Navigate, Outlet } from "react-router-dom";
// import { Login } from "../Auth/Login";

const isLoggedIn = function () {
  const token = localStorage.getItem("token");
  if (token) {
    return true;
  }
  return false;
};
const ProtectedRoute = () => {
  return isLoggedIn() ? <Outlet /> : <Navigate to="/login" />;
};
export default ProtectedRoute;
