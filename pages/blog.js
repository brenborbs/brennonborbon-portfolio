import { Layout, SEO, BlogCards } from '../components';

export default function Blog() {
  return (
    <Layout>
      <SEO title="blog" />
      <article className="w-full mx-auto overflow-hidden max-w-7xl">
        <BlogCards />
      </article>
    </Layout>
  );
}
