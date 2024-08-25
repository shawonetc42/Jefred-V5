"use client";
import React, { useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid"; // Importing uuidv4 from uuid library
import { useSession } from "next-auth/react"; // Importing useSession hook from NextAuth.js
import { useRouter } from "next/navigation"; // Importing useRouter from Next.js

const PopupModal = ({ isOpen, onClose }) => {
  const [post, setPost] = useState("");
  const [notification, setNotification] = useState(null);
  const { data: session } = useSession(); // Fetching session data using useSession hook
  const router = useRouter(); // Initializing useRouter

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
      const postId = intUUID; // Generating a unique ID
      await axios.post("https://api1243.vercel.app/question", {
        id: postId,
        questiontext: post,
        userid: session.uid, // Include userId from session
        username: session.user.name, // Include userName from session
        image: session.user.image,
        uniqueId: postId,
        time: Date.now(),
      });

      setNotification({
        type: "success",
        message: "পোস্ট সফলভাবে তৈরি হয়েছে!",
      });
      setPost("");
      setTimeout(() => {
        setNotification(null);
        onClose(); // Close the modal after showing the notification
        router.push(`/a/${postId}`); // Navigate to the new post page
      }, 3000); // Show the notification for 3 seconds
    } catch (error) {
      setNotification({
        type: "error",
        message:
          "পোস্ট তৈরি করতে সমস্যা হয়েছে। অনুগ্রহ করে পরে আবার চেষ্টা করুন।",
      });
      setTimeout(() => {
        setNotification(null);
      }, 3000); // Show the notification for 3 seconds
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-2xl max-w-md w-full">
        <h2 className="font-semibold mb-6 p-8 text-gray-800 border-b py-2 mt-2">
          প্রশ্ন লিখুন
        </h2>
        <form onSubmit={handleSubmit} className="p-8 ">
          <textarea
            className="w-full p-3  rounded-lg outline-none"
            rows="4"
            placeholder="আপনি কি কোন কিছু জিজ্ঞাসা করতে চান? "
            value={post}
            onChange={(e) => setPost(e.target.value)}
          ></textarea>
          <div className="flex justify-end mt-6">
            <button
              type="button"
              className="bg-gray-300 text-white px-4 py-2 rounded-lg mr-2 hover:bg-red-700 transition-colors duration-300"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              Submit
            </button>
          </div>
          {notification && (
            <div
              className={`p-3 rounded-md mt-4 ${
                notification.type === "success" ? "bg-gray-400" : "bg-red-500"
              } text-white`}
            >
              {notification.message}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default PopupModal;
