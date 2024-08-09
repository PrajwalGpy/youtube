import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const youtubeCategoryButtons = [
    "All",
    "Music",
    "Gaming",
    "Live",
    "News",
    "Learning",
    "Sports",
    "Movies",
    "Fashion",
    "Podcasts",
    "Recently uploaded",
    "Watched",
  ];

  return (
    <div className="flex gap-3  fixed  bg-white z-20 w-full justify-center p-5 top-[4.5rem] mt-2">
      {youtubeCategoryButtons.map((name, index) => (
        <Button name={name} key={index}></Button>
      ))}
    </div>
  );
};

export default ButtonList;
