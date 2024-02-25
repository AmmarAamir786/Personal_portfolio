import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: 
      {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        "mywhite" : "#F3F4F6",
        "myblack" : "#27272A",
      },
      boxShadow: {
        "myshadow" : "0px 0px 30px rgba(255, 193, 7, 0.5)"
      }
    },
  },
  plugins: [],
}
export default config
