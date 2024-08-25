"use client";
import React, { useState, useEffect } from "react";
import timeSince from "../helper/timeSince";
import { useSession } from "next-auth/react";
import Image from "next/image";
export default function ShowComments({ item }) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true); // State for loading indicator
  const { data: session } = useSession();

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(
          `https://api1243.vercel.app/posts/${item._id}/comments`
        );
        if (response.ok) {
          const data = await response.json();
          const commentsWithReplies = data.map((comment) => ({
            ...comment,
            replies: comment.replies || [],
          }));
          console.log("Fetched comments:", commentsWithReplies);
          setComments(commentsWithReplies);
        } else {
          console.error("Failed to fetch comments");
        }
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false); // Set loading to false regardless of success or failure
      }
    };

    fetchComments();
  }, [item._id]);

  const handleReplySubmit = async (commentId, replyText) => {
    try {
      const response = await fetch(
        `https://api1243.vercel.app/comments/${commentId}/replies`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            replyText: replyText,
            userId: session?.uid,
            userName: session?.user?.name,
            userPhoto: session?.user?.image,
          }),
        }
      );

      if (response.ok) {
        const result = await response.json();
        setComments((prevComments) =>
          prevComments.map((comment) =>
            comment._id === commentId
              ? { ...comment, replies: [...comment.replies, result.reply] }
              : comment
          )
        );
      } else {
        console.error("Failed to add reply");
      }
    } catch (error) {
      console.error("Error adding reply:", error);
    }
  };

  if (loading) {
    return <p>Loading comments...</p>; // Show loading indicator
  }

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Comments</h2>
      {comments.length > 0 ? (
        <ul className="divide-y divide-gray-200">
          {comments
            .slice()
            .reverse()
            .map((comment) => (
              <li key={comment._id} className="py-4">
                <div className="flex items-start space-x-4">
                  <Image
                    src={comment.userPhoto}
                    alt="User"
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-full flex-shrink-0"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <h3 className="text-sm font-medium">
                        {comment.userName}
                      </h3>
                      <p className="text-xs text-gray-500">
                        {timeSince(comment.timestamp)}
                      </p>
                    </div>
                    <p className="text-sm">{comment.commentText}</p>
                    <div className="mt-2">
                      <form
                        onSubmit={(e) => {
                          e.preventDefault();
                          const replyText = e.target.replyText.value;
                          handleReplySubmit(comment._id, replyText);
                          e.target.reset();
                        }}
                        className="flex space-x-2"
                      >
                        <input
                          type="text"
                          name="replyText"
                          placeholder="Write a reply"
                          className="w-full h-8 px-3 py-1 bg-gray-100 rounded-md focus:outline-none"
                        />
                        <button
                          type="submit"
                          className="px-3 py-1 text-sm text-blue-500 bg-transparent border border-blue-500 rounded-md hover:bg-blue-50 focus:outline-none"
                        >
                          Reply
                        </button>
                      </form>
                    </div>
                    {comment.replies && comment.replies.length > 0 && (
                      <ul className="ml-10 mt-3 space-y-3">
                        {comment.replies.map((reply) => (
                          <li
                            key={reply._id}
                            className="flex items-start space-x-4"
                          >
                            <Image
                              src={reply.userPhoto || "Profile.svg"}
                              alt="User"
                              width={40}
                              height={40}
                              className="h-8 w-8 rounded-full flex-shrink-0"
                            />
                            <div className="flex flex-col">
                              <div className="flex items-center">
                                <h4 className="text-sm font-medium">
                                  {reply.userName}
                                </h4>
                                <p className="ml-2 text-xs text-gray-500">
                                  {timeSince(reply.timestamp)}
                                </p>
                              </div>
                              <p className="text-sm">{reply.replyText}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </li>
            ))}
        </ul>
      ) : (
        <p className="text-sm text-gray-500">No comments yet.</p>
      )}
    </div>
  );
}
