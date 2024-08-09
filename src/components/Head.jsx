import React, { useEffect, useState } from "react";
import { VscAccount } from "react-icons/vsc";
import { IoMenu } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import youtubeLogo from "../assets/yt_logo_rgb_light.png";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/AppSlice";
import { Link } from "react-router-dom";
import { youtube_search_Api } from "../utils/Contents";

const Head = () => {
  const dispatch = useDispatch();

  const [searchSuggetion, setSearchSuggetion] = useState("");
  const [searchSuggetionResult, setSearchSuggetionResult] = useState([]);
  const [searchSuggetionResultVal, setSearchSuggetionResultVal] =
    useState(false);

  useEffect(() => {
    const Timer = setTimeout(() => {
      searchresult();
    }, 200);
    return () => {
      clearTimeout(Timer);
    };
  }, [searchSuggetion]);

  const searchresult = async () => {
    const data = await fetch(youtube_search_Api + searchSuggetion);
    const result = await data.json();
    console.log(searchSuggetion);
    setSearchSuggetionResult(result[1]);
  };
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
      <div className=" flex h-8  relative ">
        <div className=" flex h-8">
          <input
            type="text"
            className="border border-gray-400 w-96 rounded-l-full px-5"
            value={searchSuggetion}
            onChange={(e) => setSearchSuggetion(e.target.value)}
            onFocus={() => setSearchSuggetionResultVal(true)}
            onBlur={() => setSearchSuggetionResultVal(false)}
          />
          <button className="border border-gray-400 rounded-r-full w-10 flex justify-center items-center bg-gray-300">
            <CiSearch className="text-2xl" />
          </button>
        </div>

        {searchSuggetionResultVal && searchSuggetionResult.length > 0 ? (
          <ul className="bg-white z-50 fixed top-14  shadow-lg  grid grid-cols-1 rounded-2xl  w-96  px-5 py-3">
            {searchSuggetionResult.map((s, index) => {
              return (
                <li className="flex items-center  " key={index}>
                  <CiSearch className="text-xl mr-4" />
                  {s}
                </li>
              );
            })}
          </ul>
        ) : (
          ""
        )}
      </div>

      <div className="grid-cols-1">
        <VscAccount className="text-2xl" />
      </div>
    </div>
  );
};

export default Head;
