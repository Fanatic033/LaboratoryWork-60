export interface Message {
    _id: string;
    message: string;
    author: string;
    datetime: string;
}

export interface newMessage {
    author: string;
    message: string;
}