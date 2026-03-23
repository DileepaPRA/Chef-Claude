# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Google AI Studio Integration (Safe Setup)

This project now uses a local backend endpoint so your Google AI key stays server-side and is never exposed in browser code.

### 1) Create local env file

Copy `.env.example` to `.env.local` and set your key:

```bash
GOOGLE_AI_API_KEY=your_real_key_here
GOOGLE_AI_MODEL=gemini-2.0-flash
PORT=3001
```

If your account only supports different models, change `GOOGLE_AI_MODEL` in `.env.local` (for example `gemini-2.0-flash-lite`).

### 2) Install dependencies

```bash
npm install
```

### 3) Run frontend + backend together

```bash
npm run dev:all
```

Frontend runs on Vite and calls `/api/recipe`; Vite proxies it to the backend on `http://localhost:3001`.

### 4) Key safety checklist

- Keep your real key only in `.env.local` (already gitignored).
- Never put the key in React files or variables starting with `VITE_`.
- If you accidentally pushed a key before, revoke/regenerate it in Google AI Studio immediately.
