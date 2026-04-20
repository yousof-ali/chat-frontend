import React from "react";
import clsx from "clsx";
import Loader from "../../components/LoaderSpin";


const Button = ({
  children,
  variant = "default",
  size = "md",
  onClick,
  disabled = false,
  loading = false,
  className,
}) => {
  const baseStyles =
    "inline-flex items-center justify-center cursor-pointer rounded-md font-medium transition-colors focus:outline-none";

  const variants = {
    default: "bg-gray-200 text-black hover:bg-gray-300",
    secondary: "bg-black text-white hover:bg-gray-800",
    outline:
      "bg-white text-black border border-black hover:bg-gray-100",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const isDisabled = disabled || loading;

  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      className={clsx(
        className,
        baseStyles,
        variants[variant],
        sizes[size],
        isDisabled && "opacity-50 cursor-not-allowed"
      )}
    >
      {loading ? <Loader/> : children}
    </button>
  );
};

export default Button;
