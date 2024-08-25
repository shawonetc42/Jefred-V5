const TextPost = ({ user, content }) => (
  <div className="p-4 bg-white rounded shadow">
    <h3 className="text-xl font-bold">{user}</h3>
    <p className="mt-2">{content}</p>
  </div>
);

export default TextPost;
