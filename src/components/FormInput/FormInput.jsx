import React from "react";

const FormInput = ({ handleInputChange, value, type, name, placeholder }) => {
  return (
    <div className="mb-4">
      <input
        onChange={handleInputChange}
        value={value}
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full px-3 py-2 mb-1 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
      />
    </div>
  );
};

export default FormInput;
