"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
const Notes = () => {
  const posts = [
    {
      answerUserPhoto: "profilephoto.png",
      answeredBy: "Kazi Nazrul Islam",
      timestamp: new Date().toISOString(),
      userid: "123456",
      questionId: "987654",
      questiontext: "Sample question text",
      answerText:
        "প্রেমের জয়গান গাও, হৃদয়ে আনন্দ ধারা ঢালো। চোখে ফুলের কান্না, মনের আলো প্রকাশ করো। শহরের পানির ঝর্না, প্রেমের আবেগ বিকেলে ছড়ানো। আমার প্রেম নজরুলের শব্দে জাগানো।।",
    },
    {
      answerUserPhoto: "profilephoto.png",
      answeredBy: "Kazi Nazrul Islam",
      timestamp: new Date().toISOString(),
      userid: "789012",
      questionId: "654321",
      questiontext: "Another sample question",
      answerText:
        "বাংলার মাতৃভাষায় তাড়াতাড়ি ভাষণ দিতে হবে। কে বলে, সূর্য দেয়, আলোচ্ছাদন করো! বাংলার আদর্শ হৃদয়, কাজীর মন জীবিত হোক। মাতৃভাষায় ভাষণ দেও, কাজীর শব্দ পূর্ণতা পাও।",
    },
  ];

  return (
    <div className="flex container mx-auto max-w-6xl">
      <ul>
        {posts.map((item, index) => (
          <div
            key={index}
            className="flex flex-col px-4 py-3.5 bg-white rounded-2xl max-w-[570px] max-md:pr-5 mt-2 min-w-[570px]  md:min-w-[570px]"
          >
            <div className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
              <div className="flex gap-2">
                <Image
                  loading="lazy"
                  src={item.answerUserPhoto}
                  width={40}
                  height={40}
                  alt="profile"
                  className="shrink-0 w-8 h-8 aspect-square rounded-full"
                />
                <div className="flex flex-col my-auto">
                  <div className="flex gap-1 px-px text-black whitespace-nowrap">
                    <Link href={`/profile/${item.userid}`} prefetch={false}>
                      <div className="grow font-semibold text-sm hover:text-[#45B09E]">
                        {item.answeredBy}
                      </div>
                    </Link>
                  </div>
                  <div className="flex gap-2 mt-1.5 text-xs text-black text-opacity-50">
                    <div>Ceo Of Jefred</div>
                    <div>12 ago</div>
                  </div>
                </div>
              </div>
              <Image
                loading="lazy"
                src="/..."
                alt="..."
                width={22}
                height={22}
                className="shrink-0 my-auto w-1 aspect-[0.24]"
              />
            </div>
            {/* <Link href={`/a/${item.questionId}`} prefetch={false}>
              <div className="font-bold text-black mt-4 hover:underline">
                {item.questiontext}
              </div>
            </Link> */}
            <div className="mt-2 text-black max-md:max-w-full">
              {item.answerText}
            </div>
            {/* make a comments section */}
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Notes;
