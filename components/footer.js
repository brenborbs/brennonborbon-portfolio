import { Logo } from './vectors';
import { APP_NAME } from '../config';
import { socialLinks } from '../data';

function Footer() {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container flex flex-col items-center px-5 py-8 mx-auto sm:flex-row">
        <a className="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start">
          <Logo className="w-10 h-10 p-2" />
          <span className="ml-3 text-xl">Brennon Borbon</span>
        </a>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          {' '}
          &copy; {new Date().getFullYear()} {APP_NAME}. All rights reserved.
        </p>
        <span className="inline-flex justify-center mt-4 sm:ml-auto sm:mt-0 sm:justify-start">
          {socialLinks.map((icon) => (
            <a
              key={icon.id}
              href={icon.url}
              className="ml-3 transition duration-150 ease-in-out hover:text-gray-300 focus:text-gray-300 focus:shadow-none"
            >
              <icon.icon className="w-5 h-5" />
            </a>
          ))}
        </span>
      </div>
    </footer>
  );
}

export { Footer };
