import React from "react";

interface Props {
  type?: string;
  name?: string;
  value?: string;
  placeholder?: string;
}

const Input = ({ type, value, name, placeholder }: Props) => {
  let inputClass =
    "w-full bg-terciary outline-none focus:border-solid focus:ring-0 duration-300 border rounded-lg px-6 py-2";
  return (
    <div>
      <input
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        className="w-full noto bg-blanco opacity-50 px-3 py-1"
      />
    </div>
  );
};

export default Input;
