import React from "react";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";

export default function JeComponents({ currentPath, session }) {
  const getLinkClass = (path) => {
    return currentPath === path
      ? "text-lg font-semibold active"
      : "text-lg font-semibold";
  };

  return (
    <div className="bg-white w-full py-1 shadow-sm">
      <div className="flex container max-w-6xl items-center mx-auto justify-between ">
        <Image
          src="/jefredround.svg"
          alt="logo"
          width={50}
          height={50}
          className="w-8 h-8"
        />
        <div className="flex gap-20 justify-between items-center px-5 max-w-[460px] max-md:flex-wrap">
          <Link href="/" className={getLinkClass("/")}>
            <Image
              loading="lazy"
              src="/HomeFill.svg"
              alt="Home"
              width={24}
              height={24}
              className="shrink-0 w-7 aspect-square fill-black fill-opacity-0"
            />
          </Link>
          <Link href="/about" className={getLinkClass("/about")}>
            <Image
              loading="lazy"
              src="..."
              alt="About"
              width={24}
              height={24}
              className="shrink-0 w-7 aspect-square fill-black fill-opacity-0"
            />
          </Link>
          <Link href="/profile" className={getLinkClass("/profile")}>
            <Image
              loading="lazy"
              src="..."
              alt="Profile"
              width={24}
              height={24}
              className="shrink-0 w-7 aspect-square fill-black fill-opacity-0"
            />
          </Link>
          <Link href="/questions" className={getLinkClass("/questions")}>
            <Image
              loading="lazy"
              src="..."
              alt="Questions"
              width={24}
              height={24}
              className="shrink-0 w-8 aspect-square fill-black fill-opacity-0"
            />
          </Link>
          <Link href="/" className={getLinkClass("/")}>
            <Image
              loading="lazy"
              src="..."
              alt="Home"
              width={24}
              height={24}
              className="shrink-0 w-8 aspect-[0.92]"
            />
          </Link>
          {session ? (
            <Image
              loading="lazy"
              src={session?.user?.image}
              alt="Profile"
              width={30}
              height={30}
              className="shrink-0 rounded-full w-[30px]"
            />
          ) : (
            <Image
              loading="lazy"
              src="Profile.svg"
              alt="Profile"
              width={30}
              height={30}
              className="shrink-0 rounded-full w-[30px]"
            />
          )}
        </div>
        <div className="flex gap-5 pl-3.5 text-xs rounded-2xl bg-neutral-100 max-w-[267px] text-black text-opacity-50">
          <div className="flex-auto my-auto">Search for anything </div>
          <Image
            loading="lazy"
            src="/Search_altsearch.svg"
            alt="Search"
            className="shrink-0 aspect-[1.39] w-[61px]"
          />
        </div>
      </div>
    </div>
  );
}
