import React from "react";
import { VscAccount } from "react-icons/vsc";
import { IoMenu } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import youtubeLogo from "../assets/yt_logo_rgb_light.png";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/AppSlice";
import { Link } from "react-router-dom";

const Head = () => {
  const dispatch = useDispatch();

  const toggleMenuEvent = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-6 justify-between items-center fixed w-full  z-50 bg-white">
      <div className="grid-cols-1 flex items-center gap-3">
        <IoMenu className="text-2xl cursor-pointer" onClick={toggleMenuEvent} />
        <a href="/">
          <img src={youtubeLogo} alt="logo" className="h-6 cursor-pointer" />
        </a>
      </div>
      <div className="grid-cols-10 flex h-8">
        <input
          type="text"
          className="border border-gray-400 w-96 rounded-l-full"
        />
        <button className="border border-gray-400 rounded-r-full w-10 flex justify-center items-center bg-gray-300">
          <CiSearch className="text-2xl" />
        </button>
      </div>
      <div className="grid-cols-1">
        <VscAccount className="text-2xl" />
      </div>
    </div>
  );
};

export default Head;
