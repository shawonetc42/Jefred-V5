import React from "react";
import Link from "next/link";
import Image from "next/image";
export default function JeHeaderComponents() {
  return (
    <div className="flex gap-8 justify-between items-center px-5 max-w-full md:max-w-[460px] md:gap-20">
      <Link
        href="/"
        prefetch={false}
        className="text-lg font-semibold shrink-0 w-7 aspect-square fill-black fill-opacity-0"
      >
        <Image
          loading="lazy"
          src="/HomeFill.svg"
          alt="Home"
          width={24}
          height={24}
          className="shrink-0 w-7 aspect-square fill-black fill-opacity-0"
        />
      </Link>
      <Link
        href="/qupo"
        prefetch={false}
        className="text-lg font-semibold shrink-0 w-7 aspect-square fill-black fill-opacity-0"
      >
        <Image
          loading="lazy"
          src="..."
          alt="..."
          width={24}
          height={24}
          className="shrink-0 w-7 aspect-square fill-black fill-opacity-0"
        />
      </Link>
      <Link
        href="/qupo"
        className="group text-lg shrink-0 w-7 aspect-square fill-black fill-opacity-0 relative"
      >
        <div className="relative">
          <Image
            loading="lazy"
            src="questions.svg"
            width={24}
            height={24}
            className="w-full h-full transition-transform transform hover:scale-110 hover:opacity-70"
            alt="Questions"
          />
          <div className="absolute -inset-x-5 w-20 top-10 flex items-center justify-center text-center text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
            <span className="hidden group-hover:inline-block bg-white px-2 py-2 border rounded-full">
              প্রশ্ন করো
            </span>
          </div>
        </div>
      </Link>
      <Link
        href="/questions"
        prefetch={false}
        className="text-lg font-semibold shrink-0 w-8 aspect-square fill-black fill-opacity-0"
      >
        <Image
          loading="lazy"
          src=""
          alt="..."
          width={24}
          height={24}
          className="shrink-0 w-8 aspect-square fill-black fill-opacity-0"
        />
      </Link>
      <Link
        href="/"
        prefetch={false}
        className="text-lg font-semibold shrink-0 w-7 aspect-square"
      >
        <Image
          loading="lazy"
          src="..."
          alt="..."
          width={24}
          height={24}
          className="shrink-0 w-8 aspect-[0.92]"
        />
      </Link>
    </div>
  );
}
