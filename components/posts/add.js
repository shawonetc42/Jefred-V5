"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function AddPosts() {
  const router = useRouter();
  return (
    <div className="flex gap-4 md:hidden">
      <Image
        onClick={() => router.push("/ask")}
        src="/add.svg"
        alt="add"
        width={24} // add
        height={24} // add
      />
      <Image
        onClick={() => router.push("/notifications")}
        src="/notifications_active.svg"
        alt="notifications"
        width={24}
        height={24}
      />
    </div>
  );
}
