"use client";
import React, { useState } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import the ReactQuill styles

const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    ["clean"],
  ],
};

const StatusPost = ({ isOpen, onClose }) => {
  const [post, setPost] = useState("");
  const [notification, setNotification] = useState(null);
  const [activeTab, setActiveTab] = useState("create"); // New state for active tab
  const { data: session } = useSession();
  const router = useRouter();

  const generatedUUIDs = new Set();

  function generate16DigitUUID() {
    const numericUUID = Math.floor(
      1000000000000000 + Math.random() * 9000000000000000
    ).toString();
    return numericUUID;
  }

  function generateUnique16DigitUUID() {
    let numericUUID;
    do {
      numericUUID = generate16DigitUUID();
    } while (generatedUUIDs.has(numericUUID));
    generatedUUIDs.add(numericUUID);
    return numericUUID;
  }

  const uniqueNumericUUID = generateUnique16DigitUUID();
  const intUUID = parseInt(uniqueNumericUUID, 10);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const postId = intUUID;
      await axios.post("https://api1243.vercel.app/question", {
        id: postId,
        questiontext: post,
        userid: session.uid,
        username: session.user.name,
        image: session.user.image,
        uniqueId: postId,
        time: Date.now(),
      });

      setNotification({
        type: "success",
        message: "Post created successfully!",
      });
      setPost("");
      setTimeout(() => {
        setNotification(null);
        onClose();
        router.push(`/posts/${postId}`);
      }, 3000);
    } catch (error) {
      setNotification({
        type: "error",
        message: "Error creating post. Please try again later.",
      });
      setTimeout(() => {
        setNotification(null);
      }, 3000);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-2xl max-w-prose w-full">
        <h2 className="font-semibold mb-6 text-gray-800">
          লিখো যা তুমি লিখতে চাও...
        </h2>
        <div className="mb-4">
          <button
            className={`mr-4 px-4 py-2 ${
              activeTab === "create"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800"
            } rounded-lg`}
            onClick={() => setActiveTab("create")}
          >
            Create Post
          </button>
          <button
            className={`px-4 py-2 ${
              activeTab === "drafts"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800"
            } rounded-lg`}
            onClick={() => setActiveTab("drafts")}
          >
            View Drafts
          </button>
        </div>
        {activeTab === "create" && (
          <form onSubmit={handleSubmit}>
            <ReactQuill
              value={post}
              onChange={setPost}
              className="w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-96 overflow"
              placeholder="Type your question here..."
              theme="snow"
              modules={modules}
            />
            <div className="flex justify-end mt-16">
              <button
                type="button"
                className="bg-red-600 text-white px-4 py-2 rounded-lg mr-2 hover:bg-red-700 transition-colors duration-300"
                onClick={onClose}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                Submit
              </button>
            </div>
            {notification && (
              <div
                className={`p-3 rounded-md mt-4 ${
                  notification.type === "success"
                    ? "bg-green-500"
                    : "bg-red-500"
                } text-white`}
              >
                {notification.message}
              </div>
            )}
          </form>
        )}
        {activeTab === "drafts" && (
          <div>
            {/* Drafts content goes here */}
            <p>No drafts available.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default StatusPost;
