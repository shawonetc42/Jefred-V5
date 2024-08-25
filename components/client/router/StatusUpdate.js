"use client";
import React from "react";
import { useRouter } from "next/navigation";
import PopupModal from "@/components/modal/popupModal";
import useToggle from "@/components/hooks/useToggle";
import StatusPost from "@/components/modal/statusPost";
import StatusUpdateQuill from "@/components/modal/StatusUpdateQuill";
import Image from "next/image";

export default function StatusUpdate({ session }) {
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              color="#000000"
              fill="none"
            >
              <path
                d="M17 15.8462C17 14.8266 17.8954 14 19 14C20.1046 14 21 14.8266 21 15.8462C21 16.2137 20.8837 16.5561 20.6831 16.8438C20.0854 17.7012 19 18.5189 19 19.5385V20M18.9902 22H18.9992"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16 22H6.59087C5.04549 22 3.81631 21.248 2.71266 20.1966C0.453365 18.0441 4.1628 16.324 5.57757 15.4816C8.12805 13.9629 11.2057 13.6118 14 14.4281"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16.5 6.5C16.5 8.98528 14.4853 11 12 11C9.51472 11 7.5 8.98528 7.5 6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5Z"
                stroke="currentColor"
                stroke-width="1.5"
              />
            </svg>
            <div className="my-auto text-sm md:text-base">জিজ্ঞাসা করুন</div>
          </div>

          <div className="flex flex-1 gap-1.5 self-stretch my-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              color="#000000"
              fill="none"
            >
              <path
                d="M9 22C9.35984 22 10.6908 21.3926 12.0494 20.1778M12.0494 20.1778C13.2078 19.1419 14.3863 17.6643 15 15.7452C16.3333 11.5753 8.33333 15.7452 11 19.2201C11.3281 19.6476 11.6815 19.9601 12.0494 20.1778ZM12.0494 20.1778C13.6521 21.1259 15.5311 20.274 16.8041 19.2944C17.1932 18.995 17.3877 18.8453 17.5038 18.8919C17.62 18.9385 17.6878 19.2064 17.8236 19.7422C18.2581 21.4569 19.5415 22.841 21 20.6105"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M20 13L20 7.89072C20 6.17637 20 5.31919 19.732 4.63459C19.3013 3.53399 18.3902 2.66585 17.2352 2.25535C16.5168 2 15.6173 2 13.8182 2C10.6698 2 9.09563 2 7.83836 2.44686C5.81714 3.16523 4.22281 4.68448 3.46894 6.61052C3 7.80859 3 9.30864 3 12.3088L3 14.8859C3 17.9936 3 19.5474 3.8477 20.6265C4.09058 20.9356 4.37862 21.2101 4.70307 21.4416C5.07016 21.7034 5.48961 21.8804 6 22"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3 12C3 10.159 4.49238 8.66667 6.33333 8.66667C6.99912 8.66667 7.78404 8.78333 8.43137 8.60988C9.00652 8.45576 9.45576 8.00652 9.60988 7.43136C9.78333 6.78404 9.66667 5.99912 9.66667 5.33333C9.66667 3.49238 11.1591 2 13 2"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <div className="my-auto text-sm md:text-base">উত্তর দিন</div>
          </div>
          <div className="flex flex-1 gap-1.5 self-stretch my-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              color="#000000"
              fill="none"
            >
              <path
                d="M7.99805 16H11.998M7.99805 11H15.998"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                d="M7.5 3.5C5.9442 3.54667 5.01661 3.71984 4.37477 4.36227C3.49609 5.24177 3.49609 6.6573 3.49609 9.48836L3.49609 15.9944C3.49609 18.8255 3.49609 20.241 4.37477 21.1205C5.25345 22 6.66767 22 9.49609 22L14.4961 22C17.3245 22 18.7387 22 19.6174 21.1205C20.4961 20.241 20.4961 18.8255 20.4961 15.9944V9.48836C20.4961 6.6573 20.4961 5.24177 19.6174 4.36228C18.9756 3.71984 18.048 3.54667 16.4922 3.5"
                stroke="currentColor"
                stroke-width="1.5"
              />
              <path
                d="M7.49609 3.75C7.49609 2.7835 8.2796 2 9.24609 2H14.7461C15.7126 2 16.4961 2.7835 16.4961 3.75C16.4961 4.7165 15.7126 5.5 14.7461 5.5H9.24609C8.2796 5.5 7.49609 4.7165 7.49609 3.75Z"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linejoin="round"
              />
            </svg>
            <div className="my-auto text-sm md:text-base">পোষ্ট করুন</div>
          </div>
        </div>
      </div>
      <PopupModal
        isOpen={isPopupOpen}
        onClose={togglePopup}
        onSubmit={handleSubmit}
      />
      <StatusUpdateQuill
        isOpen={isWritePopupOpen}
        onClose={toggleWritePopup}
        onSubmit={handleWriteSubmit}
      />
    </div>
  );
}
