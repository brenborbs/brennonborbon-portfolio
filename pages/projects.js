import { Layout, SEO, Builds, InstagramWidget } from '../components';

export default function Projects() {
  return (
    <Layout>
      <SEO title="Projects" />
      <article className="w-screen px-4">
        <div className="flex flex-col items-center justify-center">
          <h2 className="px-1 py-1 mt-12 text-4xl font-bold text-center bg-green-300 rounded-sm font-architects">
            Projects
          </h2>
          <p className="my-2 mb-10 text-lg font-architects">
            Click on below to see what I have been doing recently..
          </p>

          <Builds />
        </div>
      </article>
      <InstagramWidget />
    </Layout>
  );
}
