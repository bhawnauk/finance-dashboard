export default function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800/30 dark:bg-gray-200/20 backdrop-blur-md shadow-lg transition-colors duration-300">
      <h1 className="font-bold text-xl text-white-400 dark:text-white-600">Finance Dashboard</h1>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="bg-gray-700 dark:bg-gray-200 text-white dark:text-gray-900 px-4 py-2 rounded-lg hover:bg-gray-600 dark:hover:bg-gray-300 transition-colors"
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </nav>
  );
}
