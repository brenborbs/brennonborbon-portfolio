import Link from 'next/link';

import { APP_NAME } from '../config';
import { footerNavigation, socialLinks } from '../data';

function Footer() {
  return (
    <footer className="bg-white">
      <div className="max-w-screen-xl px-4 py-12 mx-auto overflow-hidden sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center -mx-5 -my-2">
          {footerNavigation.map((node) => (
            <div className="px-5 py-2" key={node.id}>
              <Link href={node.slug} key={node.id}>
                <a className="text-base leading-6 text-green-500 transition duration-150 ease-in-out hover:text-green-900">
                  {node.label}
                </a>
              </Link>
            </div>
          ))}
        </nav>
        <div className="flex justify-center mt-8 space-x-6">
          {socialLinks.map((node) => (
            <a
              key={node.id}
              href={node.url}
              className="text-green-400 transition duration-150 ease-in-out hover:text-green-500 focus:text-green-500 focus:shadow-none"
            >
              <span className="sr-only">{node.label}</span>
              <node.icon className="w-6 h-6" />
            </a>
          ))}
        </div>
        <div className="mt-8">
          <p className="text-base leading-6 text-center text-green-400">
            &copy; {new Date().getFullYear()} {APP_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
