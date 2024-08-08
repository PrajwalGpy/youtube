import React from "react";
import ButtonList from "./ButtonList";
import Vediocontainer from "./Vediocontainer";

const Maincontainer = () => {
  return (
    <div className="flex">
      <ButtonList />
      <Vediocontainer />
    </div>
  );
};

export default Maincontainer;
