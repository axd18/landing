import React, { useRef, useState } from "react";
import { sendForm } from "@emailjs/browser";
import { useInView } from 'react-intersection-observer';

const GestionCamas = () => {
    const form = useRef();
    const [isSending, setIsSending] = useState(false);
    const [message, setMessage] = useState({ text: "", isError: false });

    // Hook para la animación de la imagen
    const { ref: imageRef, inView: imageIsVisible } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    // Hook para la animación del contenido (texto y formulario)
    const { ref: contentRef, inView: contentIsVisible } = useInView({
        triggerOnce: true,
        threshold: 0.1,
        // Un pequeño retraso para que aparezca después de la imagen
        delay: 200, 
    });

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
        <section className="py-10 bg-white sm:py-16 lg:py-24 overflow-hidden">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid items-center grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-24">
                    
                    {/* Columna de la Imagen con Animación */}
                    <div
                        ref={imageRef}
                        className={`transform transition-all duration-700 ease-in-out ${
                            imageIsVisible 
                                ? 'opacity-100 translate-x-0 blur-0' 
                                : 'opacity-0 -translate-x-10 blur-sm'
                        }`}
                    >
                        <img
                            src="/dashboard-gestion-camas.webp"
                            alt="Vista previa del administrador"
                            className="rounded-xl shadow-2xl" // Sombra más pronunciada
                            loading="lazy"
                        />
                    </div>

                    {/* Columna del Contenido con Animación */}
                    <div
                        ref={contentRef}
                        className={`text-left lg:text-left transform transition-all duration-700 ease-in-out ${
                            contentIsVisible 
                                ? 'opacity-100 translate-x-0 blur-0' 
                                : 'opacity-0 translate-x-10 blur-sm'
                        }`}
                    >
                        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                            Gestioná las camas
                        </h2>
                        <p className="mt-6 mb-12 text-2xl text-gray-600">
                            Gestiona la ocupación de las camas, revisa de manera sencilla
                            cuales están libres y cuales ocupadas.
                        </p>
                        
                        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                            {/* Bullet 1 */}
                            <div className="flex items-start mb-10 transform transition-transform duration-300 hover:scale-105">
                                <div className="flex-shrink-0 w-8 h-8 rounded-md bg-purple-200 flex items-center justify-center shadow-md">
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <p className="ml-3 text-md text-gray-700">
                                    <span className="font-bold">Control en tiempo real:</span> Visualiza qué camas están ocupadas, reservadas o libres desde cualquier dispositivo.
                                </p>
                            </div>

                            {/* Bullet 2 */}
                            <div className="flex items-start mb-10 transform transition-transform duration-300 hover:scale-105">
                                <div className="flex-shrink-0 w-8 h-8 rounded-md bg-green-200 flex items-center justify-center shadow-md">
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <p className="ml-3 text-md text-gray-700">
                                    <span className="font-bold">Reduce errores:</span> Elimina los agendamientos manuales y los problemas de "cama ya ocupada".
                                </p>
                            </div>

                            {/* Bullet 3 */}
                            <div className="flex items-start mb-10 transform transition-transform duration-300 hover:scale-105">
                                <div className="flex-shrink-0 w-8 h-8 rounded-md bg-amber-200 flex items-center justify-center shadow-md">
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <p className="ml-3 text-md text-gray-700">
                                    <span className="font-bold">Clientes satisfechos:</span> Permite que reserven fácilmente (web/app) y reciban recordatorios automáticos.
                                </p>
                            </div>

                            {/* Bullet 4 */}
                            <div className="flex items-start mb-10 transform transition-transform duration-300 hover:scale-105">
                                <div className="flex-shrink-0 w-8 h-8 rounded-md bg-sky-200 flex items-center justify-center shadow-md">
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <p className="ml-3 text-md text-gray-700">
                                    <span className="font-bold">Optimiza recursos:</span> Identifica horarios pico y distribuye mejor las sesiones.
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
                                    className="flex-1 rounded-lg border-2 border-gray-300 bg-white/90 px-4 py-3 text-base shadow-sm transition-shadow focus:border-slate-950 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:shadow-md"
                                    placeholder="tucorreo@ejemplo.com"
                                    disabled={isSending}
                                />
                                <button
                                    type="submit"
                                    disabled={isSending}
                                    className={`cursor-pointer rounded-lg bg-slate-950 px-6 py-3 text-base font-medium text-white shadow-md transition-all hover:bg-slate-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:px-8 ${
                                        isSending ? "opacity-70 cursor-not-allowed" : ""
                                    }`}
                                >
                                    {isSending ? "Enviando..." : "Recibí la demo"}
                                </button>
                            </div>
                            {message.text && (
                                <p className={`mt-3 text-sm ${message.isError ? "text-red-600" : "text-green-600"}`}>
                                    {message.text}
                                </p>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GestionCamas;