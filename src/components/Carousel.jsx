import React from "react";

const Carousel = () => {
  // Array de logos (reemplaza con tus imágenes)
  const logos = [
    { id: 1, src: "/logos/logo1.webp", alt: "Logo 1" },
    // { id: 2, src: "/logos/logo2.webp", alt: "Logo 2" },
    // { id: 3, src: "/logos/logo3.webp", alt: "Logo 3" },
    // { id: 4, src: "/logos/logo4.webp", alt: "Logo 4" },
    // { id: 5, src: "/logos/logo1.webp", alt: "Logo 5" },
    // { id: 6, src: "/logos/logo2.webp", alt: "Logo 6" },
  ];

  return (
    <div className="relative w-full overflow-hidden">
      {/* Sección "Ya confían en nosotros" */}
      <div className="relative z-10 py-8 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-md font-medium text-slate-900">
            Ya confían en nosotros
          </h2>

          {/* Carrusel de logos */}
          <div className="relative overflow-hidden">
            {/* Efecto de desvanecimiento en los bordes */}
            {/* <div className="absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-white to-transparent"></div>
            <div className="absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-white to-transparent"></div> */}

            {/* Carrusel animado */}
            <div className="animate-infinite-scroll flex items-center">
              {/* Primera pasada */}
              {logos.map((logo) => (
                <div key={logo.id} className="flex-shrink-0">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-8 object-contain opacity-80 transition-opacity hover:opacity-100 sm:h-20"
                    loading="lazy"
                  />
                </div>
              ))}
              {/* Segunda pasada (para el efecto continuo) */}
              {logos.map((logo) => (
                <div key={`${logo.id}-copy`} className="flex-shrink-0">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-16 object-contain opacity-80 transition-opacity hover:opacity-100 sm:h-20"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
