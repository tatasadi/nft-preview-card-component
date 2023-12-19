import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'soft-blue': 'hsl(215, 51%, 70%)',
        cyan: 'hsl(178, 100%, 50%)',
        'darker-blue-3': 'hsl(217, 54%, 11%)', //main BG
        'darker-blue-2': 'hsl(216, 50%, 16%)', //card BG
        'dark-blue-1': 'hsl(215, 32%, 27%)', //line
      },
    },
  },
  plugins: [],
} satisfies Config
