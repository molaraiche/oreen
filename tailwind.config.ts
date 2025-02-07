import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "red-8": "#A80A0A",
        "red-7": "#D90D0D",
        "red-6": "#F22626",
        "red-5": "#F55757",
        "red-4": "#F88787",
        "red-3": "#FBB7B7",
        "red-2": "#FEE7E7",
        "red-1": "#FEF5F5",
        "netral-10": "#262626",
        "netral-9": "#404040",
        "netral-8": "#595959",
        "netra-7": "#737373",
        "netral-6": "#8C8C8C",
        "netral-5": "#A6A6A6",
        "netral-4": "#BFBFBF",
        "netral-3": "#D9D9D9",
        "netral-2": "#F2F2F2",
        "netral-1": "#FFFFFF",
      },
      fontFamily: {
        lato: ["var(--font-lato)"],
        montserrat: ["var(--font-montserrat)"],
      },
      screens: {
        xsm: "285px",
      },
    },
  },
  plugins: [],
} satisfies Config;
