import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="max-w-5xl mx-auto p-6 bg-[#f9f6f2] min-h-screen">
      {/* Breadcrumb navigation */}
      <Link to="/" className="text-gray-600 flex items-center gap-2 mb-6 text-sm">
        ← Back to home
      </Link>

      <div className="space-y-10">
        {/* Hero Section */}
        <section className="text-center py-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About CareGuide</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Empowering the communities of Lagos and Abuja with transparent healthcare costs and guided medical decisions.
          </p>
        </section>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 transition-all hover:shadow-md">
            <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl text-orange-500">🎯</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To bridge the information gap in Nigeria's healthcare sector by providing instant, verified cost estimates for essential medical treatments.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 transition-all hover:shadow-md">
            <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl text-green-500">👁️</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              A future where every citizen can access affordable healthcare without the fear of hidden costs or unexpected medical bills.
            </p>
          </div>
        </div>

        {/* Why CareGuide? Section */}
        <section className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Why CareGuide?</h3>
          <div className="space-y-6">
            <div className="flex gap-4">
              <span className="text-orange-500 font-bold">01.</span>
              <div>
                <h4 className="font-bold text-gray-800">Verified Healthcare Data</h4>
                <p className="text-gray-500 text-sm">We provide data-driven estimates vetted by local community health experts in Lagos and Abuja.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-orange-500 font-bold">02.</span>
              <div>
                <h4 className="font-bold text-gray-800">Community Focused</h4>
                <p className="text-gray-500 text-sm">We highlight Primary Health Centres (PHCs) and generic drug options to ensure affordability for everyone.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-orange-500 font-bold">03.</span>
              <div>
                <h4 className="font-bold text-gray-800">Always Free</h4>
                <p className="text-gray-500 text-sm">Our platform is a community utility tool, built to be 100% free for all users.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact/Support Footer */}
        <div className="text-center pt-10 border-t border-gray-200">
          <p className="text-gray-500 text-sm">
            Developed with ❤️ by Starex Developer.
          </p>
          <p className="text-gray-400 text-xs mt-2 italic">
            For partnerships or inquiries: starexdeveloper@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
}