import React from "react";

const HelpPage = () => {
  // IDs para las secciones de anclaje
  const sections = [
    { id: "agregar-cliente", title: "Cómo agregar un cliente" },
    { id: "agregar-actividad", title: "Cómo agregar una actividad" },
    { id: "agregar-profesor", title: "Cómo agregar un profesor" }
  ];

  return (
    <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-slate-200">
      <div className="flex justify-between px-4 mx-auto max-w-screen-xl">
        <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
          <header className="mb-4 lg:mb-6 not-format">
            <h1 className="text-3xl font-bold leading-tight text-slate-700 lg:mb-6 lg:text-4xl">
              Ayuda
            </h1>
            <h2 className="font-regular mb-12 text-xl">Videos cortos que te guían paso a paso de forma fácil y rápida.</h2>
          </header>
          
          {/* Menú de enlaces ancla */}
          <div className="mb-24 mt-12 text-l">
            <ul className="space-y-1">
              {sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="text-blue-600 hover:underline dark:text-blue-500"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById(section.id)?.scrollIntoView({
                        behavior: 'smooth'
                      });
                    }}
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Sección de agregar cliente */}
          <section id="agregar-cliente" className="scroll-mt-20">
            <h2 className="mb-4 text-3xl font-bold leading-tight text-slate-700 lg:mb-6 lg:text-4xl">
              Cómo agregar un cliente
            </h2>
            <div className="my-6">
              <video
                src="/agregar-cliente.mp4"
                alt="Video tutorial: Cómo agregar un cliente"
                className="w-full rounded-lg shadow-md"
                controls
              />
            </div>
          </section>

          {/* Sección de agregar actividad */}
          <section id="agregar-actividad" className="scroll-mt-20 mt-28">
            <h2 className="mb-4 text-3xl font-bold leading-tight text-slate-700 lg:mb-6 lg:text-4xl">
              Cómo agregar una actividad
            </h2>
            <div className="my-6">
              <video
                src="/agregar-actividad.mp4"
                alt="Video tutorial: Cómo agregar una actividad"
                className="w-full rounded-lg shadow-md"
                controls
              />
            </div>
          </section>

          {/* Sección de agregar profesor */}
          <section id="agregar-profesor" className="scroll-mt-20 mt-28">
            <h2 className="mb-4 text-3xl font-bold leading-tight text-slate-700 lg:mb-6 lg:text-4xl">
              Cómo agregar un profesor
            </h2>
            <div className="my-6">
              <video
                src="/agregar-profe.mp4"
                alt="Video tutorial: Cómo agregar un profesor"
                className="w-full rounded-lg shadow-md"
                controls
              />
            </div>
          </section>
        </article>
      </div>
    </main>
  );
};

export default HelpPage;