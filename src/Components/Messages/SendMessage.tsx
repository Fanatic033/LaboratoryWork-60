import React, {FormEvent, useState} from 'react';
import {newMessage} from "../../../types.ts";

interface Props {
    onSendMessage: (message: newMessage) => void;
}

const SendMessage: React.FC<Props> = ({onSendMessage}) => {
    const [author, setAuthor] = useState('');
    const [message, setMessage] = useState('');
    const submitMessage = (e: FormEvent) => {
        e.preventDefault();
        onSendMessage({author, message});
        setMessage('')
    }
    return (
        <form onSubmit={submitMessage}>
            <input
                type={"text"}
                value={author}
                placeholder={"Author"}
                onChange={(e) => setAuthor(e.target.value)}
            />
            <input
                type={"text"}
                value={message}
                placeholder={"Message"}
                onChange={(e) => setMessage(e.target.value)}
            />
            <button type={"submit"}>Send</button>
        </form>
    );
};

export default SendMessage;