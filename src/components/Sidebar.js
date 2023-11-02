import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faWandMagicSparkles, faTicket, faUserTie, faClockRotateLeft, faCirclePlay,
         faClock, faFire, faBagShopping, faMusic, faClapperboard, faTowerBroadcast, faGamepad,
         faNewspaper, faTrophy, faPodcast } from '@fortawesome/free-solid-svg-icons'
const Sidebar = () => {
    const isMenuOpen = useSelector((store) => store.app.isMenuOpen)
    
    // Early return pattern
    if (!isMenuOpen) return (
        <div className="p-2  w-[5%] fixed bottom-0 top-16">
            <ul className="">
            <Link to={"/"}>
                <li className="flex flex-col items-center gap-2 px-8  py-5 hover:bg-gray-200 rounded-xl cursor-pointer">
                    <FontAwesomeIcon icon={faHouse} className="h-5" />
                    <span className="text-[12px]">Home</span>
                </li>
            </Link>
                <li className="flex flex-col items-center gap-2 px-8  py-5 hover:bg-gray-200 rounded-xl cursor-pointer">
                    <FontAwesomeIcon icon={faWandMagicSparkles} className="h-5" />
                    <span className="text-[12px]">Shorts</span>
                </li>
                <li className="flex flex-col items-center gap-2 px-8  py-5 hover:bg-gray-200 rounded-xl cursor-pointer">
                    <FontAwesomeIcon icon={faTicket} className="h-5" />
                    <span className="text-[10px]">Subscriptions</span>
                </li>
                <li className="flex flex-col items-center gap-2 px-8  py-5 hover:bg-gray-200 rounded-xl cursor-pointer">
                    <FontAwesomeIcon icon={faUserTie} className="h-5" />
                    <span className="text-[12px] text-center">Your channel</span>
                </li>
                <li className="flex flex-col items-center gap-2 px-8  py-5 hover:bg-gray-200 rounded-xl cursor-pointer">
                    <FontAwesomeIcon icon={faClockRotateLeft} className="h-5" />
                    <span className="text-[12px]">History</span>
                </li>
                <li className="flex flex-col items-center gap-2 px-8  py-5 hover:bg-gray-200 rounded-xl cursor-pointer">
                    <FontAwesomeIcon icon={faCirclePlay} className="h-5" />
                    <span className="text-[12px] text-center">Your videos</span>
                </li>
                <li className="flex flex-col items-center gap-2 px-8  py-5 hover:bg-gray-200 rounded-xl cursor-pointer">
                    <FontAwesomeIcon icon={faClock} className="h-5" />
                    <span className="text-[12px]">Watch later</span>
                </li>
            </ul>
        </div>
    ); 

    return (
        <div className="p-2  w-[15%] overflow-y-scroll fixed bottom-0 top-16">
            <ul className="">
            <Link to={"/"}>
                <li className="flex items-center gap-7 px-5  py-2 bg-gray-100 rounded-xl cursor-pointer">
                    <FontAwesomeIcon icon={faHouse} />
                    Home
                </li>
            </Link>
                <li className="flex items-center gap-7 px-5 py-2 hover:bg-gray-100 rounded-xl cursor-pointer">
                <FontAwesomeIcon icon={faWandMagicSparkles} />
                    Shorts
                </li>
                <li className="flex items-center gap-7 px-5 py-2 hover:bg-gray-100 rounded-xl cursor-pointer">
                <FontAwesomeIcon icon={faTicket} />
                    Subscriptions
                </li>
            </ul>
            <hr className="my-4"/>
            <h1 className="font-bold flex items-center gap-7 px-5 py-2 hover:bg-gray-100 rounded-xl cursor-pointer">You</h1>
            <ul>
                <li className="flex items-center gap-7 px-5 py-2 hover:bg-gray-100 rounded-xl cursor-pointer">
                    <FontAwesomeIcon icon={faUserTie} />
                    Your channel
                </li>
                <li className="flex items-center gap-7 px-5 py-2 hover:bg-gray-100 rounded-xl cursor-pointer">
                    <FontAwesomeIcon icon={faClockRotateLeft} />
                    History
                </li>
                <li className="flex items-center gap-7 px-5 py-2 hover:bg-gray-100 rounded-xl cursor-pointer">
                    <FontAwesomeIcon icon={faCirclePlay} />
                    Your videos
                </li>
                <li className="flex items-center gap-7 px-5 py-2 hover:bg-gray-100 rounded-xl cursor-pointer">
                    <FontAwesomeIcon icon={faClock} />
                    Watch later
                </li>
            </ul>
            <hr className="my-4"/>
            <h1 className="font-bold flex items-center gap-7 px-5 py-2 hover:bg-gray-100 rounded-xl cursor-pointer">Explore</h1>
            <ul>
                <li className="flex items-center gap-7 px-5 py-2 hover:bg-gray-100 rounded-xl cursor-pointer">
                    <FontAwesomeIcon icon={faFire} />
                    Trending
                </li>
                <li className="flex items-center gap-7 px-5 py-2 hover:bg-gray-100 rounded-xl cursor-pointer">
                    <FontAwesomeIcon icon={faBagShopping} />
                    Shopping
                </li>
                <li className="flex items-center gap-7 px-5 py-2 hover:bg-gray-100 rounded-xl cursor-pointer">
                    <FontAwesomeIcon icon={faMusic} />
                    Music
                </li>
                <li className="flex items-center gap-7 px-5 py-2 hover:bg-gray-100 rounded-xl cursor-pointer">
                    <FontAwesomeIcon icon={faClapperboard} />
                    Movie
                </li>
                <li className="flex items-center gap-7 px-5 py-2 hover:bg-gray-100 rounded-xl cursor-pointer">
                    <FontAwesomeIcon icon={faTowerBroadcast} />
                    Live
                </li>
                <li className="flex items-center gap-7 px-5 py-2 hover:bg-gray-100 rounded-xl cursor-pointer">
                    <FontAwesomeIcon icon={faGamepad} />
                    Gaming
                </li>
                <li className="flex items-center gap-7 px-5 py-2 hover:bg-gray-100 rounded-xl cursor-pointer">
                    <FontAwesomeIcon icon={faNewspaper} />
                    News
                </li>
                <li className="flex items-center gap-7 px-5 py-2 hover:bg-gray-100 rounded-xl cursor-pointer">
                    <FontAwesomeIcon icon={faTrophy} />
                    Sports
                </li>
                <li className="flex items-center gap-7 px-5 py-2 hover:bg-gray-100 rounded-xl cursor-pointer">
                    <FontAwesomeIcon icon={faPodcast} />
                    Podcast
                </li>
            </ul>
        </div>
    )
}

export default Sidebar;