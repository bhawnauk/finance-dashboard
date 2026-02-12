import { useEffect, useState } from "react";
import { getStockData } from "../api/stocks.js";
import { getCryptoData } from "../api/crypto.js";
import StockChart from "../components/StockChart.jsx";
import CryptoChart from "../components/CryptoChart.jsx";
import StatCard from "../components/StatCard.jsx";

export default function Dashboard({ darkMode }) {
  const [stockSymbol, setStockSymbol] = useState("AAPL");
  const [cryptoSymbol, setCryptoSymbol] = useState("bitcoin");
  const [stockData, setStockData] = useState([]);
  const [cryptoData, setCryptoData] = useState([]);

  useEffect(() => {
    getStockData(stockSymbol).then(setStockData);
  }, [stockSymbol]);

  useEffect(() => {
    getCryptoData(cryptoSymbol).then(setCryptoData);
  }, [cryptoSymbol]);

  return (
    <div className={`p-6 space-y-6 ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
      {/* Dropdowns */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <label className="font-medium mr-2">Select Stock:</label>
          <select
            value={stockSymbol}
            onChange={(e) => setStockSymbol(e.target.value)}
            className="border p-2 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
          >
            <option value="AAPL">Apple</option>
            <option value="MSFT">Microsoft</option>
            <option value="TSLA">Tesla</option>
            <option value="GOOGL">Google</option>
          </select>
        </div>

        <div>
          <label className="font-medium mr-2">Select Crypto:</label>
          <select
            value={cryptoSymbol}
            onChange={(e) => setCryptoSymbol(e.target.value)}
            className="border p-2 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
          >
            <option value="bitcoin">Bitcoin</option>
            <option value="ethereum">Ethereum</option>
            <option value="dogecoin">Dogecoin</option>
            <option value="cardano">Cardano</option>
          </select>
        </div>
      </div>

      {/* Charts */}
      <div className="grid md:grid-cols-2 gap-6">
        <StockChart data={stockData} title={`${stockSymbol} Stock Prices`} darkMode={darkMode} />
        <CryptoChart data={cryptoData} title={`${cryptoSymbol.charAt(0).toUpperCase() + cryptoSymbol.slice(1)} (30 Days)`} darkMode={darkMode} />
      </div>

      {/* Stat Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        <StatCard title="Stock High" value={stockData.length ? Math.max(...stockData.map(d=>d.price)).toFixed(2) : 0} change={+2.4} darkMode={darkMode}/>
        <StatCard title="Stock Low" value={stockData.length ? Math.min(...stockData.map(d=>d.price)).toFixed(2) : 0} change={-1.2} darkMode={darkMode}/>
        <StatCard title="Crypto Latest" value={cryptoData.length ? cryptoData[cryptoData.length-1].price.toFixed(2) : 0} change={+5.1} darkMode={darkMode}/>
      </div>
    </div>
  );
}
