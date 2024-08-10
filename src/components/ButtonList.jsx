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
    "Recently ",
    "Watched",
  ];

  return (
    <div className="flex flex-row gap-1 md:gap-3  fixed  bg-white z-20 w-5/6 justify-center p-2 md:p-5 md:top-[4.5rem] mt-2 top-[4rem] overflow-x-scroll md:overflow-hidden px-10">
      {youtubeCategoryButtons.map((name, index) => (
        <Button name={name} key={index}></Button>
      ))}
    </div>
  );
};

export default ButtonList;
