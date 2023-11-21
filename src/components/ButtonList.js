import React from "react";
import Button from "./Button";
import { useSelector } from "react-redux";


const list = ["All", "Gaming", "Songs", "Live", "Music", "Python", "React", "JavaScript", "Gaming2", "Songs2", "Live2", "Music2"]

const ButtonList = () => {
    const isMenuOpen = useSelector((store) => store.app.isMenuOpen)
    const isButtonList = useSelector((store) => store.app.isButtonList)

    return ! isButtonList ? (<></>) :
    (
        <div className={`mt-16 ${isMenuOpen ? 'ml-60' : 'ml-24'}`}>
            <div className="flex fixed -z-10 bg-white">
                
                {list.map((name) => 
                    <Button key={name} name={name}/>
                )}
                
            </div>
        </div>
    );
};

export default ButtonList;