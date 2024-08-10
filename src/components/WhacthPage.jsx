import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/AppSlice";
import { useSearchParams } from "react-router-dom";
import Commentcontainer from "./Commentcontainer";
import LiveChat from "./LiveChat";

const WhacthPage = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className="p-6 flex  flex-col w-full ">
      <div className="p-6 flex  w-full ">
        <div className="flex w-full">
          <div>
            <iframe
              width="1000"
              height="500"
              src={"https://www.youtube.com/embed/" + searchParams.get("v")}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div className="w-full">
            <LiveChat />
          </div>
        </div>
      </div>
      <div className="p-6  w-[1000px]">
        <Commentcontainer />
      </div>
    </div>
  );
};

export default WhacthPage;
