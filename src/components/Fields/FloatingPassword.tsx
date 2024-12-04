import React, { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";

interface FloatingPasswordInputProps {
  label: string;
  placeholder?: string;
  required?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FloatingPasswordInput: React.FC<FloatingPasswordInputProps> = ({
  label,
  placeholder = "",
  required = false,
  value,
  onChange,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative w-full min-w-[200px] h-12">
      {/* Input Field */}
      <input
        type={showPassword ? "text" : "password"} // Toggles between text and password
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
        className="peer w-full h-full bg-transparent text-white font-sans font-normal outline-none focus:outline-none disabled:bg-blue-gray-50 disabled:border-0 disabled:cursor-not-allowed transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent placeholder:opacity-0 focus:placeholder:opacity-100 text-base px-4 py-4 rounded-[7px] border-blue-gray-200 focus:border-[#367AFF]" // Updated padding and font size
      />

      {/* Label */}
      <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate text-white peer-placeholder-shown:text-white peer-focus:text-white leading-tight peer-placeholder-shown:leading-[3.75] peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-white transition-all -top-1.5 peer-placeholder-shown:text-base text-sm peer-focus:text-sm before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] before:border-blue-gray-200 peer-focus:before:!border-[#367AFF] after:border-blue-gray-200 peer-focus:after:!border-[#367AFF]">
        {label}
        {required && (
          <span className="inline-block text-red-500 ml-0.5">*</span>
        )}
      </label>

      {/* Show/Hide Icon */}
      <div
        className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
        onClick={() => setShowPassword((prev) => !prev)}
      >
        {showPassword ? (
          <EyeIcon className="h-5 w-5 text-white" />
        ) : (
          <EyeSlashIcon className="h-5 w-5 text-white" />
        )}
      </div>
    </div>
  );
};

export default FloatingPasswordInput;
