import { useEffect, useState } from "react";
import axios from "axios";
import socket from "../utils/socket";

const MessageList = ({ userId, receiverId }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/messages/${userId}/${receiverId}`
      );
      setMessages(response.data);
    };

    fetchMessages();

    socket.on("newMessage", (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    return () => {
      socket.off("newMessage");
    };
  }, [userId, receiverId]);

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      {messages.map((msg) => (
        <div key={msg._id} className="mb-2 p-2 bg-white rounded shadow">
          <p className="text-gray-800">{msg.message}</p>
          <p className="text-gray-800">{msg.senderId}</p>
        </div>
      ))}
    </div>
  );
};

export default MessageList;
