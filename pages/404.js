import { Layout, SEO } from '../components';

// pages/404.js
export default function Custom404() {
  return (
    <Layout>
      <SEO title="404 Page" />
      <div className="w-full mx-auto max-w-7xl">
        <div className="flex items-center justify-center pt-14">
          <h2 className="text-3xl font-bold uppercase font-architects">
            Oopps..404 page! Try searching again
          </h2>
        </div>
      </div>
    </Layout>
  );
}
