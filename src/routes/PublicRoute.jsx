import React from "react";
import { useAuthStore } from "../store/useAuthStore";
import Loader from "../components/LoaderSpin";


const PublicRoute = ({ children }) => {
  const { authUser, isLoading } = useAuthStore();
  if (isLoading)
    return (
      <Loader/>
    );
  return authUser ? <Navigate to="/" /> : children;
};

export default PublicRoute;
