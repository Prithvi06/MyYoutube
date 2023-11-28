import React, { useEffect, useState } from "react";
import { formatCash, timeSince } from "../utils/helper";
import { CHANNEL_API } from "../utils/config";

const VideoSearchResultCard = ({info}) => {
    const {snippet} = info;
    const {channelId, channelTitle, description , title, thumbnails, publishedAt} = snippet;

    const [channelInfo, setchannelInfo] = useState("")
    
    useEffect(() => {
        getChannelInfo();
    }, []);

    const getChannelInfo = async () => {
        const data = await fetch(CHANNEL_API.replace("channelId", channelId));
        const json = await data.json();
        setchannelInfo(json?.items[0])
    }

    return (
        <div className=" flex m-2 mb-8">
            <img className="hover:rounded-none rounded-lg w-[400px]" src={thumbnails.medium.url} alt="thumbnails" />
            <div className="flex pl-2 pt-2">
                <ul className="ml-2">
                    <li className="font-bold">{title}</li>
                    <li>{formatCash(channelInfo?.statistics?.viewCount)} views<span className="font-bold">. </span> {timeSince(publishedAt)} Ago</li>
                    
                    <li className="py-2 flex items-center font-semibold text-gray-500">
                        <img src={channelInfo?.snippet?.thumbnails?.default.url} className="h-10 rounded-full mr-2" alt="channel-img" />
                        {channelTitle}
                    </li>
                    <li>{description}</li>
                </ul>
            </div>
        </div>
    )
}

export default VideoSearchResultCard;