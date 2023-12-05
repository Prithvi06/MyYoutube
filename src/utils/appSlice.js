import { createSlice } from "@reduxjs/toolkit"

const appSlice = createSlice({
    name: "app",
    initialState: {
        isMenuOpen: true,
        isButtonList: true,
        channelId: "",
    },
    reducers: {
        toggleMenu: (state) => {
            state.isMenuOpen = !state.isMenuOpen
        },
        openMenu: (state) => {
            state.isMenuOpen = true;
        },
        closeMenu: (state) => {
            state.isMenuOpen = false;
        },
        openButtonList: (state) => {
            state.isButtonList = true
        },
        closeButtonList: (state) => {
            state.isButtonList = false;
        },
    },
});

export const {toggleMenu, openMenu, closeMenu, openButtonList, closeButtonList} = appSlice.actions
export default appSlice.reducer;