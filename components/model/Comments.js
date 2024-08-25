"use client";
import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import ShowComments from "./showComments";
import { BiDownvote, BiUpvote } from "react-icons/bi";
import Image from "next/image";

export default function CommentActions({ item }) {
  const [upvoteCount, setUpvoteCount] = useState(0);
  const [showComments, setShowComments] = useState(false); // State to manage comment visibility

  useEffect(() => {
    const fetchUpvoteCount = async () => {
      try {
        const response = await fetch(
          `https://api1243.vercel.app/questions/${item._id}/upvoteCount`
        );
        if (response.ok) {
          const result = await response.json();
          setUpvoteCount(result.upvoteCount);
        } else {
          console.error("Failed to fetch upvote count");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchUpvoteCount();
  }, [item._id]); // Corrected dependency array

  const handleUpvote = async () => {
    try {
      const response = await fetch(
        `https://api1243.vercel.app/questions/${item._id}/upvote`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        const result = await response.json();
        setUpvoteCount(result.newUpvoteCount);
      } else {
        console.error("Failed to upvote");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const toggleComments = () => {
    setShowComments(!showComments); // Toggle comment visibility
  };

  return (
    <div>
      <div className="flex justify-between items-center gap-2 mt-3.5 max-md:flex-wrap max-md:max-w-full">
        <div className="flex gap-2 items-center px-px">
          <div className="flex items-center gap-2 px-2 py-2 bg-gray-100 rounded-full">
            {/* Upvote button */}
            <button
              className="flex text-blue-500 items-center gap-1"
              onClick={handleUpvote}
            >
              <BiUpvote />
              <span className="text-gray-500 text-xs border-r border-gray-300 px-2">
                আপভোট . {upvoteCount}
              </span>
            </button>
            {/* Downvote button */}
            <button className="flex text-gray-500 items-center gap-1">
              <BiDownvote />
            </button>
          </div>
          {/* Comments button */}
          <button className="flex items-center gap-1" onClick={toggleComments}>
            <Image src="/comments.svg" alt="Comments" width={20} height={20} />
          </button>
          {/* Share button */}
          <Link href={`/posts/${item.id}`} passHref>
            <button className="flex items-center gap-1">
              <Image src="/Send.svg" alt="Share" width={20} height={20} />
            </button>
          </Link>
        </div>
        {/* Save button */}
        <button className="flex items-center gap-1">
          <Image src="/Bookmark.svg" alt="Save" />
        </button>
      </div>
      {showComments && (
        <Suspense fallback={<div>Loading comments...</div>}>
          <ShowComments item={item} />
        </Suspense>
      )}
    </div>
  );
}
