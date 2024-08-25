"use client";

import { useState } from "react";
import UserList from "./UserList";
import Chat from "./Chat";

const HomePage = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div className="flex flex-col items-center mt-20 p-4">
      <h1 className="text-3xl font-bold mb-8">Chat Application</h1>
      <div className="flex w-full max-w-6xl bg-gray-100 p-6 rounded-lg shadow-lg">
        <div className="w-full md:w-1/3 bg-white border-r border-gray-300 p-4">
          <h2 className="text-xl font-semibold mb-4">Users</h2>
          <UserList onSelectUser={setSelectedUser} />
        </div>
        <div className="w-full md:w-2/3 p-4">
          {selectedUser ? (
            <div className="bg-white border border-gray-300 rounded-lg shadow-md p-4 h-full">
              <h2 className="text-xl font-semibold mb-4">
                Chat with {selectedUser.email}
              </h2>
              <Chat selectedUser={selectedUser} />
            </div>
          ) : (
            <div className="flex items-center justify-center h-full text-gray-500">
              <p>Select a user to start chatting</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
