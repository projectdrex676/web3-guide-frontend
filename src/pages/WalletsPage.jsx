import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout"; 
import ConnectModal from "../components/ConnectModal";

// ✅ Import all wallet & app images directly from src/assets
import metamask from "../assets/metamask.png";
import trustwallet from "../assets/trustwallet.png";
import tokenpocket from "../assets/tokenpocket.png";
import tronlink from "../assets/tronlink.png";
import walletconnect from "../assets/walletconnect.png";
import transitswap from "../assets/transitswap.png";
import bitpie from "../assets/bitpie.png";
import bitgetwallet from "../assets/bitgetwallet.png";
import safepal from "../assets/safepal.png";
import tonkeeper from "../assets/tonkeeper.png";
import rainbow from "../assets/rainbow.png";
import zerion from "../assets/zerion.png";
import spot from "../assets/spot.png";
import solfare from "../assets/solfare.png";
import atomicwallet from "../assets/atomicwallet.png";
import coinbase from "../assets/coinbase.png";
import okxwallet from "../assets/okxwallet.png";
import blockchain from "../assets/blockchain.png";
import binance from "../assets/binance.png";

import uniswap from "../assets/uniswap.png";
import rabby from "../assets/rabby.png";
import swappy from "../assets/swappy.png";
import ixir from "../assets/ixir.png";
import opentheta from "../assets/opentheta.png";
import opensea from "../assets/opensea.png";
import argent from "../assets/argent.png";
import farcaster from "../assets/farcaster.png";
import fireblocks from "../assets/fireblocks.png";
import axieinfinity from "../assets/axieinfinity.png";
import dexcoinapp from "../assets/dexcoinapp.png";
import traderdao from "../assets/traderdao.png";

export default function WalletsPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const [selectedItem, setSelectedItem] = useState(null);
  const [activeTab, setActiveTab] = useState("apps");

  const wallets = [
    { name: "MetaMask", logo: metamask },
    { name: "TrustWallet", logo: trustwallet },
    { name: "TokenPocket", logo: tokenpocket },
    { name: "Tronlink", logo: tronlink },
    { name: "WalletConnect", logo: walletconnect },
    { name: "Transit Swap", logo: transitswap },
    { name: "BitPie", logo: bitpie },
    { name: "BitgetWallet", logo: bitgetwallet },
    { name: "SafePal", logo: safepal },
    { name: "Ton Keeper", logo: tonkeeper },
    { name: "Rainbow", logo: rainbow },
    { name: "Zerion", logo: zerion },
    { name: "Spot", logo: spot },
    { name: "Solfare", logo: solfare },
    { name: "Atomic Wallet", logo: atomicwallet },
    { name: "Coinbase", logo: coinbase },
    { name: "OKX Wallet", logo: okxwallet },
    { name: "Blockchain.com", logo: blockchain },
    { name: "Binance Web3 Wallet", logo: binance },
  ];

  const apps = [
    { name: "Uniswap", logo: uniswap },
    { name: "Rabby", logo: rabby },
    { name: "Swappy", logo: swappy },
    { name: "Ixir", logo: ixir },
    { name: "OpenTheta", logo: opentheta },
    { name: "OpenSea", logo: opensea },
    { name: "Argent", logo: argent },
    { name: "Farcaster", logo: farcaster },
    { name: "Binance", logo: binance },
    { name: "FireBlocks", logo: fireblocks },
    { name: "Axie Infinity", logo: axieinfinity },
    { name: "DexCoin App", logo: dexcoinapp },
    { name: "BitgetWallet", logo: bitgetwallet },
    { name: "Trader DAO", logo: traderdao },
    { name: "Trust Wallet", logo: trustwallet },
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
              onClick={() => setSelectedItem(item)}
              className="bg-[#0b0b0b] border border-gray-800 hover:border-indigo-500 rounded-2xl p-8 flex flex-col items-center transition cursor-pointer"
            >
              <img
                src={item.logo}
                alt={item.name}
                className="w-20 h-20 object-contain mb-4"
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
