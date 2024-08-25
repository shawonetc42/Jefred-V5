import Link from "next/link";
import React from "react";
import {
  AiOutlineAccountBook,
  AiOutlineBarChart,
  AiOutlineBell,
  AiOutlineFontColors,
  AiOutlineHome,
  AiOutlineNotification,
  AiOutlineUser,
} from "react-icons/ai";
import Navbar from "./Navbar";
import { getServerSession } from "next-auth";
import Image from "next/image";
import AskQuestion from "../client/router/AskQuestion";
export default async function Header() {
  const session = await getServerSession();
  return (
    <div>
      <>
        <div className="bg-white shadow-md fixed w-full items-center top-0 left-0 right-0 ">
          <div className="flex justify-normal items-center max-w-5xl mx-auto px-2 py-2">
            <div className=" space-x-3 px-2 hidden md:flex">
              <div>
                <Image
                  src="/jefred.svg"
                  alt="photo"
                  width={100}
                  height={40}
                  className=""
                />
              </div>
            </div>
            {/* nav */}
            <ul className="justify-star space-x-3 items-center flex-grow hidden md:flex">
              <Link href="/" passHref>
                <p className="flex items-center gap-1 font-semibold">
                  <AiOutlineHome /> Home
                </p>
              </Link>
              <Link href="/interest" passHref>
                <p className="flex items-center gap-1 font-semibold">
                  Interest
                </p>
              </Link>
              <Link href="/questions" passHref>
                <p className="flex items-center gap-1 font-semibold">Answer</p>
              </Link>
              <Link href="/notifications" passHref>
                <p className="flex items-center gap-1 font-semibold">
                  Notification
                </p>
              </Link>
              <Link href="/data/marge" passHref>
                <p className="flex items-center gap-1 font-semibold">
                  test bd s
                </p>
              </Link>
              <Navbar />

              {/* session */}
              {session?.user?.name ? (
                <div className="flex items-center ">
                  {/* {session?.user?.name}! */}
                  <Image
                    src={session?.user?.image}
                    alt="photo"
                    width={6}
                    height={6}
                    className="w-6 h-6 rounded-full object-cover"
                  />
                </div>
              ) : (
                <div>
                  <p></p>
                </div>
              )}
              {/* question */}
              {/* <div className="bg-[#45B09E] text-white rounded-2xl">
                <button className="px-3 py-1">
                  <p>Add Your Question </p>
                </button>
              </div> */}
              {/* <AddQuesPop/> */}
              {/* add a router  */}
              <AskQuestion />
            </ul>
            {/* add a nav */}
          </div>
        </div>
        {/* add a mobile responsive */}
        <div className="gap-2 justify-between items-center py-2 px-2 bg-[#f1f2f2] shadow-md fixed w-full top-0 left-0 right-0 md:hidden">
          {/* Search Bar */}
          <div className="flex gap-2 justify-between items-center py-2 px-2 bg-[#45B09E] shadow-md fixed w-full top-0 left-0 right-0 md:hidden">
            <div className="flex items-center w-full">
              <div className="text-white">Jefred</div>
            </div>
            {/* Add Button */}
            <div>
              <div className="flex items-center w-full"></div>
            </div>
            {/* User Icon and Image */}
            <div className="flex  items-center  ">
              <div className="flex justify-center items-center w-full border-gray-300">
                <AiOutlineUser className="w-6 h-6" /> {/* User Icon */}
                <div className="bg-[#45B09E] text-white rounded-full w-8 h-8"></div>
              </div>
              {/* Another Icon */}
              <div className="flex  justify-center items-center  w-full border-gray-300">
                <AiOutlineBell className="w-6 h-6" />{" "}
                {/* Example of another icon */}
              </div>
            </div>
          </div>

          {/* Category Navigation */}
          <div className="mt-12">
            <div className="flex justify-between gap-2 items-center">
              {/* Home Icon */}
              <div className="relative group">
                <Link
                  href="/home"
                  className="flex gap-2 justify-center items-center border-r-2 w-full border-gray-300"
                >
                  <AiOutlineHome className="w-6 h-6" />
                </Link>
                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:flex items-center justify-center px-2 py-1 bg-gray-700 text-white text-xs rounded">
                  Go to Home Page
                </div>
              </div>

              {/* Bar Chart Icon */}
              <Link
                href="/home"
                className="flex gap-2 justify-center items-center border-r-2 w-full border-gray-300"
              >
                <AiOutlineBarChart className="w-6 h-6" />
              </Link>

              {/* Notification Icon */}
              <Link
                href="/home"
                className="flex gap-2 justify-center items-center border-r-2 w-full border-gray-300"
              >
                <AiOutlineNotification className="w-6 h-6" />
              </Link>
              {/* Notification Icon */}
              <Link
                href="/home"
                className="flex gap-2 justify-center items-center border-r-2 w-full border-gray-300"
              >
                <AiOutlineNotification className="w-6 h-6" />
              </Link>
              {/* user Icon */}
              <Link
                href="/home"
                className="flex gap-2 justify-center items-center border-r-2 w-full border-gray-300"
              >
                {/* session */}
                {session?.user?.name ? (
                  <div className="flex items-center ">
                    {/* {session?.user?.name}! */}
                    <Image
                      src={session?.user?.image}
                      alt="photo"
                      width={6}
                      height={6}
                      className="w-6 h-6 rounded-full object-cover"
                    />
                  </div>
                ) : (
                  <div>
                    <p></p>
                  </div>
                )}
              </Link>

              {/* User Image */}
              <div className="flex gap-2 justify-center items-center border-r-2 w-full border-gray-300">
                <div className="bg-[#45B09E] text-white rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </>
      {/* auth data */}
      <p></p>
    </div>
  );
}
