import React, { useEffect } from "react";
import { useAuthStore } from "../store/useAuthStore";
import Logo from "./Logo";
import { Settings } from "lucide-react";

const Navbar = () => {
  const { authUser, checkCurrentUser } = useAuthStore();
  console.log(authUser)

  useEffect(() => {
    checkCurrentUser();
  }, []);

  return (
    <div className="max-w-7xl border-b border-gray-300 w-full flex justify-between mx-auto px-3 py-2">
      {/* logo  */}
      <Logo/>
      {/* settings  */}
      <div className="flex gap-2 cursor-pointer items-center">
        <Settings className=" animate-spin" />
        <span className="">Settings</span>
      </div>
    </div>
  );
};

export default Navbar;
