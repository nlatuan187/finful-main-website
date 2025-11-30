/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: "#001112",
        "dark-light": "#002224",
        teal: "#00ACB8",
        "teal-dark": "#008993",
        // Thêm màu mới của bạn ở đây
        'light-cyan': '#ECF8F9',
        brand: {
          teal: "#00ACB8",
          "teal-dark": "#00676E",
          "teal-light": "#7FD5DB",
          "teal-bg": "#E2F6FC",
          navy: "#004D52",
          cyan: "#32BCC6",
          "cyan-light": "#99DDE2",
          "cyan-pale": "#CCEEF0",
        },
      },
      fontFamily: {
        // Add custom fonts if needed
      },
      spacing: {
        // Add custom spacing if needed
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    // Add Tailwind plugins if needed
  ],
}
