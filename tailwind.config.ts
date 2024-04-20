import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        shape: {
          100: '#F5F6FA',
        },
        input: {
          200: '#F4F5F7',
          300: '#3D3F47',
        },
        main: {
          500: '#0A76DE',
          100: 'hsba(209, 95%, 87%, 0.07)'
        } 
      },
      textColor: {
        main: {
          500: '#0A76DE',
        },
        input: {
          200: '#E8E8E9',
        }
      },
      screens: {
        'print': {'raw': 'print'},
      },
      fontFamily: {
        sans: ['var(--font-poppins)'],
      }
    },
  },
  // plugins: [require("@headlessui/tailwindcss")],
}
export default config;
