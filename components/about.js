import { Picture } from './picture';
import Link from 'next/link';

const path = 'about.jpg';

function About() {
  return (
    <article className="relative" id="#about">
      <div className="w-full px-4 pt-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid justify-center gap-8 overflow-hidden md:grid-cols-2">
          <div className="w-full mx-auto max-w-prose">
            <div className="relative h-0 aspect-ratio-4/3">
              <Picture path={path} title="About" />
            </div>
          </div>
          <div className="overflow-hidden md:py-2">
            <h2 className="px-1 py-1 text-4xl font-bold text-center font-architects">
              My Story
            </h2>
            <div className="mt-2 prose">
              <p>
                I am Brennon Borbon and I always love computers. Just like any
                curious cat out there, I was always amazed when I see a bunch of
                code even though I did not understand what it was meant to do. I
                began to investigate and suddenly find myself in the world of
                web development. I started slow but eventually, got the grasp of
                the holy trinity of web development which are HTML, CSS and
                Javascript. It's been quite a journey and today, I am constantly
                using these technologies to create awesome, meaningful and
                touching web projects.
              </p>
              <p>
                I mainly used my
                <Link href="https://github.com/brenborbs"> Github</Link> account
                to store different code bases for my projects. You are free to
                check out some of my personal projects and public contributions
                there. I have done some freelance and contract jobs since diving
                into web technologies and have been part of some wonderful
                teams.
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export { About };
