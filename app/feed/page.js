"use client";
import { useState, useEffect } from "react";
import TextPost from "./TextPost";
import ImagePost from "./ImagePost";
import VideoPost from "./VideoPost";
import EventPost from "./EventPost";
import LinkPost from "./LinkPost";

const Feed = () => {
  const [feedItems, setFeedItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:5000/test");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setFeedItems(data); // Assuming the response is an array similar to feedData
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="max-w-2xl mx-auto p-4 space-y-4">
      {feedItems.map((post, index) => {
        switch (post.type) {
          case "text":
            return (
              <TextPost key={index} user={post.user} content={post.content} />
            );
          case "image":
            return (
              <ImagePost
                key={index}
                user={post.user}
                content={post.content}
                imageUrl={post.imageUrl}
              />
            );
          case "video":
            return (
              <VideoPost
                key={index}
                user={post.user}
                content={post.content}
                videoUrl={post.videoUrl}
              />
            );
          case "event":
            return (
              <EventPost
                key={index}
                user={post.user}
                eventName={post.eventName}
                date={post.date}
                description={post.description}
              />
            );
          case "link":
            return (
              <LinkPost
                key={index}
                user={post.user}
                content={post.content}
                linkUrl={post.linkUrl}
              />
            );
          default:
            return null;
        }
      })}
    </div>
  );
};

export default Feed;
