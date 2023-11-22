import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "./config";

const chatSlice = createSlice({
    name: 'chat',
    initialState: {
        messages: [],
        showChat: false
    },
    reducers: {
        addMessage: (state, action) => {
            state.messages.splice(LIVE_CHAT_COUNT, 1)
            state.messages.unshift(action.payload);
        },
        toggleLiveChat: (state) => {
            state.showChat = !state.showChat
        }
    },
});

export const {addMessage, toggleLiveChat} = chatSlice.actions;
export default chatSlice.reducer;