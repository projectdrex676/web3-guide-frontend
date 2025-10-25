import { useEffect, useState } from "react";

export default function CryptoTicker() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const res = await fetch("https://web3-guide-backend.onrender.com/api/ticker");

        if (!res.ok) throw new Error("Failed to fetch data from proxy");

        const data = await res.json();
        if (data.data && Array.isArray(data.data)) {
          setCoins(data.data.slice(0, 50)); // use top 50 coins
        }
      } catch (err) {
        console.error("Error fetching CoinMarketCap data:", err);
      }
    };

    fetchCoins();
    const interval = setInterval(fetchCoins, 120000); // refresh every 2 mins
    return () => clearInterval(interval);
  }, []);

  const fallback = [
    { symbol: "BTC", name: "Bitcoin", quote: { USD: { price: 39200, percent_change_24h: 1.4 } } },
    { symbol: "ETH", name: "Ethereum", quote: { USD: { price: 2200, percent_change_24h: 2.3 } } },
    { symbol: "BNB", name: "BNB", quote: { USD: { price: 540, percent_change_24h: 0.9 } } },
    { symbol: "XRP", name: "XRP", quote: { USD: { price: 1.07, percent_change_24h: -0.5 } } },
    { symbol: "ADA", name: "Cardano", quote: { USD: { price: 0.66, percent_change_24h: 3.2 } } },
  ];

  const displayCoins = coins.length > 0 ? coins : fallback;

  return (
    <div className="bg-[#111] text-white border-b border-gray-800 fixed top-0 left-0 w-full z-50 h-[38px] flex items-center overflow-hidden">
      <div className="ticker-container">
        <div className="ticker-track">
          {displayCoins.concat(displayCoins).map((coin, idx) => {
            const price = coin.quote.USD.price;
            const change = coin.quote.USD.percent_change_24h;

            return (
              <a
                key={idx}
                href={`https://coinmarketcap.com/currencies/${coin.name
                  .toLowerCase()
                  .replace(/\s+/g, "-")}/`}
                target="_blank"
                rel="noopener noreferrer"
                title={`View ${coin.name} on CoinMarketCap`}
                className="flex items-center gap-2 mx-6 text-sm whitespace-nowrap hover:opacity-80 transition cursor-pointer"
              >
                <span className="font-semibold underline decoration-dotted hover:decoration-solid">
                  {coin.symbol.toUpperCase()}
                </span>
                <span className="text-gray-400">
                  ${price.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                </span>
                <span className={change >= 0 ? "text-green-400" : "text-red-400"}>
                  {change.toFixed(2)}%
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
