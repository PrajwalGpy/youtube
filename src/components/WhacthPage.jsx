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
    <div className="md:p-6 flex  flex-col md:w-full  ">
      <div className="md:p-6 flex  md:w-full  justify-center items-center">
        <div className="flex flex-col justify-center md:flex-row  md:flex md:w-full">
          <div>
            <iframe
              className="md:w-[1000px] md:h-[500px] w-[380px] h-[250px]"
              src={"https://www.youtube.com/embed/" + searchParams.get("v")}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div className="">
            <LiveChat />
          </div>
        </div>
      </div>
      <div className="md:p-6  md:w-[1000px]">
        <Commentcontainer />
      </div>
    </div>
  );
};

export default WhacthPage;
