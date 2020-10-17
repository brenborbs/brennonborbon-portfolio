import {
  Layout,
  SEO,
  InstagramWidget,
  About,
  Review,
  Carousel,
} from '../components';

export default function Home() {
  return (
    <Layout>
      <SEO title="Home" />
      <Carousel />
      <About />
      <Review />
      <InstagramWidget />
    </Layout>
  );
}
