export const getStockData = async (symbol) => {
  const today = new Date();
  let data = [];
  for (let i = 30; i > 0; i--) {
    const date = new Date(today);
    date.setDate(today.getDate() - i);
    data.push({
      date: date.toLocaleDateString(),
      price: parseFloat((Math.random() * 100 + 100).toFixed(2)) // 100–200
    });
  }
  return data;
};
