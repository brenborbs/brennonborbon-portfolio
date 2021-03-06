import Link from 'next/link';
import PropTypes from 'prop-types';
import { Picture } from './picture';

function Hero({ path, title, cta, action }) {
  return (
    <article className="relative w-full mx-auto overflow-hidden bg-green-300 max-w-7xl">
      <div className="relative h-0 aspect-ratio-16/9">
        <Picture path={path} title={title} />
      </div>
      <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white uppercase">
          <h2 className="text-3xl md:text-5xl text-shadow">
            {title} <br />
            <span className="text-lg font-black uppercase text-shadow font-architects sm:text-3xl md:text-5xl lg:text-6xl">
              {cta}
            </span>
          </h2>
          <Link href="/projects">
            <a className="mt-2 inline-flex items-center justify-center px-8 py-2 tracking-wider text-white transition duration-150 ease-in-out border border-green-500 bg-green-500 hover:text-green-500 hover:bg-white focus:text-green-500 focus:bg-white;">
              {action}
            </a>
          </Link>
        </div>
      </div>
    </article>
  );
}

Hero.propTypes = {
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cta: PropTypes.string.isRequired,
  action: PropTypes.string.isRequired,
};

export { Hero };
