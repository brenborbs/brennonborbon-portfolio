import { Layout, SEO, Question, Hero, InstagramWidget } from '../components';

const path = 'landing.jpg';

export default function Faqs() {
  return (
    <Layout>
      <SEO title="faqs" />
      <Hero
        path={path}
        title="Faqs Page"
        cta="NextJS Tailwindcss"
        action="Can I answer your question?"
      />
      {/* TODO: mt-40 is temporary until fix is completed on hero */}
      <div className="px-4 bg-white sm:px-6 lg:px-8">
        <div className="py-8 mx-auto">
          <div className="relative flex flex-col items-center justify-center mx-auto mt-2 ">
            <h2 className="px-1 py-1 mb-8 text-4xl font-bold bg-green-300 rounded-sm font-architects">
              Questions
            </h2>
            <Question heading="How did you learn how to code?">
              <Education />
            </Question>
            <Question heading="What do you do in your freetime?">
              <Hobby />
            </Question>
            <Question heading="Do you have a pet?">
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
        I am a self-taught developer who has worked hard since 2018 to honed my
        skills up to professional level. Though, I hold an engineering degree
        which is not I.T nor CS related.
      </p>
    </div>
  );
}

function Hobby() {
  return (
    <div className="prose">
      <p>
        when I am not messing around with code, I spend my time playing my
        custom Mexican Telecaster. I am also an intermediate guitar player and I
        mostly play from Classic rock, Blues, funk, Glam Rock, Grunge up to
        Metal. When not in the mood for playing, I mostly drive along in the
        provinces with my family.
      </p>
    </div>
  );
}

function Born() {
  return (
    <div className="prose">
      <p>
        Yes, I have a pet. He is a Sheepadoodle and he's named is Rocket. We got
        his name from Rocket of Guardians of the Galaxy because he is one of our
        favorite Marvel characters. He is fun and at the same time annoying just
        like our dog, Rocket.
      </p>
    </div>
  );
}

function Location() {
  return (
    <div className="prose">
      <p>
        Be it in the office or working remotely in a team, I can be adjust to
        both working environments. I have also experienced working outside the
        country, given my past employments with my previous profession an an
        engineer.
      </p>
    </div>
  );
}
