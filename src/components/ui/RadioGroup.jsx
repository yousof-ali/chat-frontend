import React from "react";
import clsx from "clsx";

const RadioGroup = ({
  label,
  options = [],
  value,
  onChange,
  name,
  direction = "horizontal", // "vertical"
  className,
}) => {
  return (
    <div className={clsx("flex flex-col gap-2", className)}>
      {label && <p className="text-sm font-medium">{label}</p>}

      <div
        className={clsx(
          "flex gap-4",
          direction === "vertical" && "flex-col"
        )}
      >
        {options.map((option) => (
          <label
            key={option.value}
            className={clsx(
              "flex items-center gap-2 cursor-pointer",
              option.disabled && "opacity-50 cursor-not-allowed"
            )}
          >
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={() => onChange(option.value)}
              disabled={option.disabled}
              className="accent-black"
            />

            <span>{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default RadioGroup;
