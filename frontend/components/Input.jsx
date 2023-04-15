import React from "react";

function Input({ onChange, type, name, placeholder }) {
  return (
    <input
      onChange={onChange}
      className="px-2 w-full outline-none font-medium text-[15px]"
      type={type}
      name={name}
      placeholder={placeholder}
      required
    />
  );
}

export default Input;
