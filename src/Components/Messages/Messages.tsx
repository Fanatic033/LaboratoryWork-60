import {Message} from "../../../types.ts";
import React from "react";
import {Card, CardBody, CardFooter, CardHeader, CardText} from "react-bootstrap";

interface Props {
    post: Message;
}

const Messages: React.FC<Props> = ({post}) => {
    return (
        <div className="mb-5">
        <Card key={post._id} className='text-center'>
            <CardHeader>Author: {post.author}</CardHeader>
            <CardBody>
                <CardText>
                    {post.message}
                </CardText>
            </CardBody>
            <CardFooter className="text-muted">{new Date(post.datetime).toLocaleString()}</CardFooter>
        </Card>
        </div>
    );
};

export default Messages;