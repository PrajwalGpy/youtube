import React from "react";

const VideoCard = ({ info }) => {
  const { statistics, snippet } = info;
  const { title, channelTitle, thumbnails } = snippet;

  return (
    <div className="max-w-xs m-2  rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 mt-10">
      <img
        className="w-full h-40 object-cover rounded-lg"
        src={thumbnails.medium.url}
        alt="thumbnail"
      />

      <div className="p-4">
        <h3
          className="font-medium  text-gray-800 mb-1 line-clamp-2"
          style={{ fontSize: "1rem" }}
        >
          {title}
        </h3>
        <p className="text-sm text-gray-600 mb-1">{channelTitle}</p>
        <p className="text-sm text-gray-600">
          {parseInt(statistics.viewCount).toLocaleString()} views
        </p>
      </div>
    </div>
  );
};

export default VideoCard;
