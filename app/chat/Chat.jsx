"use client";

import { useState, useEffect } from "react";

const Chat = ({ selectedUser }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch("http://localhost:5000/auth/profile", {
          method: "GET",
          credentials: "include", // Include cookies for authentication
        });
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setCurrentUser(data.email); // Assuming 'email' is returned
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchProfile();
  }, []);

  useEffect(() => {
    const fetchMessages = async () => {
      if (selectedUser && currentUser) {
        try {
          const response = await fetch(
            `http://localhost:5000/chat/messages?sender=${currentUser}&receiver=${selectedUser.email}`,
            {
              method: "GET",
              credentials: "include", // Include cookies for authentication
            }
          );
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          const data = await response.json();
          setMessages(data);
        } catch (error) {
          console.error("Error fetching messages:", error);
        }
      }
    };

    fetchMessages();
  }, [selectedUser, currentUser]);

  const handleSendMessage = async () => {
    if (selectedUser && newMessage && currentUser) {
      try {
        const response = await fetch("http://localhost:5000/chat/send", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            sender: currentUser,
            receiver: selectedUser.email,
            message: newMessage,
          }),
          credentials: "include", // Include cookies for authentication
        });
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        setNewMessage("");
        // Refresh messages after sending
        const fetchResponse = await fetch(
          `http://localhost:5000/chat/messages?sender=${currentUser}&receiver=${selectedUser.email}`,
          {
            method: "GET",
            credentials: "include", // Include cookies for authentication
          }
        );
        if (!fetchResponse.ok) {
          throw new Error(`HTTP error! Status: ${fetchResponse.status}`);
        }
        const data = await fetchResponse.json();
        setMessages(data);
      } catch (error) {
        console.error("Error sending message:", error);
      }
    }
  };

  return (
    <div className="flex flex-col h-screen max-w-md mx-auto bg-white shadow-lg rounded-lg">
      <header className="bg-gray-800 text-white p-4 rounded-t-lg">
        <h2 className="text-lg font-semibold">
          Chat with {selectedUser?.email}
        </h2>
      </header>
      <main className="flex-1 p-4 overflow-y-auto bg-gray-100">
        <div className="space-y-4">
          {messages.map((msg) => (
            <div
              key={msg._id}
              className={`flex ${
                msg.sender === currentUser ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-xs p-3 rounded-lg ${
                  msg.sender === currentUser
                    ? "bg-blue-500 text-white"
                    : "bg-gray-300 text-black"
                }`}
              >
                <strong className="block mb-1">{msg.sender}: </strong>
                <p>{msg.message}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
      <footer className="bg-gray-800 p-4 rounded-b-lg">
        <div className="flex">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            className="flex-1 p-2 rounded-l-lg border border-gray-300"
            placeholder="Type your message..."
          />
          <button
            onClick={handleSendMessage}
            className="p-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600"
          >
            Send
          </button>
        </div>
      </footer>
    </div>
  );
};

export default Chat;
