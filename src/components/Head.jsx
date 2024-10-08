import React, { useEffect, useState } from "react";
import { VscAccount } from "react-icons/vsc";
import { IoMenu } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import youtubeLogo from "../assets/yt_logo_rgb_light.png";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/AppSlice";
import { Link, useNavigate } from "react-router-dom";
import { youtube_search_Api } from "../utils/Contents";
import { IoClose } from "react-icons/io5";

const Head = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isMenuOpen = useSelector((Store) => Store.app.isMenuOpen);
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
    setSearchSuggetionResult(result[1]);
  };

  const toggleMenuEvent = () => {
    dispatch(toggleMenu());
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchSuggetion(suggestion);
    setSearchSuggetionResultVal(false);

    // Navigate to the results page with the selected suggestion as a query parameter
    navigate(`/results?search_query=${encodeURIComponent(suggestion)}`);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setSearchSuggetionResultVal(false);
    }, 200); // Delay to ensure the click event is captured
  };

  return (
    <div className="grid grid-flow-col p-6 justify-between items-center fixed w-full z-50 bg-white">
      <div className="grid-cols-1 flex items-center gap-3">
        {!isMenuOpen ? (
          <IoMenu
            className="text-2xl cursor-pointer"
            onClick={toggleMenuEvent}
          />
        ) : (
          <IoClose
            className="text-2xl cursor-pointer"
            onClick={toggleMenuEvent}
          />
        )}
        <a href="/">
          <img src={youtubeLogo} alt="logo" className="h-6 cursor-pointer" />
        </a>
      </div>

      <div className="hidden md:flex h-8 relative">
        <form
          className="flex h-8"
          onSubmit={(e) => {
            e.preventDefault();
            handleSuggestionClick(searchSuggetion);
          }}
        >
          <input
            type="text"
            className="border border-gray-400 w-96 rounded-l-full px-5"
            value={searchSuggetion}
            onChange={(e) => setSearchSuggetion(e.target.value)}
            onFocus={() => setSearchSuggetionResultVal(true)}
            onBlur={handleBlur} // Handle blur with delay
          />
          <input
            type="submit
          "
            onMouseDown={() => handleSuggestionClick(searchSuggetion)}
            className="border border-gray-400 rounded-r-full w-10 flex justify-center items-center bg-gray-300 cursor-pointer"
          />
          <CiSearch
            className="text-2xl relative -left-8 top-1 cursor-pointer"
            onMouseDown={() => handleSuggestionClick(searchSuggetion)}
          />
        </form>

        {searchSuggetionResultVal && searchSuggetionResult.length > 0 ? (
          <ul className="bg-white z-50 fixed top-14 shadow-lg grid grid-cols-1 rounded-2xl w-96 px-5 py-3">
            {searchSuggetionResult.map((s, index) => {
              return (
                <li
                  key={index}
                  className="flex items-center cursor-pointer"
                  onMouseDown={() => handleSuggestionClick(s)} // Use onMouseDown to handle click before onBlur
                >
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

      <div className="md:grid-cols-1 flex flex-row justify-between items-center gap-3">
        <div className="md:hidden block">
          <Link to={"/search"}>
            <CiSearch className="text-3xl font-extrabold  cursor-pointer" />
          </Link>
        </div>
        <VscAccount className="text-2xl" />
      </div>
    </div>
  );
};

export default Head;
