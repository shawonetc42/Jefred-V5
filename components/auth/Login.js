"use client"
import React from "react";
import { signIn } from "next-auth/react";

function Login() {
  return (
    <div className="mt-20">
      <button onClick={() => signIn("google")}>Sign in with Google</button>
      {/* Add more sign-in buttons for other providers if needed */}
    </div>
  );
}

export default Login;
