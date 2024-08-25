import React from "react";
import dataQuestion from "@/data/Question";
import dataAnswer from "@/data/Answers";

export default function Page() {
  // Merge questions and answers based on questionId
  const mergedData = dataAnswer.map((answer) => {
    const question = dataQuestion.find(
      (question) => question.question_id === answer.question_id
    );
    return {
      questionText: question ? question.question_text : "Question not found",
      questionId: answer.question_id,
      answerText: answer.answer_text,
      answeredBy: answer.author_id,
    };
  });

  //   console.log(mergedData);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Questions and their IDs</h1>
      <ul className="space-y-4">
        {mergedData.map((item, index) => (
          <li
            key={index}
            className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <p className="text-lg font-semibold text-gray-800">
              <strong>Question:</strong> {item.questionText}
            </p>
            <p className="text-sm text-gray-600">
              <strong>Question ID:</strong> {item.answeredBy}
            </p>
            <p>
              <strong>Answer:</strong> {item.answerText}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
