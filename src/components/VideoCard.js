import React from "react";
import { useSelector } from "react-redux";

const VideoCard = ({info}) => {
    const isMenuOpen = useSelector((store) => store.app.isMenuOpen)
    const {snippet, statistics} = info;
    const {channelTitle, title, thumbnails} = snippet;
    
    return (
        <div className={`m-2 ${isMenuOpen ? 'w-[25rem]' : 'w-[20rem]'}`}>
            <img className="rounded-lg w-[400px]" src={thumbnails.medium.url} alt="thumbnails" />
            <ul>
                <li className="font-bold py-2">{title}</li>
                <li>{channelTitle}</li>
                <li>{statistics.viewCount} views</li>
            </ul>
        </div>
    )
}

export default VideoCard;