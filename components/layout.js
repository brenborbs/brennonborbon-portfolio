import React from 'react';
import PropTypes from 'prop-types';

import { Header } from './header';
import { Footer } from './footer';

function Layout({ children }) {
  return (
    <div className="relative flex flex-col min-h-screen font-sans antialiased text-gray-700 bg-white fill-available">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export { Layout };