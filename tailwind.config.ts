import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 20px 80px rgba(56, 189, 248, 0.18)'
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at top, rgba(56,189,248,0.25), transparent 40%), radial-gradient(circle at bottom right, rgba(168,85,247,0.18), transparent 25%)'
      },
      colors: {
        electric: '#38bdf8',
        neon: '#a855f7'
      }
    }
  },
  plugins: []
};

export default config;
