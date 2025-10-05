
import type { Config } from "tailwindcss";
const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#ffffff",
        foreground: "#0a0a0a",
        muted: { DEFAULT: "#f5f5f5", foreground: "#6b7280" },
        primary: { DEFAULT: "#0a0a0a", foreground: "#ffffff" },
        border: "#e5e7eb",
      },
      borderRadius: { xl:"1rem","2xl":"1.25rem" },
      boxShadow: { soft:"0 16px 40px -20px rgba(0,0,0,.25)" }
    }
  },
  plugins: []
};
export default config;
