// src/data.js
export const conditionData = {
  malaria: {
    title: "Malaria",
    warningType: "professional", // for the orange warning box
    warningMessage: "Malaria requires professional diagnosis and treatment. Do not attempt to treat at home with over-the-counter medications.",
    costs: [
      { name: "Lagos Island General Hospital", type: "Public Hospital", price: "NGN 8,000 - 15,000", dist: "2.3 km", wait: "45-90 min", rating: "4.2" },
      { name: "Yaba Primary Health Centre", type: "PHC", price: "NGN 3,500 - 6,000", dist: "1.8 km", wait: "30-60 min", rating: "4.0" },
      { name: "Victoria Island Medical Center", type: "Private Hospital", price: "NGN 25,000 - 40,000", dist: "5.1 km", wait: "15-30 min", rating: "4.7" }
    ],
    options: [
      { category: "Generic Drugs", title: "Artemether-Lumefantrine (Generic)", desc: "Generic version of Coartem. Equally effective.", price: "NGN 1,200 - 2,000", save: "60%" },
      { category: "Community Health", title: "Community Health Worker Visit", desc: "Rapid diagnostic test and treatment at your home", price: "NGN 4,000 - 6,000", save: "40%" }
    ],
    guidance: [
      { title: "Assess severity", desc: "Professional evaluation is recommended. Schedule an appointment soon." },
      { title: "Compare costs", desc: "Review the facilities above. PHCs often provide quality care at lower costs." },
      { title: "Seek care if needed", desc: "If symptoms worsen, develop fever above 38.5°C, or you feel very unwell, seek immediate care." }
    ]
  },
  
  "typhoid-fever": {
    title: "Typhoid Fever",
    warningType: "home", // for the green treatment box
    warningMessage: "For mild symptoms, rest and over-the-counter medications may help. Seek care if symptoms worsen or persist beyond 3 days.",
    costs: [
      { name: "Nearby Primary Health Centre", type: "PHC", price: "NGN 2,000 - 5,000", dist: "1.5 km", wait: "20-45 min", rating: "4.1" },
      { name: "Community Clinic", type: "Private Clinic", price: "NGN 8,000 - 12,000", dist: "3.2 km", wait: "15-30 min", rating: "4.5" }
    ],
    options: [
      { category: "Generic Drugs", title: "Generic Pain Relief", desc: "Paracetamol or Ibuprofen", price: "NGN 300 - 800", save: "50%" }
    ],
    guidance: [
      { title: "Assess severity", desc: "Your symptoms appear mild. Monitor for 24-48 hours with home care." },
      { title: "Compare costs", desc: "Review the facilities above. PHCs often provide quality care at lower costs." },
      { title: "Seek care if needed", desc: "If symptoms worsen, develop fever above 38.5°C, or you feel very unwell, seek immediate care." }
    ]
  },

  "common-cold": {
    title: "Common Cold",
    warningType: "home", // for the green treatment box
    warningMessage: "For mild symptoms, rest and over-the-counter medications may help. Seek care if symptoms worsen or persist beyond 3 days.",
    costs: [
      { name: "Nearby Primary Health Centre", type: "PHC", price: "NGN 2,000 - 5,000", dist: "1.5 km", wait: "20-45 min", rating: "4.1" },
      { name: "Community Clinic", type: "Private Clinic", price: "NGN 8,000 - 12,000", dist: "3.2 km", wait: "15-30 min", rating: "4.5" }
    ],
    options: [
      { category: "Generic Drugs", title: "Generic Pain Relief", desc: "Paracetamol or Ibuprofen", price: "NGN 300 - 800", save: "50%" }
    ],
    guidance: [
      { title: "Assess severity", desc: "Your symptoms appear mild. Monitor for 24-48 hours with home care." },
      { title: "Compare costs", desc: "Review the facilities above. PHCs often provide quality care at lower costs." },
      { title: "Seek care if needed", desc: "If symptoms worsen, develop fever above 38.5°C, or you feel very unwell, seek immediate care." }
    ]
  },

  headache: {
    title: "Headache",
    warningType: "home", // for the green treatment box
    warningMessage: "For mild symptoms, rest and over-the-counter medications may help. Seek care if symptoms worsen or persist beyond 3 days.",
    costs: [
      { name: "Nearby Primary Health Centre", type: "PHC", price: "NGN 2,000 - 5,000", dist: "1.5 km", wait: "20-45 min", rating: "4.1" },
      { name: "Community Clinic", type: "Private Clinic", price: "NGN 8,000 - 12,000", dist: "3.2 km", wait: "15-30 min", rating: "4.5" }
    ],
    options: [
      { category: "Generic Drugs", title: "Generic Pain Relief", desc: "Paracetamol or Ibuprofen", price: "NGN 300 - 800", save: "50%" }
    ],
    guidance: [
      { title: "Assess severity", desc: "Your symptoms appear mild. Monitor for 24-48 hours with home care." },
      { title: "Compare costs", desc: "Review the facilities above. PHCs often provide quality care at lower costs." },
      { title: "Seek care if needed", desc: "If symptoms worsen, develop fever above 38.5°C, or you feel very unwell, seek immediate care." }
    ]
  },

  "stomach-pain": {
    title: "Stomach Pain",
    warningType: "home", // for the green treatment box
    warningMessage: "For mild symptoms, rest and over-the-counter medications may help. Seek care if symptoms worsen or persist beyond 3 days.",
    costs: [
      { name: "Nearby Primary Health Centre", type: "PHC", price: "NGN 2,000 - 5,000", dist: "1.5 km", wait: "20-45 min", rating: "4.1" },
      { name: "Community Clinic", type: "Private Clinic", price: "NGN 8,000 - 12,000", dist: "3.2 km", wait: "15-30 min", rating: "4.5" }
    ],
    options: [
      { category: "Generic Drugs", title: "Generic Pain Relief", desc: "Paracetamol or Ibuprofen", price: "NGN 300 - 800", save: "50%" }
    ],
    guidance: [
      { title: "Assess severity", desc: "Your symptoms appear mild. Monitor for 24-48 hours with home care." },
      { title: "Compare costs", desc: "Review the facilities above. PHCs often provide quality care at lower costs." },
      { title: "Seek care if needed", desc: "If symptoms worsen, develop fever above 38.5°C, or you feel very unwell, seek immediate care." }
    ]
  },

  cough: {
    title: "Cough",
    warningType: "home", // for the green treatment box
    warningMessage: "For mild symptoms, rest and over-the-counter medications may help. Seek care if symptoms worsen or persist beyond 3 days.",
    costs: [
      { name: "Nearby Primary Health Centre", type: "PHC", price: "NGN 2,000 - 5,000", dist: "1.5 km", wait: "20-45 min", rating: "4.1" },
      { name: "Community Clinic", type: "Private Clinic", price: "NGN 8,000 - 12,000", dist: "3.2 km", wait: "15-30 min", rating: "4.5" }
    ],
    options: [
      { category: "Generic Drugs", title: "Generic Pain Relief", desc: "Paracetamol or Ibuprofen", price: "NGN 300 - 800", save: "50%" }
    ],
    guidance: [
      { title: "Assess severity", desc: "Your symptoms appear mild. Monitor for 24-48 hours with home care." },
      { title: "Compare costs", desc: "Review the facilities above. PHCs often provide quality care at lower costs." },
      { title: "Seek care if needed", desc: "If symptoms worsen, develop fever above 38.5°C, or you feel very unwell, seek immediate care." }
    ]
  }
};