import React, { useEffect, useState } from "react";
import { COMMENT_API } from "../utils/config";
import { timeSince, formatCash } from "../utils/helper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";


const Comment = ({data, isReply}) => {
    const {snippet} = data
    var {authorDisplayName, authorProfileImageUrl, likeCount, publishedAt, textDisplay} = snippet;
    return !isReply ? (<></>) :
     (
        <div className="p-2">
            <div className="flex">
                <img className="mt-2 h-10 w-10 rounded-full" src={authorProfileImageUrl} alt="user" />
                <div className="pl-4">
                    <span className="text-xs font-semibold">@{authorDisplayName}</span>
                    <span className="text-xs font-semibold pl-2">{timeSince(publishedAt)} ago</span>
                    <p>{textDisplay}</p>
                </div>
            </div>
            <div className="flex items-center py-2 ml-[55px]">
                <FontAwesomeIcon icon={faThumbsUp} /> <span className="pl-1 pr-3">{formatCash(likeCount)}</span> <FontAwesomeIcon icon={faThumbsDown} />
            </div>
        </div>
    );
};

const CommentList = ({comments}) => {
    const [isReply, setIsReply] = useState()
    return comments.map((comment, index) => (
        <div  key={comment.id} className="bg-gray-100">
            <Comment data={comment?.snippet?.topLevelComment} isReply={true} />
            <div className="pl-5 ml-5">
                {
                <button onClick={() => {
                    setIsReply(index);
                }}
                    className="font-semibold text-sm pl-5 text-blue-600">
                    Show reply</button>
                }
                {
                    <button onClick={() => {
                    setIsReply();
                }}
                    className="font-semibold text-sm pl-5 text-blue-600">
                    Hide reply</button>
                }
                {comment?.replies?.comments?.map((comment) => 
                        <Comment data={comment} isReply={isReply === index ? true : false} />
                    )
                }
            </div>
        </div>
    ));
};

const CommentsContainer = ({videoId}) => {
    const [comments, setComments] = useState([]);
    useEffect(() => {
        getAllComments();
    },[videoId]);

    const getAllComments = async () => {
        const data = await fetch(COMMENT_API.replace("vId", videoId))
        const json = await data.json()
        setComments(json.items)
    }

    return (
        <div className="mt-5">
            <h1 className="font-bold text-xl">{comments?.length} Comments:</h1>
            {comments && <CommentList comments={comments} />}
        </div>
    );
};

export default CommentsContainer;