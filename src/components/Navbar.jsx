import React, { useEffect } from "react";
import { useAuthStore } from "../store/useAuthStore";
import Logo from "./Logo";
import { LogOut, Settings, User } from "lucide-react";
import Button from "./ui/Button";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { authUser, checkCurrentUser } = useAuthStore();

  useEffect(() => {
    checkCurrentUser();
  }, []);

  return (
    <div className="max-w-7xl border-b border-gray-300 w-full flex justify-between mx-auto px-3 py-2">
      {/* logo  */}
      <Logo />
      {/* settings  */}
      <div className="flex gap-3  items-center">
        {authUser && (
          <>
            <Link to={"/profile"}>
            <User
              size={28}
              className="cursor-pointer p-1 rounded-full duration-200 hover:bg-gray-200"
            />
            </Link>
            {/* <LogOut
              size={28}
              className="cursor-pointer p-1 rounded-full duration-200 hover:bg-gray-200"
            /> */}
          </>
        )}
        <Settings
          size={28}
          className="cursor-pointer p-1 rounded-full duration-200 hover:bg-gray-200"
        />
      </div>
    </div>
  );
};

export default Navbar;
