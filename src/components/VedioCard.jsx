import React from "react";

const VedioCard = ({ info }) => {
  const { statistics, snippet } = info;
  const { title, channelId, channelTitle, thumbnails } = snippet;
  return (
    <div className="m-3 p-3 w-96 shadow-lg ">
      <img
        className="w-full rounded-lg"
        src={thumbnails.medium.url}
        alt="thumbnail"
      />

      <ul>
        <li className="font-bold  text-base mb-2">{title}</li>
        <li className="">{channelTitle}</li>
        <li className="">{statistics.viewCount}</li>
      </ul>
    </div>
  );
};

export default VedioCard;
