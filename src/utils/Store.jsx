import { configureStore } from "@reduxjs/toolkit";
import AppSlice from "./AppSlice";
import ChatSlice from "./ChatSlice";

const Store = configureStore({
  reducer: {
    app: AppSlice,
    chat: ChatSlice,
  },
});
export default Store;
