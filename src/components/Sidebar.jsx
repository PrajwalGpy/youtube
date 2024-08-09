import React from "react";
import { useSelector } from "react-redux";
import Store from "../utils/Store";
import { Link } from "react-router-dom";

const Sidebar = () => {
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
  if (!isMenuOpen) return null;
  return (
    <div className="   flex p-3 flex-col fixed h-screen bg-white z-40">
      <div>
        <ul>
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
