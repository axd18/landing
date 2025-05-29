import React, { useState, useEffect } from "react";

const HelpPage = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const checkScroll = () => setShowScrollButton(window.scrollY > 300);
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const helpSections = [
    {
      id: "agregar-cliente",
      title: "Cómo agregar un cliente",
      youtubeUrl: "https://www.youtube.com/embed/SRu9xaOwR00",
    },
    {
      id: "agregar-actividad",
      title: "Cómo agregar una actividad",
      youtubeUrl: "https://www.youtube.com/embed/mKASOKlAU88",
    },
    {
      id: "agregar-profesor",
      title: "Cómo agregar un profesor",
      youtubeUrl: "https://www.youtube.com/embed/RDlvOfHHjYU",
    },
    {
      id: "asignar-espacio-yoga",
      title: "Asignar un espacio para la clase de yoga",
      youtubeUrl: "https://www.youtube.com/embed/kV1wLH9h6ok",
    },
    {
      id: "asignar-espacio-yoga",
      title: "Asignar un espacio para la clase de yoga",
      youtubeUrl: "https://www.youtube.com/embed/kV1wLH9h6ok",
    },
    {
      id: "asignar-espacio-stretching",
      title: "Asignar un espacio para streching",
      youtubeUrl: "https://www.youtube.com/embed/Ti-8NFcfsWs",
    },
    {
      id: "asignar-espacio-jumping",
      title: "Asignar un espacio para jumping",
      youtubeUrl: "https://www.youtube.com/embed/rNG_CVDOmrQ",
    },
    {
      id: "asignar-espacio-funcional",
      title: "Asignar un espacio para funcional",
      youtubeUrl: "https://www.youtube.com/embed/hsCgsbqHpzc",
    },
    {
      id: "asignar-espacio-boxeo",
      title: "Asignar un espacio para boxeo",
      youtubeUrl: "https://www.youtube.com/embed/nJesfN1KaFA",
    },
    {
      id: "asignar-espacio-gap",
      title: "Asignar un espacio para GAP",
      youtubeUrl: "https://www.youtube.com/embed/ab8EXpvSKFE",
    },
    {
      id: "signar-espacio-jujitsu",
      title: "Asignar un espacio para Jujitsu",
      youtubeUrl: "https://www.youtube.com/embed/4WCl67AzKRA",
    },
    {
      id: "signar-espacio-kickboxing",
      title: "Asignar un espacio para kickboxing",
      youtubeUrl: "https://www.youtube.com/embed/6TjtceH-bm8",
    },
    {
      id: "editar-actividades",
      title: "Editar actividades",
      youtubeUrl: "https://www.youtube.com/embed/cIwTg4IEiWw",
    },
  ];

  return (
    <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-slate-200 relative">
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 bg-blue-600 rounded-full shadow-lg hover:bg-blue-700 transition-all animate-bounce cursor-pointer"
          aria-label="Volver arriba"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}

      <div className="px-4 mx-auto max-w-screen-xl">
        <header className="mb-12 text-center">
          <h1 className="text-3xl font-bold text-slate-700 lg:text-4xl mb-4">
            Ayuda
          </h1>
          <p className="text-xl text-slate-600">
            Videos cortos que te guían paso a paso de forma fácil y rápida.
          </p>
        </header>

        <SectionLinks sections={helpSections} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          {helpSections.map((section) => (
            <HelpSection key={section.id} section={section} />
          ))}
        </div>
      </div>
    </main>
  );
};

const SectionLinks = ({ sections }) => (
  <nav className="text-center mt-12 stroke-2 stroke-black">
    <ul className="flex flex-wrap justify-start gap-4 stroke-2">
      {sections.map((section) => (
        <li key={section.id}>
          <a
            href={`#${section.id}`}
            className="inline-block px-4 py-2 rounded-full text-gray-700
 stroke-3 font-medium transition-colors hover:bg-gray-700 hover:text-white"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById(section.id)?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            {section.title}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

const HelpSection = ({ section }) => (
  <section id={section.id} className="scroll-mt-20">
    <h2 className="mb-4 text-xl font-bold text-slate-700">{section.title}</h2>
    <div className="rounded-lg overflow-hidden shadow-md">
      <iframe
        src={section.youtubeUrl}
        title={section.title}
        className="w-full h-[215px] md:h-[360px]"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  </section>
);

export default HelpPage;
