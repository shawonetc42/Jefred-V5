"use client";
import React, { useState } from "react";

const LikeButton = () => {
  const [likes, setLikes] = useState(0);

  return (
    <button
      onClick={() => setLikes(likes + 1)}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Like {likes}
    </button>
  );
};

export default LikeButton;
