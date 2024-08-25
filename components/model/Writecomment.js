"use client";
import React, { useState } from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";
export default function Writecomment({ item }) {
  const [comment, setComment] = useState("");
  const { data: session } = useSession();

  const handleInputChange = (e) => {
    setComment(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `https://api1243.vercel.app/posts/${item._id}/comments`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            commentText: comment,
            userId: session?.uid,
            userName: session?.user?.name,
            userPhoto: session?.user?.image,
            // Optionally add userId if needed
          }),
        }
      );

      if (response.ok) {
        const result = await response.json();
        console.log("Comment added successfully:", result);
        // Optionally, handle success feedback or update state
        setComment(""); // Clear the comment input
      } else {
        console.error("Failed to add comment");
      }
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  return (
    <div className="flex items-center justify-between gap-5 py-2 pr-6 pl-2.5 mt-4 w-full rounded-2xl bg-neutral-100 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
      <div className="flex gap-2 text-xs text-center text-black text-opacity-40">
        <Image
          loading="lazy"
          src="/..."
          alt="..."
          width={26}
          height={26}
          className="w-[26px]"
        />
      </div>
      <div className="w-40 md:w-full">
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            placeholder="Write a comment"
            value={comment}
            onChange={handleInputChange}
            className="w-full h-6 bg-transparent focus:outline-none"
          />
        </form>
      </div>
      <div className="flex gap-3.5 my-auto">
        <Image
          loading="lazy"
          src="/..."
          alt="comment"
          width={24}
          height={24}
          className="shrink-0 w-4 aspect-square fill-black fill-opacity-0"
        />
        <Image
          loading="lazy"
          src="/..."
          alt="comment"
          width={24}
          className="shrink-0 w-4 aspect-square fill-black fill-opacity-0"
        />
      </div>
    </div>
  );
}
