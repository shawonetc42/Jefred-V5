import React from "react";
import Image from "next/image";
export default function page() {
  return (
    <div className="conatiner mx-auto max-w-6xl py-2 mt-32 md:mt-20">
      <div className="flex flex-col">
        <div className="flex gap-5 w-full max-md:flex-wrap max-md:max-w-full">
          <div className="flex flex-auto gap-5 px-5 max-md:flex-wrap max-md:max-w-full">
            <div className="grow text-4xl font-bold text-blue-950">
              আগামী ইভেন্ট
            </div>
            <div className="justify-center items-start self-start px-6 py-4 text-sm font-medium bg-emerald-400 bg-opacity-20 rounded-[50px] text-blue-950 max-md:px-5">
              ইভেন্ট তৈরি করো
            </div>
          </div>
          <div className="flex flex-auto gap-5 self-start px-5 text-sm font-medium text-blue-950 max-md:flex-wrap">
            <div className="flex gap-5 justify-between px-6 py-4 bg-violet-50 rounded-[50px] max-md:px-5">
              <div>সপ্তাহের দিন</div>
              <Image
                loading="lazy"
                src="/book1.png"
                alt="book"
                width={20}
                height={20}
                className="shrink-0 self-start mt-1.5 w-3 border-2 border-solid aspect-[1.72] border-blue-950 stroke-[2px] stroke-blue-950"
              />
            </div>
            <div className="flex gap-5 justify-between px-6 py-4 bg-violet-50 rounded-[50px] max-md:px-5">
              <div>ইভেন্ট প্রকার</div>
              <Image
                loading="lazy"
                src="/book1.png"
                alt="book2"
                width={20}
                height={20}
                className="shrink-0 self-start mt-1.5 w-3 border-2 border-solid aspect-[1.72] border-blue-950 stroke-[2px] stroke-blue-950"
              />
            </div>
            <div className="flex gap-5 justify-between px-6 py-4 whitespace-nowrap bg-violet-50 rounded-[50px] max-md:px-5">
              <div>ক্যাটাগরি</div>
              <Image
                loading="lazy"
                src="/book1.png"
                alt="book3"
                width={20}
                height={20}
                className="shrink-0 self-start mt-1.5 w-3 border-2 border-solid aspect-[1.72] border-blue-950 stroke-[2px] stroke-blue-950"
              />
            </div>
          </div>
        </div>
        <div className="px-5 mt-20 w-full max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <Image
                loading="lazy"
                src="/events/1.png"
                alt="event"
                width={500}
                height={500}
                className="grow w-full aspect-[1.75] max-md:mt-7"
              />
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <Image
                loading="lazy"
                src="/events/2.png"
                alt="event"
                width={500}
                height={500}
                className="grow w-full aspect-[1.75] max-md:mt-7"
              />
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <Image
                loading="lazy"
                src="/events/3.png"
                alt="event"
                width={500}
                height={500}
                className="grow w-full aspect-[1.75] max-md:mt-7"
              />
            </div>
          </div>
        </div>
        <div className="px-5 w-full max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex grow gap-5 justify-between px-7 pt-6 pb-1.5 w-full bg-white rounded-2xl max-md:px-5 max-md:mt-7">
                <div className="flex flex-col self-start font-bold whitespace-nowrap">
                  <div className="text-xs text-center text-indigo-600">APR</div>
                  <div className="mt-2 text-3xl text-black">14</div>
                </div>
                <div className="flex flex-col">
                  <div className="text-base font-bold leading-6 text-black">
                    রাবেয়া খাতুনের বই পরিচিতি: একটি লেখকের সাথে সংগঠিত আলোচনা
                  </div>
                  <div className="mt-4 text-sm leading-5 text-neutral-500">
                    এই ইভেন্টে অংশগ্রহণের জন্য লোকগণকে আহ্বান জানানোর জন্য
                    ইভেন্ট পোস্টার সোশ্যাল মিডিয়াতে প্রচার করা যেতে পারে।
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex grow gap-4 px-8 py-6 w-full bg-white rounded-2xl max-md:px-5 max-md:mt-7">
                <div className="flex flex-col self-start font-bold whitespace-nowrap">
                  <div className="text-xs text-indigo-600">AUG</div>
                  <div className="mt-2 text-3xl text-black">20</div>
                </div>
                <div className="flex flex-col">
                  <div className="text-base font-bold leading-6 text-black">
                    bangladesh
                  </div>
                  <div className="mt-5 text-sm leading-5 text-neutral-500">
                    Directly seated and inside for you to enjoy the show.
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex grow gap-5 justify-between px-7 py-6 w-full bg-white rounded-2xl max-md:px-5 max-md:mt-7">
                <div className="flex flex-col self-start font-bold whitespace-nowrap">
                  <div className="text-xs text-center text-indigo-600">SEP</div>
                  <div className="mt-2 text-3xl text-black">18</div>
                </div>
                <div className="flex flex-col">
                  <div className="text-base font-bold leading-6 text-black">
                    bangladesh
                  </div>
                  <div className="mt-4 text-sm leading-5 text-neutral-500">
                    Directly seated and inside for you to enjoy the show.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-5 mt-7 w-full max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <Image
                loading="lazy"
                src="events/4.png"
                alt="book"
                width={500}
                height={500}
                className="grow w-full aspect-[1.75] max-md:mt-7"
              />
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <Image
                loading="lazy"
                src="events/5.png"
                alt="book"
                width={500}
                height={500}
                className="grow w-full aspect-[1.75] max-md:mt-7"
              />
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <Image
                loading="lazy"
                src="events/6.png"
                alt="book"
                width={500}
                height={500}
                className="grow w-full aspect-[1.75] max-md:mt-7"
              />
            </div>
          </div>
        </div>
        <div className="px-5 w-full max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex grow gap-5 justify-between px-7 py-6 w-full bg-white rounded-2xl max-md:px-5 max-md:mt-7">
                <div className="flex flex-col self-start font-bold whitespace-nowrap">
                  <div className="text-xs text-center text-indigo-600">APR</div>
                  <div className="mt-2 text-3xl text-black">14</div>
                </div>
                <div className="flex flex-col">
                  <div className="text-base font-bold leading-6 text-black">
                    ইসলামের সুন্দর্য: সমস্ত দুনিয়ায় ছড়ায় শান্তি
                  </div>
                  <div className="mt-3.5 text-sm leading-5 text-neutral-500">
                    এই ইভেন্টে ইসলামের সুন্দর্য এবং এর বিভিন্ন প্রস্তুতি
                    সম্পর্কে আলোচনা হবে।
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex grow gap-4 px-8 py-6 w-full bg-white rounded-2xl max-md:px-5 max-md:mt-7">
                <div className="flex flex-col self-start font-bold whitespace-nowrap">
                  <div className="text-xs text-indigo-600">AUG</div>
                  <div className="mt-2 text-3xl text-black">20</div>
                </div>
                <div className="flex flex-col">
                  <div className="text-base font-bold leading-6 text-black">
                    bangladesh
                  </div>
                  <div className="mt-5 text-sm leading-5 text-neutral-500">
                    bangladesh
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex grow gap-5 justify-between px-7 py-6 w-full bg-white rounded-2xl max-md:px-5 max-md:mt-7">
                <div className="flex flex-col self-start font-bold whitespace-nowrap">
                  <div className="text-xs text-center text-indigo-600">SEP</div>
                  <div className="mt-2 text-3xl text-black">18</div>
                </div>
                <div className="flex flex-col">
                  <div className="text-base font-bold leading-6 text-black">
                    bangladesh
                  </div>
                  <div className="mt-4 text-sm leading-5 text-neutral-500">
                    bangladesh
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="justify-center self-center px-12 py-3 mt-16 text-lg font-bold text-center text-indigo-600 border-2 border-indigo-600 border-solid shadow-2xl rounded-[50px] max-md:px-5 max-md:mt-10">
          Load More
        </div>
      </div>
    </div>
  );
}
