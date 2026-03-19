import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Floral theme colors
        petal: {
          rose: "#ff69b4",
          pink: "#ffb6d9",
          coral: "#ff7f50",
          peach: "#ffdab9",
          lavender: "#e6b3ff",
          purple: "#da70d6",
          sunflower: "#ffd700",
          cream: "#fffacd",
          lily: "#fff0f5",
          mint: "#98ff98",
        },
        stem: {
          forest: "#228b22",
          sage: "#9dc183",
          emerald: "#50c878",
          olive: "#6b8e23",
        },
        center: {
          gold: "#ffd700",
          amber: "#ffbf00",
          ochre: "#cc7000",
          butter: "#fffacd",
        },
      },
    },
  },
  plugins: [],
};

export default config;
