"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";
import Notification from "@/components/helper/notifications";

const QuestionCom = () => {
  const { data: session, status } = useSession();
  const [questions, setQuestions] = useState([]);
  const [newAnswerText, setNewAnswerText] = useState("");
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

  const submitAnswer = async (questionId) => {
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
        }
      );

      console.log("Answer submitted successfully:", response.data);
      setNotification(
        `Answer submitted successfully for question ${questionId}`
      );
      clearForm();
      fetchQuestions();
    } catch (error) {
      console.error("Error submitting answer:", error);
      setNotification(`Failed to submit answer for question ${questionId}`);
    }
  };

  const clearForm = () => {
    setNewAnswerText("");
  };

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
          <h2 className="text-xl font-bold mb-2">{question.title}</h2>
          <div className="text-gray-500 text-sm">প্রশ্ন করেছেনঃ</div>
          <p className="mt-2">{question.content}</p>

          {question.answers && question.answers.length > 0 && (
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2">উত্তরগুলি:</h3>
              {question.answers.map((answer) => (
                <div
                  key={answer._id}
                  className="bg-gray-100 p-2 rounded-md mb-2"
                >
                  <p className="text-gray-700">{answer.answerText}</p>
                  <div className="text-gray-500 text-sm mt-1">
                    উত্তর দিয়েছেনঃ {answer.answeredBy}
                  </div>
                </div>
              ))}
            </div>
          )}

          <form key={question._id} className="mt-4">
            <textarea
              className="w-full p-2 border rounded-md"
              placeholder="আপনার উত্তর লিখুন"
              value={newAnswerText}
              onChange={(e) => setNewAnswerText(e.target.value)}
              required
            ></textarea>
            <button
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                submitAnswer(question._id);
              }}
              className="mt-2 bg-blue-500 text-white p-2 rounded-md"
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
