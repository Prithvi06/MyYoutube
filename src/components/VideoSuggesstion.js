import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/config";
import { Link, useNavigate } from "react-router-dom";
import Shimmer from "./Shimmer";
import VideoSuggesstionCard from "./VideoSuggesstionCard";

const VideoSuggesstion = () => {
    const [videos, setVideos] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        getVideos();
    }, [isLoading])

    const getVideos = async () => {
        try {
            const data = await fetch(YOUTUBE_VIDEOS_API);
            const json = await data.json();
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
        <div className=" -z-20 mt-20">
            {
                videos.map((video, index) => (
                   <Link to={"/watch?v="+video.id} 
                   onClick={
                    (e) => {
                        e.preventDefault();
                        navigate("/watch?v="+video.id,  {state:video})
                    }} key={index}>
                       <VideoSuggesstionCard key={index} info={video} />
                   </Link> 
                ))
            }
        </div>
    )
}

export default VideoSuggesstion;