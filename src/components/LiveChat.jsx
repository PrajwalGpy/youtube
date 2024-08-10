import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { setChat } from "../utils/ChatSlice";
import { generate, generateRandomMessage } from "../utils/helper";
import { IoIosSend } from "react-icons/io";

const LiveChat = () => {
  const [sendMessage, setsendMessage] = useState("");
  const dispatch = useDispatch();
  const chat = useSelector((state) => state.chat.message);
  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        setChat({
          name: generate(),
          message: generateRandomMessage(),
        })
      );
    }, 2000);
    return () => {
      clearInterval(i);
    };
  }, []);
  return (
    <>
      <h1 className=" flex justify-center bg-slate-400 shadow-lg    w-full ml-2   border-black border-x-2 border-t-2 rounded-se-xl rounded-ss-lg">
        Live Chat
      </h1>

      <div className="h-[430px] w-full border bg-gray-200    border-black ml-2  flex  flex-col-reverse ">
        <div className="flex flex-col-reverse overflow-y-scroll ">
          {chat.map((i, index) => {
            return (
              <ChatMessage key={index} name={i.name} message={i.message} />
            );
          })}
        </div>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          dispatch(
            setChat({
              name: "Prajwal",
              message: sendMessage,
            })
          );
          setsendMessage(""); // Clear input field
        }}
        className="w-full ml-2 border-black border-l-2 border-r-2 border-b-2 rounded-b-lg flex flex-row"
      >
        <input
          type="text"
          className="w-3/5 bg-slate-200  p-2  "
          placeholder="message"
          value={sendMessage}
          onChange={(e) => {
            setsendMessage(e.target.value);
          }}
        />
        <button
          type="submit"
          className="w-2/5 bg-slate-400  p-2 flex items-center  justify-center gap-2"
        >
          <IoIosSend className="text-lg font-extrabold" />
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
