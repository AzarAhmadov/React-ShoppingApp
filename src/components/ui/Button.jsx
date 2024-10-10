import React, { memo, mmeo } from "react";
import { useNavigate } from "react-router-dom";

const Button = ({ type, children, to }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    if (to) {
      navigate(to);
    }
  };

  return (
    <button
      onClick={handleNavigate}
      type={type}
      className="w-full px-4 py-2 text-white bg-black rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
    >
      {children}
    </button>
  );
};

export default memo(Button);
