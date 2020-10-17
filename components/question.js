import { useState } from 'react';
import { nanoid } from 'nanoid';
import { faqs } from '../data';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

function Question() {
  const [questions, setQuestions] = useState(faqs);
  return (
    <section className="max-w-sm">
      {questions.map((question) => {
        return (
          <SingleQuestion key={question.id} {...question}></SingleQuestion>
        );
      })}
    </section>
  );
}

function SingleQuestion({ title, info }) {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className="px-4 py-4 mb-6 border border-green-500 rounded-md shadow-lg">
      <header className="flex items-center">
        <h4 className="text-base">{title}</h4>
        <button
          className="flex items-center self-center justify-center w-5 h-5 ml-2 text-green-700 bg-transparent bg-green-300 border border-transparent rounded-md cursor-pointer"
          onClick={() => setShowInfo(!showInfo)}
        >
          {showInfo ? (
            <AiOutlineMinus key={nanoid()} />
          ) : (
            <AiOutlinePlus key={nanoid()} />
          )}
        </button>
      </header>

      {showInfo && <p className="my-2 prose">{info}</p>}
    </article>
  );
}

export { Question };
