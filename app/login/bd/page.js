"use client";
import React, { useEffect } from "react";
import { signIn } from "next-auth/react";

const GoogleOneTap = () => {
  const clientId =
    "882951642437-il2osvte29t7rc44ldcaqtioq1uvgrg4.apps.googleusercontent.com";

  useEffect(() => {
    if (typeof document !== "undefined") {
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
    }
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
    <div
      id="g_id_onload"
      data-client_id={clientId}
      data-login_uri="YOUR_LOGIN_URI"
      data-auto_prompt="false"
      className="mt-28"
    ></div>
  );
};

export default GoogleOneTap;
