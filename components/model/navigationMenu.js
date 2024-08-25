import Link from "next/link";
import React from "react";
import { MdOutlineBook } from "react-icons/md";
import Image from "next/image";
export default function NavigationMenu() {
  return (
    <div className="flex gap-5 justify-between px-5 py-6 bg-white rounded-2xl max-w-[278px] mt-2">
      <div className="flex flex-col text-base text-stone-500">
        <div className="flex gap-4 whitespace-nowrap hover:bg-gray-200 p-2 rounded-md">
          <Link href="/" className="flex gap-4">
            <Image
              loading="lazy"
              src="/home.svg"
              alt="Home"
              width={20}
              height={20}
              className="shrink-0 aspect-[1.09] fill-black fill-opacity-0 w-[20px]"
            />
            <div className="flex-auto my-auto">হোম</div>
          </Link>
        </div>
        <Link
          href="/book-read"
          className="flex gap-4 mt-2 whitespace-nowrap hover:bg-gray-200 p-2 rounded-md"
        >
          <div className="flex gap-4 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              className="text-gray-500"
              fill="none"
            >
              <path
                d="M20.5 16.9286V10C20.5 6.22876 20.5 4.34315 19.3284 3.17157C18.1569 2 16.2712 2 12.5 2H11.5C7.72876 2 5.84315 2 4.67157 3.17157C3.5 4.34315 3.5 6.22876 3.5 10V19.5"
                stroke="currentColor"
                strokeWidth="1.5"
                stroke-linecap="round"
              />
              <path
                d="M20.5 17H6C4.61929 17 3.5 18.1193 3.5 19.5C3.5 20.8807 4.61929 22 6 22H20.5"
                stroke="currentColor"
                strokeWidth="1.5"
                stroke-linecap="round"
              />
              <path
                d="M20.5 22C19.1193 22 18 20.8807 18 19.5C18 18.1193 19.1193 17 20.5 17"
                stroke="currentColor"
                strokeWidth="1.5"
                stroke-linecap="round"
              />
              <path
                d="M15 7L9 7"
                stroke="currentColor"
                strokeWidth="1.5"
                stroke-linecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 11L9 11"
                stroke="currentColor"
                strokeWidth="1.5"
                stroke-linecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="flex-auto my-auto">বই পড়ি</div>
          </div>
        </Link>
        <Link
          href="/allquestion"
          className="flex gap-4 mt-2 whitespace-nowrap hover:bg-gray-200 p-2 rounded-md"
        >
          <div className="flex gap-4 ">
            <Image
              loading="lazy"
              src="/book.svg"
              alt="Home"
              width={22}
              height={22}
              className="shrink-0 aspect-[0.92] fill-black fill-opacity-0 w-[22px]"
            />
            <div className="flex-auto my-auto">সমস্ত উত্তর</div>
          </div>
        </Link>
        <Link
          href="/book-read"
          className="flex gap-4 mt-2 whitespace-nowrap hover:bg-gray-200 p-2 rounded-md"
        >
          <div className="flex gap-4 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="22"
              height="22"
              className="text-gray-500"
              fill="none"
            >
              <path
                d="M22 11.5667C22 16.8499 17.5222 21.1334 12 21.1334C11.3507 21.1343 10.7032 21.0742 10.0654 20.9545C9.60633 20.8682 9.37678 20.8251 9.21653 20.8496C9.05627 20.8741 8.82918 20.9948 8.37499 21.2364C7.09014 21.9197 5.59195 22.161 4.15111 21.893C4.69874 21.2194 5.07275 20.4112 5.23778 19.5448C5.33778 19.0148 5.09 18.5 4.71889 18.1231C3.03333 16.4115 2 14.1051 2 11.5667C2 6.28357 6.47778 2 12 2C17.5222 2 22 6.28357 22 11.5667Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <path
                d="M10 9.84615C10 8.82655 10.8954 8 12 8C13.1046 8 14 8.82655 14 9.84615C14 10.2137 13.8837 10.5561 13.6831 10.8438C13.0854 11.7012 12 12.5189 12 13.5385V14"
                stroke="currentColor"
                strokeWidth="1.5"
                stroke-linecap="round"
              />
              <path
                d="M12 16.5H12.009"
                stroke="currentColor"
                strokeWidth="1.5"
                stroke-linecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="flex-auto my-auto">প্রশ্ন করুন</div>
          </div>
        </Link>
        <Link
          href="/profile"
          className="flex gap-4 mt-2 whitespace-nowrap hover:bg-gray-200 p-2 rounded-md"
        >
          <div className="flex gap-4 ">
            <Image
              loading="lazy"
              src="/..."
              alt="Home"
              width={22}
              height={22}
              className="shrink-0 aspect-[0.92] fill-black fill-opacity-0 w-[22px]"
            />
            <div className="flex-auto my-auto">প্রোফাইল </div>
          </div>
        </Link>
        <div className="flex gap-4 mt-2 whitespace-nowrap hover:bg-gray-200 p-2 rounded-md">
          <Image
            loading="lazy"
            src="/..."
            alt="Home"
            width={22}
            height={22}
            className="shrink-0 aspect-[0.92] fill-black fill-opacity-0 w-[22px]"
          />
          <div className="flex-auto my-auto">বুকমার্কস</div>
        </div>
        <div className="flex gap-4 mt-2 whitespace-nowrap hover:bg-gray-200 p-2 rounded-md">
          <Image
            loading="lazy"
            src="/..."
            alt="Home"
            width={22}
            height={22}
            className="shrink-0 aspect-[0.92] fill-black fill-opacity-0 w-[22px]"
          />
          <div className="flex-auto my-auto">বুক রিভিউ</div>
        </div>
        <Link
          href="/events"
          className="flex gap-4 mt-2 whitespace-nowrap hover:bg-gray-200 p-2 rounded-md"
        >
          <div className="flex gap-4 ">
            <Image
              loading="lazy"
              src="/event.svg"
              alt="event"
              width={22}
              height={22}
              className="shrink-0 aspect-[0.92] fill-black fill-opacity-0 w-[22px]"
            />
            <div className="flex-auto my-auto">সাহিত্যিক ইভেন্ট</div>
          </div>
        </Link>
        <div className="flex gap-4 mt-2 whitespace-nowrap hover:bg-gray-200 p-2 rounded-md">
          <MdOutlineBook />
          <div className="flex-auto my-auto">লাইব্রেরি</div>
        </div>
        <Link
          href="/b"
          className="flex gap-4 mt-2 whitespace-nowrap hover:bg-gray-200 p-2 rounded-md"
        >
          <div className="flex gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="22"
              height="22"
              className="text-gray-500"
              fill="none"
            >
              <path
                d="M21.3175 7.14139L20.8239 6.28479C20.4506 5.63696 20.264 5.31305 19.9464 5.18388C19.6288 5.05472 19.2696 5.15664 18.5513 5.36048L17.3311 5.70418C16.8725 5.80994 16.3913 5.74994 15.9726 5.53479L15.6357 5.34042C15.2766 5.11043 15.0004 4.77133 14.8475 4.37274L14.5136 3.37536C14.294 2.71534 14.1842 2.38533 13.9228 2.19657C13.6615 2.00781 13.3143 2.00781 12.6199 2.00781H11.5051C10.8108 2.00781 10.4636 2.00781 10.2022 2.19657C9.94085 2.38533 9.83106 2.71534 9.61149 3.37536L9.27753 4.37274C9.12465 4.77133 8.84845 5.11043 8.48937 5.34042L8.15249 5.53479C7.73374 5.74994 7.25259 5.80994 6.79398 5.70418L5.57375 5.36048C4.85541 5.15664 4.49625 5.05472 4.17867 5.18388C3.86109 5.31305 3.67445 5.63696 3.30115 6.28479L2.80757 7.14139C2.45766 7.74864 2.2827 8.05227 2.31666 8.37549C2.35061 8.69871 2.58483 8.95918 3.05326 9.48012L4.0843 10.6328C4.3363 10.9518 4.51521 11.5078 4.51521 12.0077C4.51521 12.5078 4.33636 13.0636 4.08433 13.3827L3.05326 14.5354C2.58483 15.0564 2.35062 15.3168 2.31666 15.6401C2.2827 15.9633 2.45766 16.2669 2.80757 16.8741L3.30114 17.7307C3.67443 18.3785 3.86109 18.7025 4.17867 18.8316C4.49625 18.9608 4.85542 18.8589 5.57377 18.655L6.79394 18.3113C7.25263 18.2055 7.73387 18.2656 8.15267 18.4808L8.4895 18.6752C8.84851 18.9052 9.12464 19.2442 9.2775 19.6428L9.61149 20.6403C9.83106 21.3003 9.94085 21.6303 10.2022 21.8191C10.4636 22.0078 10.8108 22.0078 11.5051 22.0078H12.6199C13.3143 22.0078 13.6615 22.0078 13.9228 21.8191C14.1842 21.6303 14.294 21.3003 14.5136 20.6403L14.8476 19.6428C15.0004 19.2442 15.2765 18.9052 15.6356 18.6752L15.9724 18.4808C16.3912 18.2656 16.8724 18.2055 17.3311 18.3113L18.5513 18.655C19.2696 18.8589 19.6288 18.9608 19.9464 18.8316C20.264 18.7025 20.4506 18.3785 20.8239 17.7307L21.3175 16.8741C21.6674 16.2669 21.8423 15.9633 21.8084 15.6401C21.7744 15.3168 21.5402 15.0564 21.0718 14.5354L20.0407 13.3827C19.7887 13.0636 19.6098 12.5078 19.6098 12.0077C19.6098 11.5078 19.7888 10.9518 20.0407 10.6328L21.0718 9.48012C21.5402 8.95918 21.7744 8.69871 21.8084 8.37549C21.8423 8.05227 21.6674 7.74864 21.3175 7.14139Z"
                stroke="currentColor"
                strokeWidth="1.5"
                stroke-linecap="round"
              />
              <path
                d="M15.5195 12C15.5195 13.933 13.9525 15.5 12.0195 15.5C10.0865 15.5 8.51953 13.933 8.51953 12C8.51953 10.067 10.0865 8.5 12.0195 8.5C13.9525 8.5 15.5195 10.067 15.5195 12Z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
            <div className="flex-auto my-auto">Settings</div>
          </div>
        </Link>
      </div>
    </div>
  );
}
