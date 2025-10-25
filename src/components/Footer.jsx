export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 border-t border-gray-800 py-10 px-6 text-center">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Logo and Name */}
        <div className="flex flex-col items-center space-y-3">
          <div className="flex items-center gap-2">
            <img
              src="/src/assets/icon.png"
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
          <div className="flex gap-6 text-gray-500">
            {/* <a href="#" className="hover:text-indigo-400 transition">Privacy Policy</a>
            <a href="#" className="hover:text-indigo-400 transition">Terms</a>
            <a href="#" className="hover:text-indigo-400 transition">Support</a> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
