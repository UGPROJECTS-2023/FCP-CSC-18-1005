import PropTypes from "prop-types";

const InputField = ({ placeholder, type, label, value, name, onChange, disabled, leftIcon, rightIcon, iconColor }) => {
  return (
    <div className="flex flex-col space-y-2 w-full">
      <label className="text-md font-semibold text-start">{label}</label>
      <div className="input-container w-full flex flex-row justify-between p-3 border border-gray-400 rounded-xl">
        <div className="w-full flex flex-row items-center space-x-3">
          {leftIcon && <span className={`input-icon text-${iconColor} left-icon`}>{leftIcon}</span>}
          <input
            type={type}
            placeholder={placeholder}
            value={value}
            name={name}
            onChange={onChange}
            className={`w-full bg-transparent border-none outline-none rounded-lg focus:outline-none focus:bg-border-primary focus:border-primary ${
              disabled ? 'bg-transparent cursor-not-allowed' : ''
            }`}
            disabled={disabled}
          />
          {rightIcon && <span className={`input-icon text-${iconColor} right-icon`}>{rightIcon}</span>}
        </div>
      </div>
    </div>
  );
};

InputField.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // Allow both string and number
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  iconColor: PropTypes.string,
  leftIcon: PropTypes.node, // Left icon component or element
  rightIcon: PropTypes.node, // Right icon component or element
};

InputField.defaultProps = {
  placeholder: "",
  value: "",
  type: "text",
  name: "",
  label: "",
  iconColor: "gray", // Set a default value for the icon color
  onChange: () => {},
  disabled: false, // Set a default value for the disabled prop
  leftIcon: null,
  rightIcon: null,
};

export default InputField;
