"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Import the router
import { AiOutlineSearch } from "react-icons/ai";

function Navbar() {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const router = useRouter(); // Initialize the router

  useEffect(() => {
    if (query.length > 0) {
      // Fetch suggestions only if query length is greater than 2
      fetchSuggestions(query);
    } else {
      setSuggestions([]);
    }
  }, [query]);

  const fetchSuggestions = async (query) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users`
      );
      const data = await response.json();
      const filteredSuggestions = data
        .map((user) => user.name)
        .filter((name) => name.toLowerCase().includes(query.toLowerCase()));
      setSuggestions(filteredSuggestions);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim() !== "") {
      router.push(`/search?q=${query.trim()}`);
    }
  };

  return (
    <div>
      <nav>
        <ul className="justify-start space-x-3 items-center flex-grow hidden md:flex">
          {/* Search Form */}
          <li className="flex items-center gap-1">
            <form onSubmit={handleSearch} className="relative items-center">
              <input
                type="text"
                name="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search..."
                aria-label="Search"
                className="px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500 transition duration-300"
              />
              <button
                type="submit"
                aria-label="Submit search"
                className="flex absolute items-center top-0 right-0 mt-3 mr-3"
              >
                <AiOutlineSearch className="text-gray-400" />
              </button>
              {suggestions.length > 0 && (
                <ul className="absolute left-0 right-0 mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-10 divide-y divide-gray-200">
                  {suggestions.map((suggestion, index) => (
                    <li
                      key={index}
                      className="px-4 py-3 cursor-pointer hover:bg-gray-100"
                      onClick={() => setQuery(suggestion)}
                    >
                      {suggestion}
                    </li>
                  ))}
                </ul>
              )}
            </form>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
