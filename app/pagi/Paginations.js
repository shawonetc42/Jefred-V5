import React from "react";
import PaginationsPost from "./page";

export default async function Paginations() {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_page=1&_limit=10`
  );
  const initialPosts = await res.json();
  return (
    <div>
      <PaginationsPost initialPosts={initialPosts} />
    </div>
  );
}
