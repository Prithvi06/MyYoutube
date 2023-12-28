import React from "react";
import { useSelector } from "react-redux";

const Shimmer = ({isSearch}) => {
    const isMenuOpen = useSelector((store) => store.app.isMenuOpen)
    return (
        <div className="mt-16">
            <div className={` ${isSearch === true && isMenuOpen ? 'flex-col ml-60' : isSearch === true && !isMenuOpen ?  'flex-col ml-24' : 'flex'} flex-wrap mt-20`}>
                <div className="m-2 w-[25rem] h-[16rem] rounded-lg bg-gray-100  mb-8"></div>
                <div className="m-2 w-[25rem] h-[16rem] rounded-lg bg-gray-100 mb-8"></div>
                <div className="m-2 w-[25rem] h-[16rem] rounded-lg bg-gray-100  mb-8"></div>
                <div className="m-2 w-[25rem] h-[16rem] rounded-lg bg-gray-100  mb-8"></div>
                <div className="m-2 w-[25rem] h-[16rem] rounded-lg bg-gray-100  mb-8"></div>
                <div className="m-2 w-[25rem] h-[16rem] rounded-lg bg-gray-100  mb-8"></div>
                <div className="m-2 w-[25rem] h-[16rem] rounded-lg bg-gray-100  mb-8"></div>
                <div className="m-2 w-[25rem] h-[16rem] rounded-lg bg-gray-100  mb-8"></div>
                <div className="m-2 w-[25rem] h-[16rem] rounded-lg bg-gray-100  mb-8"></div>
                <div className="m-2 w-[25rem] h-[16rem] rounded-lg bg-gray-100  mb-8"></div>
                <div className="m-2 w-[25rem] h-[16rem] rounded-lg bg-gray-100  mb-8"></div>
            </div>
        </div>
       
        
    )
};

export default Shimmer;