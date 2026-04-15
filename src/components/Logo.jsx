import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to={"/"} className="flex items-center gap-2">
      <img className="w-10 " src="/logo.png" alt="logo" />
      <span className="text-xl  font-semibold">toMe</span>
    </Link>
  );
};

export default Logo;
