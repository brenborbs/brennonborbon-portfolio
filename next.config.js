const withPlugins = require('next-compose-plugins');

const publicRuntimeConfig = {
  // Sample only, you can change the values accordingly!
  APP_NAME: 'NextJS Tailwindcss Template',
  APP_DESCRIPTION: 'A Tailwindcss NextJS Template',
  APP_ADDRESS: {
    line1: '25 Saucer Street',
    line2: 'Earth Works Cebu',
  },
  APP_TELEPHONE: '63-995-711-2045',
  APP_OFFICEHOURS: 'Mon - Fri , time: 9am - 5pm',
  APP_EMAIL: 'bbq@nextjstailwindcss.ph',
  API_DEVELOPMENT: 'http://localhost:8000/api',
  API_PRODUCTION: 'https://nextjstailwindcsstemplate.com/api',
  PRODUCTION: false,
  DOMAIN_DEVELOPMENT: 'http://localhost:3000',
  DOMAIN_PRODUCTION: 'https://nextjstailwindcsstemplate',
};

const isProd = process.env.NODE_ENV === 'production';

module.exports = withPlugins([
  {
    // Use the CDN in production and localhost for development.
    assetPrefix: isProd
      ? 'https://brenborbs-nextjs-tailwindcss.netlify.app'
      : '',
  },
  {
    publicRuntimeConfig,
  },

  // your other plugins here
]);
