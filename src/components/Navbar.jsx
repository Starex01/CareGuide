import { Link, useNavigate } from "react-router-dom"; // Use these for navigation

export default function Navbar() {
  const navigate = useNavigate(); // This hook lets us programmatically navigate

  return (
    <nav className="flex justify-between items-center py-6">
      {/* Clicking the logo/name should take you back Home */}
      <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition cursor-pointer">
        <div className="bg-orange-200 p-2 rounded-xl">❤️</div>
        <div>
          <h3 className="font-semibold">CareGuide</h3>
          <p className="text-xs text-gray-500">Know before you go</p>
        </div>
      </Link>

      {/* About Button - Now functional */}
      <button 
        onClick={() => navigate("/about")} 
        className="border border-gray-300 px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-50 transition active:scale-95 cursor-pointer"
      >
        About
      </button>
    </nav>
  );
}