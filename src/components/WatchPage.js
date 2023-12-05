import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeButtonList, closeMenu, } from "../utils/appSlice";
import { toggleLiveChat } from "../utils/chatSlice";
import { useLocation, useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import { useSelector } from "react-redux";
import { CHANNEL_API } from "../utils/config";
import VideoSuggesstion from "./VideoSuggesstion";
import { formatCash, timeSince } from "../utils/helper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faThumbsUp, faThumbsDown, faShare, faDownload } from "@fortawesome/free-solid-svg-icons";

const WatchPage = () => {
    const data = useLocation()
    const {snippet, id} = data.state;
    var vId;
    if (typeof(id) === "string") {
        vId = id;
    } else {
        vId = id?.videoId;
    }
    const {channelId, channelTitle, description, title, publishedAt} = snippet;
    var assign = false
    if ("statistics" in data) {
        assign = true
        var {likeCount, viewCount} = data.statistics;
    }
    const [thumbnails, setThumbnails] = useState("")
    const [subscriberCount, setSubscriberCount] = useState("")
    const [viewsCount, setViewsCount] = useState("")
    const [likesCount, setLikesCount] = useState("")
    const [videoDescription, setVideoDescription] = useState()
    const [toggleMoreBtn, setToggleMoreBtn] = useState(true)
    const [toggleLessBtn, setToggleLessBtn] = useState(false)


    const showFullDescription = () => {
        setVideoDescription(description);
        setToggleLessBtn(true)
        setToggleMoreBtn(false)
    }
    const showLessDescription = () => {
        setVideoDescription(description.substring(0,200));
        setToggleLessBtn(false)
        setToggleMoreBtn(true)
    }

    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();
    const iFrameUrl = "https://www.youtube.com/embed/" +  searchParams.get("v")
    useEffect(() => {
        setVideoDescription(description.substring(0,200))
        dispatch(closeMenu());
        dispatch(closeButtonList());
        getChannelInfo();
    }, [data]);

    const getChannelInfo = async () => {
        const data = await fetch(CHANNEL_API.replace("channelId", channelId));
        const json = await data.json();
        const {snippet, statistics} = json?.items[0];
        setThumbnails(snippet.thumbnails)
        setSubscriberCount(statistics.subscriberCount)
        if (!assign) {
            setViewsCount(statistics.viewCount)
            setLikesCount(statistics.videoCount)
        }
    }
    const isMenuOpen = useSelector((store) => store.app.isMenuOpen)
    const showChat = useSelector((store) => store.chat.showChat)

    const toggleLiveChatMessage = () => {
        dispatch(toggleLiveChat())
    }

    return (
        <div className={`lg:flex px-2 gap-5 w-full mt-20 ${isMenuOpen ? 'ml-60' : 'ml-24'} overflow-x-hidden`}>
                <div className="lg:w-[60%]">
                    <div>
                        <iframe 
                            className="rounded-xl"
                            width="100%"
                            height="500" 
                            src={iFrameUrl}
                            title="YouTube video player"
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                    <div className="py-4">
                        <ul>
                            <li className="font-semibold text-lg">{title}</li>
                            <ul className="flex gap-3 items-center py-2">
                                <li className="flex items-center gap-3">
                                <img src={thumbnails?.default?.url} className="h-10 rounded-full" alt="channel-img" />
                                <li>
                                    <span className="font-bold text-sm">{channelTitle}</span> <br />
                                    <span className="text-xs font-semibold text-gray-700">{formatCash(subscriberCount)} subscribers</span>
                                </li>
                                </li>
                                <li className="border px-4 py-2 rounded-full font-bold hover:bg-gray-200 ml-5">Join</li>
                                <li className="flex items-center border px-4  py-2 rounded-full bg-gray-100 hover:bg-gray-200">
                                    <FontAwesomeIcon icon={faBell} /> <span className="pl-2">Subscribed</span></li>
                                <li className="flex items-center border px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 ml-5">
                                <FontAwesomeIcon icon={faThumbsUp} /> <span className="px-2">{formatCash(likeCount ? likeCount : likesCount)}</span> <FontAwesomeIcon icon={faThumbsDown} />
                                </li>
                                <li className="flex items-center border px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200">
                                    <FontAwesomeIcon icon={faShare} /> <span className="pl-2">Share</span></li>
                                <li className="flex items-center border px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200">
                                    <FontAwesomeIcon icon={faDownload} /> <span className="pl-2">Download</span></li>
                            </ul>
                        </ul>
                        <div className="w-full bg-gray-100 rounded-lg p-2">
                            <span className="font-semibold">{formatCash(viewCount ? viewCount : viewsCount)} View</span>
                            <span className="font-semibold">. {timeSince(publishedAt)} Ago</span>
                            <div className="pt-2">{videoDescription} 
                                {toggleMoreBtn && <span className="font-semibold cursor-pointer" onClick={() => showFullDescription()}>...more</span>}
                                </div>
                            
                            {toggleLessBtn && <span className="font-semibold cursor-pointer" onClick={() => showLessDescription()}>Show less</span>}
                        </div>
                    </div>
                    <CommentsContainer videoId={vId} />
                </div>
                <div className="lg:w-[30%]">
                        {
                            showChat ? 
                                (<>
                                    <LiveChat />
                                    <div className="text-center border rounded-lg hover:bg-gray-200 cursor-pointer p-1" onClick={() => toggleLiveChatMessage()}>
                                    Hide chat replay</div>

                                </>)
                                : (
                                <div className="text-center border rounded-full hover:bg-gray-200 cursor-pointer p-1" onClick={() => toggleLiveChatMessage()}>
                                Show chat replay</div>
                            )
                        }
                        <VideoSuggesstion />
                </div>
           
        </div>
    )
}

export default WatchPage;