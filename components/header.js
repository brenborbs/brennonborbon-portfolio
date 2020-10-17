import React, { useState } from 'react';
import Link from 'next/link';
import { Logo } from './vectors';
import { mainNavigation } from '../data';
import { MobileMenu } from './mobile-menu';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-20 bg-white shadow">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
              <a>
                <Logo className="h-10" />
              </a>
            </Link>
          </div>
          <div className="hidden space-x-8 sm:ml-6 sm:flex font-architects">
            {mainNavigation.map((node) => (
              <Link key={node.id} href={node.slug}>
                <a className="inline-flex items-center px-1 pt-1 font-medium leading-5 text-green-500 transition duration-150 ease-in-out border-b-2 border-transparent text-md hover:text-green-700 hover:border-green-300 focus:shadow-none focus:text-green-700 focus:border-green-300">
                  {node.label}
                </a>
              </Link>
            ))}
          </div>
          <div className="flex items-center -mr-2 sm:hidden">
            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setIsOpen((prevState) => !prevState)}
              aria-label="Main menu"
              aria-expanded="false"
              className="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
            >
              {isOpen ? (
                <svg
                  className="block w-6 h-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block w-6 h-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />}
    </nav>
  );
}

export { Header };
