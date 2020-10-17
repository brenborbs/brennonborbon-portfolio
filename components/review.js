import { useState } from 'react';
import { people } from '../data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
function Review() {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];
  // check if array is not empty
  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    // if array is not empty return number
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };
  return (
    <div className="w-full mx-auto max-w-7xl">
      <div className="relative flex flex-col items-center justify-center pt-14">
        <h2 className="px-1 py-1 my-6 text-4xl font-bold text-center bg-green-300 rounded-sm font-architects">
          Reviews
        </h2>
        <article className="max-w-md px-6 py-8 mx-auto overflow-hidden text-center rounded-lg shadow-lg">
          <div className="relative w-48 h-48 mx-auto mb-4">
            <img
              src={image}
              alt={name}
              className="block object-cover w-full h-full rounded-full"
            />
            <span className="absolute inset-0 grid items-start text-xl rounded-md text-brand-yellow">
              <FaQuoteRight />
            </span>
          </div>
          <h4 className="mb-2 text-xl font-bold capitalize font-roboto">
            {name}
          </h4>
          <p className="mb-2 text-lg uppercase font-architects">{job}</p>
          <p className="mb-2 prose">{text}</p>
          <div className="">
            <button
              className="px-1 py-1 mr-1 text-2xl text-white bg-transparent border border-transparent cursor-pointer bg-brand-blue hover:bg-blue-500"
              onClick={prevPerson}
            >
              <FaChevronLeft />
            </button>
            <button
              className="px-1 py-1 text-2xl text-white bg-transparent border border-transparent cursor-pointer bg-brand-blue hover:bg-blue-500"
              onClick={nextPerson}
            >
              <FaChevronRight />
            </button>
          </div>
          <button
            className="px-8 py-2 mt-4 tracking-wider text-white uppercase transition ease-in-out bg-green-500 border border-green-500 transition-duration-150 hover:text-green-500 hover:bg-white focus:text-green-500 focus:bg-white"
            onClick={randomPerson}
          >
            surprise me
          </button>
        </article>
      </div>
    </div>
  );
}

export { Review };
