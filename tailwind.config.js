module.exports = {
  mode: 'jit',
  darkMode: false,
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // card
        'card-title': 'var(--cardTitle)',
        // site
        highlight: 'var(--highlight)',
        muted: 'var(--muted)',
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        body: 'var(--body)',
        separator: 'var(--separator)',
        // code
        code: 'var(--code)',
        pre: 'var(--pre)',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        mono: ['Mononoki', 'monospace'],
        openDyslexic: ['OpenDyslexic', 'sans-serif'],
        openDyslexicMono: ['OpenDyslexic Mono', 'monospace'],
      },
      gridTemplateColumns: {
        cards: 'repeat(auto-fill, minmax(240px, 1fr))',
      },
      zIndex: {
        '-10': '-10',
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
}
