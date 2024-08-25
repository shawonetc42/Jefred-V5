// UserProfileImage.js
"use client";
import React from "react";
import Image from "next/image";
const UserProfileImage = ({ session }) => {
  return session ? (
    <Image
      loading="lazy"
      src={session.user?.image || "Profile.svg"}
      alt="User Profile"
      width={30}
      height={30}
      className="shrink-0 rounded-full w-[30px]"
    />
  ) : (
    <Image
      loading="lazy"
      srcSet="Profile.svg"
      alt="User Profile"
      width={30}
      height={30}
      className="shrink-0 rounded-full w-[30px]"
    />
  );
};

export default UserProfileImage;
