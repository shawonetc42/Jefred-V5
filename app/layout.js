import React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import SessionProvider from "@/components/auth/SessionProvider";
import JeHeader from "@/components/header/JeHeader";
import Layout from "@/components/Layout";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <SessionProvider>
      <html lang="en">
        <body className={inter.className}>
          <JeHeader />
          {children}
        </body>
      </html>
    </SessionProvider>
  );
}
