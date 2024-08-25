import React from "react";

export async function generateMetadata({ params }) {
  const { id } = params;
  const data = await fetch(
    `http://127.0.0.1:5000/question/${params.id}`
  );
  const fetchedData = await data.json();
  

  return {
    title: fetchedData.title,
    discription: fetchedData.title,
  };
}
export default async function page({ params }) {
  const id = params.id;
  const data = await fetch(`http://127.0.0.1:5000/question/${params.id}`);
  const fetchedData = await data.json();
  console.log(fetchedData);
  return (
   <div className="px-2">
     <div className="container max-w-3xl  mx-auto mt-20 p-6 bg-white rounded-lg shadow-lg">
      <div>hello database hi</div>
      <div>hello database hi</div>
      <div>hello database hi</div>
      <h1>{fetchedData.title}</h1>
    </div>
   </div>
  );
}
