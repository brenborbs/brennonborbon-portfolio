import { Layout, SEO, Question, Hero, InstagramWidget } from '../components';

const img = '/landing.jpg';

export default function Faqs() {
  return (
    <Layout>
      <SEO title="faqs" />
      <Hero
        img={img}
        title="Faqs Page"
        cta="NextJS Tailwindcss"
        action="Can I answer your question?"
      />
      <div className="px-4 bg-white sm:px-6 lg:px-8">
        <div className="py-8 mx-auto">
          <div className="relative flex flex-col items-center justify-center mx-auto mt-2">
            <h2 className="my-4 text-2xl font-bold uppercase font-architects">
              Questions
            </h2>
            <Question heading="How did you learn how to code?">
              <Education />
            </Question>
            <Question heading="What do you do in your freetime?">
              <Hobby />
            </Question>
            <Question heading="What is your birthday">
              <Born />
            </Question>
            <Question heading="Remote work or office?">
              <Location />
            </Question>
          </div>
        </div>
      </div>
      <InstagramWidget />
    </Layout>
  );
}

function Education() {
  return (
    <div className="prose">
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo corporis
        unde sapiente dolorum dolores accusamus provident labore delectus
        eveniet laborum? Aspernatur nam, ipsum dolor porro fugit voluptas nemo
        nostrum nobis?
      </p>
    </div>
  );
}

function Hobby() {
  return (
    <div className="prose">
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo corporis
        unde sapiente dolorum dolores accusamus provident labore delectus
        eveniet laborum? Aspernatur nam, ipsum dolor porro fugit voluptas nemo
        nostrum nobis?
      </p>
    </div>
  );
}

function Born() {
  return (
    <div className="prose">
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo corporis
        unde sapiente dolorum dolores accusamus provident labore delectus
        eveniet laborum? Aspernatur nam, ipsum dolor porro fugit voluptas nemo
        nostrum nobis?
      </p>
    </div>
  );
}

function Location() {
  return (
    <div className="prose">
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo corporis
        unde sapiente dolorum dolores accusamus provident labore delectus
        eveniet laborum? Aspernatur nam, ipsum dolor porro fugit voluptas nemo
        nostrum nobis?
      </p>
    </div>
  );
}
