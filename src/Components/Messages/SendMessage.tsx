import React, {FormEvent, useState} from 'react';
import {newMessage} from "../../../types.ts";
import Form from "react-bootstrap/Form"
import {Button, FormControl, FormGroup, FormLabel,} from "react-bootstrap";

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
        <Form onSubmit={submitMessage}>
            <h3>Send Message</h3>
            <FormGroup className="mb-3">
                <FormLabel>Author</FormLabel>
                <FormControl
                    type={"text"}
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    placeholder={"enter Author"}
                    required
                />
            </FormGroup>

            <FormGroup className="mb-3">
                <FormLabel>Message</FormLabel>
                <FormControl
                    type={"text"}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={"enter Message"}
                    required
                />
            </FormGroup>

            <Button type="submit" variant="secondary">Send</Button>
        </Form>
    );
};

export default SendMessage;