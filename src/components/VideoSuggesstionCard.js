import React, { useEffect, useState } from "react";
import { formatCash, timeSince } from "../utils/helper";
import { CHANNEL_API } from "../utils/config";

const VideoSuggesstionCard = ({info}) => {
    const {snippet} = info;
    const {channelId, channelTitle , title, thumbnails, publishedAt} = snippet;

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
        <div className=" flex p-2 mb-8">
            <div className="w-[250px]">
                <img className="hover:rounded-none rounded-lg w-full" src={thumbnails.medium.url} alt="thumbnails" />
            </div>
            <div className="flex pl-2">
                <ul className="ml-2">
                    <li className="font-bold text-sm">{title.substring(0,50)}</li>
                    
                    <li className="py-2 flex items-center text-xs font-semibold text-gray-500">
                        <img src={channelInfo?.snippet?.thumbnails?.default.url} className="h-6 rounded-full mr-2" alt="channel-img" />
                        {channelTitle}
                    </li>
                    <li className="text-sm">{formatCash(channelInfo?.statistics?.viewCount)} views <span className="font-bold"> .</span>{timeSince(publishedAt)} Ago</li>
                </ul>
            </div>
        </div>
    )
}

export default VideoSuggesstionCard;