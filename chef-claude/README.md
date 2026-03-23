# 👨‍🍳 Chef Claude (AI Recipe Generator)

Welcome to **Chef Claude**, a React application that turns your leftover ingredients into delicious, AI-generated recipes! Simply type in the ingredients you have on hand, and let the AI do the thinking.

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

---

## 🍽️ Features

- **Ingredient Tracker**: Add the ingredients you currently have in your kitchen.
- **AI-Powered Recipes**: Send your ingredients to the backend, where an AI model generates a specific, step-by-step recipe for you.
- **Beautiful Markdown Output**: The recipe is generated in Markdown and beautifully rendered automatically via \
eact-markdown\ and Tailwind Typography.
- **Secure Backend Integration**: API keys are securely kept server-side, preventing exposure to the browser.

## 🛠️ Tech Stack

- **Frontend**: React 19, Vite
- **Styling**: Tailwind CSS v4, \@tailwindcss/typography\
- **Markdown Parsing**: \
eact-markdown\
- **Backend**: Express.js proxy server
- **AI Integration**: Google AI Studio (Gemini 2.5)

## 🚀 Getting Started

Follow these steps to set up the project locally.

### 1) Create local env file
You need an API key to allow the application to generate recipes. 
Create a \.env.local\ file in the root directory and add your keys:

\\\ash
GOOGLE_AI_API_KEY=your_real_key_here
GOOGLE_AI_MODEL=gemini-2.0-flash
PORT=3001
\\\

### 2) Install dependencies
\\\ash
npm install
\\\

### 3) Run both the frontend and backend
We use \concurrently\ to run the React development server and the backend Express server at the same time:

\\\ash
npm run dev:all
\\\

### 4) Key Safety Checklist
- 🚫 **Never** commit your \.env.local\ file to GitHub.
- ✅ The backend handles all API requests. The frontend only talks to the local \/api/recipe\ proxy.
