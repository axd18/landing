import React from "react";
import FeatureSection from "./FeatureSection";

const LandingPage = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white">
      {/* Contenedor principal */}
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-between px-4 py-8 sm:px-6 lg:flex-row lg:items-center lg:px-8 lg:py-0">
        {/* Sección de texto - Orden cambia en mobile */}
        <div className="order-2 w-full max-w-2xl flex-1 py-8 lg:order-1 lg:py-0 lg:pr-8">
          <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl lg:leading-[1.2]">
            Administrador personalizado, para tu centro de actividad física.
            {/* <br className="hidden sm:inline" /> */}
            
            {/* <br className="hidden sm:inline" /> */}
            
          </h1>

          <p className="mt-6 text-lg text-gray-600 sm:text-xl">
            La solución integral para gestionar tu gimnasio: eficiente,
            adaptable y pensada para potenciar tu negocio.
          </p>

          {/* Formulario */}
          <div className="mt-8">
            <h2 className="text-lg font-medium">Pedí la demo</h2>
            <div className="mt-4 flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-3">
              <input
                type="email"
                className="flex-1 rounded-lg border-2 border-gray-300 bg-white px-4 py-3 text-base focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                placeholder="tucorreo@ejemplo.com"
              />
              <button className="rounded-lg bg-blue-600 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:px-8">
                Recibí la demo
              </button>
            </div>
          </div>

          {/* Redes sociales */}
          <div className="mt-8 flex space-x-6">
            <a
              href="#"
              aria-label="LinkedIn"
              className="text-2xl text-gray-500 hover:text-blue-600"
            >
              <i className="bi bi-linkedin"></i>
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="text-2xl text-gray-500 hover:text-blue-400"
            >
              <i className="bi bi-twitter"></i>
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-2xl text-gray-500 hover:text-pink-600"
            >
              <i className="bi bi-instagram"></i>
            </a>
          </div>
        </div>

        {/* Sección de imagen - Orden cambia en mobile */}
        <div className="order-1 w-full flex-1 lg:order-2 lg:pl-8">
          <div className="relative mx-auto aspect-video max-w-2xl overflow-hidden rounded-xl shadow-2xl lg:max-w-none">
            <img
              src="/dashboard.png"
              alt="Vista previa del administrador"
              className="h-full w-full object-cover object-center"
              loading="lazy"
            />
            {/* Efecto de brillo opcional */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent mix-blend-overlay"></div>
          </div>
        </div>
      </div>
        <FeatureSection />
    </div>
  );
};

export default LandingPage;