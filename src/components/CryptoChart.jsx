import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function StockChart({ data, title, darkMode }) {
  if (!data || !data.length)
    return <div className="p-10 text-center text-gray-500 dark:text-gray-400">No stock data</div>;

  return (
    <div className="bg-white/20 dark:bg-gray-800/30 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 h-[350px]">
      <h2 className="mb-4 font-semibold text-lg text-gray-900 dark:text-gray-100">{title}</h2>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart data={data}>
          <XAxis dataKey="date" tick={{ fill: darkMode ? '#eee' : '#111' }} stroke={darkMode ? '#eee' : '#111'} />
          <YAxis tick={{ fill: darkMode ? '#eee' : '#111' }} stroke={darkMode ? '#eee' : '#111'} />
          <Tooltip contentStyle={{
            backgroundColor: darkMode ? 'rgba(30,30,30,0.9)' : 'rgba(255,255,255,0.9)',
            color: darkMode ? '#eee' : '#111',
            borderRadius: '8px'
          }}/>
          <Line type="monotone" dataKey="price" stroke={darkMode ? '#3b82f6' : '#1d4ed8'} strokeWidth={3} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
