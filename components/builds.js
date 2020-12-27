import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@reach/tabs';
import Link from 'next/link';
import { nanoid } from 'nanoid';
import projects from '../data/project/projects.json';

const projectNames = [
  {
    projectName: 'FrontLine Removals AU',
  },
  {
    projectName: 'Pacific Blue AU',
  },
  {
    projectName: 'Moda Latina AU',
  },
  {
    projectName: 'Blue Cow Gelato AU',
  },
  {
    projectName: 'JMC Limited',
  },
  {
    projectName: 'React Cebu',
  },
  {
    projectName: 'Hats E-Commerce Store',
  },
  {
    projectName: 'GLF Online AU',
  },
];

function Builds() {
  return (
    <article className="w-screen px-4" id="#projects">
      <div className="flex flex-col items-center justify-center border-t border-gray-300">
        <h2 className="px-1 py-1 mt-12 text-4xl font-bold text-center font-architects">
          Projects
        </h2>
        <p className="my-4 mb-10 text-lg md:max-w-xl">
          Click on the tabs below to see my contribution to various professional
          projects. I am also open to contributing into interesting open source
          projects.
        </p>
        <Tabs
          orientation="vertical"
          className="flex w-full max-w-5xl mx-auto overflow-x-auto border rounded-none"
        >
          <TabList className="flex flex-col justify-start flex-shrink-0 w-32 bg-white border-r divide-y rounded-l-lg md:w-64">
            {projectNames.map((item) => (
              <Tab
                key={nanoid()}
                className="w-full px-6 py-4 font-bold text-left"
              >
                {item.projectName}
              </Tab>
            ))}
          </TabList>
          <TabPanels className="flex flex-1">
            {projects.map((item) => (
              <TabPanel
                key={nanoid()}
                className="flex-1 p-8 pt-12 focus:outline-none focus:shadow-outline rounded-r-md"
              >
                <h3 className="heading-1">{item.name}</h3>
                <div className="mt-4 prose">{item.description}</div>
                <Link href={item.url}>
                  <a className="my-4 underline">{item.url}</a>
                </Link>
                <div className="grid gap-4 mt-6 md:grid-cols-2">
                  <div className="prose">
                    <dl className="space-y-6">
                      {item.productivity.map((prod) => (
                        <div key={nanoid()}>
                          <dt className="font-extrabold text-black uppercase">
                            {prod.tools}
                          </dt>
                          {prod.order.map((p) => (
                            <dd key={nanoid()} className="capitalize">
                              {p.name}
                            </dd>
                          ))}
                        </div>
                      ))}

                      {item.technologies.map((tech) => (
                        <div key={nanoid()}>
                          <dt className="font-extrabold text-black uppercase">
                            {tech.techno}
                          </dt>
                          <dd>
                            {tech.order.map((t) => (
                              <ul key={nanoid()} style={{ margin: '0px' }}>
                                <li className="capitalize">{t.name}</li>
                              </ul>
                            ))}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                  <div className="overflow-hidden rounded-none">
                    <Picture path={item.image1} alt={item.name} />
                    <Picture path={item.image2} alt={item.name} />
                  </div>
                </div>
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      </div>
    </article>
  );
}

function Picture({ path, title }) {
  return (
    <div className="relative h-0 aspect-ratio-square">
      <picture>
        <source srcSet={require(`../images/${path}?webp`)} type="image/webp" />
        <source srcSet={require(`../images/${path}`)} type="image/jpeg" />
        <img
          src={require(`../images/${path}`)}
          alt={title}
          className="flex-1"
        />
      </picture>
    </div>
  );
}

export { Builds };
