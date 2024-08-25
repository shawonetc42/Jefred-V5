import React, { Suspense } from "react";
import timeSince from "../helper/timeSince";
import Link from "next/link";
import Comments from "../client/comments/comment";
import Writecomment from "./Writecomment";
import TruncatedText from "../helper/TruncatedText";
import ShowComments from "./showComments";
import Image from "next/image";
export default async function PostsModel() {
  const data = await fetch("http://127.0.0.1:5000/answersall", {
    cache: "no-store",
  });
  const mergedData = await data.json();
  // console.log(mergedData);
  // const initialData = mergedData.slice(0, 5);
  return (
    <div>
      {mergedData
        .slice()
        .reverse()
        .map((item, index) => (
          <div
            key={index}
            className="flex flex-col px-4 py-3.5 bg-white rounded-2xl max-w-[570px] max-md:pr-5 mt-2  min-w-0  md:min-w-[570px]"
          >
            <div className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
              <div className="flex gap-2">
                <Image
                  loading="lazy"
                  alt="User Profile"
                  src={item.answerUserPhoto || "Profile.svg"}
                  width={40}
                  height={40}
                  className="shrink-0 w-8 h-8 aspect-square rounded-full"
                />
                <div className="flex flex-col my-auto">
                  <div className="flex gap-1 px-px  text-black whitespace-nowrap">
                    <Link href={`/profile/${item.userid}`} prefetch={false}>
                      <div className="grow font-semibold text-sm hover:text-[#45B09E] ">
                        {item.answeredBy}
                      </div>
                    </Link>
                  </div>
                  <div className="flex gap-2 mt-1.5 text-xs text-black text-opacity-50">
                    <div className="">Ceo Of Jefred</div>
                    <div>{timeSince(item.timestamp)}</div>
                  </div>
                </div>
              </div>
              <Image
                loading="lazy"
                src="/svg/3dot.svg"
                alt="3dot"
                width={24}
                height={24}
                className="shrink-0 my-auto w-1 aspect-[0.24]"
              />
            </div>
            <Link href={`/a/${item.questionId}`} prefetch={false}>
              <div className=" font-bold text-black mt-4 hover:underline ">
                {item.questiontext}
              </div>
            </Link>
            <div className="mt-2  text-black max-md:max-w-full">
              <TruncatedText text={item.answerText} />{" "}
              {/* Use the new component */}
              {/* {item.answerText} */}
            </div>
            {/* make a comments sections */}
            <Comments item={item} />
            <Writecomment item={item} />
            {/* add a react suspense */}
            {/* <Suspense fallback={<div>Loading...</div>}>
              <ShowComments item={item} />
            </Suspense> */}
          </div>
        ))}
    </div>
  );
}
