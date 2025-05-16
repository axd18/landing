import React, { useRef, useState } from "react";
import { sendForm } from "@emailjs/browser";

const RegistroAsistencias = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [message, setMessage] = useState({ text: "", isError: false });

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setMessage({ text: "", isError: false });

    sendForm(
      "service_uvp3zfp",
      "template_4kw8ogd",
      form.current,
      "TPkXvgu0fzO4vU7Hx"
    )
      .then(
        (result) => {
          console.log(result.text);
          setMessage({
            text: "¡Demo solicitada con éxito! Te contactaremos pronto.",
            isError: false,
          });
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setMessage({
            text: "Error al enviar la solicitud. Por favor intenta nuevamente.",
            isError: true,
          });
        }
      )
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <section className="py-10 bg-white sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid items-center grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-24">
          <div className="text-left lg:text-left">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Registro de Asistencias
            </h2>
            <p className="mt-6 text-2xl text-gray-600 mb-12">
              Lleva el control de los accesos de los alumnos, sabiendo los días
              de asistencia y días restantes según el plan contratado.
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
                  <span className="font-bold">
                    {" "}
                    Automatiza el registro de asistencia:
                  </span>{" "}
                  Evita pérdidas por clases sin usar. Todo en un solo lugar, sin
                  planillas ni cálculos manuales.
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
                  <span className="font-bold">Alertas inteligentes:</span>Avisa
                  a los clientes cuando les queden pocas clases (¡para que no
                  dejen de renovar!).
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
                  <span className="font-bold">Reportes claros:</span> Identifica
                  patrones (¿quién falta frecuentemente? ¿qué horarios tienen
                  más ausencias?).
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

            <form ref={form} onSubmit={sendEmail} className="mt-8">
              <h2 className="text-lg font-medium text-slate-900">
                Pedí la demo
              </h2>
              <div className="mt-4 flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-3">
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="tucorreo@ejemplo.com"
                  disabled={isSending}
                  className="flex-1 rounded-lg border-2 border-gray-300 bg-white/90 px-4 py-3 text-base focus:border-slate-950 focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
                <button
                  type="submit"
                  disabled={isSending}
                  className={`cursor-pointer rounded-lg bg-slate-950 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:px-8
                    ${isSending ? "opacity-70 cursor-not-allowed" : ""}`}
                >
                  {isSending ? "Enviando..." : "Recibí la demo"}
                </button>
              </div>
              {message.text && (
                <p
                  className={`mt-3 text-sm ${
                    message.isError ? "text-red-600" : "text-green-600"
                  }`}
                >
                  {message.text}
                </p>
              )}
            </form>
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
};

export default RegistroAsistencias;
