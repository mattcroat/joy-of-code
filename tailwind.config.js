module.exports = {
  mode: 'jit',
  darkMode: false,
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // site
        highlight: 'var(--highlight)',
        muted: 'var(--muted)',
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        body: 'var(--body)',
        highlightText: 'var(--highlightText)',
        selection: 'var(--selection)',
        selectionText: 'var(--selectionText)',
        separator: 'var(--separator)',
        // card
        cardTitle: 'var(--cardTitle)',
        // code
        codeTitle: 'var(--code-title)',
        codeBorder: 'var(--code-border)',
        code: 'var(--code)',
        pre: 'var(--pre)',
        tokenFunction: 'var(--tokenFunction)',
        tokenKeyword: 'var(--tokenKeyword)',
        tokenOperator: 'var(--tokenOperator)',
        tokenPunctuation: 'var(--tokenPunctuation)',
        tokenString: 'var(--tokenString)',
        comment: 'var(--comment)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Mononoki', 'monospace'],
        openDyslexic: ['OpenDyslexic', 'sans-serif'],
        openDyslexicMono: ['OpenDyslexic Mono', 'monospace'],
      },
      gridTemplateColumns: {
        cards: 'repeat(auto-fill, minmax(340px, 1fr))',
      },
      zIndex: {
        '-10': '-10',
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
}
