const config: {
  plugins: never[];
  theme: {
    extend: { colors: { darkBackground: string; background: string; foreground: string; darkForeground: string } }
  };
  darkMode: string;
  content: string[]
} = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)", // Mode clair
        foreground: "var(--foreground)",
        darkBackground: "var(--dark-background)", // Mode sombre
        darkForeground: "var(--dark-foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
