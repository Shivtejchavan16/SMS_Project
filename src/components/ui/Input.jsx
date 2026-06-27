import React from "react";

const Input = ({
  type = "text",
  placeholder,
  value,
  onChange,
  name,
  disabled = false,
}) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
  );
};

export default Input;