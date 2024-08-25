import { useState } from "react";
import axios from "axios";
import socket from "../utils/socket";
import { useSession } from "next-auth/react";

const ChatBox = ({ userId, receiverId }) => {
  const [message, setMessage] = useState("");
  const { data: session } = useSession();

  const sendMessage = async () => {
    if (message.trim()) {
      const newMessage = {
        senderId: session?.user?.name,
        receiverId,
        message,
      };

      await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/messages`,
        newMessage
      );
      socket.emit("newMessage", newMessage);
      setMessage("");
    }
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <textarea
        className="w-full p-2 border border-gray-300 rounded mb-2"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={sendMessage}
      >
        Send
      </button>
    </div>
  );
};

export default ChatBox;
