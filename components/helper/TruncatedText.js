"use client";
import React, { useState } from "react";

function TruncatedText({ text = "" }) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Check if text is defined and is a string
  if (typeof text !== "string") {
    return <p className="text-gray-700">Invalid text content</p>;
  }

  // Split the text into words and handle truncation
  const words = text.split(" ");

  // Function to toggle text expansion
  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  // If text has 100 words or fewer, render it as-is
  if (words.length <= 100) {
    return (
      <p className="text-gray-700" dangerouslySetInnerHTML={{ __html: text }} />
    );
  }

  // Otherwise, render truncated text
  const truncatedText = words.slice(0, 100).join(" ") + "...";

  return (
    <div>
      <p
        className="text-gray-700"
        dangerouslySetInnerHTML={{ __html: isExpanded ? text : truncatedText }}
      />
      <button
        onClick={toggleExpansion}
        className="text-blue-500 hover:underline"
      >
        {isExpanded ? "See Less" : "See More"}
      </button>
    </div>
  );
}

export default TruncatedText;
