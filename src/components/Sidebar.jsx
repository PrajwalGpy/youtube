import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Store from "../utils/Store";
import { Link } from "react-router-dom";
import { closeMenu } from "../utils/AppSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((Store) => Store.app.isMenuOpen);
  const youtubeHomePageButtons = [
    "Home",
    "Explore",
    "Subscriptions",
    "Library",
    "History",
    "Your Videos",
    "Watch Later",
    "Liked Videos",
    "Settings",
  ];
  const ClocloseMenu = () => {
    dispatch(closeMenu());
  };
  if (!isMenuOpen) return null;
  return (
    <div className="   flex p-3 flex-col fixed h-screen bg-white z-50 w-full md:w-0">
      <div>
        <ul onClick={() => ClocloseMenu()}>
          <Link to={"/"}>
            <li className=" font-bold mb-2 cursor-pointer">Home</li>
          </Link>
          <li className=" font-bold mb-2 cursor-pointer">Explore</li>
          <li className=" font-bold mb-2 cursor-pointer">Subscriptions</li>
          <li className=" font-bold mb-2 cursor-pointer">Library</li>
          <li className=" font-bold mb-2 cursor-pointer">History</li>
          <li className=" font-bold mb-2 cursor-pointer">Your Videos</li>
          <li className=" font-bold mb-2 cursor-pointer">Watch Later</li>
          <li className=" font-bold mb-2 cursor-pointer">Liked Videos</li>
          <li className=" font-bold mb-2 cursor-pointer">Settings</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
