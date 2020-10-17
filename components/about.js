function About() {
  return (
    <article className="relative">
      <div className="w-full px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid justify-center gap-6 md:grid-cols-2">
          <div className="w-full mx-auto max-w-prose">
            <div className="relative h-0 aspect-ratio-4/3">
              <div className="absolute inset-0 flex">
                <img
                  src="/about.jpg"
                  alt="About"
                  className="flex-1 rounded-md"
                />
              </div>
            </div>
          </div>
          <div className="md:py-12">
            <h2 className="px-1 py-1 text-4xl font-bold text-center bg-green-300 rounded-sm  font-architects">
              Our Story
            </h2>
            <div className="mt-6 prose">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem,
                reiciendis nobis! Magnam aperiam delectus in facere molestiae
                consequatur error numquam labore autem aliquam, deleniti
                laudantium, facilis quod eveniet corporis officiis?
              </p>
              <p>
                Amet repudiandae non libero consequuntur labore reprehenderit
                modi voluptatem voluptate, ipsa temporibus, impedit saepe.
                Fugiat maxime in sed mollitia quia eveniet, velit, commodi iste
                temporibus dolore inventore facere quasi a!
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla
                porro deserunt quod quis perspiciatis quas ex accusantium sunt
                quaerat! Nobis, totam! Praesentium, temporibus facilis. Facilis
                officia esse maiores suscipit expedita.
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export { About };
