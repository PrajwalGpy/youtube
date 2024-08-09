import React from "react";
import ButtonList from "./ButtonList";
import Vediocontainer from "./Vediocontainer";

const Maincontainer = () => {
  return (
    <div className="flex mt-6 flex-col  items-center my-4 mx-auto ">
      <ButtonList />
      <Vediocontainer />
    </div>
  );
};

export default Maincontainer;
