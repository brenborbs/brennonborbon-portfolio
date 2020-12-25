import { nanoid } from 'nanoid';

const milestones = [
  {
    id: nanoid(),
    seq: '1',
    title: 'Freelance Web Developer',
    desc:
      'I started accepting freelance gigs from January 2018 and worked mostly on making HTML and CSS templates for various clients.',
    svg: (
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="w-6 h-6"
        viewBox="0 0 24 24"
      >
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
        <path d="M22 4L12 14.01l-3-3"></path>
      </svg>
    ),
  },
  {
    id: nanoid(),
    seq: '2',
    title: 'Web Developer and I.T Staff for JMC Limited Denmark',
    desc:
      'JMC Limited is a Danish Painting Contractor serving the marine industry. The owner was a contact of mine and I offered my services to built his online presence and worked on the company internal I.T reporting software. I worked for the company from June 2018 untill December 2019.',
    svg: (
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="w-6 h-6"
        viewBox="0 0 24 24"
      >
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
        <path d="M22 4L12 14.01l-3-3"></path>
      </svg>
    ),
  },
  {
    id: nanoid(),
    seq: '3',
    title: 'Worked for Phiranno Designs',
    desc:
      'During the start of the pandemic, getting freelance jobs was very difficult due to the lockdowns. Fortunately, I got a contract and worked for Phiranno Design AU from June 2020 until 1st week of December 2020.',
    svg: (
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="w-6 h-6"
        viewBox="0 0 24 24"
      >
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
        <path d="M22 4L12 14.01l-3-3"></path>
      </svg>
    ),
  },
];

function TimeLine() {
  return (
    <section>
      <div className="container px-5 py-10 mx-auto">
        <div className="flex flex-col w-full mb-8 text-center">
          <h1 className="mb-4 text-4xl font-medium sm:text-3xl title-font font-architects">
            Professional Experience
          </h1>
          <p className="mx-auto text-base leading-relaxed lg:w-2/3">
            My long journey from point A to B in Web Development
          </p>
        </div>
        <div className="container flex flex-wrap px-5 py-8 mx-auto">
          {milestones.map((mile) => (
            <div
              className="relative flex pt-10 pb-20 mx-auto sm:items-center md:w-2/3"
              key={mile.id}
            >
              <div className="absolute inset-0 flex items-center justify-center w-6 h-full">
                <div className="w-1 h-full bg-gray-200 pointer-events-none"></div>
              </div>
              <div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mt-10 text-sm font-medium text-white bg-green-500 rounded-full sm:mt-0 title-font">
                {mile.seq}
              </div>
              <div className="flex flex-col items-start flex-grow pl-6 md:pl-8 sm:items-center sm:flex-row">
                <div className="inline-flex items-center justify-center flex-shrink-0 w-24 h-24 text-green-500 bg-green-100 rounded-full">
                  {mile.svg}
                </div>
                <div className="flex-grow mt-6 sm:pl-6 sm:mt-0">
                  <h2 className="mb-1 text-xl font-medium text-gray-900 capitalize title-font">
                    {mile.title}
                  </h2>
                  <p className="leading-relaxed">{mile.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export { TimeLine };
