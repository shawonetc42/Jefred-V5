const EventPost = ({ user, eventName, date, description }) => (
  <div className="p-4 bg-white rounded shadow">
    <h3 className="text-xl font-bold">{user}</h3>
    <h4 className="mt-2 text-lg font-semibold">{eventName}</h4>
    <p className="mt-1 text-gray-500">{date}</p>
    <p className="mt-2">{description}</p>
  </div>
);

export default EventPost;
