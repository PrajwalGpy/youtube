import React from "react";

const VideoCardForSearchResult = ({ info }) => {
  const { snippet } = info;
  const { title, channelId, channelTitle, thumbnails, description } = snippet;

  return (
    <div className=" m-3 p-3 shadow-lg flex flex-row rounded-lg max-w-7xl">
      <div className="relative w-98">
        <img
          className="w-full h-full rounded-lg object-cover"
          src={thumbnails.high.url}
          alt="thumbnail"
        />
      </div>
      <div className="p-4 flex-1">
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-gray-600 font-medium">{channelTitle}</p>
        <p className="text-gray-600 h-20 overflow-hidden">{description}</p>
      </div>
    </div>
  );
};

export default VideoCardForSearchResult;
