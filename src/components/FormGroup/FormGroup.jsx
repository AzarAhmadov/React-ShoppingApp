import React from "react";

const FormGroup = ({ label, children }) => {
  return (
    <div className="mb-4">
      <label
        className="block mb-2 text-sm font-bold text-gray-700"
        htmlFor="username"
      >
        {label}
      </label>
      {children}
    </div>
  );
};

export default FormGroup;
