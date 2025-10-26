import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import ConnectModal from "../components/ConnectModal";

// ✅ Wallet Imports
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
import uniswap from "../assets/uniswap.png";
import phantom from "../assets/phantom.png";
import safe from "../assets/safe.png";
import rainbow from "../assets/rainbow.png";
import zerion from "../assets/zerion.png";
import argent from "../assets/argent.png";
import spot from "../assets/spot.png";
import solfare from "../assets/solfare.png";
import atomicwallet from "../assets/atomicwallet.png";
import paperwallet from "../assets/paperwallet.png";
import dexscreener from "../assets/dexscreener.png";
import raydium from "../assets/raydium.png";
import cmc from "../assets/cmc.png";
import jupiter from "../assets/jupital.png";
import tangem from "../assets/tangem.png";
import coinbase from "../assets/coinbase.png";
import okxwallet from "../assets/okxwallet.png";
import blockchain from "../assets/blockchain.png";
import binance from "../assets/binance.png";
import trezor from "../assets/trezor.png";
import zelcore from "../assets/zelcore.png";
import robinhoodwallet from "../assets/robinhood.png";
import frontier from "../assets/frontier.png";
import omni from "../assets/omni.png";
import zengowallet from "../assets/zengowallet.png";
import exodus from "../assets/exodus.png";
import ledgerlive from "../assets/ledgerlive.png";
import mewwallet from "../assets/mewwallet.png";
import alphawallet from "../assets/alphawallet.png";
import keyringpro from "../assets/keyringpro.png";
import lobstrwallet from "../assets/lobstrwallet.png";
import mathwallet from "../assets/mathwallet.png";
import obvious from "../assets/obvious.png";
import fireblocks from "../assets/fireblocks.png";
import bridgewallet from "../assets/bridgewallet.png";
import internetmonetwallet from "../assets/internetmoney.png";
import nowwallet from "../assets/nowwallet.png";
import bitcoinwallet from "../assets/bitcoinwallet.png";
import auwallet from "../assets/uwallet.png";


// ✅ App Imports
import swappy from "../assets/swappy.png";
import ixir from "../assets/ixir.png";
import opentheta from "../assets/opentheta.png";
import dexcoinapp from "../assets/dexcoinapp.png";
import traderdao from "../assets/traderdao.png";
import unstoppabledomain from "../assets/unstoppable.png";
import nftclue from "../assets/nftclue.png";
import contributorcredits from "../assets/contributor.png";
import oraqle from "../assets/oraqle.png";
import web3je from "../assets/web3je.png";
import zoksh from "../assets/zoksh.png";
import thetararity from "../assets/thetararity.png";
import altr from "../assets/altr.png";
import thorswap from "../assets/thorswap.png";
import deltaone from "../assets/deltaone.png";
import oxplasmafinance from "../assets/plasma.png";
import ektawalletweb from "../assets/ektawalletweb.svg";
import lensclaiming from "../assets/lensclaiming.png";
import herestake from "../assets/herestake.png";
import bastionapp from "../assets/bastion.png";
import firnprotocol from "../assets/firnprotocol.png";
import chromasignet from "../assets/chromasignet.png";
import dexstein from "../assets/dexstein.png";
import bitriel from "../assets/bitriel.png";
import snapshack from "../assets/snap.png";
import tracegift from "../assets/trace.png";
import elusiv from "../assets/elusiv.png";
import helixid from "../assets/helixid.png";
import cryptowodlgame from "../assets/crptowodlgame.png";
import hashguessers from "../assets/hashguessers.png";
import kaononaiproject from "../assets/kaononai.png";
import marinadefinance from "../assets/marinade.png";
import awardpool from "../assets/awardpool.png";
import centic from "../assets/centic.png";
import dashboard from "../assets/dashboard.svg";
import yuzumax from "../assets/yuzumax.png";
import texan from "../assets/texan.png";
import masknetwork from "../assets/masknetwork.png";
import presaleworld from "../assets/presaleworld.png";
import faye from "../assets/faye.png";
import equaminity from "../assets/equminity.png";
import galleria from "../assets/galleria.png";
import hieswap from "../assets/hieswap.png";
import affinedefi from "../assets/affinedefi.png";
import connextbridge from "../assets/connextbridge.png";
import mango from "../assets/mango.png";

