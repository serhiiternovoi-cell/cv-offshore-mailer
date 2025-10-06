
import type { Config } from "tailwindcss";
const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: { extend: { colors: { background:"#fff", foreground:"#0a0a0a", border:"#e5e7eb" }, boxShadow:{ soft:"0 16px 40px -20px rgba(0,0,0,.25)" } } },
  plugins: []
};
export default config;
