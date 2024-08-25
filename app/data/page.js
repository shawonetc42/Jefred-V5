"use client";
import React, { useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid"; // Importing uuidv4 from uuid library
import { useSession } from "next-auth/react"; // Importing useSession hook from NextAuth.js

const PostForm = () => {
  const [post, setPosts] = useState("");
  const [notification, setNotification] = useState(null);
  const { data: session } = useSession(); // Fetching session data using useSession hook

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const postId = uuidv4(); // Generating a unique ID
      await axios.post("https://api1243.vercel.app/question", {
        id: postId,
        post,
        userid: session.user.id, // Include userId from session
        username: session.user.name, // Include userName from session
        image: session.user.image,
        uniqueId: postId,
        time: Date.now(),
      });
      setNotification({
        type: "success",
        message: "Post created successfully!",
      });
      setPosts("");
    } catch (error) {
      setNotification({
        type: "error",
        message: "Error creating post. Please try again later.",
      });
    }
  };

  return (
    <div className=" container max-w-2xl  mx-auto mt-20">
      <form onSubmit={handleSubmit}>
        <div className="flex mb-4 gap-2  items-center">
          <input
            type="text"
            id="title"
            placeholder="আপনি এমন কি জানেন যা অন্যরা জানেনা?"
            value={post}
            onChange={(e) => setPosts(e.target.value)}
            className="mt-1 p-5 py-5 border rounded-md w-full"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-5 rounded-md"
          >
            Post
          </button>
        </div>

        {notification && (
          <div
            className={`p-3 rounded-md ${
              notification.type === "success" ? "bg-green-500" : "bg-red-500"
            } text-white mb-4`}
          >
            {notification.message}
          </div>
        )}
      </form>
    </div>
  );
};

export default PostForm;
