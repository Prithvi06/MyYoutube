import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/config";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
    const [videos, setVideos] = useState([])

    useEffect(() => {
        getVideos();
    
    }, [])

    const getVideos = async () => {
        const data = await fetch(YOUTUBE_VIDEOS_API);
        const json = await data.json();
        console.log("DATA", json.items)
        setVideos(json.items)
    }

    var infiniteScroll = () => {
        // End of the document reached?
        if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight){
            getVideos();
            console.log("scrol")
        }
    }
    window.addEventListener('scroll', infiniteScroll());
    return (
        <div className="flex flex-wrap mt-20">
            {
                videos.map((video) => (
                   <Link to={"/watch?v="+video.id} key={video.id}>
                       <VideoCard key={video.id} info={video} />
                   </Link> 
                ))
            }

        </div>
    )
}

export default VideoContainer;