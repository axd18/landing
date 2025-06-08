// src/pages/Landing/Hero.jsx
import React, { useRef, useState } from "react";
import Carousel from "../../components/Carousel"; // Asumiendo que tienes este componente
import { sendForm } from "@emailjs/browser";
import InteractiveBackground from "../../components/InteractiveBackground;"; // Importamos nuestro nuevo componente

const Hero = () => {
    const form = useRef();
    const [isSending, setIsSending] = useState(false);
    const [message, setMessage] = useState({ text: "", isError: false });

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSending(true);
        setMessage({ text: "", isError: false });
        sendForm("service_uvp3zfp", "template_4kw8ogd", form.current, "TPkXvgu0fzO4vU7Hx")
            .then(() => {
                setMessage({ text: "¡Demo solicitada con éxito! Te contactaremos pronto.", isError: false });
                form.current.reset();
            })
            .catch(() => {
                setMessage({ text: "Error al enviar la solicitud. Por favor intenta nuevamente.", isError: true });
            })
            .finally(() => {
                setIsSending(false);
            });
    };

    return (
        <div className="relative min-h-screen w-full">
            <InteractiveBackground imageUrl="/bg-hero-02.webp">
                
                {/* Todo el contenido se renderiza como "hijo" del fondo interactivo */}
                <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col px-4 py-8 sm:px-6 lg:flex-row lg:items-center lg:px-8 gap-8">
                    
                    <div className="w-full lg:w-1/2 flex flex-col justify-center">
                        <div className="mb-8 block lg:hidden opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                            <img src="/img-hero-desktop.webp" alt="Mobile preview" className="w-full h-auto object-contain" loading="lazy" />
                        </div>

                        <h1 
                            className="text-4xl font-bold text-slate-800 md:text-5xl lg:text-6xl lg:leading-[1.2] opacity-0 animate-fade-in-up" 
                            style={{ animationDelay: '0.2s' }}
                        >
                            El Software para Estudio de Pilates más completo
                        </h1>

                        <p 
                            className="mt-6 text-lg text-slate-800 opacity-0 animate-fade-in-up"
                            style={{ animationDelay: '0.4s' }}
                        >
                            Lleva la gestión integral de tu centro de pilates. Una solución diseñada a medida.
                        </p>

                        <form 
                            ref={form} 
                            onSubmit={sendEmail} 
                            className="mt-8 opacity-0 animate-fade-in-up"
                            style={{ animationDelay: '0.6s' }}
                        >
                            <h2 className="text-lg font-medium text-slate-900">Pedí la demo</h2>
                            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    className="flex-1 rounded-lg border-2 border-gray-300 bg-white/90 px-4 py-3 shadow-sm focus:border-slate-950 focus:outline-none focus:ring-2 focus:ring-blue-200"
                                    placeholder="tucorreo@ejemplo.com"
                                    disabled={isSending}
                                />
                                <button
                                    type="submit"
                                    disabled={isSending}
                                    className={`rounded-lg bg-slate-950 px-6 py-3 font-medium text-white shadow-md transition-all hover:bg-slate-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                                        isSending ? "opacity-70 cursor-not-allowed" : ""
                                    }`}
                                >
                                    {isSending ? "Enviando..." : "Recibí la demo"}
                                </button>
                            </div>
                            {message.text && (
                                <p className={`mt-3 text-sm ${message.isError ? "text-red-600" : "text-green-600"}`}>{message.text}</p>
                            )}
                        </form>

                        <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
                            <Carousel />
                        </div>
                    </div>

                    <div 
                        className="hidden lg:flex lg:w-1/2 lg:items-center lg:justify-center opacity-0 animate-fade-in-up"
                        style={{ animationDelay: '0.5s' }}
                    >
                        <img
                            src="/img-hero-desktop.webp"
                            alt="Admin dashboard preview"
                            className="w-full max-w-none h-auto max-h-[90vh] object-contain"
                            loading="lazy"
                        />
                    </div>
                </div>
                
            </InteractiveBackground>
        </div>
    );
};

export default Hero;