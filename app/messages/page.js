"use client";
// pages/users.js

import { useEffect, useState } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";
import io from "socket.io-client";
import Image from "next/image";
const socket = io("http://localhost:5000");

function UsersPage() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const { data: session } = useSession();
  const [currentChatUser, setCurrentChatUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessageText, setNewMessageText] = useState("");
  const [loadingUsers, setLoadingUsers] = useState(false);
  const [loadingMessages, setLoadingMessages] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUsers();
    setupSocketListeners();
  }, []);

  const fetchUsers = async () => {
    setLoadingUsers(true);
    try {
      const response = await axios.get("http://localhost:5000/api/users");
      setUsers(response.data);
      setFilteredUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
      setError("Failed to fetch users.");
    } finally {
      setLoadingUsers(false);
    }
  };

  const handleSearch = async () => {
    setLoadingUsers(true);
    try {
      const response = await axios.get(
        `http://localhost:5000/api/users/search?name=${searchQuery}`
      );
      setFilteredUsers(response.data);
    } catch (error) {
      console.error("Error searching users:", error);
      setError("Failed to search users.");
    } finally {
      setLoadingUsers(false);
    }
  };

  const clearSearch = () => {
    setSearchQuery("");
    setFilteredUsers(users);
  };

  const startChatWithUser = async (userId) => {
    setLoadingMessages(true);
    try {
      const response = await axios.get(
        `http://localhost:5000/api/messages/${userId}`,
        {
          headers: {
            Authorization: session.accessToken,
          },
        }
      );
      setMessages(response.data);
      setCurrentChatUser(userId);
    } catch (error) {
      console.error("Error fetching messages:", error);
      setError("Failed to fetch messages.");
    } finally {
      setLoadingMessages(false);
    }
  };

  const sendMessage = async () => {
    try {
      const newMessage = {
        text: newMessageText,
        receiver_id: currentChatUser,
      };
      await axios.post("http://localhost:5000/api/messages", newMessage, {
        headers: {
          Authorization: session.accessToken,
        },
      });
      setNewMessageText("");
    } catch (error) {
      console.error("Error sending message:", error);
      setError("Failed to send message.");
    }
  };

  const setupSocketListeners = () => {
    socket.on("connect", () => {
      console.log("Connected to server");
    });

    socket.on("new_message", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    socket.on("disconnect", () => {
      console.log("Disconnected from server");
    });
  };

  return (
    <div className="mt-8 mx-auto container max-w-6xl">
      <h1 className="text-3xl font-bold mb-6">Users</h1>

      {error && <div className="text-red-500 mb-4">{error}</div>}

      <div className="mb-4 flex items-center">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full border border-gray-300 rounded py-2 px-3 mr-2 focus:outline-none"
          placeholder="Search by user name..."
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          disabled={loadingUsers || searchQuery === ""}
        >
          {loadingUsers ? "Searching..." : "Search"}
        </button>
        <button
          onClick={clearSearch}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded ml-2"
        >
          Clear
        </button>
      </div>

      <div className="flex gap-8">
        <div className="flex flex-col max-w-[366px]">
          <div className="flex justify-center py-0.5 w-full text-base leading-5 whitespace-nowrap bg-white text-zinc-800">
            <div className="flex gap-5 justify-center px-4 py-2.5 w-full bg-white border-b border-solid border-zinc-200">
              <div className="">chat</div>
              <Image
                loading="lazy"
                src="..."
                alt="chat"
                width={20}
                height={20}
                className="shrink-0 shadow-sm aspect-[2.56] rounded-[1000px] w-[77px]"
              />
            </div>
          </div>
          <div className="flex gap-4 justify-center items-start py-2.5 pl-4 bg-gray-100 border-b border-solid border-zinc-200">
            <div className="flex flex-auto gap-2 my-auto">
              {/* <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ee1fcbe1fd0827be9dbaf1aa12a73bbe2e8d394d238f06fe8b4c457a79f99344?"
                className="shrink-0 self-start w-8 aspect-square"
              /> */}
              <div className="flex flex-col grow shrink-0 basis-0 w-fit">
                <div className="flex gap-5 justify-between leading-[140%]">
                  <div className="w-1/2">
                    {loadingUsers && (
                      <p className="text-gray-500">Loading users...</p>
                    )}
                    {!loadingUsers && (
                      <ul className="divide-y divide-gray-300">
                        {filteredUsers.map((user) => (
                          <li
                            key={user._id}
                            className="cursor-pointer py-2 px-3 hover:bg-gray-100"
                            onClick={() => startChatWithUser(user._id)}
                          >
                            {user.name}
                            <div className="text-sm leading-5 text-neutral-400">
                              ...
                            </div>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="shrink-0 self-start w-0.5 bg-blue-600 h-[73px] rounded-[1000px_0px_0px_1000px]" />
          </div>
        </div>

        <div className="flex flex-col w-full bg-white shadow rounded-lg p-4">
          {currentChatUser && (
            <>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Chat with {currentChatUser}
              </h2>

              {loadingMessages && (
                <p className="text-gray-500 animate-pulse">
                  Loading messages...
                </p>
              )}
              {!loadingMessages && (
                <ul className="divide-y divide-gray-200 max-h-96 overflow-y-auto">
                  {messages.map((message) => (
                    <li
                      key={message._id}
                      className="py-2 px-3 hover:bg-gray-100 transition duration-300"
                    >
                      <div className="flex items-center space-x-2">
                        <span className="font-bold text-gray-700">
                          {message.user}
                        </span>
                        <span className="text-sm text-gray-500">
                          ({new Date(message.timestamp).toLocaleString()})
                        </span>
                      </div>
                      <p className="text-gray-800">{message.text}</p>
                    </li>
                  ))}
                </ul>
              )}

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  sendMessage();
                }}
                className="mt-4 flex items-center"
              >
                <input
                  type="text"
                  value={newMessageText}
                  onChange={(e) => setNewMessageText(e.target.value)}
                  className="flex-grow border border-gray-300 rounded-l py-2 px-4 focus:outline-none focus:border-blue-500"
                  placeholder="Type your message..."
                />
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r"
                >
                  Send
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default UsersPage;
