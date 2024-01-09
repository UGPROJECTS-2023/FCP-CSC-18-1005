
import PropTypes from "prop-types";

const Input = ({ placeholder, type, label, value, name, onChange, disabled }) => {
  return (
    <div className="flex flex-col space-y-2">
      <label className="text-md font-semibold text-start">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onChange}
        className={`w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:bg-border-primary focus:border-primary ${
          disabled ? 'bg-gray-200 cursor-not-allowed' : ''
        }`}
        disabled={disabled}
      />
    </div>
  );
};

Input.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // Allow both string and number
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
};

Input.defaultProps = {
  placeholder: "",
  value: "",
 type: "text",
  name: "",
  label: "",
  onChange: () => {},
  disabled: false, // Set a default value for the disabled prop
};

export default Input;
