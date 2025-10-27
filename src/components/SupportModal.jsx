import { useState } from "react";
import { X } from "lucide-react";

export default function SupportModal({ onClose }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // you can later connect this to a backend or email service
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50 px-4">
      <div className="bg-[#0b0b0b] border border-gray-800 rounded-2xl p-6 md:p-8 w-full max-w-lg relative shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
        >
          <X size={22} />
        </button>

        <h2 className="text-2xl font-semibold text-white mb-2 text-center">
          Contact Support
        </h2>
        <p className="text-gray-400 text-sm text-center mb-6">
          Need help or want to report an issue? Reach out below.
        </p>

        {/* ✅ Complaint Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-2 text-gray-200 focus:outline-none focus:border-indigo-500"
            required
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-2 text-gray-200 focus:outline-none focus:border-indigo-500"
            required
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Describe your issue..."
            rows="4"
            className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-2 text-gray-200 focus:outline-none focus:border-indigo-500"
            required
          ></textarea>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-500 to-blue-500 py-2 rounded-lg text-white hover:opacity-90 transition"
          >
            {submitted ? "Message Sent ✅" : "Send Message"}
          </button>
        </form>

        {/* Divider */}
        <div className="border-t border-gray-800 my-6"></div>

        {/* ✅ Social Links */}
        <div className="flex flex-col items-center gap-3">
          <p className="text-gray-400 text-sm mb-2">Or reach us on</p>
          <div className="flex gap-4">
            <a
              href="https://wa.me/2348012345678"
              target="_blank"
              className="flex items-center gap-2 bg-green-600/20 border border-green-600 px-4 py-2 rounded-lg text-green-400 hover:bg-green-600/30 transition"
            >
              <i className="fa-brands fa-whatsapp"></i> WhatsApp
            </a>
            <a
              href="https://t.me/yourTelegramHandle"
              target="_blank"
              className="flex items-center gap-2 bg-blue-600/20 border border-blue-600 px-4 py-2 rounded-lg text-blue-400 hover:bg-blue-600/30 transition"
            >
              <i className="fa-brands fa-telegram"></i> Telegram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
