import {Message} from "../../../types.ts";
import React from "react";

interface Props {
    post: Message;
}

const Messages: React.FC<Props> = ({post}) => {
    return (
        <div key={post._id}>
            <p>{post.author}</p>
            <p>{post.message}</p>
            <p>{post.datetime}</p>
        </div>
    );
};

export default Messages;