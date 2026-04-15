import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { conditionData } from "./data";

export default function ConditionDetail() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("costs");
  
  const data = conditionData[id];

  if (!data) {
  return (
    <div className="max-w-5xl mx-auto p-6 bg-[#f9f6f2] min-h-screen flex flex-col items-center justify-center text-center">
      {/* Visual Icon */}
      <div className="bg-white p-6 rounded-full shadow-sm mb-6">
        <span className="text-5xl">🔍</span>
      </div>

      {/* Text Content */}
      <h1 className="text-2xl font-bold text-gray-900 mb-2">
        Condition not found
      </h1>
      <p className="text-gray-500 max-w-md mb-8">
        We couldn't find any results for <span className="font-semibold text-gray-800">"{id.replace("-", " ")}"</span>. 
        Please check the spelling or try searching for a different symptom.
      </p>

      {/* Action Buttons */}
      <div className="flex gap-4">
        <Link 
          to="/" 
          className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition active:scale-95"
        >
          Back to Search
        </Link>
        <button 
          onClick={() => window.location.reload()}
          className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-50 transition"
        >
          Try Again
        </button>
      </div>
      
      {/* Support Contact - Using your provided email */}
      <p className="mt-12 text-xs text-gray-400">
        Need help? Contact support: <span className="underline">starexdeveloper@gmail.com</span>
      </p>
    </div>
  );
}

  return (
    <div className="max-w-5xl mx-auto p-6 bg-[#f9f6f2] min-h-screen">
      <Link to="/" className="text-gray-600 flex items-center gap-2 mb-6 text-sm">
        ← Back to search
      </Link>
      
      <h1 className="text-3xl font-bold text-gray-900">Results for {data.title}</h1>
      <p className="text-gray-500 text-sm mt-1 mb-8">Updated 2 hours ago • Serving Lagos area</p>

      {/* Dynamic Warning Box Based on Data */}
      <div className={`border rounded-xl p-4 mb-8 flex gap-3 ${
        data.warningType === 'professional' 
        ? "bg-orange-50 border-orange-200" // Malaria style
        : "bg-green-50 border-green-200"   // Typhoid style
      }`}>
        <span className={data.warningType === 'professional' ? "text-orange-600" : "text-green-600"}>
          {data.warningType === 'professional' ? "⚠️" : "✅"}
        </span>
        <div>
          <h4 className="font-bold text-gray-800">
            {data.warningType === 'professional' ? "Professional care recommended" : "May be treatable at home"}
          </h4>
          <p className="text-sm text-gray-600">{data.warningMessage}</p>
        </div>
      </div>

      {/* Tab Switcher - Logic remains same, styling follows your design */}
      <div className="flex bg-white rounded-full shadow-sm p-1 mb-8">
        {["costs", "options", "guidance"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-3 px-6 rounded-full text-sm font-medium transition ${
              activeTab === tab 
                ? (tab === "options" ? "bg-green-500 text-white" : "bg-orange-400 text-white") 
                : "text-gray-500 hover:bg-gray-50"
            }`}
          >
            {tab === "costs" ? "Cost Estimates" : tab === "options" ? "Affordable Options" : "Care Guidance"}
          </button>
        ))}
      </div>

      {/* Tab Content Rendering */}
      {activeTab === "costs" && <CostList items={data.costs} />}
      {activeTab === "options" && <OptionList items={data.options} />}
      {activeTab === "guidance" && <GuidanceList items={data.guidance} />}
    </div>
  );
}

// Sub-components that just map the passed data
function CostList({ items }) {
  return (
    <div className="space-y-4">
      {items.map((f, i) => (
        <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex justify-between items-center">
          <div>
            <h3 className="font-bold text-lg text-gray-800">{f.name} <span className="text-green-500 text-sm">✅</span></h3>
            <p className="text-gray-500 text-sm mb-2">{f.type}</p>
            <div className="flex gap-4 text-xs text-gray-400">
               <span>📍 {f.dist}</span> <span>🕒 Wait: {f.wait}</span> <span>⭐ {f.rating}</span>
            </div>
          </div>
          <div className="text-right">
            <p className="text-orange-500 font-bold text-xl">{f.price}</p>
            <p className="text-gray-400 text-xs">Estimated cost</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function OptionList({ items }) {
  return (
    <div className="space-y-4">
      {items.map((opt, i) => (
        <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 flex items-center gap-4">
          <div className="bg-green-100 p-3 rounded-full text-green-600">💊</div>
          <div className="flex-1">
             <p className="text-green-600 text-[10px] font-bold uppercase">{opt.category}</p>
             <h4 className="font-bold text-gray-800">{opt.title}</h4>
             <p className="text-gray-500 text-sm">{opt.desc}</p>
          </div>
          <div className="text-right">
             <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">Save {opt.save}</span>
             <p className="font-bold text-lg mt-1 text-gray-800">{opt.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function GuidanceList({ items }) {
  return (
    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
      <h3 className="text-xl font-bold mb-6 text-gray-800">What to do next</h3>
      <div className="space-y-8">
        {items.map((item, i) => (
          <div key={i} className="flex gap-4">
            <span className="bg-orange-50 text-orange-500 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">{i + 1}</span>
            <div>
              <h4 className="font-bold text-gray-800">{item.title}</h4>
              <p className="text-gray-500 text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}