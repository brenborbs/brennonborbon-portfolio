import Link from 'next/link';
import { Logo } from './vectors';
import {
  APP_NAME,
  APP_ADDRESS,
  APP_TELEPHONE,
  APP_OFFICEHOURS,
  APP_EMAIL,
} from '../config';
import { footerNavigation, socialLinks } from '../data';

function Footer() {
  return (
    <footer className="text-green-500 capitalize bg-white">
      <div className="w-full px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3">
          <div className="xl:col-span-1">
            <div className="flex flex-col justify-center">
              <Link href="/">
                <a className="flex mx-auto my-auto ">
                  <div>
                    <span className="sr-only">{APP_NAME}</span>
                    <Logo aria-hidden focusable={false} className="h-24" />
                  </div>
                </a>
              </Link>
              <div className="flex items-center justify-center space-x-3 text-gray-700">
                {socialLinks.map((icon) => (
                  <a
                    key={icon.id}
                    href={icon.url}
                    className="transition duration-150 ease-in-out hover:text-gray-300 focus:text-gray-300 focus:shadow-none"
                  >
                    <icon.icon className="h-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 md:grid-cols-3 md:ml-10 md:mx-auto md:gap-x-4 xl:col-span-2">
            <div className="my-6">
              <ul className="space-y-1">
                {footerNavigation.col1.map((node) => (
                  <li key={node.id}>
                    <Link href={node.slug}>
                      <a className="text-green-500 transition duration-150 ease-in-out hover:underline focus:underline focus:shadow-none">
                        {node.label}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="my-6">
              <ul className="space-y-1">
                {footerNavigation.col2.map((node) => (
                  <li key={node.id}>
                    <Link href={node.slug}>
                      <a className="text-green-500 transition duration-150 ease-in-out hover:underline focus:underline focus:shadow-none">
                        {node.label}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="my-6">
              <div>
                <div className="ml-auto space-y-3 text-green-500">
                  {APP_OFFICEHOURS}
                </div>
              </div>
              <div className="mt-12 md:mt-0">
                <dl className="ml-auto space-y-3 text-green-500 ">
                  <dt>
                    <a
                      href={`tel:${APP_TELEPHONE.split(' ').join('')}`}
                      className="hover:underline focus:underline focus:shadow-none"
                    >
                      {APP_TELEPHONE}
                    </a>
                  </dt>
                  <dd>
                    <a
                      href={`mailto:${APP_EMAIL}`}
                      className="text-green-500 lowercase break-all transition duration-150 ease-in-out hover:underline focus:underline focus:shadow-none"
                    >
                      {APP_EMAIL}
                    </a>
                  </dd>
                  <div>
                    <a
                      href="/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-500 transition duration-150 ease-in-out hover:underline focus:underline focus:shadow-none"
                    >
                      {APP_ADDRESS.line1}, {APP_ADDRESS.line2}
                    </a>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-8 mt-10 uppercase border-t border-green-300">
          <p className="tracking-wider text-center ">
            Website by{' '}
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-green-500 transition duration-150 ease-in-out hover:underline focus:underline focus:shadow-none"
            >
              &copy; {new Date().getFullYear()} {APP_NAME}. All rights reserved.
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
