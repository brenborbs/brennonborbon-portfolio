import { Layout, SEO, Hero, ContactForm, InstagramWidget } from '../components';

const img = '/contact.jpg';

export default function Contact() {
  return (
    <Layout>
      <SEO title="Contact" />
      <Hero
        img={img}
        title="Contact Us"
        cta="NextJS Tailwindcss"
        action="Hurry!"
      />
      <div className="w-full mx-auto max-w-7xl">
        <div className="flex items-center justify-center pt-14">
          <ContactForm />
        </div>
      </div>
      <InstagramWidget />
    </Layout>
  );
}
