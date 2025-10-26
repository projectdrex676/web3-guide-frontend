import logo from "../assets/icon.png"; // ✅ Proper import from src/assets

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 border-t border-gray-800 py-10 px-6 text-center">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Logo and Name */}
        <div className="flex flex-col items-center space-y-3">
          <div className="flex items-center gap-2">
            <img
              src={logo}
              alt="ProjectDrex"
              className="w-7 h-7 object-contain"
            />
            <h2 className="text-white font-semibold text-lg">ProjectDrex</h2>
          </div>
          <p className="max-w-md text-xs text-gray-500">
            Empowering you to explore, learn, and navigate the decentralized Web3 world effortlessly.
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-4"></div>

        {/* Bottom row */}
        <div className="flex flex-col items-center text-sm gap-4">
           
          <p>© {new Date().getFullYear()} ProjectDrex. All rights reserved.</p>
          <div className="flex items-center gap-6 text-gray-500">
            {/* Uncomment if needed */}
            <a href="#" className="hover:text-indigo-400 transition">Contact Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
