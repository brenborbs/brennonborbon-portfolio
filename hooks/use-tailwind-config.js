import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../tailwind.config';

function useTailwindConfig() {
  return resolveConfig(tailwindConfig);
}

export { useTailwindConfig };
