// import React from "react";
import PropTypes from "prop-types";
const Button = ({ onClick, bgColor, textColor, disabled, children }) => {
  return (
    <>
  
      <button
        className={`w-full flex justify-center items-center  rounded-lg p-3 cursor-pointer ${bgColor} ${textColor}`}
        onClick={onClick}
        disabled={disabled} 
      >
       {children}
        
        
      </button>
    </>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  disabled: PropTypes.bool,
  icon: PropTypes.elementType,
};

Button.defaultProps = {
  bgColor: "bg-primary",
  textColor: "text-white",
  disabled: false,
};

export default Button;
