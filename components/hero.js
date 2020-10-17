import Link from 'next/link';
import PropTypes from 'prop-types';

function Hero({ img, title, cta, action }) {
  return (
    <article className="relative w-full mx-auto max-w-7xl">
      <div className="relative h-0 aspect-ratio-16/9">
        <div className="absolute inset-0 flex">
          <img src={img} alt={title} className="flex-1" />
        </div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white uppercase">
          <h2 className="text-3xl text-shadow font-nunito">
            {title} <br />
            <span className="text-lg font-bold uppercase sm:text-3xl md:text-5xl font-roboto">
              {cta}
            </span>
          </h2>
          <Link href="/">
            <a className="font-architects mt-2 inline-flex items-center justify-center px-8 py-2 tracking-wider text-white transition duration-150 ease-in-out border border-green-500 bg-green-500 hover:text-green-500 hover:bg-white focus:text-green-500 focus:bg-white;">
              {action}
            </a>
          </Link>
        </div>
      </div>
    </article>
  );
}

Hero.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cta: PropTypes.string.isRequired,
  action: PropTypes.string.isRequired,
};

export { Hero };
