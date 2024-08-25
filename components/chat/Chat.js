"use client"; // For Next.js 13+ usage

import { useState, useEffect } from "react";

export default function ChatPage() {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);
  const [sender, setSender] = useState("user1"); // Replace with actual user data
  const [receiver, setReceiver] = useState("user2"); // Replace with actual user data

  const fetchMessages = async () => {
    try {
      const res = await fetch(
        `http://localhost:5000/chat/messages?sender=${sender}&receiver=${receiver}`,
        {
          method: "GET",
          credentials: "include", // Include cookies in request
        }
      );

      if (res.ok) {
        const data = await res.json();
        setMessages(data);
      } else {
        const errorData = await res.json();
        setError(errorData.error);
      }
    } catch (err) {
      setError("Failed to fetch messages");
    }
  };

  const sendMessage = async () => {
    try {
      const res = await fetch("http://localhost:5000/chat/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sender,
          receiver,
          message,
        }),
        credentials: "include", // Include cookies in request
      });

      if (res.ok) {
        setMessage(""); // Clear the input field
        fetchMessages(); // Refresh the message list
      } else {
        const errorData = await res.json();
        setError(errorData.error);
      }
    } catch (err) {
      setError("Failed to send message");
    }
  };

  useEffect(() => {
    fetchMessages();
  }, [sender, receiver]);

  if (error) return <p>Error: {error}</p>;

  return (
    <div className="mt-20">
      <h1>Chat with {receiver}</h1>
      <div className="messages">
        {messages.map((msg) => (
          <div key={msg._id}>
            <strong>{msg.sender}:</strong> {msg.message}
          </div>
        ))}
      </div>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message here..."
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}
