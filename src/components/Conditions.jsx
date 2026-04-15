import { useNavigate } from "react-router-dom"; // Import the navigation hook

const conditions = [
  { name: "Malaria", emoji: "🦟" },
  { name: "Typhoid Fever", emoji: "🤒" },
  { name: "Common Cold", emoji: "🤧" },
  { name: "Headache", emoji: "🤕" },
  { name: "Stomach Pain", emoji: "🤢" },
  { name: "Cough", emoji: "😷" },
];

export default function Conditions() {
  const navigate = useNavigate(); // Initialize the navigate function

  return (
    <section className="py-12">
      <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
        <span className="text-orange-500">📈</span> Common Conditions
      </h3>

      <div className="grid grid-cols-3 gap-6">
        {conditions.map((c) => (
          <button
            key={c.name}
            // Add the onClick handler to navigate to the specific URL
            onClick={() => navigate(`/condition/${c.name.toLowerCase().replace(/\s+/g, "-")}`)}
            className="bg-white rounded-2xl p-5 flex items-center gap-4 shadow-sm hover:shadow-md transition cursor-pointer text-left"
          >
            <span className="text-2xl">{c.emoji}</span>
            <span className="text-sm font-medium text-gray-800">
              {c.name}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}