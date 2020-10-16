import { Layout, SEO, Hero, About, Review } from '../components';

const img = '/landing.jpg';

export default function Home() {
  return (
    <Layout>
      <SEO title="Home" />
      <Hero
        img={img}
        title="Landing Page"
        cta="NextJS Tailwindcss"
        action="Check it Now!"
      />
      <About />
      <Review />
    </Layout>
  );
}
