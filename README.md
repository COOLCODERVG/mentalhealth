# 🌱 MentalHealth Tracker

A full-stack mental health tracking app where users can log moods, write journals, and visualize emotional trends over time.

## 🧠 Features

* ✅ User Authentication (Sign Up / Log In / Log Out)
* 🗕️ Daily Mood Tracking with emotion notes
* 📓 Journaling system (create, edit, delete entries)
* 📊 Mood Insights with visual charts
* 📱 Fully responsive UI (mobile & desktop)

## 🚀 Live Demo

🔗 [https://mentalhealth-indol.vercel.app/](https://mentalhealth-indol.vercel.app/)

## 🛠️ Getting Started (Local Development)

### Prerequisites

* Node.js ≥ 16
* npm or yarn

### Setup Instructions

```bash
git clone https://github.com/COOLCODERVG/mentalhealth.git
cd mentalhealth
npm install     # or yarn install
npm run dev     # or yarn dev
```

Visit `http://localhost:3000` in your browser.

> ⚠️ **Note:** This project requires an `.env` file for API keys and environment variables. Example:

```bash
VITE_API_KEY=your_api_key_here
```

Place this file in the root directory before running the app.

## 📁 Project Structure

```
mentalhealth/
├─ node_modules/       # Installed packages
├─ public/             # Static assets
├─ src/                # Source code (components, pages, logic)
├─ .gitignore          # Git ignored files
├─ eslint.config.js    # ESLint configuration
├─ index.html          # Entry HTML
├─ package-lock.json   # Dependency lock file
├─ package.json        # Project metadata and scripts
├─ README.md           # Project documentation
├─ vite.config.js      # Vite bundler configuration
```

## ⚙️ Tech Stack

**Frontend**: React, Tailwind CSS, Chart.js
**Backend**: Node.js, Express, MongoDB
**Deployment**: Vercel (frontend), \[your backend hosting]

## 🧹 Key Modules

* **Mood Tracker** – Submit daily mood with emoji selector + optional note
* **Journal** – Create and manage personal entries
* **Insights** – Visualize your emotional trends over time
* **Authentication** – Register, log in, and maintain sessions securely

## ✅ Pre‐Submission Checklist

* ✅ Core functionality complete and tested
* 📦 Local setup under 2 minutes (`npm install && npm run dev`)
* 🌐 Live build running at the provided URL
* 📄 README includes instructions, features, and screenshots
* 🧹 Visually polished and stable across devices

## 🧱 How to Use

1. Create an account or log in
2. Record how you're feeling each day
3. Use the journal for deeper reflections
4. View weekly/monthly emotional insights

## 🤝 Contributing

Contributions are welcome!

1. Fork the repo
2. Create a new feature branch
3. Commit your changes
4. Open a Pull Request

## 📄 License

Licensed under the [MIT License](./LICENSE)