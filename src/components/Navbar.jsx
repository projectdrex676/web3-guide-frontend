import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // install with: npm install lucide-react
import logo from "../assets/icon.png"; // ✅ your logo path

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-[38px] left-0 w-full z-40 bg-black/80 backdrop-blur border-b border-gray-800">
      <div className="flex justify-between items-center px-4 py-5 text-white max-w-7xl mx-auto">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="ProjectDrex Logo" className="w-6 h-6 object-contain" />
          <h1 className="font-bold text-lg">ProjectDrex</h1>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() =>
              document.getElementById("action-grid")?.scrollIntoView({ behavior: "smooth" })
            }
            className="text-sm hover:text-indigo-400 transition cursor-pointer"
          >
            Get Started
          </button>

          <Link
            to="/wallets"
            className="text-sm px-4 py-2 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-lg hover:opacity-90 transition cursor-pointer"
          >
            Connect Wallet
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/95 border-t border-gray-800 flex flex-col items-center gap-4 py-6 animate-slide-down cursor-pointer">

          <button
            onClick={() => {
              setMenuOpen(false);
              document.getElementById("action-grid")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-sm text-white hover:text-indigo-400 transition cursor-pointer"
          >
            Get Started
          </button>

          <Link
            to="/wallets"
            onClick={() => setMenuOpen(false)}
            className="text-sm text-white px-4 py-2 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-lg hover:opacity-90 transition cursor-pointer"
          >
            Connect Wallet
          </Link>
        </div>
      )}
    </nav>
  );
}
