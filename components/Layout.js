"use client";
import { useState, useEffect } from "react";
import Loading from "@/app/home/loading";

const Layout = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // প্রথমবারে লোড হলে লোডিং স্ক্রিন দেখানো
    setTimeout(() => {
      setLoading(false);
    }, 1000); // 1 সেকেন্ড পর লোডিং স্ক্রিন হাইড করা
  }, []);

  if (loading) {
    return <Loading />;
  }

  return <>{children}</>;
};

export default Layout;
