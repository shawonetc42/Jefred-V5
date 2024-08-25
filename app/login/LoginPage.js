"use client";

import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";
import Image from "next/image";

export default function LoginPage() {
  const { data: session, status } = useSession();

  const saveUserData = async (userData) => {
    try {
      const response = await fetch("http://localhost:3002/api/saveUserData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error("Failed to save user data");
      }
      console.log("User data saved successfully");
    } catch (error) {
      console.error("Error saving user data:", error);
    }
  };

  const handleSignIn = async (provider) => {
    const result = await signIn(provider, { callbackUrl: "/dashboard" });
    if (result?.error) {
      console.error("Failed to sign in:", result.error);
    } else {
      // If login is successful, save user data
      saveUserData(result?.user);
    }
  };

  useEffect(() => {
    if (session) {
      saveUserData(session.user);
    }
  }, [session]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <Image
          loading="lazy"
          src="/dd.png"
          className="w-64 mb-6 rounded-lg"
          alt="Welcome image"
          width={200}
          height={200}
        />
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">
          Welcome Back!
        </h1>
        <p className="text-gray-600 mb-8 text-center">
          We are glad to see you back with us.
        </p>
        <div
          className="flex items-center gap-4 p-4 mb-4 w-full text-white bg-blue-600 rounded-lg 
          shadow-md cursor-pointer hover:bg-blue-700 transition-colors"
          onClick={() => handleSignIn("facebook")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.62h3.128V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.464.098 2.797.143v3.243h-1.919c-1.505 0-1.797.715-1.797 1.763v2.31h3.594l-.468 3.62h-3.126V24h6.127c.73 0 1.324-.593 1.324-1.324V1.325C24 .593 23.407 0 22.675 0z" />
          </svg>
          <span>Sign In with Facebook</span>
        </div>
        <div
          className="flex items-center gap-4 p-4 w-full text-gray-700 bg-white border border-gray-300 rounded-lg 
          shadow-md cursor-pointer hover:bg-gray-100 transition-colors"
          onClick={() => handleSignIn("google")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 0C5.371 0 0 5.371 0 12c0 6.627 5.371 12 12 12s12-5.373 12-12c0-6.629-5.371-12-12-12zm.438 18.244c-3.622 0-6.562-2.938-6.562-6.562s2.938-6.562 6.562-6.562c1.76 0 3.266.684 4.407 1.784l-1.784 1.784c-.684-.684-1.622-1.156-2.622-1.156-2.225 0-4.022 1.798-4.022 4.022 0 2.225 1.798 4.022 4.022 4.022 1.98 0 3.422-1.156 3.784-2.735h-3.784v-2.333h6.622c.065.365.111.729.111 1.167 0 3.625-2.938 6.562-6.562 6.562z" />
          </svg>
          <span>Sign In with Google</span>
        </div>
      </div>
    </div>
  );
}
