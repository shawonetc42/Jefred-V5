import TruncatedText from "@/components/helper/TruncatedText";
import DynamicPost from "@/components/posts/dynamic";
import React from "react";

// Utility function to remove HTML tags from a string
function stripHtmlTags(str) {
  return str.replace(/<\/?[^>]+(>|$)/g, "");
}

export async function generateMetadata({ params }) {
  const { id } = params;
  const response = await fetch(`https://api1243.vercel.app/postsall/${id}`);
  const post = await response.json();

  // Remove HTML tags from the questiontext
  const strippedText = stripHtmlTags(post.questiontext);

  return {
    title: strippedText,
    description: strippedText,
  };
}

export default async function Posts({ params }) {
  const id = params.id;
  const response = await fetch(`https://api1243.vercel.app/postsall/${id}`);
  const data = await response.json();

  return (
    <div className="container mx-auto max-w-3xl">
      <TruncatedText text={data.questiontext} />
    </div>
  );
}
