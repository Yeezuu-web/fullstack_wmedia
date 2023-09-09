import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        laptop: '1200px',
      },
      backgroundImage: {
        'gradient-brand':
          'linear-gradient(180deg,black 0%,rgba(0,0,0,.8) 30%,#642020 92%,#612222 100%)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        line: 'line 2s linear infinite',
      },
      keyframes: {
        line: {
          '0%': {
            transform: 'translateY(-100%)',
          },
          to: {
            transform: 'translateY(100%)',
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
