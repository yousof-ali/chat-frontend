import { Outlet } from "react-router";
import React from "react";
import Navbar from "../components/Navbar";

const RootLayout = () => {
  return (
    <div className="h-[100vh] flex flex-col">
      <Navbar />
      <div className="flex-1 ">
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
