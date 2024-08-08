import React from "react";
import { VscAccount } from "react-icons/vsc";
import { IoMenu } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import youtubeLogo from "../assets/yt_logo_rgb_light.png";

const Head = () => {
  return (
    <div className="grid grid-flow-col shadow-lg p-6 justify-between items-center">
      <div className="grid-cols-1 flex items-center gap-3">
        <IoMenu className="text-2xl" />
        <img src={youtubeLogo} alt="logo" className="h-8" />
      </div>
      <div className="grid-cols-10 flex h-8">
        <input
          type="text "
          className="border border-gray-400 w-96 rounded-l-full "
        />
        <button className="border border-gray-400  rounded-r-full w-10  flex justify-center items-center bg-gray-300">
          <CiSearch className="text-2xl " />
        </button>
      </div>
      <div className="grid-cols-1">
        <VscAccount className="text-2xl" />
      </div>
    </div>
  );
};

export default Head;
