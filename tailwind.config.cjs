/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlack: "#191919",
        customOrgange: '#D87D4A',
        textGray: 'rgba(255,255,255,0.5)',
        textGrayDark: 'rgba(0,0,0,0.5)',
        lightGray: 'rgba(255,255,255,0.5)',
        saturedWhite: '#F1F1F1',
        grayHover: '#D3D3D3',
        blackHover: '#4C4C4C',
      },
      backgroundImage: {
        heroMobile: "url('/images/home/mobile/image-hero.jpg')",
        heroTablet: "url('/images/home/tablet/image-hero.jpg')",
        heroDesktop: "url('/images/home/desktop/image-hero.jpg')",
        pattern: "url('/images/home/desktop/pattern-circles.svg')",
        speaker:  "url('/images/home/mobile/image-speaker-zx7.jpg')",
        speakerTablet: "url('/images/home/tablet/image-speaker-zx7.jpg')",
        speakerDesktop: "url('/images/home/desktop/image-speaker-zx7.jpg')",

      },
      screens : {
        'tablet' : '330px',
          'mid':'500px',
          'customGrid':'612px'
      }
    },
  },
  plugins: [],
}