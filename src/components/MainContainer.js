import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
    return (
        <div className="basis-10/12 ml-56 mt-16">
            <ButtonList />
            <VideoContainer />
        </div>
    )   
}

export default MainContainer;