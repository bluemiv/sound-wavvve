import type { Config } from 'tailwindcss';

const primaryColor = {
  'primary-hover': '#1890ff',
  primary: '#096dd9',
  'primary-active': '#0050b3',
};

export const space = {
  xs: '0.25rem',
  sm: '0.5rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '3rem',
  '2xl': '4rem',
};

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: { ...primaryColor },
      padding: {
        ...space,
      },
      margin: {
        ...space,
      },
      gap: {
        ...space,
      },
    },
  },
  plugins: [],
};
export default config;
