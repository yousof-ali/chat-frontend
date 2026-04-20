import React from "react";
import clsx from "clsx";

const Input = ({
  label,
  type = "text",
  placeholder = "",
  required = false,
  name,
  value,
  onChange,
  className,
}) => {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label htmlFor={name} className="text-sm font-medium">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}

      <input
        id={name}
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
        // className={clsx(
        //   "border-b border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-b-1 focus:ring-black",
        //   className
        // )}
        className={clsx(
          "border-b border-gray-300 px-3 py-2 outline-none focus:border-black",
          className,
        )}
      />
    </div>
  );
};

export default Input;
