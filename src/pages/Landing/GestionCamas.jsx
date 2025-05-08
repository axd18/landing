import React from "react";

const GestionCamas = () => {
  return (
    <section className="py-10 bg-white sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid items-center grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-24">
          <div className="relative mx-auto aspect-video max-w-2xl overflow-hidden rounded-xl shadow-2xl lg:max-w-none">
            <img
              src="/dashboard-gestion-camas.webp"
              alt="Vista previa del administrador Crossfy para estudios de pilates"
              className="h-full w-full object-cover object-center"
              loading="lazy"
            />
          </div>

          <div className="text-left lg:text-left">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Gestioná las camas
            </h2>
            <p className="mt-6 mb-12 text-2xl text-gray-600">
              Gestiona la ocupación de las camas, revisa de manera sencilla
              cuales están libres y cuales ocupadas.
            </p>
            {/* Bullet Points */}
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {/* Bullet 1 */}
              <div className="flex items-start mb-10">
                <div className="flex-shrink-0 w-8 h-8 rounded-md bg-purple-200 flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="ml-3 text-md text-gray-700">
                  <span className="font-bold">Control en tiempo real:</span>{" "}
                  Visualiza qué camas están ocupadas, reservadas o libres desde
                  cualquier dispositivo.
                </p>
              </div>

              {/* Bullet 2 */}
              <div className="flex items-start mb-10">
                <div className="flex-shrink-0 w-8 h-8 rounded-md bg-green-200 flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="ml-3 text-md text-gray-700">
                  <span className="font-bold">Reduce errores:</span> Elimina los
                  agendamientos manuales y los problemas de "cama ya ocupada".
                </p>
              </div>

              {/* Bullet 3 */}
              <div className="flex items-start mb-10">
                <div className="flex-shrink-0 w-8 h-8 rounded-md bg-amber-200 flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="ml-3 text-md text-gray-700">
                  <span className="font-bold">Clientes satisfechos:</span>{" "}
                  Permite que reserven fácilmente (web/app) y reciban
                  recordatorios automáticos.
                </p>
              </div>

              {/* Bullet 4 */}
              <div className="flex items-start mb-10">
                <div className="flex-shrink-0 w-8 h-8 rounded-md bg-sky-200 flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="ml-3 text-md text-gray-700">
                  <span className="font-bold">Reduce errores:</span> Identifica
                  horarios pico y distribuye mejor las sesiones.
                </p>
              </div>
            </div>

            <a
              href="#"
              title=""
              className="flex items-center justify-center w-full px-8 py-4 font-semibold text-white transition-all duration-200 bg-slate-950 rounded-md mt-9 hover:bg-slate-700 focus:bg-slate-700 md:inline-flex md:w-auto"
              role="button"
            >
            Optimizar mi centro de Pilates
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GestionCamas;
