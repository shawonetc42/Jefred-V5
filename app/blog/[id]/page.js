import DynamicPost from "@/components/posts/dynamic";
import React from "react";

export default async function Posts({ params }) {
  const id = params.id;
  const response = await fetch(
    `https://firebase-x-python.vercel.app/status/uniqueId/${params.id}`
  );
  const data = await response.json();
  console.log(
    `https://firebase-x-python.vercel.app/status/uniqueId/${params.id}`
  );
  return (
    <div>
      <DynamicPost datafind={data} />
    </div>
  );
}
