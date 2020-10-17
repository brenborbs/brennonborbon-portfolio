import Head from 'next/head';
import PropTypes from 'prop-types';
import { APP_NAME, APP_DESCRIPTION } from '../config';

function SEO({ title }) {
  return (
    <Head>
      <title>
        {title} | {APP_NAME}
      </title>
      <meta name="description" content={`${APP_DESCRIPTION}`} />
      <meta
        property="og:description"
        content={`${APP_DESCRIPTION}`}
        key="ogdesc"
      />
      <meta
        property="og:title"
        content={`Tailwindcss NextJS Template... | ${APP_NAME}`}
      />
      <meta property="og:title" content={title} key="ogtitle" />
      <meta property="og:type" content="website" />
    </Head>
  );
}

SEO.propTypes = {
  title: PropTypes.string.isRequired,
};

export { SEO };
