import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <button className=" px-1 md:px-2 py-1 bg-gray-300 rounded-lg ">
        {name}
      </button>
    </div>
  );
};

export default Button;
