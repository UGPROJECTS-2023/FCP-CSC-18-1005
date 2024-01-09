import { useState } from "react";
import PropTypes from "prop-types";
import NumberFormat from "react-number-format";
const LOGO_SRC = "img/logo/";

const AmountField = ({ placeholder, label, value, name, onChange }) => {
  const [formattedValue, setFormattedValue] = useState(value);

  const handleChange = (values) => {
    const { floatValue, formattedValue: updatedFormattedValue } = values;
    setFormattedValue(updatedFormattedValue);
    onChange(floatValue);
  };

  return (
    <div className="relative">
      <label className="text-md font-semibold text-start">{label}</label>
      <NumberFormat
        value={formattedValue}
        placeholder={placeholder}
        displayType="input"
        thousandSeparator={true}
        // decimalScale={2}
        fixedDecimalScale={true}
        allowNegative={false}
        allowLeadingZeros={false}
        isNumericString={true}
        onValueChange={handleChange}
        name={name}
        className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:bg-border-primary focus:border-primary"
      />
      <img
        src={`${LOGO_SRC}enairalogo.png`} // Replace with the path to your image
        alt="Currency"
        className="absolute inset-y-0 right-0 h-10 w-10 pr-3  mt-6 pointer-events-none"
      />
    </div>
  );
};

AmountField.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.number,
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
};

AmountField.defaultProps = {
  placeholder: "",
  value: "", // Set the default value as a number
  name: "",
  label: "",
  onChange: () => {},
};


export default AmountField;
