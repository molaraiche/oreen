import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";
import typography from "@tailwindcss/typography";
export default {
  darkMode: ["class"],
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
        "netral-7": "#737373",
        "netral-6": "#8C8C8C",
        "netral-5": "#A6A6A6",
        "netral-4": "#BFBFBF",
        "netral-3": "#D9D9D9",
        "netral-2": "#F2F2F2",
        "netral-1": "#FFFFFF",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      fontFamily: {
        lato: ["var(--font-lato), sans-serif"],
        montserrat: ["var(--font-montserrat), sans-serif"],
      },
      boxShadow: {
        carCardShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        softRed: "0px 0px 25px 0px rgba(180, 13, 13, 0.10)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [tailwindcssAnimate, typography],
} satisfies Config;
