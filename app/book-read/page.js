"use client";
import React, { memo, useState, useEffect, useMemo } from "react";
import Image from "next/image";

// Memoized BookImage component to prevent unnecessary re-renders
const BookImage = memo(({ src, delay }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      const img = new window.Image(); // Fixed to use window.Image
      img.src = src;
      img.onload = () => setLoading(false);
    }, delay);

    return () => clearTimeout(timer);
  }, [src, delay]);

  return (
    <div className="relative shrink-0 max-w-full aspect-[0.63] w-[200px] max-md:w-[100px]">
      {loading ? (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
          <div className="profile-skeleton animate-pulse flex items-center space-x-4 mb-2 px-2">
            <div className="h-8 w-8 bg-gray-300 rounded-full mt-2"></div>
            <div className="space-y-2">
              <div className="h-2 bg-gray-300 w-40 rounded"></div>
              <div className="h-2 bg-gray-300 w-28 rounded"></div>
            </div>
          </div>
        </div>
      ) : (
        <Image
          loading="lazy"
          src={src}
          width={200}
          height={200}
          className="max-w-full h-auto"
          alt="Book"
        />
      )}
    </div>
  );
});

BookImage.displayName = "BookImage"; // Added displayName

const booksFirstSet = [
  "/book1.png",
  "/book2.png",
  "/book3.png",
  "/book4.png",
  "/book5.png",
];

const booksSecondSet = [
  "/book6.png",
  "/book7.png",
  "/book8.png",
  "/book9.png",
  "/book10.png",
];

const renderBooks = (books, initialDelay = 0) =>
  books.map((src, index) => (
    <BookImage key={src} src={src} delay={initialDelay + index * 50} />
  )); // Using `src` as key to ensure uniqueness

function Page() {
  const firstSetBooks = useMemo(() => renderBooks(booksFirstSet, 0), []);
  const secondSetBooks = useMemo(() => renderBooks(booksSecondSet, 500), []); // Initial delay for the second set

  return (
    <div className="mt-32 md:mt-20">
      <div className="flex flex-col px-5 container mx-auto max-w-6xl">
        <div className="w-full text-xl leading-8 text-gray-700 max-md:max-w-full">
          আজকের ই-বুকমেলা বইগুলো
        </div>
        <div className="flex gap-5 justify-between mt-14 max-md:flex-wrap max-md:mt-10">
          {firstSetBooks}
        </div>
        <div className="flex flex-col pl-3 mt-14 w-full max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-wrap max-md:max-w-full">
            <div className="flex-auto my-auto text-xl leading-8 text-gray-700">
              ই-বুক মেলা ২০২৪ সব বই
            </div>
            <button
              type="button"
              className="justify-center px-4 py-2 text-sm font-medium text-center text-white bg-[#45B09E] rounded-3xl tracking-[3px] max-md:px-5"
            >
              SEE MORE
            </button>
          </div>
          <div className="flex gap-5 justify-between mt-8 max-md:flex-wrap">
            {secondSetBooks}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
