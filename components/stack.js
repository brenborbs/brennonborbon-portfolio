import { nanoid } from 'nanoid';
import {
  JavascriptIcon,
  NextIcon,
  ReactIcon,
  GastbyIcon,
  MongoDB,
  NodejsIcon,
  TailwindIcon,
  BootstrapIcon,
  SassIcon,
} from '../components/vectors';

const stack = [
  {
    id: nanoid(),
    icon: JavascriptIcon,
  },
  {
    id: nanoid(),
    icon: ReactIcon,
  },
  {
    id: nanoid(),
    icon: SassIcon,
  },
  {
    id: nanoid(),
    icon: GastbyIcon,
  },
  {
    id: nanoid(),
    icon: NextIcon,
  },
  {
    id: nanoid(),
    icon: BootstrapIcon,
  },
  {
    id: nanoid(),
    icon: NodejsIcon,
  },
  {
    id: nanoid(),
    icon: TailwindIcon,
  },
  {
    id: nanoid(),
    icon: MongoDB,
  },
];

function Stack() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-4 mx-auto">
        <h2 className="px-1 py-1 my-4 text-4xl font-bold text-center font-architects">
          I do my work with the following technologies
        </h2>
        <div className="flex flex-wrap -m-4">
          {stack.map((item) => (
            <div className="p-4 md:w-1/3" key={item.id}>
              <div className="p-4">
                <item.icon className="h-12 mx-auto" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export { Stack };
