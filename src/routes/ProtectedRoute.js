import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  let authentication ={
    token : localStorage.getItem("token")
  }
  return authentication.token ? <Outlet /> : <Navigate to="/login" />
}

export default ProtectedRoute;