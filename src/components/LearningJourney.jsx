export default function LearningJourney() {
  const steps = [
    {
      id: 1,
      title: "Step 1 — Learn",
      subtitle: "Understand DeFi, NFTs, and DAOs",
      description:
        "Get a solid foundation on blockchain principles. Learn how decentralized systems empower transparency and trust across the Web3 ecosystem.",
      icon: "🧠",
    },
    {
      id: 2,
      title: "Step 2 — Practice",
      subtitle: "Experience decentralized tools firsthand",
      description:
        "Experiment with test wallets, swap tokens, or mint your first NFT. Practice makes you more confident navigating Web3 securely.",
      icon: "⚙️",
    },
    {
      id: 3,
      title: "Step 3 — Connect",
      subtitle: "Join real communities and projects",
      description:
        "Engage with DAOs, social communities, and Web3 startups. Collaboration helps you grow faster and stay updated in the ecosystem.",
      icon: "🌐",
    },
  ];

  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Web3 Learning Journey</h2>
        <p className="text-gray-400 text-lg">
          Master the decentralized world, one step at a time.
        </p>
      </div>

      {/* Steps */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-12 relative max-w-6xl mx-auto">
        {/* Connecting line for desktop */}
        <div className="hidden md:block absolute top-20 left-0 right-0 h-[2px] bg-gradient-to-r from-indigo-500 via-blue-500 to-purple-500 opacity-40"></div>

        {steps.map((step) => (
          <div
            key={step.id}
            className="flex flex-col items-center md:w-1/3 text-center md:text-left relative z-10"
          >
            <div className="bg-gradient-to-r from-indigo-500 to-blue-500 w-16 h-16 flex items-center justify-center rounded-full text-3xl mb-6 shadow-lg shadow-indigo-700/30">
              {step.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <h4 className="text-indigo-400 font-medium mb-3">{step.subtitle}</h4>
            <p className="text-gray-300 leading-relaxed">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