export default function WalletsPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const [selectedItem, setSelectedItem] = useState(null);
  const [activeTab, setActiveTab] = useState("apps");

  // ✅ Wallets List
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
    { name: "Uniswap Wallet", logo: uniswap },
    { name: "Phantom", logo: phantom },
    { name: "Safe", logo: safe },
    { name: "Rainbow", logo: rainbow },
    { name: "Zerion", logo: zerion },
    { name: "Argent", logo: argent },
    { name: "Spot", logo: spot },
    { name: "Atomic Wallet", logo: atomicwallet },
    { name: "Solfare", logo: solfare },
    { name: "Coinbase", logo: coinbase },
    { name: "Paper Wallet", logo: paperwallet },
    { name: "Dex Screener", logo: dexscreener },
    { name: "Raydium", logo: raydium },
    { name: "CMC", logo: cmc },
    { name: "Jupiter", logo: jupiter },
    { name: "Tangem", logo: tangem },
    { name: "Trezor", logo: trezor },
    { name: "Zelcore", logo: zelcore },
    { name: "OKX Wallet", logo: okxwallet },
    { name: "Robinhood Wallet", logo: robinhoodwallet },
    { name: "Frontier", logo: frontier },
    { name: "Blockchain.com", logo: blockchain },
    { name: "Omni", logo: omni },
    { name: "Zengo Wallet", logo: zengowallet },
    { name: "Binance Web3 Wallet", logo: binance },
    { name: "Exodus", logo: exodus },
    { name: "Ledger Live", logo: ledgerlive },
    { name: "Mew Wallet", logo: mewwallet },
    { name: "Alpha Wallet", logo: alphawallet },
    { name: "key RingPro", logo: keyringpro },
    { name: "Lobstr Wallet", logo: lobstrwallet },
    { name: "Math Wallet", logo: mathwallet },
    { name: "Unstoppable Domain", logo: unstoppabledomain },
    { name: "Obvious", logo: obvious },
    { name: "Fireblocks", logo: fireblocks },
    { name: "Bridge Wallet", logo: bridgewallet },
    { name: "Internet Money Wallet", logo: internetmonetwallet },
    { name: "Now Wallet", logo: nowwallet },
    { name: "Bitcoin.com Wallet", logo: bitcoinwallet },
    { name: "aUwallet", logo: auwallet },
    
    
    
    
  ];

  // ✅ Apps List
  const apps = [
    { name: "Zerion", logo: zerion },
    { name: "Unstoppable Domain", logo: unstoppabledomain },
    { name: "DexCoin App", logo: dexcoinapp },
    { name: "NFTClue", logo: nftclue },
    { name: "Contributor Credits", logo: contributorcredits },
    { name: "Oraqle", logo: oraqle },
    { name: "WEB3JE", logo: web3je },
    { name: "Zoksh", logo: zoksh },
    { name: "ThetaRarity", logo: thetararity },
    { name: "Altr", logo: altr },
    { name: "Trader DAO", logo: traderdao },
    { name: "Thor Swap", logo: thorswap },
    { name: "Delta One", logo: deltaone },
    { name: "OxPlasmaFinance", logo: oxplasmafinance },
    { name: "Ektawalletweb", logo: ektawalletweb },
    { name: "Ixir", logo: ixir },
    { name: "OpenTheta", logo: opentheta },
    { name: "LensClaiming", logo: lensclaiming },
    { name: "HEREStake", logo: herestake },
    { name: "Bastion App", logo: bastionapp },
    { name: "Firnprotocol", logo: firnprotocol },
    { name: "ChromaSignet", logo: chromasignet },
    { name: "DexStein", logo: dexstein },
    { name: "BitRiel", logo: bitriel },
    { name: "Snap Shack", logo: snapshack },
    { name: "Trace Gift", logo: tracegift },
    { name: "Elusiv", logo: elusiv },
    { name: "HeliXid", logo: helixid },
    { name: "CryptoWodlGame", logo: cryptowodlgame },
    { name: "HashGuessers", logo: hashguessers },
    { name: "Kaononai Project", logo: kaononaiproject },
    { name: "Marinade Finance", logo: marinadefinance },
    { name: "Award Pool", logo: awardpool },
    { name: "Centic", logo: centic },
    { name: "Dashboard", logo: dashboard },
    { name: "Yuzumax", logo: yuzumax },
    { name: "Texan", logo: texan },
    { name: "MaskNetwork", logo: masknetwork },
    { name: "Presale World", logo: presaleworld },
    { name: "Faye", logo: faye },
    { name: "Swappy", logo: swappy },
    { name: "Equaminity", logo: equaminity },
    { name: "Galleria", logo: galleria },
    { name: "Hieswap", logo: hieswap },
    { name: "AffineDefi", logo: affinedefi },
    { name: "Connext Bridge", logo: connextbridge },
    { name: "Mango", logo: mango },
  ];

  const currentList = activeTab === "apps" ? apps : wallets;

  return (
    <Layout>
      <section className="bg-black text-white py-20 px-6 min-h-screen">
        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-blue-500 mb-4">Choose your Wallet</h1>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Multiple iOS and Android wallets support the WalletConnect protocol.
            Interaction between mobile apps and browsers is supported via deep linking.
          </p>

          {/* Switch Tabs */}
          <div className="flex items-center justify-center gap-4">
            {["apps", "wallets"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-3 rounded-xl transition-all duration-200 ${
                  activeTab === tab
                    ? "bg-blue-600 text-white shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                    : "border-transparent text-gray-400 hover:text-blue-400"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Wallet / App Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto mt-10">
          {currentList.map((item) => (
            <div
              key={item.name}
              onClick={() => setSelectedItem(item)}
              className="bg-[#0b0b0b] border border-gray-800 hover:border-indigo-500 rounded-2xl p-8 flex flex-col items-center transition cursor-pointer"
            >
              <img src={item.logo} alt={item.name} className="w-20 h-20 object-contain mb-4 rounded-full" />
              <p className="text-sm text-gray-300">{item.name}</p>
            </div>
          ))}
        </div>

        {/* Back Button */}
        <div className="text-center mt-12">
          <Link to="/" className="bg-indigo-600 hover:bg-indigo-700 px-5 py-2 rounded-lg text-white transition">
            ← Back to Home
          </Link>
        </div>

        {/* Connection Modal */}
        {selectedItem && <ConnectModal item={selectedItem} onClose={() => setSelectedItem(null)} />}
      </section>
    </Layout>
  );
}
