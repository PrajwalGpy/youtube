import React, { useEffect, useState } from "react";
import { youTube_Vedio } from "../utils/Contents";
import VideoCard from "./VedioCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await fetch(youTube_Vedio);
      const json = await response.json();

      if (json && json.items && Array.isArray(json.items)) {
        setVideos(json.items);
      } else {
        setVideos([]); // Set an empty array if the response structure is unexpected
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setVideos([]); // Set an empty array in case of an error
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return videos.length > 0 ? (
    <div className="grid md:grid-cols-4 md:my-4 mx-auto md:mt-4 w-11/12 grid-cols-1 mt-10">
      {videos.map((item, index) => (
        <Link to={`/watch?v=${item.id}`} key={index}>
          <VideoCard info={item} />
        </Link>
      ))}
    </div>
  ) : (
    <p>No videos found.</p>
  );
};

export default VideoContainer;
