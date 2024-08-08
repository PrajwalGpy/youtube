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
    <div className="flex gap-3 ">
      {youtubeCategoryButtons.map((name, index) => (
        <Button name={name} key={index}></Button>
      ))}
    </div>
  );
};

export default ButtonList;
