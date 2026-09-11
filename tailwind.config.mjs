/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        slimergy: {
          green: '#00DF6D',
          'green-hover': '#00C85E',
          'green-dark': '#042D15',
          'green-light': '#E6F9F0',
          'green-border': '#A5F3C8',
          bg: '#F4F6F8',
          dark: '#131821',
          'dark-card': '#161B22',
          'dark-border': '#262F3E',
          card: '#FFFFFF',
          border: '#E8ECF0',
          main: '#111827',
          muted: '#64748B',
          sub: '#94A3B8',
          pill: '#EFF2F7',
          blue: '#1B60A0',
          teal: '#2B8AC7',
          // App Dark Mode Palette (exact from React Native app)
          'app-bg': '#0D1524',
          'app-card': '#162032',
          'app-card-hover': '#1C2940',
          'app-border': '#223049',
          'app-sub': '#101928',
          'app-muted': '#8E9EB5',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '20px',
        '3xl': '26px',
        '4xl': '32px',
        '5xl': '40px',
      },
      boxShadow: {
        'app': '0 8px 30px rgba(17, 24, 39, 0.06), 0 1px 2px rgba(17, 24, 39, 0.04)',
        'app-hover': '0 20px 45px rgba(17, 24, 39, 0.1), 0 2px 4px rgba(17, 24, 39, 0.05)',
        'green-glow': '0 12px 35px -8px rgba(0, 223, 109, 0.45)',
        'green-subtle': '0 4px 20px rgba(0, 223, 109, 0.25)',
        'dark-float': '0 16px 40px -10px rgba(0, 0, 0, 0.35)',
      }
    },
  },
  plugins: [],
};
