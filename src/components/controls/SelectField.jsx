
import PropTypes from 'prop-types';

const SelectField = ({ label, value, onChange, children }) => {
  // const handleSelectChange = (e) => {
  //   onChange(e.target.value);
  // };

  
  return (
    <div className="flex flex-col space-y-2">
      <label className="text-md text-start">{label}</label>
      <select
        value={value}

        onChange={onChange} // Add the onChange handler
        className="w-full px-2 py-3 bg-white border border-gray-300 focus:outline-none focus:bg-border-primary focus:border-primary rounded-lg"
      >
        {children}
      </select>
    </div>
  );
};

SelectField.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired, // Make onChange function required
  children: PropTypes.node.isRequired,
};

export default SelectField;
