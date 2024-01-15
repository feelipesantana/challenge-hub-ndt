import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        "marine-blue": "hsl(213, 96%, 18%)",
        "purplish-blue": "hsl(243, 100%, 62%)",
        "pastel-blue":" hsl(228, 100%, 84%)",
        "light-blue":" hsl(206, 94%, 87%)",
        "trawberry-red":" hsl(354, 84%, 57%)"
        
      }
    },
  },
  plugins: [],
}
export default config
