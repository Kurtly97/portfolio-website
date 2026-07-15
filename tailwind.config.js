/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "var(--color-white)",
        neutral: {
          lightest: "var(--color-neutral-lightest)",
          lighter: "var(--color-neutral-lighter)",
          light: "var(--color-neutral-light)",
          DEFAULT: "var(--color-neutral)",
          dark: "var(--color-neutral-dark)",
          darker: "var(--color-neutral-darker)",
          darkest: "var(--color-neutral-darkest)",
        },
        "scheme-1": {
          background: "var(--color-scheme-1-background)",
          foreground: "var(--color-scheme-1-foreground)",
          text: "var(--color-scheme-1-text)",
          border: "var(--color-scheme-1-border)",
          accent: "var(--color-scheme-1-accent)",
        },
        backgrounds: {
          DEFAULT: "var(--backgrounds-default)",
          foreground: "var(--backgrounds-foreground)",
          muted: "var(--backgrounds-muted)",
          subtle: "var(--backgrounds-subtle)",
          soft: "var(--backgrounds-soft)",
        },
        borders: {
          DEFAULT: "var(--borders-default)",
        },
        text: {
          DEFAULT: "var(--text-default)",
          "on-accent": "var(--text-on-accent)",
          muted: "var(--text-muted)",
        },
        actions: {
          accent: "var(--actions-accent)",
          primary: "var(--actions-primary)",
          "primary-hover": "var(--actions-primary-hover)",
          "primary-active": "var(--actions-primary-active)",
        },
        status: {
          DEFAULT: "var(--status-default)",
        },
        accent: {
          DEFAULT: "var(--color-accent)",
          soft: "var(--color-accent-soft)",
        },
        meta: "var(--color-meta)",
      },
      fontFamily: {
        heading: "var(--font-heading)",
        accent: "var(--font-accent)",
        text: "var(--font-text)",
        serif: "var(--font-heading)",
        sans: "var(--font-text)",
      },
      fontSize: {
        tiny: [
          "var(--text-sizes-text-tiny)",
          { lineHeight: "var(--text-line-height)" },
        ],
        small: [
          "var(--text-sizes-text-small)",
          { lineHeight: "var(--text-line-height)" },
        ],
        regular: [
          "var(--text-sizes-text-regular)",
          { lineHeight: "var(--text-line-height)" },
        ],
        medium: [
          "var(--text-sizes-text-medium)",
          { lineHeight: "var(--text-line-height)" },
        ],
        large: [
          "var(--text-sizes-text-large)",
          { lineHeight: "var(--text-line-height)" },
        ],
        h1: [
          "var(--heading-h1-size)",
          {
            lineHeight: "var(--heading-h1-line-height)",
            fontWeight: "var(--heading-h1-weight)",
          },
        ],
        h2: [
          "var(--heading-h2-size)",
          {
            lineHeight: "var(--heading-h2-line-height)",
            fontWeight: "var(--heading-h2-weight)",
          },
        ],
        h3: [
          "var(--heading-h3-size)",
          {
            lineHeight: "var(--heading-h3-line-height)",
            fontWeight: "var(--heading-h3-weight)",
          },
        ],
        h4: [
          "var(--heading-h4-size)",
          {
            lineHeight: "var(--heading-h4-line-height)",
            fontWeight: "var(--heading-h4-weight)",
          },
        ],
        h5: [
          "var(--heading-h5-size)",
          {
            lineHeight: "var(--heading-h5-line-height)",
            fontWeight: "var(--heading-h5-weight)",
          },
        ],
        h6: [
          "var(--heading-h6-size)",
          {
            lineHeight: "var(--heading-h6-line-height)",
            fontWeight: "var(--heading-h6-weight)",
          },
        ],
        tagline: [
          "var(--heading-tagline-size)",
          {
            lineHeight: "var(--heading-tagline-line-height)",
            fontWeight: "var(--heading-tagline-weight)",
          },
        ],
      },
      borderRadius: {
        small: "var(--radius-small)",
        medium: "var(--radius-medium)",
        large: "var(--radius-large)",
      },
      borderWidth: {
        DEFAULT: "var(--borders-width)",
      },
      borderColor: {
        DEFAULT: "var(--borders-default)",
      },
      boxShadow: {
        xxsmall: "var(--shadow-xxsmall)",
        xsmall: "var(--shadow-xsmall)",
        small: "var(--shadow-small)",
        medium: "var(--shadow-medium)",
        large: "var(--shadow-large)",
        xlarge: "var(--shadow-xlarge)",
        xxlarge: "var(--shadow-xxlarge)",
      },
      spacing: {
        2: "var(--spacing-2)",
        4: "var(--spacing-4)",
        6: "var(--spacing-6)",
        8: "var(--spacing-8)",
        10: "var(--spacing-10)",
        16: "var(--spacing-16)",
        20: "var(--spacing-20)",
      },
    },
  },
  plugins: [],
};
