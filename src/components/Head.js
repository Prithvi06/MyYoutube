import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu, closeButtonList } from "../utils/appSlice";
import { SEARCH_SUGGESTION_API } from "../utils/config";
import { cacheResults } from "../utils/searchSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faBell, faVideo, faMicrophone } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Head = () => {
    const [searchQuery, setSearchQuery] = useState("")
    const [suggestions, setSuggestions] = useState([])
    const [showSuggestion, setShowsuggestion] = useState(false)

    const searchCache = useSelector(store => store.search);
        
    useEffect(() => {
        const timer = setTimeout(() => {
            if (searchCache[searchQuery]) {
                setSuggestions(searchCache[searchQuery])
            } else {
                getSearchSuggestion()
            }
        }, 200);
        return () => {
            console.log("clean")
            clearTimeout(timer);
        }
    }, [searchQuery])

    const getSearchSuggestion = async () => {
        console.log(searchQuery)
        const data = await fetch(SEARCH_SUGGESTION_API + searchQuery)
        const json = await data.json();
        console.log("suggestion", json[1])
        setSuggestions(json[1])

        // update cache
        dispatch(cacheResults({
            [searchQuery]: json[1]
        }))
    }

    const dispatch = useDispatch();
    const toggleMenuHandler = () => {
        dispatch(toggleMenu())
    }
    const hideButtonList = () => {
        dispatch(closeButtonList())
    } 
    function useOutsideAlert(ref) {
        useEffect(() => {
            
            function handleClickOutside(event) {
                if (ref.current && ! ref.current.contains(event.target)) {
                    setShowsuggestion(false)
                }
            }
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside)
            };

        }, [ref])
    }
    const wrapperRef = useRef(null);
    useOutsideAlert(wrapperRef);

    return (
        <div className="flex justify-between w-full px-5 py-2 fixed top-0 bg-white">
            <div className="flex ">
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
            <div className="basis-[45%]">
                <div className="w-full flex">
                    <input value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setShowsuggestion(true)}
                    // onBlur={() => setShowsuggestion(false)}
                    className="w-[80%] border border-gray-400 px-3 py-2 rounded-l-full" type="text" placeholder="Search" />
                    <button className="w-[12%] border border-gray-400 p-2 rounded-r-full bg-gray-100 hover:bg-gray-200"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                    <FontAwesomeIcon icon={faMicrophone} className="w-7 ml-5 p-3 h-5 bg-gray-100 hover:bg-gray-200 rounded-full cursor-pointer" />
                </div>

                {showSuggestion && (<div ref={wrapperRef} className="fixed z-10 bg-white py-2 w-[37%] shadow-lg rounded-lg border-gray-100">
                    <ul>
                    {
                        suggestions.map((s) => (
                            <Link to={"/result?search_query="+s} key={s} onClick={() => {
                                    setShowsuggestion(false);
                                    hideButtonList();
                                    }}>
                                <li key={s} 
                                    className="py-2 shadow-sm px-2 hover:bg-gray-100 cursor-pointer">
                                    <FontAwesomeIcon icon={faMagnifyingGlass} /> {s}
                                </li>
                            </Link>
                        ))
                    }
                    </ul>
                </div>)}
            </div>
            <div className="flex items-center gap-2">
                <div>
                    <FontAwesomeIcon icon={faVideo} className="w-5 h-5 p-3 hover:bg-gray-200 rounded-full cursor-pointer" />
                </div>
                <div>
                    <FontAwesomeIcon icon={faBell} className="w-5 h-5 p-3 hover:bg-gray-200 rounded-full cursor-pointer" />
                </div>
                <div>
                    <img
                        className="h-8"
                        src="https://cdn-icons-png.flaticon.com/512/666/666201.png" alt="user-icon" />
                </div>
            </div>
        </div>
    )
}

export default Head;