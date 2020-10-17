import { Layout, SEO, Question } from '../components';

export default function Faqs() {
  return (
    <Layout>
      <SEO title="faqs" />
      <div className="px-4 bg-white sm:px-6 lg:px-8">
        <div className="py-8 mx-auto">
          <div className="relative flex flex-col items-center justify-center mx-auto mt-2">
            <h2 className="my-4 text-2xl font-bold uppercase font-architects">
              Questions
            </h2>
            <Question />
          </div>
        </div>
      </div>
    </Layout>
  );
}
