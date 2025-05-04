import React from "react";
import Carousel from "../../components/Carousel";

const Hero = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    console.log("Email enviado:", email);
    // Aquí puedes agregar la lógica para enviar el email
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Fondo de imagen - Añade tu imagen aquí */}
      <div className="absolute inset-0 z-0">
        <img
          src="/bg-hero-02.webp" // Reemplaza con la ruta de tu imagen
          alt="Fondo del hero"
          className="object-cover object-center"
        />
        {/* Capa oscura para mejorar legibilidad del texto */}
        {/* <div className="absolute inset-0 bg-black/30"></div> */}
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-between px-4 py-8 sm:px-6 lg:flex-row lg:items-center lg:px-8 lg:py-0">
        {/* Sección de texto */}
        <div className="order-2 w-full max-w-2xl flex-1 py-8 lg:order-1 lg:py-0 lg:pr-8">
          <h1 className="text-3xl font-bold leading-tight text-slate-800 sm:text-4xl md:text-5xl lg:text-6xl lg:leading-[1.2]">
            El Software para Estudio de Pilates más completo
          </h1>

          <p className="mt-6 text-lg text-slate-800 sm:text-xl">
            Lleva la gestión integral de tu centro de pilates. Una solución
            diseñada a medida.
          </p>

          {/* Formulario */}
          <form onSubmit={handleSubmit} className="mt-8">
            <h2 className="text-lg font-medium text-slate-900">Pedí la demo</h2>
            <div className="mt-4 flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-3">
              <input
                type="email"
                name="email"
                required
                className="flex-1 rounded-lg border-2 border-gray-300 bg-white/90 px-4 py-3 text-base focus:border-slate-950 focus:outline-none focus:ring-2 focus:ring-blue-200"
                placeholder="tucorreo@ejemplo.com"
              />
              <button
                type="submit"
                className="cursor-pointer rounded-lg bg-slate-950 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:px-8"
              >
                Recibí la demo
              </button>
            </div>
          </form>
          <Carousel />
        </div>

        {/* Sección de imagen */}
        <div className="order-1 w-full flex-1 ">
          <div className="relative ">
            <img
              src="/dashboard-gass-effect.webp"
              alt="Vista previa del administrador Crossfy para estudios de pilates"
              className="max-w-[750px] max-h-[500px] w-auto h-auto"
              loading="lazy"
            />
            {/* <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent mix-blend-overlay"></div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
