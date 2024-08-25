import React from "react";
import AnswerData from "./AnswerData";

// export async function generateMetadata({ params }) {
//   const { id } = params;
//   try {
//     const response = await fetch(`https://api1243.vercel.app/questions/${id}`);
//     if (!response.ok) {
//       throw new Error("Failed to fetch data");
//     }
//     const fetchedData = await response.json();

//     return {
//       title: fetchedData.questiontext, // Assuming 'questiontext' is the property containing the title
//       description: "Description for SEO purposes", // Replace with actual description if available
//     };
//   } catch (error) {
//     console.error("Error fetching metadata:", error.message);
//     return {
//       title: "Error",
//       description: "Failed to fetch metadata",
//     };
//   }
// }
export default async function Answer({ params }) {
  const id = params.id;
  const data = await fetch(`https://api1243.vercel.app/questions/${params.id}`);
  const fetchedData = await data.json();
  //  use find mathod
  console.log(fetchedData);
  // add a answer data fetch
  // const answerdata = await fetch(
  //   `https://api1243.vercel.app/questions/${params.id}/answers`
  // ).then((response) => response.json());

  // const answers = await fetch(
  //   `https://api1243.vercel.app/questions/${params.id}/answers`
  // );
  // const fetchedDataAnswer = await answers.json();
  // console.log(fetchedDataAnswer);
  return (
    <div className="mt-20">
      <AnswerData data={fetchedData} />
    </div>
  );
}
