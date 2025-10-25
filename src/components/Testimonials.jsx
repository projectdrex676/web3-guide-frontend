import { useEffect, useRef, useState } from "react";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Sophia Daniels",
      role: "Blockchain Developer",
      img: "https://randomuser.me/api/portraits/women/65.jpg",
      quote:
        "“ProjectDrex simplified my Web3 onboarding. I was able to connect multiple wallets effortlessly, and the learning resources helped me scale fast.”",
    },
    {
      id: 2,
      name: "James Carter",
      role: "Crypto Enthusiast",
      img: "https://randomuser.me/api/portraits/men/51.jpg",
      quote:
        "“I’ve used other blockchain platforms before, but none felt as intuitive and secure as this one. ProjectDrex really changed my perspective.”",
    },
    {
      id: 3,
      name: "Aisha Bello",
      role: "Product Manager, DeFiStart",
      img: "https://randomuser.me/api/portraits/women/75.jpg",
      quote:
        "“Integrating ProjectDrex into our ecosystem was seamless. The support team is top-notch, and our users love the wallet connection features.”",
    },
    {
      id: 4,
      name: "David Nguyen",
      role: "Smart Contract Auditor",
      img: "https://randomuser.me/api/portraits/men/66.jpg",
      quote:
        "“From migration to analytics, everything just works. The dashboard feels clean, intuitive, and lightning fast.”",
    },
    {
      id: 5,
      name: "Emily Zhao",
      role: "DeFi Trader",
      img: "https://randomuser.me/api/portraits/women/45.jpg",
      quote:
        "“I can manage all my assets securely and connect to dApps effortlessly. The UX is phenomenal — feels futuristic!”",
    },
  ];

  const [current, setCurrent] = useState(0);
  const timer = useRef(null);

  const next = () => setCurrent((i) => (i + 1) % testimonials.length);
  const prev = () => setCurrent((i) => (i - 1 + testimonials.length) % testimonials.length);

  // auto-slide
  useEffect(() => {
    timer.current = setInterval(next, 5000);
    return () => clearInterval(timer.current);
  }, []);

  const pause = () => clearInterval(timer.current);
  const resume = () => { timer.current = setInterval(next, 5000); };

  const t = testimonials[current];

  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">What Our Users Say</h2>
        <p className="text-gray-400 text-sm max-w-2xl mx-auto">
          Real experiences from individuals and teams that have leveraged ProjectDrex to power their Web3 journey.
        </p>
      </div>

      <div className="max-w-3xl mx-auto" onMouseEnter={pause} onMouseLeave={resume}>
        {/* Single remounting card — key ensures animation runs every time */}
        <div
          key={t.id}
          className="bg-gray-900/40 border border-gray-700 rounded-2xl p-8 md:p-10 text-center shadow-[0_0_30px_rgba(79,70,229,0.15)]
                     animate-[fadeSlide_700ms_ease-in-out] transform-gpu"
        >
          <p className="text-gray-200 italic text-lg leading-relaxed mb-8">{t.quote}</p>
          <div className="flex flex-col items-center">
            <img
              src={t.img}
              alt={t.name}
              className="w-16 h-16 rounded-full object-cover mb-3 border border-indigo-500"
            />
            <h3 className="font-semibold text-xl">{t.name}</h3>
            <p className="text-gray-400 text-sm">{t.role}</p>
          </div>
        </div>

        {/* Controls */}
        <div className="flex justify-center gap-4 mt-10">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full bg-gray-800 hover:bg-indigo-600 flex items-center justify-center transition"
          >
            ‹
          </button>
          <button
            onClick={next}
            className="w-10 h-10 rounded-full bg-gray-800 hover:bg-indigo-600 flex items-center justify-center transition"
          >
            ›
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-6 gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full transition
                ${i === current ? "bg-indigo-500 scale-110" : "bg-gray-600 hover:bg-gray-500"}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
