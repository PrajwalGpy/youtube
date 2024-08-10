import React from "react";

const VideoCardForSearchResult = ({ info }) => {
  const { snippet } = info;
  const { title, channelId, channelTitle, thumbnails, description } = snippet;

  return (
    <div className=" m-3 md:p-3 shadow-lg flex md:flex-row rounded-lg max-w-7xl flex-col">
      <div className="md:relative md:w-98  w-[400px] h-[200px]">
        <img
          className="w-full h-full rounded-lg object-cover"
          src={thumbnails.high.url}
          alt="thumbnail"
        />
      </div>
      <div className="p-4 flex-1">
        <h3 className="font-semibold md:text-lg mb-2 text-base">{title}</h3>
        <p className="text-gray-600 font-medium">{channelTitle}</p>
        <p className="text-gray-600 h-20 overflow-hidden  hidden md:block">
          {description}
        </p>
      </div>
    </div>
  );
};

export default VideoCardForSearchResult;
