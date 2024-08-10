import { createSlice } from "@reduxjs/toolkit";

const ChatSlice = createSlice({
  name: "chat",
  initialState: {
    message: [],
  },
  reducers: {
    setChat(state, action) {
      state.message.splice(20, 1);
      state.message.unshift(action.payload);
    },
  },
});

export const { setChat } = ChatSlice.actions;
export default ChatSlice.reducer;
