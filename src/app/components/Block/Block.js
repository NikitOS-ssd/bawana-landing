export default function Block({ title, children }) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
      <h2 className="text-xl font-semibold mb-6 text-gray-800">{title}</h2>
      {
        children
      }
    </div>
  );
}
