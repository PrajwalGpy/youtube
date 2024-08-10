import React from "react";
import { VscAccount } from "react-icons/vsc";

const ChatMessage = ({ name, message }) => {
  return (
    <div className=" items-center m-2  flex flex-row  ">
      <div>
        <VscAccount className="text-2xl font-bold" />
      </div>
      <span className="font-bold px-2">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
