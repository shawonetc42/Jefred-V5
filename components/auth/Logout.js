"use client"
import React from 'react'
import { signOut } from "next-auth/react"; // Import for logout functionality
import { useRouter } from 'next/navigation'; // Import for client-side routing

export default function Logout() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await signOut({ redirect: false }); // Prevent default NextAuth redirect
      router.push('/login');  // Replace `/login` with your actual login page path

    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <div>
      <p>You are currently logged in.</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
