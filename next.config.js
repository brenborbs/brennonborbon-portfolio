const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

const publicRuntimeConfig = {
  // Sample only, you can change the values accordingly!
  APP_NAME: 'Brennon Portfolio',
  APP_DESCRIPTION: 'Brennon Porfolio built using NextJS and Tailwindcss',
  APP_ADDRESS: {
    line1: '25 Zodiac Drive Pleasant Homes Subdivision',
    line2: 'Punta Princesa Cebu City Philippines',
  },
  APP_TELEPHONE: '63-995-711-2045',
  APP_OFFICEHOURS: 'Mon - Fri , time: 9am - 5pm',
  APP_EMAIL: 'borbonbrennon@gmail.com',
  API_DEVELOPMENT: 'http://localhost:8000/api',
  API_PRODUCTION: 'https://nextjstailwindcsstemplate.com/api',
  PRODUCTION: false,
  DOMAIN_DEVELOPMENT: 'http://localhost:3000',
  DOMAIN_PRODUCTION: 'https://nextjstailwindcsstemplate',
};

module.exports = withPlugins([
  [
    optimizedImages,
    {
      /* config for next-optimized-images */
      mozjpeg: {
        quality: 80,
      },
      pngquant: {
        speed: 3,
        strip: true,
        verbose: true,
      },
    },
  ],
  {
    publicRuntimeConfig,
  },

  // your other plugins here
]);
