import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { useSelector } from "react-redux";

const MainContainer = () => {
    const isMenuOpen = useSelector((store) => store.app.isMenuOpen)
    return (
        <div className={`mt-16 ${isMenuOpen ? 'ml-60' : 'ml-40'}`}>
            <ButtonList />
            <VideoContainer />
        </div>
    )   
}

export default MainContainer;