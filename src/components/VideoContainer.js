import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/config";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

const VideoContainer = () => {
    const [videos, setVideos] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        getVideos();
    
    }, [isLoading])

    const getVideos = async () => {
        // setIsLoading(true);
        try {
            const data = await fetch(YOUTUBE_VIDEOS_API);
            const json = await data.json();
            console.log("DATA", json.items)
            setVideos([...videos, ...json.items])
        } finally {
            setIsLoading(false);
        }
        
    }

    const handleScroll = () => {
        const scrollTop = document.documentElement.scrollTop
        const scrollHeight = document.documentElement.scrollHeight
        const clientHeight = document.documentElement.clientHeight
        if (scrollTop + clientHeight >= scrollHeight) {
            setIsLoading(true)
        }
    };
      
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [videos]);

    return videos?.length === 0 ? (
    <Shimmer />) :
    (
        <div className="flex absolute -z-20 flex-wrap mt-20">
            {
                videos.map((video, index) => (
                   <Link to={"/watch?v="+video.id} key={index}>
                       <VideoCard key={index} info={video} />
                   </Link> 
                ))
            }
        </div>
    )
}

export default VideoContainer;