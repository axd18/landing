import React from "react";
import helpSections from "@/data/helpSections.json";

const HelpPage = () => {
  const handleScroll = (id) => (e) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-slate-200">
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
            <HelpSection 
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
    className={`scroll-mt-20 ${!isFirst ? 'mt-28' : ''}`}
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