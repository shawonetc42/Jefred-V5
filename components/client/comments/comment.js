import React from "react";
import LikeButton from "./LikeButton";
import ShareButton from "./ShareButton";
import CommentForm from "./CommentForm";
export default function Comments({ username, comment, timestamp }) {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl my-4">
      <div className="md:flex">
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {username}
          </div>
          <p className="mt-2 text-gray-500">{comment}</p>
          <div className="mt-4 text-sm text-gray-400">{timestamp}</div>
          <div className=" flex justify-between space-x-4">
            <LikeButton />
            <ShareButton />
          </div>
        </div>
      </div>
      <CommentForm />
    </div>
  );
}
