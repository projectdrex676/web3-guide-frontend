import { useState } from "react";
import logo from "../assets/icon.png";
import SupportModal from "./SupportModal"; // ✅ import the modal

export default function Footer() {
  const [showSupport, setShowSupport] = useState(false);

  return (
    <footer className="bg-black text-gray-400 border-t border-gray-800 py-10 px-6">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Logo Section */}
        <div className="flex flex-col items-center space-y-3 text-center">
          <div className="flex items-center gap-2">
            <img src={logo} alt="ProjectDrex" className="w-7 h-7 object-contain" />
            <h2 className="text-white font-semibold text-lg">ProjectDrex</h2>
          </div>
          <p className="max-w-md text-xs text-gray-500">
            Empowering you to explore, learn, and navigate the decentralized Web3 world effortlessly.
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-4"></div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm gap-4 md:gap-0">
          <p>© {new Date().getFullYear()} ProjectDrex. All rights reserved.</p>

          <div className="flex items-center gap-6 text-gray-500">
            <button
              onClick={() => setShowSupport(true)}
              className="hover:text-indigo-400 transition"
            >
              Contact Support
            </button>
          </div>
        </div>
      </div>

      {/* ✅ Modal */}
      {showSupport && <SupportModal onClose={() => setShowSupport(false)} />}
    </footer>
  );
}
