import {
  Layout,
  SEO,
  Hero,
  ContactForm,
  InstagramWidget,
  GoogleMap,
} from '../components';
import {
  APP_ADDRESS,
  APP_DESCRIPTION,
  APP_EMAIL,
  APP_TELEPHONE,
} from '../config';

const path = 'contact.jpg';

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
      <section>
        <div className="container flex flex-wrap px-5 py-24 mx-auto sm:flex-no-wrap">
          <div className="relative flex items-end justify-start p-10 overflow-hidden rounded-lg lg:w-2/3 md:w-1/2 sm:mr-10">
            <GoogleMap />
            <div className="relative flex flex-wrap py-6 bg-white">
              <div className="px-6 lg:w-1/2">
                <h2 className="text-sm font-medium tracking-widest text-gray-900 title-font">
                  {APP_ADDRESS.line1},
                  <br />
                  {APP_ADDRESS.line2}
                </h2>
                <p className="leading-relaxed">{APP_DESCRIPTION}</p>
              </div>
              <div className="px-6 mt-4 lg:w-1/2 lg:mt-0">
                <h2 className="text-sm font-medium tracking-widest text-gray-900 title-font">
                  EMAIL
                </h2>
                <a className="leading-relaxed text-green-500">{APP_EMAIL}</a>
                <h2 className="mt-4 text-sm font-medium tracking-widest text-gray-900 title-font">
                  PHONE
                </h2>
                <p className="leading-relaxed">{APP_TELEPHONE}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full mt-8 lg:w-1/3 md:w-1/2 md:ml-auto md:py-8 md:mt-0">
            <h2 className="mb-1 text-lg font-medium text-gray-900 title-font">
              We are happy to hear from you!
            </h2>
            <p className="mb-5 leading-relaxed text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              dignissimos veritatis delectus odit, fugit iusto natus praesentium
              repellendus numquam amet deleniti, cum expedita minima nam
              repudiandae saepe? Nisi, recusandae reprehenderit.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>
      <InstagramWidget />
    </Layout>
  );
}
