import { Routes, Route } from "react-router-dom";
import CryptoTicker from "./components/CryptoTicker";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LearningJourney from "./components/LearningJourney";
import ActionGrid from "./components/ActionGrid";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import WalletsPage from "./pages/WalletsPage";

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <CryptoTicker />
      <div className="pt-[70px]">
        <Navbar />
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <LearningJourney />
                <ActionGrid />
                <Testimonials />
                <Footer />
              </>
            }
          />

          {/* Wallet Page */}
          <Route path="/wallets" element={<WalletsPage />} />
        </Routes>
      </div>
    </div>
  );
}
