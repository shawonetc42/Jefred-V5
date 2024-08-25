"use client";

import { useState, useEffect } from "react";

const UserList = ({ onSelectUser }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:5000/chat/users");
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold p-4 border-b border-gray-300">
        Select a User
      </h2>
      <ul className="divide-y divide-gray-200">
        {users.map((user) => (
          <li
            key={user._id}
            onClick={() => onSelectUser(user)}
            className="flex items-center p-4 cursor-pointer hover:bg-gray-100 transition-colors"
          >
            <div className="flex-shrink-0 h-12 w-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 font-bold">
              {user.email[0].toUpperCase()}
            </div>
            <div className="ml-4 text-lg font-medium text-gray-800">
              {user.email}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
