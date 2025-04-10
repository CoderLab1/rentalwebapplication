import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(UserContext); // ✅ UserContext se user le rahe hain

  return user ? children : <Navigate to="/login" />; // ✅ Agar user hai toh page dikhao, warna login pe bhej do
};

export default ProtectedRoute;
