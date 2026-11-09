/** @type {import('tailwindcss').Config} */
const token = (name) => `rgb(var(--${name}) / <alpha-value>)`;

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: token('ink-950'),
          900: token('ink-900'),
          850: token('ink-850'),
          800: token('ink-800'),
        },
        line: {
          DEFAULT: token('line'),
          strong: token('line-strong'),
        },
        fg: token('fg'),
        body: token('body'),
        muted: token('muted'),
        ember: token('ember'),
        rose: token('rose'),
        mint: token('mint'),
      },
      fontFamily: {
        display: ['"Bricolage Grotesque Variable"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['"Inter Variable"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono Variable"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      backgroundImage: {
        accent: 'linear-gradient(120deg, rgb(var(--ember)), rgb(var(--rose)))',
      },
      maxWidth: {
        content: '72rem',
      },
    },
  },
  plugins: [],
};
