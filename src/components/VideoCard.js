import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { formatCash, timeSince } from "../utils/helper";
import { CHANNEL_API } from "../utils/config";

const VideoCard = ({info}) => {
    const isMenuOpen = useSelector((store) => store.app.isMenuOpen)
    const {snippet, statistics} = info;
    const {channelId, channelTitle, title, thumbnails, publishedAt} = snippet;

    const [channelThumnail, setChannelThumnail] = useState("")
    
    useEffect(() => {
        getChannelInfo();
    }, []);

    const getChannelInfo = async () => {
        const data = await fetch(CHANNEL_API.replace("channelId", channelId));
        const json = await data.json();
        setChannelThumnail(json?.items[0]?.snippet?.thumbnails?.default.url)
        // console.log(json)
    }

    return (
        <div className={`m-2 ${isMenuOpen ? 'w-[25rem]' : 'w-[21rem]' } mb-8`}>
            <img className="hover:rounded-none rounded-lg w-[400px]" src={thumbnails.medium.url} alt="thumbnails" />
            <div className="flex  pt-2">
            <img src={channelThumnail} className="h-10 rounded-full" alt="channel-img" />
            <ul className="ml-2">
                <li className="font-bold">{title}</li>
                <li className="font-semibold text-gray-500">{channelTitle}</li>
                <li>{formatCash(statistics.viewCount)} views<span className="font-bold">. </span> {timeSince(publishedAt)} Ago</li>
            </ul>
            </div>
        </div>
    )
}

export default VideoCard;