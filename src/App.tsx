import './App.css'
import axios, {AxiosError} from "axios";
import {useEffect, useState} from "react";
import {Message, newMessage} from "../types.ts";
import Messages from "./Components/Messages/Messages.tsx";
import SendMessage from "./Components/Messages/SendMessage.tsx";


const App = () => {
    const [posts, setPosts] = useState<Message[]>([]);
    const [error, setError] = useState<Error | null>(null);
    const url = 'http://146.185.154.90:8000/messages';

    const fetchData = async () => {
        try {
            const result = await axios.get(url)
            setPosts(result.data);
        } catch (error) {
            setError(error as AxiosError);
        }
    };
    useEffect(() => {
        void fetchData();
        const threeSecond = setInterval(fetchData, 3000);
        return () => clearInterval(threeSecond);
    }, []);

    const sendNewMessage = async (newMessage: newMessage) => {
        try {
            const data = new URLSearchParams();
            data.set('author', newMessage.author);
            data.set('message', newMessage.message);
            await axios.post(url, data);
            void fetchData()
        } catch (error) {
            setError(error as AxiosError);
        }
    }

    if (error) {
        return <div>{error.message}</div>;
    } else
        return (
            <>
                <div>
                    {posts.map(post => (
                        <Messages post={post} key={post._id}/>
                    ))}
                </div>
                <div>
                    <SendMessage onSendMessage={sendNewMessage}/>
                </div>
            </>
        )
}

export default App