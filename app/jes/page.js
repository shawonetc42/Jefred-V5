import React from "react";

export default async function Home() {
  const res = await fetch("http://127.0.0.1:5000/api/posts_with_comments", {
    cache: "no-store",
  });
  const data = await res.json();
  //   console.log(data);
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Posts and Comments</h1>
      {data.map((item) => (
        <div
          key={item.post.id}
          className="border border-gray-200 rounded-md p-4 mb-4"
        >
          <h2 className="text-2xl font-bold mb-2">{item.post.title}</h2>
          <p className="text-gray-700 mb-4">{item.post.body}</p>
          <h3 className="text-xl font-bold mb-2">Comments:</h3>
          <ul>
            {item.comments.map((comment) => (
              <li key={comment.id} className="mb-2">
                <strong className="text-blue-700">{comment.name}</strong> -{" "}
                <span className="text-gray-600">{comment.email}</span>
                <br />
                <span className="text-gray-800">{comment.body}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
