import Head from 'next/head';
import { APP_NAME, APP_DESCRIPTION } from '../config';

function SEO({ title }) {
  return (
    <Head>
      <title>
        {title} | {APP_NAME}
      </title>
      <meta name="description" content={`${APP_DESCRIPTION}`} />
      <meta
        property="og:title"
        content={`Tailwindcss NextJS Template... | ${APP_NAME}`}
      />
      <meta property="og:type" content="website" />
    </Head>
  );
}

export { SEO };
