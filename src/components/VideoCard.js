import React from "react";
import { useSelector } from "react-redux";

const VideoCard = ({info}) => {
    const isMenuOpen = useSelector((store) => store.app.isMenuOpen)
    const {snippet, statistics} = info;
    const {channelTitle, title, thumbnails, publishedAt} = snippet;

    const formatCash = n => {
        if (n < 1e3) return n;
        if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(1) + "K";
        if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + "M";
        if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) + "B";
        if (n >= 1e12) return +(n / 1e12).toFixed(1) + "T";
      };
    function timeSince(date) {
        var seconds = Math.floor((new Date() - new Date(date)) / 1000);
        var interval = Math.floor(seconds / 31536000);
        if (interval > 1) {
          return interval + " years";
        }
        interval = Math.floor(seconds / 2592000);
        if (interval > 1) {
          return interval + " months";
        }
        interval = Math.floor(seconds / 86400);
        if (interval > 1) {
          return interval + " days";
        }
        interval = Math.floor(seconds / 3600);
        if (interval > 1) {
          return interval + " hours";
        }
        interval = Math.floor(seconds / 60);
        if (interval > 1) {
          return interval + " minutes";
        }
        return Math.floor(seconds) + " seconds";
    }

    return (
        <div className={`m-2 ${isMenuOpen ? 'w-[25rem]' : 'w-[21rem]' } mb-8`}>
            <img className="hover:rounded-none rounded-lg w-[400px]" src={thumbnails.medium.url} alt="thumbnails" />
            <ul>
                <li className="font-bold pt-2">{title}</li>
                <li className="font-semibold text-gray-500">{channelTitle}</li>
                <li>{formatCash(1235000)} views  <span className="font-bold">.</span> {timeSince(publishedAt)} Ago</li>
            </ul>
        </div>
    )
}

export default VideoCard;