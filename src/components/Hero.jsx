export default function Hero() {
  // ✅ Image now served from the public folder
  const heroImg = "/hero-wallet.png";

  return (
    <section className="bg-black text-white px-6 md:px-10 py-10 md:py-16">
      {/* Header */}
      <h2 className="text-4xl md:text-6xl font-bold text-center mb-12 md:mb-16 leading-tight">
        Navigating{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-500">
          Web3
        </span>{" "}
        Made Easy
      </h2>

      {/* Two-column responsive layout */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 max-w-6xl mx-auto">
        {/* Left side */}
        <div className="max-w-lg space-y-4 text-center md:text-left">
          <h3 className="text-2xl md:text-3xl font-semibold">
            Built on Blockchain Technology
          </h3>
          <p className="text-gray-300 leading-relaxed text-sm md:text-base">
            We are building a transparent and secure platform where users
            interact directly, without a central authority, ensuring greater
            privacy and ownership. Here, you control your data and digital
            assets through decentralized technology.
          </p>

          <button
            onClick={() =>
              document
                .getElementById("action-grid")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="mt-6 px-8 py-3 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-lg hover:opacity-90 transition text-sm md:text-base font-medium cursor-pointer"
          >
            Get Started
          </button>
        </div>

        {/* Right side (image) */}
        <div className="flex justify-center md:justify-end md:w-[45%]">
          <img
            src={heroImg}
            alt="Web3 Wallet Sync"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md rounded-xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
