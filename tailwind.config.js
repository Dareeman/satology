/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-2-linear": "var(--bg-2-linear)",
        black: "var(--black)",
        main: "var(--main)",
        "social-links": "var(--social-links)",
        "variable-collection-icons": "var(--variable-collection-icons)",
        white: "var(--white)",
      },
      fontFamily: {
        button: "var(--button-font-family)",
        "button-secondary": "var(--button-secondary-font-family)",
        "desktop-body": "var(--desktop-body-font-family)",
        "desktop-heading-1": "var(--desktop-heading-1-font-family)",
        "desktop-heading-2": "var(--desktop-heading-2-font-family)",
        "desktop-heading-3": "var(--desktop-heading-3-font-family)",
        links: "var(--links-font-family)",
        "mobile-button": "var(--mobile-button-font-family)",
        "mobile-button-secondary": "var(--mobile-button-secondary-font-family)",
        "mobile-heading-1": "var(--mobile-heading-1-font-family)",
        "mobile-heading-2": "var(--mobile-heading-2-font-family)",
        "mobile-heading-3": "var(--mobile-heading-3-font-family)",
        "tablet-body": "var(--tablet-body-font-family)",
        "tablet-heading-1": "var(--tablet-heading-1-font-family)",
        "tablet-heading-2": "var(--tablet-heading-2-font-family)",
        "tablet-heading-3": "var(--tablet-heading-3-font-family)",
      },
    },
    screens: { // minimum width
      'xs': '375px',
      'sm': '425px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1440px',
      '2xl': '2500px'
    },    
  },
  plugins: [],
};
