const VideoPost = ({ user, content, videoUrl }) => (
  <div className="p-4 bg-white rounded shadow">
    <h3 className="text-xl font-bold">{user}</h3>
    <p className="mt-2">{content}</p>
    <video controls className="mt-4 rounded">
      <source src={videoUrl} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
);

export default VideoPost;
