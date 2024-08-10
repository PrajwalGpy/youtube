import React, { useEffect, useState } from "react";
import { VscAccount } from "react-icons/vsc";
import { IoMenu } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import youtubeLogo from "../assets/yt_logo_rgb_light.png";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/AppSlice";
import { Link, useNavigate } from "react-router-dom";
import { youtube_search_Api } from "../utils/Contents";

const MobileSearchResult = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
    <div className=" flex  flex-col justify-center ">
      <form
        className="flex h-8 justify-center"
        onSubmit={(e) => {
          e.preventDefault();
          handleSuggestionClick(searchSuggetion);
        }}
      >
        <input
          type="text"
          className="border border-gray-400 w-full rounded-l-full px-5"
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
        <div className="bg-white z-50   shadow-lg  rounded-2xl w-full px-5 py-3">
          {searchSuggetionResult.map((s, index) => {
            return (
              <div
                key={index}
                className="flex items-center cursor-pointer"
                onMouseDown={() => handleSuggestionClick(s)} // Use onMouseDown to handle click before onBlur
              >
                <CiSearch className="text-xl mr-4" />
                {s}
              </div>
            );
          })}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default MobileSearchResult;
