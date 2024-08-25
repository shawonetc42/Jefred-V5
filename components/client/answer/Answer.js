"use client";
import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { useRouter } from "next/navigation";
import Link from "next/link";
const AnswerClient = ({ data }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [answer, setAnswer] = useState("");
  const router = useRouter();

  const handleButtonClick = (question) => {
    setSelectedQuestion(question);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setSelectedQuestion(null);
    setAnswer("");
  };

  const handleSubmit = () => {
    // Handle the answer submission logic here
    console.log("Answer submitted:", answer);
    handleClosePopup();
    router.push("/answerpage"); // Navigate to the answer page
  };
const [
    answers,
    questionAuthor,
    questionContent,
    questionId,
    topics,
    questionTitle,
    followers,
    views,
  ] = data;
  return (
    <div className="mt-20 mx-auto max-w-3xl px-4">
      {/* start map */}
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">{questionTitle}</h1>
        <p className="mb-2">{questionContent}</p>
        <p className="mb-2">
          Asked by:{" "}
          <Link href={questionAuthor.profile_url} className="text-blue-600">
            {questionAuthor.name}
          </Link>
        </p>
        <p className="mb-2">Followers: {followers}</p>
        <p className="mb-4">Views: {views}</p>
        {/* <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Topics</h2>
          <ul className="list-disc list-inside">
            {topics.map((topic, index) => (
              <li key={index}>{topic}</li>
            ))}
          </ul>
        </div> */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Answers</h2>
          {answers.map((answer) => (
            <div key={answer.id} className="border p-4 mb-4 rounded">
              <p className="mb-2">{answer.content}</p>
              <p className="mb-2">
                Answered by:{" "}
                <Link
                  href={answer.author.profile_url}
                  className="text-blue-600"
                >
                  {answer.author.name}
                </Link>
              </p>
              <p className="mb-2">Upvotes: {answer.upvotes}</p>
              <div className="ml-4">
                <h3 className="text-lg font-semibold mb-2">Comments</h3>
                {answer.comments.map((comment) => (
                  <div key={comment.id} className="border p-2 mb-2 rounded">
                    <p className="mb-1">{comment.content}</p>
                    <p className="mb-1">
                      Commented by:{" "}
                      <Link
                        href={comment.author.profile_url}
                        className="text-blue-600"
                      >
                        {comment.author.name}
                      </Link>
                    </p>
                    <p>Upvotes: {comment.upvotes}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* stop end */}
      <div className="flex gap-2 items-center text-xl font-semibold mb-6">
        <AiFillStar className="text-yellow-500" />
        <span>Questions For You</span>
      </div>
      {data.map((item) => (
        <div
          key={item.id}
          className="bg-white shadow-md rounded-lg p-4 mb-4 transition-transform transform hover:scale-105"
        >
          <div className="text-lg font-semibold mb-2">{item.name}</div>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition-colors"
            onClick={() => handleButtonClick(item)}
          >
            Answer
          </button>
        </div>
      ))}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div
            className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4">
              <span className="text-gray-800 font-semibold text-lg">
                {selectedQuestion.post}
              </span>
            </div>
            <textarea
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="Type your answer here..."
            />
            <div className="mt-4 flex justify-end gap-2">
              <button
                className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-full transition-colors"
                onClick={handleClosePopup}
              >
                Close
              </button>
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition-colors"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AnswerClient;
