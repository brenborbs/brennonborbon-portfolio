import { Layout, SEO, InstagramWidget, About, Carousel } from '../components';

export default function Home() {
  return (
    <Layout>
      <SEO title="Home" />
      <Carousel />
      <About />
      <InstagramWidget />
    </Layout>
  );
}
