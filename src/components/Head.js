import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
    const dispatch = useDispatch();

    const toggleMenuHandler = () => {
        dispatch(toggleMenu())
    }

    return (
        <div className="grid grid-flow-col  px-2 m-2 h-14 shadow-lg">
            <div className="flex col-span-3">
                <img
                    onClick={() => toggleMenuHandler()}
                    className="h-9 cursor-pointer"
                    src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-5.png" alt="menu" />
                <a href="/">
                    <img 
                        className="h-10 mx-2"
                        src="https://www.shutterstock.com/image-vector/youtube-logo-social-media-icon-260nw-2310134969.jpg" alt="youtube-logo" />
                </a>
            </div>
            <div className="col-span-8 place-content-center">
                <input className="w-3/5 border border-gray-400 px-3 py-2 rounded-l-full" type="text" placeholder="Search" />
                <button className="border border-gray-400 p-2 rounded-r-full bg-gray-100">🔍</button>
            </div>
            <div className="col-span-1">
                <img
                    className="h-8"
                     src="https://cdn-icons-png.flaticon.com/512/666/666201.png" alt="user-icon" />
            </div>
        </div>
    )
}

export default Head