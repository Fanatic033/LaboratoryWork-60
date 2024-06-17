import './App.css'
import axios, {AxiosError} from "axios";
import {useEffect, useState} from "react";
import {Message,} from "../types.ts";
import Messages from "./Components/Messages/Messages.tsx";
import SendMessage from "./Components/Messages/SendMessage.tsx";


const App = () => {
    const [posts, setPosts] = useState<Message[]>([]);
    const [error, setError] = useState<Error | null>(null);
    const url = 'http://146.185.154.90:8000/messages';
    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios.get(url)
                setPosts(result.data);
            } catch (error) {
                setError(error as AxiosError);
            }
        };
        void fetchData();
        const threeSecond = setInterval(fetchData, 3000);
        return () => clearInterval(threeSecond);
    }, []);

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
                    <SendMessage/>
                </div>
            </>
        )
}

export default App