import React from "react";
import { Loader } from "lucide-react";

const LoaderSpin = () => {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <Loader className="animate-spin" />
    </div>
  );
};

export default LoaderSpin;
