const LinkPost = ({ user, content, linkUrl }) => (
  <div className="p-4 bg-white rounded shadow">
    <h3 className="text-xl font-bold">{user}</h3>
    <p className="mt-2">{content}</p>
    <a
      href={linkUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-4 text-blue-500 underline"
    >
      {linkUrl}
    </a>
  </div>
);

export default LinkPost;
