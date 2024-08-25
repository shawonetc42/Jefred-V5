"use client";
import React from "react";

const ShareButton = () => {
  const handleShare = () => {
    alert("Comment shared!");
  };

  return (
    <button
      onClick={handleShare}
      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
    >
      Share
    </button>
  );
};

export default ShareButton;
