![Deployed on Vercel](https://img.shields.io/badge/deployed-on-vercel-000?style=for-the-badge&logo=vercel&logoColor=white)
![React](https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)


# Finance Dashboard

A modern **React + Tailwind CSS dashboard** displaying **stocks** and **cryptocurrencies** with interactive charts and dark/light mode. 

[![Live Demo](https://img.shields.io/badge/Live-Demo-blue?style=for-the-badge)](https://interactive-finance-dashboard.vercel.app)

---

## Features

- Default **dark theme** with toggle to light mode
- Interactive **stock and crypto charts** (Recharts)
- Two independent dropdowns for stock & crypto selection
- **Stat cards** showing highs, lows, and latest prices
- **Responsive design** for desktop and mobile
- Clean, modern **glass-card UI** with hover effects
- Environment variable management for secure API keys

---

## Tech Stack

- React + Vite
- Tailwind CSS
- Recharts
- CoinGecko API (crypto)
- Stock API (demo or Twelve Data)
- Vercel (deployment)

---

## Installation (Local)

```bash
git clone https://github.com/Bhawana-999/Interactive-Finance-Dashboard.git
cd Finance-Dashboard
npm install
cp .env.example .env
# Fill in your API keys
npm run dev
