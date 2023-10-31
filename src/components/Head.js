import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { SEARCH_SUGGESTION_API } from "../utils/config";
import { cacheResults } from "../utils/searchSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

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

    return (
        <div className="flex justify-between w-full px-5 py-3 shadow-lg fixed top-0 bg-white">
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
            <div className="basis-2/5">
                <div>
                    <input value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setShowsuggestion(true)}
                    onBlur={() => setShowsuggestion(false)}
                    className="w-11/12 border border-gray-400 px-3 py-2 rounded-l-full" type="text" placeholder="Search" />
                    <button className="border border-gray-400 p-2 rounded-r-full bg-gray-100"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                </div>

                {showSuggestion && (<div className="fixed bg-white py-2 px-2 w-[37%] shadow-lg rounded-lg border-gray-100">
                    <ul>
                    {
                        suggestions.map((s) => (
                            <li key={s} className="py-2 shadow-sm hover:bg-gray-100"> <FontAwesomeIcon icon={faMagnifyingGlass} /> {s}</li>
                        ))
                    }
                    </ul>
                </div>)}
            </div>
            <div className="">
                <img
                    className="h-8"
                     src="https://cdn-icons-png.flaticon.com/512/666/666201.png" alt="user-icon" />
            </div>
        </div>
    )
}

export default Head;