"use client";
import React, { useState } from "react";

function AnswerData({ data }) {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedQuestionId, setSelectedQuestionId] = useState(null);

  const togglePopup = (questionId) => {
    setShowPopup(!showPopup);
    setSelectedQuestionId(questionId);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const answer = formData.get("answer");

    try {
      const response = await fetch("http://127.0.0.1:5000/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Add any other headers if needed
        },
        body: JSON.stringify({ id: selectedQuestionId, answer }), // Include question ID with the answer
      });

      if (!response.ok) {
        throw new Error("Failed to submit answer");
      }

      console.log("Answer submitted successfully!");
      // You can do further processing here, like showing a success message
    } catch (error) {
      console.error("Error submitting answer:", error.message);
      // Handle error, show error message, etc.
    }
  };

  return (
    <div className="container max-w-3xl mx-auto rounded-md py-4 px-2 bg-gray-200 text-black">
      <div>
        <div>{data.questiontext}</div>
        <div className="flex justify-between">
          <button onClick={() => togglePopup(data.id)}>Answer</button>
          <h1>Request</h1>
        </div>
        <div>
          <p>{data.questiontext}</p>
          <p>{data.answerText}</p>
        </div>
        {showPopup && (
          <div
            className="fixed top-0 left-0 w-full h-full text-black bg-black bg-opacity-50 flex justify-center items-center"
            onClick={togglePopup}
          >
            <div
              className="bg-white p-4 rounded-md"
              onClick={(e) => e.stopPropagation()}
            >
              <p className="text-black">This is the popup content.</p>
              <form onSubmit={handleSubmit}>
                <label>
                  Answer:
                  <input type="text" name="answer" />
                </label>
                <input type="hidden" name="id" value={selectedQuestionId} />

                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AnswerData;
