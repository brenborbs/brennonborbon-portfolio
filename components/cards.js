import { nanoid } from 'nanoid';
import Image from 'next/image';
import Link from 'next/link';

const sample = [
  {
    id: nanoid(),
    image: require(`../images/about.jpg`),
    category: 'Music',
    title: 'Panama',
    desc: "The greatest rock solo in the 70's",
    views: '1.2',
    comments: '6',
  },
  {
    id: nanoid(),
    image: require(`../images/contact.jpg`),
    category: 'Coding',
    title: 'How to be a great coder',
    desc: 'We must join the next coding wave',
    views: '1.5',
    comments: '10',
  },
  {
    id: nanoid(),
    image: require(`../images/landing.jpg`),
    category: 'History',
    title: 'When the smoke is coming down',
    desc: 'I love the sweet taste of the aroma on the 90s',
    views: '2.0',
    comments: '8',
  },
  {
    id: nanoid(),
    image: require(`../images/slide-1.jpg`),
    category: '',
    title: 'Mountain and riches in the skies',
    desc:
      'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.',
    views: '3.1',
    comments: '8',
  },
];

function BlogCards() {
  return (
    <section>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {sample.map((item) => (
            <div className="p-4 md:w-1/3" key={item.id}>
              <div className="h-full overflow-hidden rounded-sm shadow-md">
                <Image
                  src={item.image}
                  alt={`Photo of ${item.title}`}
                  unsized
                  className="object-cover object-center w-full lg:h-48 md:h-36"
                />
                <div className="p-6">
                  <h2 className="mb-1 text-xs font-medium tracking-widest text-gray-500 title-font">
                    {item.category}
                  </h2>
                  <h1 className="mb-3 text-lg font-medium text-gray-900 title-font">
                    {item.title}
                  </h1>
                  <p className="mb-3 leading-relaxed">{item.desc}</p>
                  <div className="flex flex-wrap items-center ">
                    <Link href="/">
                      <a className="inline-flex items-center text-green-500 md:mb-2 lg:mb-0">
                        Learn More
                        <svg
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </Link>

                    <span className="inline-flex items-center py-1 pr-3 ml-auto mr-3 text-sm leading-none text-gray-600 border-r-2 border-gray-300 lg:ml-auto md:ml-0">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                      {item.views}K
                    </span>
                    <span className="inline-flex items-center text-sm leading-none text-gray-600">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                      {item.comments}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export { BlogCards };
