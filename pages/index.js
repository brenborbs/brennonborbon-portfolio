import {
  Layout,
  SEO,
  InstagramWidget,
  About,
  Carousel,
  Builds,
  TimeLine,
  ContactForm,
  GoogleMap,
} from '../components';
import {
  APP_DESCRIPTION,
  APP_ADDRESS,
  APP_TELEPHONE,
  APP_EMAIL,
} from '../config';
import { Element } from 'react-scroll';

export default function Home() {
  return (
    <Layout>
      <SEO title="Home" />
      <Element name="home">
        <Carousel />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="projects">
        <Builds />
        <TimeLine />
      </Element>
      <Element name="contact">
        <section>
          <h2 className="px-1 py-1 mt-12 text-4xl font-bold text-center font-architects">
            Contact
          </h2>
          <div className="container flex flex-wrap px-5 py-24 mx-auto sm:flex-nowrap">
            <div className="relative flex items-end justify-start p-10 overflow-hidden rounded-lg lg:w-2/3 md:w-1/2 sm:mr-10">
              <GoogleMap />
              <div className="relative flex flex-wrap py-6 bg-white">
                <div className="px-6 lg:w-1/2">
                  <h2 className="text-sm font-medium tracking-widest title-font">
                    {APP_ADDRESS.line1},
                    <br />
                    {APP_ADDRESS.line2}
                  </h2>
                  <p className="leading-relaxed">{APP_DESCRIPTION}</p>
                </div>
                <div className="px-6 mt-4 lg:w-1/2 lg:mt-0">
                  <h2 className="text-sm font-medium tracking-widest title-font">
                    EMAIL
                  </h2>
                  <a className="leading-relaxed text-green-500">{APP_EMAIL}</a>
                  <h2 className="mt-4 text-sm font-medium tracking-widest title-font">
                    PHONE
                  </h2>
                  <p className="leading-relaxed">{APP_TELEPHONE}</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full mt-8 lg:w-1/3 md:w-1/2 md:ml-auto md:py-8 md:mt-0">
              <h2 className="mb-1 text-lg font-medium title-font">
                We are happy to hear from you!
              </h2>
              <p className="mb-5 leading-relaxed text-gray-600">
                We can hop on and have a google meet or even skype to have a
                short chat and discuss interesting topics with regards to how I
                may be able to serve your projects.
              </p>
              <ContactForm />
            </div>
          </div>
        </section>
      </Element>

      <InstagramWidget />
    </Layout>
  );
}
