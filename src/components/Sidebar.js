import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
    const isMenuOpen = useSelector((store) => store.app.isMenuOpen)
    
    // Early return pattern
    if (!isMenuOpen) return null; 

    return (
        <div className="p-5 w-52 shadow-lg">
            <ul className="">
                <li>Home</li>
                <li>Shorts</li>
                <li>Videos</li>
                <li>Live</li>
            </ul>
            <h1 className="font-bold pt-5">Subscriptions</h1>
            <ul>
                <li>Music</li>
                <li>Sports</li>
                <li>Gaming</li>
                <li>Movie</li>
                <li>News</li>
            </ul>

            <h1 className="font-bold pt-5">Watch later</h1>
            <ul>
                <li>Music</li>
                <li>Sports</li>
                <li>Gaming</li>
                <li>Movie</li>
                <li>News</li>
            </ul>
        </div>
    )
}

export default Sidebar;