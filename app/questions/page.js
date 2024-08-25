"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";
import Notification from "@/components/helper/notifications";
import Link from "next/link";
import Image from "next/image";

const QuestionCom = () => {
  const { data: session, status } = useSession();
  const [questions, setQuestions] = useState([]);
  const [answerTexts, setAnswerTexts] = useState({});
  const [notification, setNotification] = useState("");

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const response = await axios.get("https://api1243.vercel.app/answers");
      setQuestions(response.data);
    } catch (error) {
      console.error("Error fetching questions:", error);
      setNotification("Error fetching questions. Please try again later.");
    }
  };

  const handleAnswerChange = (questionId, text) => {
    setAnswerTexts((prev) => ({ ...prev, [questionId]: text }));
  };

  const submitAnswer = async (questionId) => {
    const newAnswerText = answerTexts[questionId];

    if (!newAnswerText.trim()) {
      setNotification("Answer text cannot be empty.");
      return;
    }

    try {
      const response = await axios.post(
        `https://api1243.vercel.app/questions/${questionId}/answers`,
        {
          answerText: newAnswerText,
          answeredBy: session.user.name,
          answerUserPhoto: session.user.image, // Include user image in the payload
        }
      );

      console.log("Answer submitted successfully:", response.data);
      setNotification(
        `Answer submitted successfully for question ${questionId}`
      );
      clearForm(questionId);
      fetchQuestions();
    } catch (error) {
      console.error("Error submitting answer:", error);
      setNotification(`Failed to submit answer for question ${questionId}`);
    }
  };

  const clearForm = (questionId) => {
    setAnswerTexts((prev) => ({ ...prev, [questionId]: "" }));
  };

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => setNotification(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  if (status === "loading") return <p>Loading...</p>;
  if (!session)
    return <p className="mt-20">Please sign in to answer questions.</p>;

  return (
    <div className="mt-20 max-w-2xl mx-auto">
      {questions.map((question) => (
        <div
          key={question._id}
          className="bg-white shadow-md rounded-md p-4 mb-4"
        >
          <Link href={`/questions/${question._id}`}>
            <h2 className="text-xl font-bold mb-2">{question.post}</h2>
          </Link>
          <div className="text-gray-500 text-sm">
            প্রশ্ন{" "}
            <p className="mt-2 font-bold text-3xl">{question.questiontext}</p>{" "}
          </div>

          {question.answers && question.answers.length > 0 && (
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2">উত্তরগুলি:</h3>
              {question.answers.map((answer) => (
                <div
                  key={answer._id}
                  className="bg-gray-100 p-2 rounded-md mb-2"
                >
                  <p className="text-gray-700">{answer.answerText}</p>
                  <div className="flex items-center mt-1">
                    <Image
                      src={answer.answerUserPhoto}
                      alt={`${answer.answeredBy}'s profile`}
                      width={24}
                      height={24}
                      className="w-8 h-8 rounded-full mr-2"
                    />
                    <div className="text-gray-500 text-sm">
                      উত্তর দিয়েছেনঃ {answer.answeredBy}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          <form key={question._id} className="mt-4">
            <textarea
              className="w-full p-2 border rounded-md"
              placeholder="আপনার উত্তর লিখুন"
              value={answerTexts[question._id] || ""}
              onChange={(e) => handleAnswerChange(question._id, e.target.value)}
              required
            ></textarea>
            <button
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                submitAnswer(question._id);
              }}
              className="mt-2 bg-blue-500 text-white p-2 rounded-md"
              disabled={!answerTexts[question._id]?.trim()}
            >
              উত্তর জমা দিন
            </button>
          </form>
        </div>
      ))}

      {notification && (
        <div className="absolute bottom-0 right-0 mb-4 mr-4 bg-green-400 text-white p-2 rounded-md shadow-md">
          {notification}
        </div>
      )}
    </div>
  );
};

export default QuestionCom;
