"use client";
// pages/index.tsx

import { getSession, useSession } from "next-auth/react";
import Logout from "@/app/components/auth/Logout";

export default function InfoProfile() {
  const { data: session } = useSession();

  return (
    <div className="mt-20">
      <h1>Session Information</h1>
      {session?.user ? (
        <div>
          <p>Welcome back, {session.user.name}!</p>
          <p>Email: {session.user.email}</p>
          <p>Session UID: {session.uid}</p>
          <p></p>
          {/* Display other session information as needed */}
        </div>
      ) : (
        <div>
          <p>You are not currently logged in.</p>
          {/* Handle login button or redirect logic */}
        </div>
      )}
      <Logout />
    </div>
  );
}
