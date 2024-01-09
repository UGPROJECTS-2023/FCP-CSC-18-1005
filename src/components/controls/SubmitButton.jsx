// import React from "react";
import PropTypes from "prop-types";

const SubmitButton = ({ children, onClick, bgColor, textColor, disabled }) => {
  return (
    <>
      <button
        className={`w-full rounded-lg py-3 px-6 text-center cursor-pointer ${bgColor} ${textColor}`}
        onClick={onClick}
        disabled={disabled} // Apply the disabled prop to the button element
      >
        {children}
      </button>
    </>
  );
};

SubmitButton.propTypes = {
  children: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  bgColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired, // Add the disabled prop type
};

SubmitButton.defaultProps = {
  children: "",
  bgColor: "bg-primary",
  textColor: "text-white",
  disabled: false, 
  onClick: () => {},
};

export default SubmitButton;
