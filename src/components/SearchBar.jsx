export default function SearchBar() {
  return (
    <div className="flex items-center bg-white rounded-full shadow-md px-4 py-3 max-w-2xl mx-auto mt-6">
      <input
        className="flex-1 outline-none text-sm"
        placeholder="Describe your symptoms or search for a condition..."
      />
      <button className="bg-orange-500 text-white px-6 py-2 rounded-full text-sm">
        Search
      </button>
    </div>
  );
}