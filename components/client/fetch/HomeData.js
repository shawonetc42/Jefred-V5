"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import useInfiniteScroll from "../../hooks/useInfiniteScroll"; // Adjust path as per your file structure
import timeSince from "@/app/components/helper/timeSince";
import Hello from "@/app/components/tools/Hello";
import Loading from "@/app/loading";
import Comments from "../comments/comment";

const HomeData = () => {
  const { fetchedData, loading, error, loader } = useInfiniteScroll(
    "https://api1243.vercel.app/question"
  );

  const handleTimeSince = (time) => {
    return timeSince(time);
  };

  if (loading && fetchedData.length === 0) return <Loading />;
  if (error) return <div className="error">{error}</div>;

  // comments api fetch data id

  return (
    <div className="mt-24 md:mt-16">
      {fetchedData.map((post, index) => (
        <div
          key={index}
          className="bg-white shadow-lg rounded-lg max-w-2xl mx-auto mt-4 py-4 px-6 transition duration-300 hover:shadow-xl"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Image
                src={post.image}
                alt="user"
                width={40}
                height={40}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <Link href={`/${encodeURIComponent(post.post)}`} passHref>
                  <p className="font-semibold hover:text-blue-500">
                    {post.username}
                  </p>
                </Link>
                <p className="text-gray-500 text-sm">
                  {handleTimeSince(post.time)}
                </p>
              </div>
            </div>
            <div>
              <button className="text-gray-400 hover:text-gray-600 focus:outline-none">
                𐄂
              </button>
            </div>
          </div>
          <div className="mt-4">
            <div
              className="mt-2 text-gray-800"
              dangerouslySetInnerHTML={{ __html: post.post }}
            />
          </div>
          {post.images && (
            <div className="mt-4">
              <Image
                src={post.images}
                alt="photos"
                loading="lazy"
                width={500}
                height={500}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          )}

          <Comments post={post} />
        </div>
      ))}
      {loading && <Loading />}
      <div ref={loader} className="intersection-loader" />
    </div>
  );
};

export default HomeData;
