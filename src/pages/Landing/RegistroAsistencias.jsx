
import React from 'react';

const RegistroAsistencias = () => {
    return (
        <section className="py-10 bg-white sm:py-16 lg:py-24">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid items-center grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-24">
                    <div className="text-center lg:text-left">
                        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Registro de Alumnos</h2>
                        <p className="mt-6 text-base text-gray-600">Lleva el control de los accesos de los alumnos, sabiendo los días de asistencia y días restantes según el plan contratado.</p>

                        <a href="#" title="" className="inline-flex items-center justify-center px-8 py-4 font-semibold text-white transition-all duration-200 bg-blue-600 rounded-md mt-9 hover:bg-blue-700 focus:bg-blue-700" role="button">Conocé más</a>
                    </div>
                    <div className="relative mx-auto aspect-video max-w-2xl overflow-hidden rounded-xl shadow-2xl lg:max-w-none">
            <img
              src="/dashboard-verificaciones.webp"
              alt="Vista previa del administrador Crossfy para estudios de pilates"
              className="h-full w-full object-cover object-center"
              loading="lazy"
            />
          </div>

                </div>
            </div>
        </section>
    );
}

export default RegistroAsistencias;