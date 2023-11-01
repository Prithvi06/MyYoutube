import React from "react";
import Button from "./Button";

const list = ["All", "Gaming", "Songs", "Live", "Music", "Python", "React", "JavaScript", "Gaming", "Songs", "Live", "Music", "Chat"]

const ButtonList = () => {

    return (
        <div className="flex fixed bg-white">
            
            {list.map((name) => 
                <Button key={name} name={name}/>
            )}
            
        </div>
    );
};

export default ButtonList;