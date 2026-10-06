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
        brand: {
          50: '#FDF6F4',
          100: '#FAECE8',
          200: '#F5DBD4',
          300: '#EABFB5',
          400: '#DE8C7B',
          500: '#CE482A', // Main Cressco primary
          600: '#BA391D',
          700: '#9B2D16',
          800: '#7F2613',
          900: '#682213',
          DEFAULT: '#CE482A',
        },
        surface: {
          50: '#FAFAFA',
          100: '#F7F7F6',
          200: '#F0F0EE',
          300: '#E5E5E2',
          DEFAULT: '#FFFFFF',
        },
        charcoal: {
          50: '#71717A',
          100: '#52525B',
          200: '#3F3F46',
          300: '#27272A',
          800: '#1C1917',
          900: '#18181B',
          DEFAULT: '#18181B',
        }
      },
      fontFamily: {
        sans: ['var(--font-dm-sans)', 'sans-serif'],
      },
      boxShadow: {
        'soft-sm': '0 1px 2px 0 rgba(0, 0, 0, 0.03)',
        'soft': '0 4px 20px -2px rgba(24, 24, 27, 0.05), 0 2px 6px -1px rgba(24, 24, 27, 0.02)',
        'soft-lg': '0 12px 32px -4px rgba(24, 24, 27, 0.08), 0 4px 12px -2px rgba(24, 24, 27, 0.03)',
        'soft-xl': '0 20px 48px -6px rgba(24, 24, 27, 0.1), 0 8px 20px -4px rgba(24, 24, 27, 0.04)',
        'brand-glow': '0 8px 30px -4px rgba(206, 72, 42, 0.18)',
      },
    },
  },
  plugins: [],
};
export default config;
