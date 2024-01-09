import React from 'react';

const TextArea = ({ label, value, onChange, placeholder, rows = 4 }) => {
  return (
    <div className="mb-4">
      {label && (
        <label className="text-md font-semibold text-start mb-2" htmlFor={label}>
          {label}
        </label>
      )}
      <textarea
        className="resize-none border w-full px-3 py-2 text-gray-400  border-gray-300 focus:outline-none focus:bg-border-primary focus:border-primary rounded-lg"
        id={label}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
      />
    </div>
  );
};

export default TextArea;
