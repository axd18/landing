import React from "react";

// import './App.css'

const HelpPage = () => {
  return (
    <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-slate-200 ">
      <div className="flex justify-between px-4 mx-auto max-w-screen-xl">
        <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
          <header className="mb-4 lg:mb-6 not-format">
            <h1 className=" text-3xl font-bold leading-tight text-slate-700 lg:mb-6 lg:text-4xl">
              Ayuda
            </h1>
          </header>
            <div className="mb-42 mt-12 text-xl">
              <h2>
                <a
                  href="https://flowbite.com"
                  className="text-blue-600 hover:underline dark:text-blue-500"
                >
                  Cómo agregar un cliente
                </a>
              </h2>
              <h2>
                <a
                  href="https://flowbite.com"
                  className="text-blue-600 hover:underline dark:text-blue-500"
                >
                  Cómo agregar una actividad
                </a>
              </h2>
              <h2>
                <a
                  href="https://flowbite.com"
                  className="text-blue-600 hover:underline dark:text-blue-500"
                >
                  Cómo agregar una profesor
                </a>
              </h2>
            </div>
          <h2 className="mb-4 text-3xl font-bold leading-tight text-slate-700 lg:mb-6 lg:text-4xl">
            Cómo agregar un cliente
          </h2>

          <div className="my-6">
            <video
              // src="https://flowbite.s3.amazonaws.com/typography-plugin/typography-image-1.png"
              src="/agregar-cliente.mp4"
              alt="Digital art"
              className="w-full rounded-lg"
              controls
            /> 
          </div>

          <h2 className="mb-4 mt-28 text-3xl font-bold leading-tight text-slate-700 lg:mb-6 lg:text-4xl">
            Cómo agregar una actividad
          </h2>

          <div className="my-6">
            <video
              // src="https://flowbite.s3.amazonaws.com/typography-plugin/typography-image-1.png"
              src="/agregar-actividad.mp4"
              alt="Digital art"
              className="w-full rounded-lg"
              controls
            />
          </div>

          <h2 className="mb-4 mt-28 text-3xl font-bold leading-tight text-slate-700 lg:mb-6 lg:text-4xl">
            Cómo agregar una profesor
          </h2>

          {/* <p className="lead ">Pasos para agregar una actividad. En el panel ir a Nuevo actividad, ir a la tarjeta roja y hacer click en "Crear ahora". Se abre el formulario para completar los datos DNI, nombre, correo electrónico, dirección y teléfono. Una vez completado, guardás y listo.
       </p> */}

          <div className="my-6">
            <video
              // src="https://flowbite.s3.amazonaws.com/typography-plugin/typography-image-1.png"
              src="/agregar-profe.mp4"
              alt="Digital art"
              className="w-full rounded-lg"
              controls
            />
          </div>

          
        </article>
      </div>
    </main>
  );
};

export default HelpPage;
