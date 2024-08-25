"use client";

import React, { useState, useEffect } from "react";

const DynamicPost = ({ datafind }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false); // Assuming datafind is already available, so setting loading to false
  }, [datafind]);

  return (
    <div className="mt-20 flex justify-center">
      <div
        key={datafind.id}
        className="max-w-md p-6 break-words  bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
      >
        <div
          className="block text-lg font-semibold text-gray-800 hover:text-blue-500"
          aria-label={datafind.questiontext}
        >
          {datafind.name}
          {/* <p
            className="mt-2 text-gray-800"
            dangerouslySetInnerHTML={{ __html: datafind.post }}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default DynamicPost;
