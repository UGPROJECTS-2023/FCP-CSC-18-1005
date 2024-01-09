// import React from 'react';
import PropTypes from "prop-types"
const CheckboxField = ({ onChange, checked, size }) => {
  // const handleChange = (event) => {
  //   if (onChange) {
  //     onChange(event.target.checked);
  //   }
  // };

  return (
    <div>
      <input
        type="checkbox"
        className={`w-${size} border focus:bg-border-primary focus:border-primary`}
        checked={checked}
        onChange={onChange}
      />
    </div>
  );
};
CheckboxField.propTypes = {
    onChange:PropTypes.func.isRequired,
    checked:PropTypes.bool.isRequired,
    size:PropTypes.string.isRequired,
}
export default CheckboxField;
