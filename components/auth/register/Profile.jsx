"use client"; // Next.js 13+ এর জন্য ব্যবহার করা হয়

import { useState, useEffect } from "react";

export default function ProfilePage() {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  const handleLogout = async () => {
    try {
      const res = await fetch("https://flashmain.vercel.app/auth/logout", {
        method: "POST",
        credentials: "include", // Include cookies in request
      });

      if (res.ok) {
        // Clear user data and redirect to login page or home page
        setUserData(null);
        window.location.href = "/login"; // Redirect to login page
      } else {
        const errorData = await res.json();
        setError(errorData.error);
      }
    } catch (err) {
      setError("Failed to logout");
    }
  };

  useEffect(() => {
    // Fetch user profile information
    const fetchProfile = async () => {
      try {
        const res = await fetch("https://flashmain.vercel.app/auth/profile", {
          method: "GET",
          credentials: "include", // Include cookies in request
        });

        if (res.ok) {
          const data = await res.json();
          setUserData(data);
        } else {
          const errorData = await res.json();
          setError(errorData.error);
        }
      } catch (err) {
        setError("Failed to fetch profile data");
      }
    };

    fetchProfile();
  }, []);

  if (error) return <p>Error: {error}</p>;
  if (!userData) return <p>Loading...</p>;

  return (
    <div className="mt-20">
      <h1>Profile</h1>
      <p>Email: {userData.email}</p>
      <p>Name: {userData.name}</p>
      <p>
        Account Created At: {new Date(userData.created_at).toLocaleString()}
      </p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
