import React from "react";
import { FallingLines } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="flex justify-center mt-4">
      <FallingLines
        color="#000"
        width="100"
        visible={true}
        ariaLabel="falling-circles-loading"
      />
    </div>
  );
};

export default Loading;
