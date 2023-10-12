import React from "react";

const Sidebar = () => {
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

export default Sidebar