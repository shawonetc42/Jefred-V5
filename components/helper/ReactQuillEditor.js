"use client";
import React, { useState } from "react";
import ReactQuill from "react-quill"; // Assuming you're using react-quill for rich text editing
import { TbLocationQuestion } from "react-icons/tb";
export default function MyReactQuillEditor({
  question,
  answerTexts,
  handleAnswerChange,
  submitAnswer,
  //   handleFollow,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitAnswer(question._id);
    setIsModalOpen(false);
  };
  const handleFollow = () => {
    followQuestion(question._id);
  };
  return (
    <div>
      <div className="flex justify-between">
        <span
          onClick={openModal}
          className="flex gap-2 items-center cursor-pointer text-gray-500 bg-gray-100 py-2 px-2 rounded-full "
        >
          <TbLocationQuestion /> আপনার উত্তর লিখুন
        </span>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="fixed inset-0 bg-black opacity-50"></div>
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative z-10">
            <span
              className="absolute top-0 right-0 cursor-pointer text-gray-500 hover:text-gray-700"
              onClick={closeModal}
            >
              &times;
            </span>
            <form key={question._id} className="mt-4">
              <ReactQuill
                value={answerTexts[question._id] || ""}
                onChange={(value) => handleAnswerChange(question._id, value)}
                placeholder="আপনার উত্তর লিখুন"
                className="mb-4"
              />
              <button
                type="submit"
                onClick={handleSubmit}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                disabled={!answerTexts[question._id]?.trim()}
              >
                উত্তর জমা দিন
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
