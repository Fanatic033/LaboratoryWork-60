import React from 'react';

const SendMessage = () => {
    return (
        <form>
            <input type={"text"} placeholder={"Author"}/>
            <input type={"text"} placeholder={"Message"}/>
            <button type={"submit"}>Send</button>
        </form>
    );
};

export default SendMessage;