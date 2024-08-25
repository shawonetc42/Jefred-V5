import React from "react";
import Link from "next/link";
export async function generateMetadata({ params }) {
  return {
    title: "Not Found Page",
  };
}
function NotFound() {
  return (
    <div className="mt-20 flex flex-col items-center">
      <p className="text-6xl font-bold text-gray-900">404</p>
      <p className="text-2xl font-semibold text-gray-700">
        Oops! Page Not Found
      </p>
      <p className="mt-4 text-gray-600 text-center">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
      <button className="mt-8 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md shadow-md transition duration-300">
        <Link href="/">Go Home</Link>
      </button>
    </div>
  );
}

export default NotFound;
