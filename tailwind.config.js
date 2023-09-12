/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,twig,php}"],
  theme: {
    extend: {
      zIndex: {
        'down': '-1',
        'zxl':'100',
      },
      margin: {
        'initial': 'initial',
      },
      rotate: {
        '270': '270deg',
      },
      screens: {
        'sm': '640px',
        'md': '992px',
        'lg': '1024px', 
        'xl': '1200px',
        '2xl': '1280px',
        '3xl': '1380px',
        '4xl': '1440px',
      },
      minHeight:{
        '1/2':'50%',
        '48':'48px',
        '150': '150px',
        'initial':'initial',
      },
      padding:{
        '10per':'10%',
      },
      
      transitionProperty: {
        'display': 'display',
        'transition-opacity': 'transition-opacity: 300ms', 
        'duration-300': 'transition-duration: 300ms', 
      },

      backgroundImage: {
        
        'bonus-btn': 'linear-gradient(255deg, #dcb74f, #b98518);',
        'bonus-btn-hover': 'linear-gradient(25deg, #dcb74f, #b98518);',
        'partner-bg': 'linear-gradient(160deg, #918FA6 0%, #48456C 53%, #171532 100%);',
        'content-bg': "url('../assets/images/bg-home.jpg')",
        'btn-mob': 'linear-gradient(270deg, #602FFF 0%, #49D4E8 100%);', 
        
        
      },
      boxShadow: {
        
        'btn-shadow':'0 1.5px 2.5px 0 rgba(0, 0, 0, .15)',
        'viewer-shadow':'0 0 10px 0 rgba(0,0,0,0.5)',
        'popup-shadow':'0 0 14px 1px #d79f31'
       
        
      },
      lineHeight: {
        '44': '2.75rem',
        '60': '3.75rem',
        '72': '4.5rem',
        '88': '5.5rem',
      },
      height: {
        '50': '50px',
        '150': '150px',
       
      },
      width:{
        '48': '48%',
        '140': '140px',
        '180': '180px',
        '220': '220px',
        
      },
      colors: {
        'color-primery':'#193755',
        'red':'#A7072F',
        'grey':'#7b7b7b',
        'yellow':'#fdcc64',
        'dark-grey':'#4e5b64', 
        'light-blue':'#2660a4',
        'light-grey':'#50555b',
        'light-bg':'#f6f6f6',
        'off-white':'#e1e1e1',
        'modal-bg':'#232426' 

        

       },
      fontFamily: {
        'sans': ['"Proxima Nova"', 'sans-serif'],
        'serif': ['Sentient', 'serif'],
       
      },
    },
  },
  plugins: [
   
  ],
}

