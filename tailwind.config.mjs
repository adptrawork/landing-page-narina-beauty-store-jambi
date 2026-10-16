/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        paper: '#EEE7DD',
        'paper-2': '#E5DBCB',
        ink: '#302821',
        // .72 (bukan .62) agar teks sekunder lolos kontras AA di atas --paper
        'ink-soft': 'rgba(48,40,33,.72)',
        blush: '#D7B8A8',
        moss: '#8A8C70',
        // varian gelap --moss khusus teks label (AA), --moss tetap untuk rule/tint
        'moss-ink': '#5A5C42',
        accent: '#795E4E',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'Cambria', 'Times New Roman', 'serif'],
        sans: ['Jost', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
