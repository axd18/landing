import React, { useState, useEffect } from "react";
// import helpSections from "@/data/helpSections.json";

const HelpPage = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  const handleScroll = (id) => (e) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  const helpSections = [
    {
      "id": "agregar-cliente",
      "title": "Cómo agregar un cliente",
      "videoSrc": "/agregar-cliente.mp4",
      "altText": "Video tutorial: Cómo agregar un cliente"
    },
    {
      "id": "agregar-actividad",
      "title": "Cómo agregar una actividad",
      "videoSrc": "/agregar-actividad.mp4",
      "altText": "Video tutorial: Cómo agregar una actividad"
    },
    {
      "id": "agregar-profesor",
      "title": "Cómo agregar un profesor",
      "videoSrc": "/agregar-profe.mp4",
      "altText": "Video tutorial: Cómo agregar un profesor"
    },
    {
      "id": "cargar-horas",
      "title": "Cómo cargar horas y montos de los profesores",
      "videoSrc": "#",
      "altText": "Video tutorial: Cómo cargar horas y montos"
    },
    {
        "id": "asignar-espacio-yoga",
        "title": "Asignar un espacio para la clase de yoga",
        "videoSrc": "/asignar-espacio-yoga.mp4",
        "altText": "Video tutorial: Asignar un espacio para la clase de yoga"
      },
      {
        "id": "asignar-espacio-stretching",
        "title": "Asignar un espacio para la clase de stretching",
        "videoSrc": "/asignar-espacio-stretching.mp4",
        "altText": "Video tutorial: Asignar un espacio para la clase de stretching"
      },
      {
        "id": "asignar-espacio-jumping",
        "title": "Asignar un espacio para la clase de jumping trump",
        "videoSrc": "/asignar-espacio-jumping.mp4",
        "altText": "Video tutorial: Asignar un espacio para la clase de jumping trump"
      },
      {
        "id": "asignar-espacio-funcional",
        "title": "Asignar un espacio para la clase de funcional",
        "videoSrc": "/asignar-espacio-funcional.mp4",
        "altText": "Video tutorial: Asignar un espacio para la clase de funcional"
      },
      {
        "id": "asignar-espacio-boxeo",
        "title": "Asignar un espacio para la clase de boxeo",
        "videoSrc": "/asignar-espacio-boxeo.mp4",
        "altText": "Video tutorial: Asignar un espacio para la clase de boxeo"
      },
      {
        "id": "asignar-espacio-gap",
        "title": "Asignar un espacio para la clase de gap",
        "videoSrc": "/asignar-espacio-gap.mp4",
        "altText": "Video tutorial: Asignar un espacio para la clase de gap"
      },
      {
        "id": "asignar-espacio-jujitsu",
        "title": "Asignar un espacio para la clase de jujitsu",
        "videoSrc": "/asignar-espacio-jujitsu.mp4",
        "altText": "Video tutorial: Asignar un espacio para la clase de jujitsu"
      },
      {
        "id": "asignar-espacio-kickboxing",
        "title": "Asignar un espacio para la clase de kickboxing",
        "videoSrc": "/asignar-espacio-kickboxing.mp4",
        "altText": "Video tutorial: Asignar un espacio para la clase de kickboxing"
      },
      {
        "id": "editar-actividades",
        "title": "Editar actividades",
        "videoSrc": "/editar-actividades.mp4",
        "altText": "Video tutorial: Editar actividades"
      }
  ]

  return (
    <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-slate-200 relative">
      {/* Botón de scroll arriba */}
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 bg-blue-600 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 animate-bounce cursor-pointer"
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

      <div className="flex justify-between px-4 mx-auto max-w-screen-xl">
        <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
          <header className="mb-4 lg:mb-6 not-format">
            <h1 className="text-3xl font-bold leading-tight text-slate-700 lg:mb-6 lg:text-4xl">
              Ayuda
            </h1>
            <h2 className="font-regular mb-12 text-xl">
              Videos cortos que te guían paso a paso de forma fácil y rápida.
            </h2>
          </header>

          <SectionLinks sections={helpSections} handleScroll={handleScroll} />

          {helpSections.map((section, index) => (
            <HelpSection  // Corregido: Debe ser HelpSection con mayúscula
              key={section.id}
              section={section}
              isFirst={index === 0}
            />
          ))}
        </article>
      </div>
    </main>
  );
};

// Componente para los enlaces de sección
const SectionLinks = ({ sections, handleScroll }) => (
  <div className="mb-24 mt-12 text-l">
    <ul className="space-y-1">
      {sections.map((section) => (
        <li key={section.id}>
          <a
            href={`#${section.id}`}
            className="text-blue-600 hover:underline dark:text-blue-500"
            onClick={handleScroll(section.id)}
          >
            {section.title}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

// Componente para cada sección de ayuda
const HelpSection = ({ section, isFirst }) => (
  <section
    id={section.id}
    className={`scroll-mt-20 ${!isFirst ? "mt-28" : ""}`}
  >
    <h2 className="mb-4 text-xl font-bold leading-tight text-slate-700 lg:mb-6 lg:text-2xl">
      {section.title}
    </h2>
    <div className="my-6">
      <video
        src={section.videoSrc}
        alt={section.altText}
        className="w-full rounded-lg shadow-md"
        controls
      />
    </div>
  </section>
);

export default HelpPage;