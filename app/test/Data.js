// utils/fetchData.js
export const fetchData = async () => {
  try {
    const [postsRes, commentsRes] = await Promise.all([
      fetch("https://api1243.vercel.app/question"),
      fetch("https://jsonplaceholder.typicode.com/comments"),
    ]);

    const postsData = await postsRes.json();
    const commentsData = await commentsRes.json();

    // Format the data to match the local data structure
    const formattedPosts = postsData.map((post) => ({
      id: post.id.toString(),
      title: post.title,
      content: post.body,
    }));

    const formattedComments = commentsData.map((comment) => ({
      id: comment.id,
      postId: comment.postId.toString(),
      author: comment.name,
      text: comment.body,
    }));

    return { posts: formattedPosts, comments: formattedComments };
  } catch (error) {
    console.error("Error fetching posts and comments:", error);
    return { posts: [], comments: [] };
  }
};
