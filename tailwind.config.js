module.exports = {
  content: ["./app/**/*.{html,ejs}"],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        'primary': '#eee1ca',
        'secondary': '#38241B',
        'third': '#951205',
      },
      fontFamily: {
        'sans': ['Noto sans TC', 'sans-serif'],
        'serif': ['Noto Serif TC', 'serif'],
        'Roboto': 'Roboto',
        'ARJULIAN': 'ar_julianregular',
      },
      backgroundImage: {
        'block-mobile': "url('../images/section_background_mobile.png')",
        'block': "url('../images/section_background.png')",
        'web': "url('../images/background.png')",
        'web-mobile': "url('../images/web-bg.png')",
        'banner': "url(../images/banner.png)",
        'banner-inner': "url(../images/banner_inner.png)",
        'banner-tablet': "url(../images/banner_tablet.png)",
        'banner-mobile': "url(../images/banner_mobile.png)",
        'teacher1': "url(../images/teacher1.gif)",
        'teacher2': "url(../images/teacher2.gif)",
        'teacher3': "url(../images/teacher3.gif)",
        'teacher4': "url(../images/teacher4.gif)",
        'teacher_name': "url(../images/teacher_name_bg.png)",
      },
      dropShadow: {
        'button': '0 4px 4px rgba(0, 0, 0, 0.25)',
      },
    },
    
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}