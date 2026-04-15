export default function Features() {
  return (
    <section className="py-12 grid grid-cols-3 gap-6">
      
      <div className="bg-white p-6 rounded-2xl shadow-sm">
        <div className="text-2xl mb-3">💰</div>
        <h4 className="font-semibold text-gray-800 mb-2">
          Cost Transparency
        </h4>
        <p className="text-sm text-gray-500">
          See estimated costs at nearby clinics and hospitals before you visit
        </p>
      </div>

      <div className="bg-gray-100 p-6 rounded-2xl shadow-sm">
        <div className="text-2xl mb-3">💊</div>
        <h4 className="font-semibold text-gray-800 mb-2">
          Affordable Options
        </h4>
        <p className="text-sm text-gray-500">
          Discover generic drugs, PHCs, and community health workers
        </p>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-sm">
        <div className="text-2xl mb-3">📋</div>
        <h4 className="font-semibold text-gray-800 mb-2">
          Care Guidance
        </h4>
        <p className="text-sm text-gray-500">
          Get informed guidance on whether to treat at home or seek care
        </p>
      </div>

    </section>
  );
}