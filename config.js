import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();

export const API = publicRuntimeConfig.PRODUCTION
  ? publicRuntimeConfig.API_PRODUCTION
  : publicRuntimeConfig.API_DEVELOPMENT;

export const APP_NAME = publicRuntimeConfig.APP_NAME;
export const APP_DESCRIPTION = publicRuntimeConfig.APP_DESCRIPTION;
export const APP_ADDRESS = publicRuntimeConfig.APP_ADDRESS;
export const APP_TELEPHONE = publicRuntimeConfig.APP_TELEPHONE;
export const APP_OFFICEHOURS = publicRuntimeConfig.APP_OFFICEHOURS;
export const APP_EMAIL = publicRuntimeConfig.APP_EMAIL;

export const DOMAIN = publicRuntimeConfig.PRODUCTION
  ? publicRuntimeConfig.DOMAIN_PRODUCTION
  : publicRuntimeConfig.DOMAIN_DEVELOPMENT;
