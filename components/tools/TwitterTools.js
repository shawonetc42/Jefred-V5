import React from "react";

export default function TwitterTools() {
  return (
    <div className="flex flex-col justify-center text-base container mx-auto max-w-6xl leading-7 text-center bg-white rounded-lg shadow-md border border-gray-200">
      <div className="flex mt-3 border-b border-gray-200">
        <div className="flex-1 px-6 py-4 hover:bg-blue-50 border-b-4 border-transparent hover:border-blue-400 text-center cursor-pointer transition">
          <p className="text-sm font-semibold text-blue-400">Tweets</p>
        </div>

        <div className="flex-1 px-6 py-4 hover:bg-blue-50 border-b-4 border-transparent hover:border-blue-400 text-center cursor-pointer transition">
          <p className="text-sm font-semibold text-gray-500">
            Tweets &amp; replies
          </p>
        </div>

        <div className="flex-1 px-6 py-4 hover:bg-blue-50 border-b-4 border-transparent hover:border-blue-400 text-center cursor-pointer transition">
          <p className="text-sm font-semibold text-gray-500">Media</p>
        </div>

        <div className="flex-1 px-6 py-4 hover:bg-blue-50 border-b-4 border-transparent hover:border-blue-400 text-center cursor-pointer transition">
          <p className="text-sm font-semibold text-gray-500">Likes</p>
        </div>
      </div>
    </div>
  );
}
