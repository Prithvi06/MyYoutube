import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/config";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import { useDispatch, useSelector } from "react-redux";
import { openButtonList, closeMenu, openMenu } from "../utils/appSlice";

const VideoContainer = () => {
    const [videos, setVideos] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const dispatch = useDispatch();

    useEffect(() => {
        getVideos();
        dispatch(openButtonList());
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
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [videos]);
 
    //choose the screen size 
    const handleResize = () => {
    if (window.innerWidth < 1280) {
        dispatch(closeMenu());
    } else {
        dispatch(openMenu());
    }
    }

    const isMenuOpen = useSelector((store) => store.app.isMenuOpen)

    return videos?.length === 0 ? (
    <Shimmer />) :
    (
        <div className="flex absolute -z-20 flex-wrap mt-20">
            {
                videos.map((video, index) => (
                   <Link className={`p-2 ${isMenuOpen ? 'xl:w-4/12' : 'xl:w-3/12 lg:w-4/12 w-6/12' } mb-8`} to={"/watch?v="+video.id} state={video} key={index}>
                       <VideoCard key={index} info={video} />
                   </Link> 
                ))
            }
        </div>
    )
}

export default VideoContainer;