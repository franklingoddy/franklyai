import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
      Primary: "#00a8e8",
      Secondary: "#001F54",
      AccentColor: "#3dff00",
      BackGround: "#f0f4f8",
      TextColor: "#2f2f2f"
      },
    },
  },
  plugins: [],
};
export default config;
