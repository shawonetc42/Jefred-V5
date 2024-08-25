"use client";
import React, { useState, useEffect } from "react";

export default function PropsTest({ posts }) {
  const [comments, setComments] = useState({});
  const [showComments, setShowComments] = useState({}); // State to track visibility of comments for each post

  useEffect(() => {
    const fetchCommentsForPost = async (postId) => {
      const commentsData = await fetch(
        `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
      );
      const comments = await commentsData.json();
      setComments((prev) => ({
        ...prev,
        [postId]: comments,
      }));
    };

    posts.forEach((post) => {
      fetchCommentsForPost(post.id);
    });
  }, [posts]);

  const handleClick = (postId) => {
    setShowComments((prevShow) => ({
      ...prevShow,
      [postId]: !prevShow[postId], // Toggle the show state for the specific post
    }));
  };

  return (
    <ul className="space-y-4 mt-20 container mx-auto max-w-2xl">
      {posts.map((post) => (
        <li key={post.id} className="border p-4 rounded shadow">
          <h2 className="text-xl font-bold mb-2">{post.title}</h2>
          {/* <p className="text-gray-700">{post.body}</p> */}
          <button onClick={() => handleClick(post.id)}>
            {showComments[post.id] ? "Hide comments" : "Show comments"}
          </button>
          {/* add a comment form */}
          {showComments[post.id] && (
            <form>
              <label htmlFor="comment">Add a comment:</label>
              <input
                type="text"
                id="comment"
                name="comment"
                placeholder="Enter your comment"
              />
              <button type="submit">Submit</button>
            </form>
          )}

          {/* display comments */}
          {showComments[post.id] && comments[post.id] && (
            <ul>
              {comments[post.id].map((comment) => (
                <li key={comment.id} className="text-gray-700">
                  {comment.body}
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
}
