import React from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Navigate } from "react-router-dom";
import LoaderSpin from "../components/LoaderSpin";

const ProtectedRoute = ({ children }) => {
  const { authUser, isLoading } = useAuthStore();

  if (isLoading) return <LoaderSpin />;
  return authUser ? children : <Navigate to={"/login"} />;
};

export default ProtectedRoute;
