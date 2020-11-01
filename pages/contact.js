import { Layout, SEO, Hero, ContactForm, InstagramWidget } from '../components';

const path = '/static/images/contact.jpg';

export default function Contact() {
  return (
    <Layout>
      <SEO title="Contact" />
      <Hero
        path={path}
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
