"use client";
import React from "react";
import { useRouter } from "next/navigation";
import PopupModal from "@/components/modal/popupModal";
import useToggle from "@/components/hooks/useToggle";
import StatusPost from "@/components/modal/statusPost";
import Image from "next/image";
export default function AskQuestion({ session }) {
  const [isPopupOpen, togglePopup] = useToggle();
  const [isWritePopupOpen, toggleWritePopup] = useToggle();

  const handleSubmit = () => {
    // handle the submit action here
    togglePopup();
  };

  const handleWriteSubmit = () => {
    // handle the submit action here
    toggleWritePopup();
  };

  return (
    <div>
      <div className="flex flex-col pt-2 text-base bg-white rounded-2xl shadow-sm max-w-[570px] max-md:pr-5 mt-2  min-w-0  md:min-w-[570px] text-stone-500">
        <div className="flex gap-4 self-start ml-6 max-md:ml-2.5">
          <Image
            loading="lazy"
            src={session?.user?.image || "Profile.svg"}
            alt="User Profile"
            width={40}
            height={40}
            className="shrink-0 rounded-full w-[40px]"
          />
          <div
            className="flex-auto my-auto cursor-pointer"
            onClick={toggleWritePopup}
          >
            লিখো যা তুমি লিখতে চাও...
          </div>
        </div>
        <div className="flex gap-5 justify-between items-center pl-6 mt-2 py-3 whitespace-nowrap rounded-none bg-gray-300 bg-opacity-10 max-md:flex-wrap max-md:pl-5 max-md:mt-10">
          <div
            className="flex flex-1 gap-1.5 self-stretch my-auto cursor-pointer"
            onClick={togglePopup}
          >
            <Image
              loading="lazy"
              src="..."
              alt="Ask Icon"
              width={22}
              height={22}
              className="shrink-0 aspect-[0.92] fill-black fill-opacity-0 w-[22px]"
            />
            <div className="my-auto text-sm md:text-base">জিজ্ঞাসা করুন</div>
          </div>

          <div className="flex flex-1 gap-1.5 self-stretch my-auto">
            <Image
              loading="lazy"
              src="..."
              alt="Ask Icon"
              width={22}
              height={22}
              className="shrink-0 aspect-[0.92] fill-black fill-opacity-0 w-[22px]"
            />
            <div className="my-auto text-sm md:text-base">উত্তর দিন</div>
          </div>
          <div className="flex flex-1 gap-1.5 self-stretch my-auto">
            <Image
              loading="lazy"
              src="..."
              alt="Ask Icon"
              width={22}
              height={22}
              className="shrink-0 aspect-[0.92] fill-black fill-opacity-0 w-[22px]"
            />
            <div className="my-auto text-sm md:text-base">পোষ্ট করুন</div>
          </div>
        </div>
      </div>
      <PopupModal
        isOpen={isPopupOpen}
        onClose={togglePopup}
        onSubmit={handleSubmit}
      />
      <StatusPost
        isOpen={isWritePopupOpen}
        onClose={toggleWritePopup}
        onSubmit={handleWriteSubmit}
      />
    </div>
  );
}
