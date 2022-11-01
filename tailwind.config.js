/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      './src/pages/**/*.{js,ts,jsx,tsx}',
      './src/components/**/*.{js,ts,jsx,tsx}',
   ],
   important: true,
   theme: {
      extend: {
         colors: {},
      },
   },
   daisyui: {
      themes: [
         {
            light: {
               ...require('daisyui/src/colors/themes')['[data-theme=light]'],
               primary: '#201942',
               'base-200': '#F2F2F2',
            },
         },
      ],
   },

   plugins: [require('daisyui')],
}
