import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName } from "../utils/helper";

const data = [
    {
        name: "Prithvi Raj",
        message: "Good morning 1🙏"
    },
    {
        name: "Prithvi Raj",
        message: "Good morning 2🙏"
    },
    {
        name: "Prithvi",
        message: "Good Night3 🙏"
    },
    {
        name: "Prithvi",
        message: "Good Night 4🙏"
    },
    {
        name: "Prithvi",
        message: "Good Night 5🙏"
    },
]

const LiveChat = () => {
    const [liveMessage, setLiveMessage] = useState("")

    const dispatch = useDispatch();

    const ChatMessages = useSelector((store) => store.chat.messages)

    useEffect(() => {
        const i = setInterval(() => {
            // API Polling
            dispatch(addMessage({
                name: generateRandomName(),
                message: "Good morning 🙏"
            }))
        }, 3000);
        return () => clearInterval(i);
    }, []);

    return (
        <>
        <div className="h-[450px] border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
                {
                    ChatMessages.map((c, index) => (
                        <ChatMessage key={index} name={c.name} message={c.message} />
                    ))
                }
        </div>
        <form className="w-full p-2 flex border border-black rounded-lg"
            onSubmit={(e) => {
                e.preventDefault()
                dispatch(addMessage({
                    name: "Prithvi Raj",
                    message: liveMessage
                }));
                setLiveMessage("")
        }} >
            <input type="text" value={liveMessage}
                className="w-[70%] border border-black rounded-lg px-3 py-1"
                onChange={(e) => setLiveMessage(e.target.value)} />
            <button className="px-2 mx-3 bg-green-500 rounded-lg">Submit</button>
        </form>
        </>
    )
};

export default LiveChat;