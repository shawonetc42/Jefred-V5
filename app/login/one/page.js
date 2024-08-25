"use client";
import React, { useEffect } from "react";
import { signIn } from "next-auth/react";
import Image from "next/image";

const GoogleOneTap = () => {
  const clientId =
    "882951642437-il2osvte29t7rc44ldcaqtioq1uvgrg4.apps.googleusercontent.com";

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.onload = () => {
      window.google.accounts.id.initialize({
        client_id: clientId,
        callback: handleCredentialResponse,
      });
      window.google.accounts.id.prompt();
    };
    document.body.appendChild(script);
  }, []);

  const handleCredentialResponse = async (response) => {
    console.log("Encoded JWT ID token: " + response.credential);
    const result = await signIn("credentials", {
      credential: response.credential,
      redirect: false,
    });

    if (result.ok) {
      console.log("Sign in successful!");
      // Redirect or handle successful sign in
    } else {
      console.log("Sign in failed:", result.error);
      // Handle sign in error
    }
  };

  return (
    <div className="flex flex-col rounded-xl shadow-sm max-w-[407px] mx-auto mt-20">
      <div className="flex flex-col justify-center py-px w-full text-base tracking-normal leading-6 text-black bg-gray-200 rounded-xl">
        <div className="flex flex-col justify-center px-4 py-3 w-full bg-white rounded-xl">
          <div className="flex gap-5 items-center">
            <Image
              loading="lazy"
              src="/svg/google.svg"
              width={30}
              height={30}
              className="shrink-0 self-stretch my-auto w-6 aspect-square"
              alt="Icon"
            />
            <div className="flex-1 self-stretch my-auto">
              Sign in to My App with Google One Tap
            </div>
            <Image
              loading="lazy"
              src="/svg/google.svg"
              className="shrink-0 self-stretch aspect-square w-[30px]"
              alt="Google Logo"
              width={30}
              height={30}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center py-px w-full bg-gray-200 rounded-none">
        <div className="flex flex-col px-4 pt-4 pb-5 w-full bg-white rounded-none">
          <div className="flex gap-2.5 whitespace-nowrap text-neutral-600">
            <Image
              loading="lazy"
              src="/svg/google.svg"
              className="shrink-0 aspect-square w-[38px]"
              alt="Profile"
              width={38}
              height={38}
            />
            <div className="flex flex-col flex-1 self-start">
              <div className="flex gap-1 self-start text-base font-bold tracking-normal">
                <div>username</div>
              </div>
              <div className="text-xs font-medium tracking-normal">
                username@google.com
              </div>
            </div>
          </div>
          <div
            onClick={() => signIn("google")}
            className="flex justify-center items-center p-3 mt-5 w-full text-base font-bold text-white bg-blue-600 rounded cursor-pointer hover:bg-blue-700 transition duration-300"
          >
            <div className="flex gap-1">
              <div className="tracking-wide">Continue as</div>
              <div className="tracking-normal">username</div>
            </div>
          </div>
          <div className="mt-5 text-sm tracking-normal leading-5 text-blue-600">
            To create your account, Google will share your name, email address,
            and profile picture with Google.
            <span className="text-blue-600">Santas Helper.</span> See Santas
            Helper’s <span className="text-blue-600">privacy policy</span> and{" "}
            <span className="text-blue-600">terms of service.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoogleOneTap;
