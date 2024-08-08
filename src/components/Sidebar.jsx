import React from "react";
import { useSelector } from "react-redux";
import Store from "../utils/Store";

const Sidebar = () => {
  const isMenuOpen = useSelector((Store) => Store.app.isMenuOpen);

  if (!isMenuOpen) return null;
  return (
    <div className="shadow-lg  border flex p-3 flex-col">
      <div>
        <h1 className=" font-bold">Explore</h1>
        <ul>
          <li>Trending</li>
          <li>Shopping</li>
          <li>Podcasts</li>
          <li>Movies</li>
        </ul>
      </div>
      <div>
        <h1 className=" font-bold">Explore</h1>
        <ul>
          <li>Trending</li>
          <li>Shopping</li>
          <li>Podcasts</li>
          <li>Moies</li>
        </ul>
      </div>
      <div>
        <h1 className=" font-bold">Explore</h1>
        <ul>
          <li>Trending</li>
          <li>Shopping</li>
          <li>Podcasts</li>
          <li>Movies</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
