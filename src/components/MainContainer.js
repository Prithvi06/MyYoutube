import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { useSelector } from "react-redux";

const MainContainer = () => {
    return (
        <div className="mt-14">
            <VideoContainer />
        </div>
    )   
}

export default MainContainer;