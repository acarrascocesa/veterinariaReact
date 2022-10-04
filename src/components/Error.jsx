import { useState } from "react";

const Error = ({mensaje}) => {

  return (
    <div className="bg-red-700 mb-10 p-3 rounded text-white text-center text-lg uppercase">
      <p>{mensaje}</p>
    </div>
  );
};

export default Error;
