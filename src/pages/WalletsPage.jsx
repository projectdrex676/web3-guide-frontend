import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout"; // ✅ shared layout (includes Navbar + Footer)
import ConnectModal from "../components/ConnectModal"; // ✅ modal component

export default function WalletsPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const [selectedItem, setSelectedItem] = useState(null);
  const [activeTab, setActiveTab] = useState("apps");

  const wallets = [
    { name: "MetaMask", logo: "/metamask.png" },
    { name: "TrustWallet", logo: "/trustwallet.png" },
    { name: "TokenPocket", logo: "/tokenpocket.png" },
    { name: "Tronlink", logo: "/tronlink.png" },
    { name: "WalletConnect", logo: "/walletconnect.png" },
    { name: "Transit Swap", logo: "/transitswap.png" },
    { name: "BitPie", logo: "/bitpie.png" },
    { name: "BitgetWallet", logo: "/bitgetwallet.png" },
    { name: "SafePal", logo: "/safepal.png" },
    { name: "Ton Keeper", logo: "/tonkeeper.png" },
    { name: "Rainbow", logo: "/rainbow.png" },
    { name: "Zerion", logo: "/zerion.png" },
    { name: "Spot", logo: "/spot.png" },
    { name: "Solfare", logo: "/solfare.png" },
    { name: "Atomic Wallet", logo: "/atomicwallet.png" },
    { name: "Coinbase", logo: "/coinbase.png" },
    { name: "OKX Wallet", logo: "/okxwallet.png" },
    { name: "Blockchain.com", logo: "/blockchain.png" },
    { name: "Binance Web3 Wallet", logo: "/binance.png" },
  ];

  const apps = [
    { name: "Uniswap", logo: "/uniswap.png" },
    { name: "Rabby", logo: "/rabby.png" },
    { name: "Swappy", logo: "/swappy.png" },
    { name: "Ixir", logo: "/ixir.png" },
    { name: "OpenTheta", logo: "/opentheta.png" },
    { name: "OpenSea", logo: "/opensea.png" },
    { name: "Argent", logo: "/argent.png" },
    { name: "Farcaster", logo: "/farcaster.png" },
    { name: "Binance", logo: "/binance.png" },
    { name: "FireBlocks", logo: "/fireblocks.png" },
    { name: "Axie Infinity", logo: "/axieinfinity.png" },
    { name: "DexCoin App", logo: "/dexcoinapp.png" },
    { name: "BitgetWallet", logo: "/bitgetwallet.png" },
    { name: "Trader DAO", logo: "/traderdao.png" },
    { name: "Trust Wallet", logo: "/trustwallet.png" },
  ];

  const currentList = activeTab === "apps" ? apps : wallets;

  return (
    <Layout>
      <section className="bg-black text-white py-20 px-6 min-h-screen">
        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-blue-500 mb-4">
            Choose your Wallet
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Multiple iOS and Android wallets support the WalletConnect protocol.
            Interaction between mobile apps and mobile browsers is supported via
            mobile deep linking.
          </p>

          {/* Switch Button */}
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => setActiveTab("apps")}
              className={`px-8 py-3 rounded-xl transition-all duration-200 ${
                activeTab === "apps"
                  ? "bg-blue-600 text-white shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                  : "border-transparent text-gray-400 hover:text-blue-400"
              }`}
            >
              Apps
            </button>
            <button
              onClick={() => setActiveTab("wallets")}
              className={`px-8 py-3 rounded-xl transition-all duration-200 ${
                activeTab === "wallets"
                  ? "bg-blue-600 text-white shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                  : "border-transparent text-gray-400 hover:text-blue-400"
              }`}
            >
              Wallets
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mt-10">
          {currentList.map((item) => (
            <div
              key={item.name}
              onClick={() => setSelectedItem(item)} // ✅ open modal
              className="bg-[#0b0b0b] border border-gray-800 hover:border-indigo-500 rounded-2xl p-8 flex flex-col items-center transition cursor-pointer"
            >
              <img
                src={item.logo}
                alt={item.name}
                className="w-20 h-25 object-contain mb-4"
              />
              <p className="text-sm text-gray-300">{item.name}</p>
            </div>
          ))}
        </div>

        {/* Back Button */}
        <div className="text-center mt-12">
          <Link
            to="/"
            className="bg-indigo-600 hover:bg-indigo-700 px-5 py-2 rounded-lg text-white transition"
          >
            ← Back to Home
          </Link>
        </div>

        {/* ✅ Connect Modal */}
        {selectedItem && (
          <ConnectModal
            item={selectedItem}
            onClose={() => setSelectedItem(null)}
          />
        )}
      </section>
    </Layout>
  );
}
