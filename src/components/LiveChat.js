import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName } from "../utils/helper";

const data = [
    {
        name: "Prithvi Raj",
        message: "Good morning 🙏"
    },
    {
        name: "Prithvi Raj",
        message: "Good morning 🙏"
    },
    {
        name: "Prithvi",
        message: "Good Night 🙏"
    },
    {
        name: "Prithvi",
        message: "Good Night 🙏"
    },
]

const LiveChat = () => {
    const dispatch = useDispatch();

    const ChatMessages = useSelector((store) => store.chat.messages)

    useEffect(() => {
        const i = setInterval(() => {
            // API Polling
            console.log("API Polling")
            dispatch(addMessage({
                name: generateRandomName(),
                message: "Good morning 🙏"
            }))
        }, 2000);

        return () => clearInterval(i);
    }, []);

    return (
        <div className="w-full h-[500px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll">
            {
                ChatMessages.map((c, index) => (
                    <ChatMessage key={index} name={c.name} message={c.message} />
                ))
            }
            
        </div>
    )
};

export default LiveChat;