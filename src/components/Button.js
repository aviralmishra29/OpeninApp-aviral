import React from 'react';

const Button = ({ children, type = 'button', className = '', ...rest }) => {
  return (
    <button type={type} className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${className}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
