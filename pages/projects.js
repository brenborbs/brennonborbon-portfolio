import { Layout, SEO, Builds, InstagramWidget, TimeLine } from '../components';

export default function Projects() {
  return (
    <Layout>
      <SEO title="Projects" />
      <TimeLine />
      <article className="w-screen px-4 ">
        <div className="flex flex-col items-center justify-center border-t border-gray-300">
          <h2 className="px-1 py-1 mt-12 text-4xl font-bold text-center font-architects">
            Projects
          </h2>
          <p className="my-4 mb-10 text-lg md:max-w-xl">
            I have contributed to various professional projects below. At the
            same time, I also have contributions on open source projects such as
            contributing to React Cebu's website and making the footer.
          </p>
          <Builds />
        </div>
      </article>
      <InstagramWidget />
    </Layout>
  );
}
