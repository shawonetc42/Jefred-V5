// JeHeader.js
import React from "react";
import { getServerSession } from "next-auth";
import Link from "next/link";
import AddPosts from "../posts/add";
import UserProfileImage from "./UserProfileImage";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Image from "next/image";

export const metadata = {
  title: "jefred ",
  description:
    "jefred শেখা এবং শেখানোর এক নতুন দিগন্ত , যেখানে জ্ঞান অগাধ এবং সীমাহীন",
  keywords:
    "jefred, Login, Sign Up, book, knowledge, Social Media, Microblogging, read book free",
  canonical: "https://jefred.com/login",
  openGraph: {
    title: "jefred",
    description:
      "jefred শেখা এবং শেখানোর এক নতুন দিগন্ত , যেখানে জ্ঞান অগাধ এবং সীমাহীন",
    url: "https://jefred.com/login",
    type: "website",
    images: [
      {
        url: "URL_to_an_image_for_social_share",
        width: 800,
        height: 600,
        alt: "jefred Login",
      },
    ],
  },
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1.0",
  author: "Jefred",
  icons: {
    icon: "URL_to_favicon",
  },
};

export default async function JeHeader() {
  const session = await getServerSession(authOptions);
  // console.log(session);
  return (
    <main className="fixed top-0 right-0 bg-white w-full py-1 shadow-sm">
      <div className="block container max-w-6xl items-center mx-auto justify-between md:flex ">
        <div className="flex gap-4 justify-between items-center px-5 py-4 md:py-0">
          <Image
            src="/Search_altsearch.svg"
            alt="search"
            width={24}
            height={24}
            className="w-8 h-6 block md:hidden"
          />
          <Image
            src="/logoij.svg"
            alt="logo"
            width={50}
            height={50}
            className="flex w-20 h-12 "
          />
          <AddPosts />
        </div>

        <ul className="flex gap-8 justify-between items-center px-5 max-w-full  md:gap-20">
          <li>
            <Link
              href="/"
              className="text-lg  font-semibold shrink-0 w-7 aspect-square fill-black fill-opacity-0"
              prefetch={false}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={24}
                height={24}
                className="text-gray-500"
                fill={"none"}
              >
                <path
                  d="M15.0002 17C14.2007 17.6224 13.1504 18 12.0002 18C10.8499 18 9.79971 17.6224 9.00018 17"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M2.35157 13.2135C1.99855 10.9162 1.82204 9.76763 2.25635 8.74938C2.69065 7.73112 3.65421 7.03443 5.58132 5.64106L7.02117 4.6C9.41847 2.86667 10.6171 2 12.0002 2C13.3832 2 14.5819 2.86667 16.9792 4.6L18.419 5.64106C20.3462 7.03443 21.3097 7.73112 21.744 8.74938C22.1783 9.76763 22.0018 10.9162 21.6488 13.2135L21.3478 15.1724C20.8473 18.4289 20.5971 20.0572 19.4292 21.0286C18.2613 22 16.5538 22 13.139 22H10.8614C7.44652 22 5.73909 22 4.57118 21.0286C3.40327 20.0572 3.15305 18.4289 2.65261 15.1724L2.35157 13.2135Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </li>
          <li>
            <Link
              href="/book-read"
              className="text-lg font-semibold shrink-0 w-7 aspect-square fill-black fill-opacity-0"
              prefetch={false}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="text-gray-500"
                fill="none"
              >
                <path
                  d="M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M15 11C17.2091 11 19 9.20914 19 7C19 4.79086 17.2091 3 15 3"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  stroke-linecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11 14H7C4.23858 14 2 16.2386 2 19C2 20.1046 2.89543 21 4 21H14C15.1046 21 16 20.1046 16 19C16 16.2386 13.7614 14 11 14Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
                <path
                  d="M17 14C19.7614 14 22 16.2386 22 19C22 20.1046 21.1046 21 20 21H18.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  stroke-linecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </li>
          <li>
            <Link
              href="/book-market"
              className="text-lg font-semibold shrink-0 w-7 aspect-square fill-black fill-opacity-0"
              prefetch={false}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="text-gray-500"
                fill="none"
              >
                <path
                  d="M2.9668 10.4961V15.4979C2.9668 18.3273 2.9668 19.742 3.84548 20.621C4.72416 21.5001 6.13837 21.5001 8.9668 21.5001H14.9668C17.7952 21.5001 19.2094 21.5001 20.0881 20.621C20.9668 19.742 20.9668 18.3273 20.9668 15.4979V10.4961"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  stroke-linecap="round"
                />
                <path
                  d="M14.9668 16.9932C14.2827 17.6004 13.1936 17.9932 11.9668 17.9932C10.74 17.9932 9.65089 17.6004 8.9668 16.9932"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  stroke-linecap="round"
                />
                <path
                  d="M10.1038 8.41848C9.82182 9.43688 8.79628 11.1936 6.84777 11.4482C5.12733 11.673 3.82246 10.922 3.48916 10.608C3.12168 10.3534 2.28416 9.53872 2.07906 9.02952C1.87395 8.52032 2.11324 7.41706 2.28416 6.96726L2.96743 4.98888C3.13423 4.49196 3.5247 3.31666 3.92501 2.91913C4.32533 2.5216 5.13581 2.5043 5.4694 2.5043H12.4749C14.2781 2.52978 18.2209 2.48822 19.0003 2.50431C19.7797 2.52039 20.2481 3.17373 20.3848 3.45379C21.5477 6.27061 22 7.88382 22 8.57124C21.8482 9.30456 21.22 10.6873 19.0003 11.2955C16.6933 11.9275 15.3854 10.6981 14.9751 10.2261M9.15522 10.2261C9.47997 10.625 10.4987 11.4279 11.9754 11.4482C13.4522 11.4686 14.7273 10.4383 15.1802 9.92062C15.3084 9.76786 15.5853 9.31467 15.8725 8.41848"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  stroke-linecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </li>
          <li>
            <Link
              href="/notifications"
              className="text-lg font-semibold shrink-0 w-8 aspect-square fill-black fill-opacity-0"
              prefetch={false}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="text-gray-500"
                fill="none"
              >
                <path
                  d="M5.15837 11.491C5.08489 12.887 5.16936 14.373 3.92213 15.3084C3.34164 15.7438 3 16.427 3 17.1527C3 18.1508 3.7818 19 4.8 19H19.2C20.2182 19 21 18.1508 21 17.1527C21 16.427 20.6584 15.7438 20.0779 15.3084C18.8306 14.373 18.9151 12.887 18.8416 11.491C18.6501 7.85223 15.6438 5 12 5C8.35617 5 5.34988 7.85222 5.15837 11.491Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  stroke-linecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.5 3.125C10.5 3.95343 11.1716 5 12 5C12.8284 5 13.5 3.95343 13.5 3.125C13.5 2.29657 12.8284 2 12 2C11.1716 2 10.5 2.29657 10.5 3.125Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M15 19C15 20.6569 13.6569 22 12 22C10.3431 22 9 20.6569 9 19"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  stroke-linecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </li>
          <li>
            <Link
              href="/messages"
              className="text-lg font-semibold shrink-0 w-7 aspect-square"
              prefetch={false}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="text-gray-500"
                fill="none"
              >
                <path
                  d="M11.9955 12H12.0045M8 12H8.00897"
                  stroke="currentColor"
                  strokeWidth="2"
                  stroke-linecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22 11.5667C22 16.8499 17.5222 21.1334 12 21.1334C11.3507 21.1343 10.7032 21.0742 10.0654 20.9545C9.60633 20.8682 9.37678 20.8251 9.21653 20.8496C9.05627 20.8741 8.82918 20.9949 8.37499 21.2364C7.09014 21.9197 5.59195 22.161 4.15111 21.893C4.69874 21.2194 5.07275 20.4112 5.23778 19.5448C5.33778 19.0148 5.09 18.5 4.71889 18.1231C3.03333 16.4115 2 14.1051 2 11.5667C2 6.28357 6.47778 2 12 2C12.6849 2 13.3538 2.0659 14 2.19142"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  stroke-linecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20.8386 2.47645L21.5309 3.16882C22.1167 3.7546 22.1167 4.70435 21.5309 5.29013L17.9035 8.9858C17.6182 9.27115 17.2532 9.46351 16.8565 9.53759L14.6084 10.0256C14.2534 10.1027 13.9373 9.78753 14.0134 9.43236L14.4919 7.19703C14.566 6.80035 14.7583 6.43535 15.0437 6.15L18.7173 2.47645C19.303 1.89066 20.2528 1.89066 20.8386 2.47645Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  stroke-linecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </li>
          <div className="">
            <UserProfileImage session={session} />
          </div>
        </ul>

        <div className="gap-5 pl-3.5 text-xs rounded-2xl bg-zinc-100 max-w-[267px] text-black text-opacity-50 hidden md:flex">
          <input
            type="text"
            placeholder="Search for anything"
            className="flex-auto my-auto bg-transparent outline-none"
          />
          <button type="submit" className="shrink-0 aspect-[1.39] w-[61px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="none"
            >
              <path
                d="M17.5 17.5L22 22"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </main>
  );
}
