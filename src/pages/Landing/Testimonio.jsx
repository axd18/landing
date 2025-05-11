import React from "react";

const Testimonio = () => {
  return (
    <section className="py-10 bg-white sm:py-16 lg:py-24">
            <h2 className="text-center text-3xl font-bold leading-tight text-slate-950 sm:text-4xl xl:text-5xl font-pj">
              Profesionales que confían en nosotros
            </h2>
      <div className="mt-10 px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid items-center grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-24">
          <div className="relative mx-auto aspect-video max-w-2xl overflow-hidden rounded-xl shadow-2xl lg:max-w-none">
            <img
              src="/2147802522.webp"
              alt="Vista previa del administrador Crossfy para estudios de pilates"
              className="h-full w-full object-cover object-center"
              loading="lazy"
            />
          </div>

          <div className="text-left lg:text-left">
            <p className="mt-6 mb-12 text-2xl text-gray-600 italic">
              “Hemos utilizado varios software y han dejado mucho que desear.
              Hemos magnetizado con ... porque es muy amigable y me motiva a
              organizarme y mantener un orden.”
            </p>
            <p className="text-xl">Meli Santos de Body Balance – Centro de Pilates</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonio;
