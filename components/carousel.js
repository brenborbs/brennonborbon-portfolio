import PropTypes from 'prop-types';
import { useKeenSlider } from 'keen-slider/react';
import { carousel } from '../data';
import Link from 'next/link';

function Carousel() {
  const [sliderRef, slider] = useKeenSlider({
    initial: 0,
    loop: true,
  });

  return (
    <div className="relative">
      <div className="mx-auto max-w-12xl">
        <div className="relative h-0 sm:aspect-ratio-4/3 lg:aspect-ratio-16/9">
          <div className="absolute inset-0 flex">
            <ul ref={sliderRef} className="flex-1 keen-slider">
              {carousel.map((slide) => {
                return (
                  <li key={slide.id} className="keen-slider__slide">
                    <div className="relative">
                      <div className="relative h-0 sm:aspect-ratio-4/3 lg:aspect-ratio-16/9">
                        <div className="absolute flex-0">
                          <img
                            src={slide.image}
                            alt={slide.title}
                            className="flex-1 object-cover"
                          />
                        </div>
                      </div>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <h2 className="text-3xl text-white uppercase md:text-5xl font-roboto text-shadow">
                          {slide.title}
                        </h2>
                        <div className="relative flex items-center justify-center w-full max-w-3xl mx-auto mt-2">
                          <h2 className="relative px-2 py-3 text-3xl font-black text-center text-white capitalize font-architects sm:text-4xl md:text-5xl lg:text-6xl">
                            {slide.quote}
                          </h2>
                        </div>
                        <Link href="/">
                          <a className="font-architects mt-2 inline-flex items-center justify-center px-8 py-2 tracking-wider text-white transition duration-150 ease-in-out border border-green-500 bg-green-500 hover:text-green-500 hover:bg-white focus:text-green-500 focus:bg-white;">
                            Let's get out of here
                          </a>
                        </Link>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* arrows */}
          {slider && (
            <div className="absolute inset-0 flex items-center justify-between w-full px-4 mx-auto pointer-events-none sm:px-6 lg:px-8 max-w-7xl">
              <ArrowLeft
                onClick={(e) => e.stopPropagation() || slider.prev()}
              />
              <ArrowRight
                onClick={(e) => e.stopPropagation() || slider.next()}
              />
            </div>
          )}
          <ArrowDown />
        </div>
      </div>
    </div>
  );
}

function ArrowLeft({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="p-2 transition duration-150 ease-in-out bg-white bg-opacity-25 rounded-full pointer-events-auto backdrop-blur hover:bg-green-500 focus:bg-green-300"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-8 h-8 text-white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </button>
  );
}

ArrowLeft.propTypes = {
  onClick: PropTypes.func.isRequired,
};

function ArrowRight({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="p-2 transition duration-150 ease-in-out bg-white bg-opacity-25 rounded-full pointer-events-auto backdrop-blur hover:bg-green-500 focus:bg-green-300"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-8 h-8 text-white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </button>
  );
}
ArrowRight.propTypes = {
  onClick: PropTypes.func.isRequired,
};

function ArrowDown() {
  return (
    <div className="absolute inset-x-0 flex justify-center pointer-events-none bottom-12">
      <a href="#main-content" className="pointer-events-auto">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-8 h-8 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </a>
    </div>
  );
}

export { Carousel };
