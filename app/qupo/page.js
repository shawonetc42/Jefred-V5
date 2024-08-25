import React from "react";
import Qucom from "./Qucom";

export default async function page() {
  // fectch data
  const data = await fetch(`http://127.0.0.1:5000/answers`, {
    cache: "no-store",
  });
  const res = await data.json();
  return (
    <div>
      <Qucom questions={res} />
    </div>
  );
}
