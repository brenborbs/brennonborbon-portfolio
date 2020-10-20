import { Layout, SEO, InstagramWidget } from '../components';

export default function Success() {
  return (
    <Layout>
      <SEO title="Success" />
      <div className="w-full mx-auto max-w-7xl">
        <div className="flex items-center justify-center pt-14">
          <h2 className="text-3xl font-bold uppercase font-architects">
            Success! Thanks for your message. Our customer representatives are
            now reviewing your request. We will contact you shortly.
          </h2>
        </div>
      </div>
      <InstagramWidget />
    </Layout>
  );
}
