import React, { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Camera, Mail, User } from "lucide-react";
import Input from "../components/ui/Input";

const Profile = () => {
  const { authUser, isUpdateingProfile, updateProfilePic } = useAuthStore();
  const [selected, setSelected] = useState(null);
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = async () => {
      try {
        const base64Image = reader.result;
        setSelected(base64Image);
        await updateProfilePic({ profilePic: base64Image });
      } catch (err) {
        console.error(err);
      }
    };
  };
  const handleSubmit = () => {};
  return (
    <div className="h-full flex flex-col px-4 justify-center items-center">
      <div className="max-w-md border flex flex-col space-y-8 rounded p-4 md:p-6 border-gray-200 w-full">
        <div className="text-center">
          <h1 className="text-xl font-semibold">Profile</h1>
          <p className="mt-1">Your Profile Information</p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <div className="relative">
            <img
              src={selected || authUser?.profilePic || "/avatar.png"}
              alt={authUser?.fullName}
              className="size-24 rounded-full object-cover border"
            />
            <label
              htmlFor="avater-upload"
              className={`absolute bg-gray-200 bottom-0 right-0 hover:scale-105 duration-200 p-2 rounded-full cursor-pointer transition-all ${isUpdateingProfile ? "animate-pulse pointer-events-none" : ""}`}
            >
              <Camera />
              {/* <Input
                type="file"
                id="avater-upload"
                className={"hidden"}
                accept="image/*"
                disabled={isUpdateingProfile}
                onChange={handleImageUpload}
              /> */}
              <input
                type="file"
                id="avater-upload"
                className={"hidden"}
                accept="image/*"
                disabled={isUpdateingProfile}
                onChange={handleImageUpload}
              />
            </label>
          </div>
          <p className="text-center text-sm text-gray-500">
            {isUpdateingProfile
              ? "Uploading..."
              : "Click the camera icon to update your photo"}
          </p>
        </div>
        <div className="space-y-4">
          <div>
            <div className="text-xs text-gray-500 flex items-center gap-1">
              <User size={18} />
              <span>Full Name</span>
            </div>
            <Input
              className={"border focus:border-gray-300 mt-2 rounded-md"}
              readOnly={true}
              value={authUser?.fullName}
            />
          </div>
          <div>
            <div className="text-xs text-gray-500 flex items-center gap-1">
              <Mail size={18} />
              <span>Email</span>
            </div>
            <Input
              className={"border focus:border-gray-300 mt-2 rounded-md"}
              readOnly={true}
              value={authUser?.email}
            />
          </div>
        </div>
        <div>
          <h2 className="text-md mb-4 font-semibold">Accout Information</h2>
          <div className="flex justify-between border-b border-gray-300 pb-2 items-center">
            <p className="text-sm text-gray-500">Member Since</p>
            <p className="text-sm text-gray-500">
              {new Date(authUser?.createdAt).toLocaleDateString()}
            </p>
          </div>
          <div className="flex justify-between mt-2 items-center">
            <p className="text-sm text-gray-500">Status</p>
            <p className="text-sm text-green-500">Active</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
