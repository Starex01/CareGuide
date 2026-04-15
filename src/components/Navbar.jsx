export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-6">
      <div className="flex items-center gap-3">
        <div className="bg-orange-200 p-2 rounded-xl">❤️</div>
        <div>
          <h3 className="font-semibold">CareGuide</h3>
          <p className="text-xs text-gray-500">Know before you go</p>
        </div>
      </div>

      <button className="border px-4 py-1 rounded-full text-sm">
        About
      </button>
    </nav>
  );
}