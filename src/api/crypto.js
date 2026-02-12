import axios from "axios";

export const getCryptoData = async (cryptoId = "bitcoin") => {
  try {
    const res = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${cryptoId}/market_chart`,
      { params: { vs_currency: "usd", days: 30 } }
    );

    return res.data.prices.map(p => ({
      date: new Date(p[0]).toLocaleDateString(),
      price: parseFloat(p[1].toFixed(2))
    }));
  } catch (err) {
    console.error("Crypto API error:", err);
    return [];
  }
};
