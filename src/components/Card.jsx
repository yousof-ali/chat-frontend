import React from "react";
import Button from "./ui/Button";
import { User } from "lucide-react";
import toast from "react-hot-toast";
import { useState } from "react";
import { axiosInstance } from "../lib/axios";

const Card = ({ user,type }) => {
  const [loading, setLoading] = useState(false);

  const handleSentRequest = async (id) => {
    try {
      setLoading(true);
      const res = await axiosInstance.post(`/home/sent-request/${id}`);
      toast.success("Request send success");
    } catch (error) {
      console.log(error.message);
      toast.error("sent request faild");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white shadow-md rounded-2xl p-4 flex flex-col items-center space-y-1.5 text-center hover:shadow-lg transition">
      {user.profilePic ? (
        <img
          src={user.profilePic || "https://via.placeholder.com/100"}
          alt={user.fullName}
          className="w-20 h-20 rounded-full object-cover mb-3"
        />
      ) : (
        <div className="h-20 w-20 rounded-full object-cover mb-3">
          <User className="w-full h-full" />
        </div>
      )}

      <h3 className="text-lg font-semibold">{user.fullName}</h3>
      {
        type === "connect" &&<Button onClick={() => handleSentRequest(user._id)} className={"w-full"}>{loading?"Sending....": "Connect"}</Button>
      }
      {
        type==="accept" && <Button onClick={() => handleSentRequest(user._id)} className={"w-full"}>{loading?"Accepting....": "Accpet"}</Button>
      }
      {
        type==="cancel" && <Button onClick={() => handleSentRequest(user._id)} className={"w-full"}>{loading?"Canceling....": "Cancel"}</Button>
      }
      
    </div>
  );
};

export default Card;
