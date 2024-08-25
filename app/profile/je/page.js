"use client";
import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

const ProfilePage = () => {
  const { data: session } = useSession();
  const [questions, setQuestions] = useState([]);
  // const userId = "117088566677258347574"; // Replace with dynamic userId based on your application logic
  const userId = session?.uid;
  useEffect(() => {
    fetch(`https://api1243.vercel.app/questions/${userId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch questions");
        }
        return response.json();
      })
      .then((data) => {
        setQuestions(data);
      })
      .catch((error) => {
        console.error("Error fetching questions:", error);
      });
  }, [userId]);

  console.log(questions);

  return (
    <div className="container mt-20">
      <h1>User Profile</h1>
      <h2>Questions:</h2>
      <ul>
        {questions.map((question) => (
          <li key={question._id}>{question.questiontext}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProfilePage;
