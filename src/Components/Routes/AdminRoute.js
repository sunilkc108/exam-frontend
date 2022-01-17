import { Outlet, Navigate } from "react-router-dom";
// import { Login } from "../Auth/Login";

const isAdmin = function () {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user && user.role === "admin") {
    return user;
  }
  return false;
};
const loggedInUser = JSON.parse(localStorage.getItem("user"));
console.log("logged", loggedInUser);
const AdminRoute = () => {
  return isAdmin() ? <Outlet /> : <Navigate to="/login" />;
};
export default AdminRoute;
