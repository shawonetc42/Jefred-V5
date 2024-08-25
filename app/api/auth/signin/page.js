"use client";
import { signIn } from "next-auth/react";

export default function SignIn() {
  
  return (
    <div className="mt-20">
      <h1>Sign In</h1>
      <button onClick={() => signIn("google")}>Sign in with Google</button>
      <button onClick={() => signIn("github")}>Sign in with GitHub</button>
    </div>
  );
}
