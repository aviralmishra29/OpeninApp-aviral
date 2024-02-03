import React from "react";

const Button = ({
  children,
  disabled,
  type = "button",
  className = "",
  ...rest
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`bg-[#605BFF] text-pure-greys-100 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${className} ${
        disabled ? "opacity-50" : ""
      }`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
