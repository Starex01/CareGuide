import { Routes, Route } from "react-router-dom"; // Import these
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";
import Conditions from "./components/Conditions";
import Features from "./components/Features";
import Footer from "./components/Footer";
import ConditionDetail from "./components/ConditionDetail"; // Import your new component

export default function App() {
  return (
    <div className="max-w-5xl mx-auto px-4">
      <Navbar />
      
      {/* The Routes container manages which component displays */}
      <Routes>
        {/* Home Page Route: Displays all your main components */}
        <Route 
          path="/" 
          element={
            <>
              <Hero />
              <SearchBar />
              <Conditions />
              <Features />
            </>
          } 
        />

        {/* Dynamic Detail Route: Displays the specific condition results */}
        <Route path="/condition/:id" element={<ConditionDetail />} />
      </Routes>

      <Footer />
    </div>
  );
}