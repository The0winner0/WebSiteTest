/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#00008B',
        'brand-cyan': '#00C6DD',
        'rtlv-headline': '#101828',
        'rtlv-text': 'rgba(16, 24, 40, 0.7)',
        'rtlv-bg': '#F7F9FD',
        'rtlv-card-bg': '#F4F6FA',
        'footer-bg': 'rgb(16, 24, 40)',
        'verticals-bg-start': 'rgb(0, 38, 67)',
        'verticals-bg-end': 'rgb(0, 34, 60)',
        'icon-circle-blue': 'rgb(0, 198, 221)',
        'icon-circle-light-blue': 'rgb(190, 235, 255)',
      },
      fontFamily: {
        sans: ['var(--font-dm-sans)', 'sans-serif'],
        roboto: ['var(--font-roboto)', 'sans-serif'],
      },
      keyframes: {
        floatUpDown: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeInUp: {
          'from': { opacity: '0', transform: 'translate3d(0, 1rem, 0)' },
          'to': { opacity: '1', transform: 'none' },
        }
      },
      animation: {
        floatUpDown: 'floatUpDown 4s ease-in-out infinite',
        fadeInUp: 'fadeInUp 1s ease-out both',
      },
      backgroundImage: {
        'rtlv-header': "url('https://atollsolutions.com/wp-content/uploads/2024/01/Sa36.png')",
        'rtlv-card-1': "url('https://atollsolutions.com/wp-content/uploads/2024/01/Profit.png')",
        'rtlv-card-2': "url('https://atollsolutions.com/wp-content/uploads/2024/01/Effeciency.png')",
        'rtlv-card-3': "url('https://atollsolutions.com/wp-content/uploads/2024/01/Secure.png')",
      },
      height: {
        '110px': '110px',
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
};