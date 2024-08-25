import TruncatedText from "@/components/helper/TruncatedText";
import React from "react";

export default async function ProfilePage({ params }) {
  const userId = params.id;
  const data = await fetch(`https://api1243.vercel.app/questions/${userId}`);
  const questions = await data.json();

  console.log(questions);

  return (
    <div className="container mx-auto max-w-2xl mt-12 px-6">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-8">
        User Profile
      </h1>
      <h2 className="text-2xl font-medium text-gray-600 mb-6">Questions:</h2>
      <ul className="space-y-6">
        {questions.map((question) => (
          <li
            key={question._id}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
          >
            <TruncatedText text={question.questiontext} />
          </li>
        ))}
      </ul>
    </div>
  );
}
