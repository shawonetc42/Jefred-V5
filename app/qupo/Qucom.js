"use client";
import Image from "next/image";
import React, { useState } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";
import Notification from "@/components/helper/notifications";
import Link from "next/link";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import MyReactQuillEditor from "@/components/helper/ReactQuillEditor";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const Qucom = ({ questions: initialQuestions }) => {
  const { data: session, status } = useSession();
  const [questions, setQuestions] = useState(initialQuestions || []);
  const [answerTexts, setAnswerTexts] = useState({});
  const [notification, setNotification] = useState("");

  const handleAnswerChange = (questionId, value) => {
    setAnswerTexts((prev) => ({ ...prev, [questionId]: value }));
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
          answerUserId: session.uid, // Include user ID in the payload
        }
      );

      console.log("Answer submitted successfully:", response.data);
      setNotification(
        `Answer submitted successfully for question ${questionId}`
      );
      clearForm(questionId);
      updateQuestionsAfterAnswer(questionId, response.data); // Update questions state after successful answer submission
    } catch (error) {
      console.error("Error submitting answer:", error);
      setNotification(`Failed to submit answer for question ${questionId}`);
    }
  };

  const updateQuestionsAfterAnswer = (questionId, newAnswer) => {
    const updatedQuestions = questions.map((question) => {
      if (question._id === questionId) {
        return {
          ...question,
          answers: [...(question.answers || []), newAnswer], // Append new answer to the answers array
        };
      }
      return question;
    });
    setQuestions(updatedQuestions);
  };

  const clearForm = (questionId) => {
    setAnswerTexts((prev) => ({ ...prev, [questionId]: "" }));
  };

  return (
    <div className="mt-20 max-w-2xl mx-auto">
      {questions
        .slice()
        .reverse()
        .map((question) => (
          <div
            key={question._id}
            className="bg-white shadow-md rounded-md p-4 mt-2"
          >
            <div className="text-gray-700 ">
              <Link href={`/a/${question.id}`}>
                <h3 className="font-semibold ">{question.questiontext}</h3>
              </Link>
            </div>

            {question.answers && question.answers.length > 0 ? (
              <div className="flex items-center">
                <h3 className="text-gray-500 text-sm">উত্তর দিয়েছেন:</h3>
                {question.answers
                  .slice() // Make sure to reverse the answers before mapping
                  .reverse()
                  .map((answer) => (
                    <div key={answer._id} className="flex p-2 rounded-md ">
                      <div className="flex items-center ">
                        <div className="flex items-center">
                          {answer.answerUserPhoto ? (
                            <Image
                              src={answer.answerUserPhoto}
                              alt={`${answer.answeredBy}'s profile`}
                              width={32}
                              height={32}
                              className="w-8 h-8 rounded-full "
                            />
                          ) : (
                            <span>
                              <Image
                                src="/Profile.svg"
                                alt="Profile"
                                width={32}
                                height={32}
                              />
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            ) : (
              <div className="text-gray-500 text-sm">কোন উত্তর নেই</div>
            )}

            <div className="flex justify-between">
              <MyReactQuillEditor
                question={question}
                answerTexts={answerTexts}
                handleAnswerChange={handleAnswerChange}
                submitAnswer={submitAnswer}
              />
            </div>
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

export default Qucom;
