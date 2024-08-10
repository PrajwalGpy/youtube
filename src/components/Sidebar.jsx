import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Store from "../utils/Store";
import { Link } from "react-router-dom";
import { closeMenu } from "../utils/AppSlice";
import { IoHome } from "react-icons/io5";
import { FaFire } from "react-icons/fa";
import { LuLibrary } from "react-icons/lu";
import { FaHistory } from "react-icons/fa";
import { LiaPhotoVideoSolid } from "react-icons/lia";
import { AiFillLike } from "react-icons/ai";
import { IoSettings } from "react-icons/io5";
import { MdSubscriptions } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { RiGlassesFill } from "react-icons/ri";

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
    <div className="   flex p-3 flex-col fixed h-screen bg-white z-50 w-5/12 md:w-[156px]  left-0 right-0">
      <div>
        <ul onClick={() => ClocloseMenu()}>
          <Link to={"/"}>
            <li className=" font-bold mb-2 cursor-pointer  flex  items-center gap-2">
              <IoHome />
              Home
            </li>
          </Link>
          <li className=" font-bold mb-2 cursor-pointer flex  items-center gap-2">
            <SiYoutubeshorts />
            Shorts
          </li>
          <li className=" font-bold mb-2 cursor-pointer flex  items-center gap-2">
            <RiGlassesFill />
            Explore
          </li>
          <li className=" font-bold mb-2 cursor-pointer flex  items-center gap-2">
            <MdSubscriptions />
            Subscriptions
          </li>
          <li className=" font-bold mb-2 cursor-pointer flex  items-center gap-2">
            <LuLibrary />
            Library
          </li>
          <li className=" font-bold mb-2 cursor-pointer flex  items-center gap-2">
            <FaHistory />
            History
          </li>
          <li className=" font-bold mb-2 cursor-pointer flex  items-center gap-2">
            <LiaPhotoVideoSolid />
            Your Videos
          </li>
          <li className=" font-bold mb-2 cursor-pointer flex  items-center gap-2">
            <RiGlassesFill />
            Watch Later
          </li>
          <li className=" font-bold mb-2 cursor-pointer flex  items-center gap-2">
            <AiFillLike />
            Liked Videos
          </li>
          <li className=" font-bold mb-2 cursor-pointer flex  items-center gap-2">
            <IoSettings />
            Settings
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
