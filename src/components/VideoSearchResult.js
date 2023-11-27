import React from "react";
import { useState, useEffect } from "react";
import { SEARCH_VIDEO_API } from "../utils/config";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import VideoSearchResultCard from "./VideoSearchResultCard";
import { useDispatch, useSelector } from "react-redux";
import { closeButtonList } from "../utils/appSlice";

const VideoSearchResult = () => {
    const [searchParams] = useSearchParams();

    const [searchVideoResult, setSearchVideoResult] = useState([])
    const dispatch = useDispatch()
    useEffect(() => {
        getVideos();
        dispatch(closeButtonList())
    }, [searchParams]);

    const getVideos = async () => {
        const data = await fetch(SEARCH_VIDEO_API.replace("query", searchParams.get("search_query")));
        const json = await data.json();
        setSearchVideoResult(json.items)
    }
    const isMenuOpen = useSelector((store) => store.app.isMenuOpen)
    return searchVideoResult?.length === 0 ? (
        <Shimmer isSearch={true} />) :
        (
            <div className={`${isMenuOpen ? 'ml-60' : 'ml-24'}`}> 
                <div className="absolute -z-20 mt-20">
                    {
                        searchVideoResult.map((video, index) => (
                        <Link to={"/watch?v="+video.id.videoId} state={video} key={index}>
                            <VideoSearchResultCard key={index} info={video} />
                        </Link> 
                        ))
                    }
                </div>
            </div>
        )
}

export default VideoSearchResult;