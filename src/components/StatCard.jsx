export default function StatCard({ title, value, change, darkMode }) {
  return (
    <div className={`bg-white/20 dark:bg-gray-800/30 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 text-gray-900 dark:text-gray-100`}>
      <h3 className="text-lg font-medium">{title}</h3>
      <p className="text-2xl font-bold">{value}</p>
      <span className={change > 0 ? 'text-green-400' : 'text-red-400'}>{change}%</span>
    </div>
  );
}
