import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";
import Conditions from "./components/Conditions";
import Features from "./components/Features";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="max-w-5xl mx-auto px-4">
      <Navbar />
      <Hero />
      <SearchBar />
      <Conditions />
      <Features />
      <Footer />
    </div>
  );
}