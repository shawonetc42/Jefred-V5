import React from "react";
import Image from "next/image";
export default function RightSide() {
  return (
    <div className=" gap-12 justify-between ml-2 px-5 py-3 bg-white rounded-2xl max-w-[300px] mt-2 min-w-[300px]">
      <div className="flex flex-col text-base text-stone-500 border-b">
        {/* add a new page */}
        <div className="flex gap-4 p-2 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="22"
            height="22"
            className="text-gray-500"
            fill="none"
          >
            <path
              d="M12 8V16M16 12L8 12"
              stroke="currentColor"
              strokeWidth="1.5"
              stroke-linecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>
          <div className="flex-auto my-auto ">নিজের প্ল্যাটফর্ম বানাও</div>
        </div>

        {/* add a new page */}
      </div>
      <div className="text-stone-500  ">
        <div className="flex items-center gap-2 p-2">
          <Image
            src="/profile.jpg"
            alt="photo"
            width={24}
            height={24}
            className="h-6 w-6 rounded-full "
          />
          <p>নন-ফিকশন</p>
        </div>
        <div className="flex items-center gap-2 p-2">
          <Image
            src="data:image/jpeg;base64,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"
            alt="photo"
            width={100}
            height={40}
            className="h-6 w-6 rounded-full "
          />
          <p> সেরা ডিস্কাউন্ট এ বেস্টসেলার বই</p>
        </div>
      </div>
    </div>
  );
}
