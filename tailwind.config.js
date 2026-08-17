/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
      },
      colors: {
        cobalt: {
          paper: 'oklch(98.5% 0.002 255)',
          'paper-2': 'oklch(95.5% 0.004 255)',
          ink: 'oklch(22% 0.01 260)',
          'ink-2': 'oklch(45% 0.02 255)',
          rule: 'oklch(89% 0.008 260)',
          accent: 'oklch(58% 0.22 250)',
          focus: 'oklch(58% 0.22 250 / 35%)',
        },
      },
      animation: {
        'tick': 'numberTick 500ms cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        numberTick: {
          '0%': { opacity: '0', transform: 'translateY(0.25em)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
