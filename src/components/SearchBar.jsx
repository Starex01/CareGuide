import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Essential for navigation
import { FiSearch } from "react-icons/fi"; //

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

    const handleSearch = (e) => {
    e.preventDefault();
    const input = query.toLowerCase().trim();

    if (!input) return;

    // Professional mapping: match common keywords to your data keys
    let targetId = input.replace(/\s+/g, "-");

    // "Smart" Redirects
    if (input.includes("fever") || input.includes("typhoid")) {
        targetId = "typhoid-fever";
    } else if (input.includes("malaria") || input.includes("mosquito", "paludism")) {
        targetId = "malaria";
    } else if (input.includes("head") || input.includes("ache", "migraine")) {
        targetId = "headache";
    } else if (input.includes("stomach") || input.includes("belly", "stom")) {
        targetId = "stomach-pain";
    }

    navigate(`/condition/${targetId}`);
  };

  return (
    <form 
      onSubmit={handleSearch} 
      className="flex items-center bg-white rounded-full shadow-lg p-2 max-w-2xl mx-auto mt-6"
    >
      <div className="pl-4 pr-2">
        <FiSearch className="text-gray-500" />
      </div>
      <input
        className="w-full bg-transparent focus:outline-none text-lg text-gray-700"
        placeholder="Describe your symptoms or search for a condition..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button 
        type="submit" 
        className="bg-orange-500 text-white rounded-full px-8 py-3 text-lg font-semibold hover:bg-orange-600 transition active:scale-95"
      >
        Search
      </button>
    </form>
  );
}