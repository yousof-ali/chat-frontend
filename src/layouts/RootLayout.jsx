import { Outlet } from "react-router";
import React from "react";

const RootLayout = () => {
  return (
    <div>
      <div>this is heading </div>
      <Outlet/>
      <div>this is footer</div>
    </div>
  );
};

export default RootLayout;
