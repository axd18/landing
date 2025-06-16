import React from "react";
import { useInView } from 'react-intersection-observer';

const Testimonio = () => {
    // Hook para la animación del título
    const { ref: titleRef, inView: titleIsVisible } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    // Hook para la animación de la columna de la imagen
    const { ref: imageRef, inView: imageIsVisible } = useInView({
        triggerOnce: true,
        threshold: 0.1,
        delay: 200,
    });

    // Hook para la animación de la columna del texto
    const { ref: textRef, inView: textIsVisible } = useInView({
        triggerOnce: true,
        threshold: 0.1,
        delay: 400,
    });

    return (
        <section className="py-10 bg-white sm:py-16 lg:py-24 overflow-hidden">
            <h2
                ref={titleRef}
                className={`text-center text-3xl font-bold leading-tight text-slate-950 sm:text-4xl xl:text-5xl font-pj transition-all duration-700 ease-out ${
                    titleIsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
                }`}
            >
                Profesionales que confían en nosotros
            </h2>
            <div className="mt-16 px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid items-center grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-24">
                    {/* Columna de la Imagen con Animación (sin modificar la forma de mostrar) */}
                    <div
                        ref={imageRef}
                        className={`relative mx-auto aspect-video max-w-2xl overflow-hidden rounded-xl shadow-2xl lg:max-w-none transition-all duration-700 ease-in-out group ${
                            imageIsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
                        }`}
                    >
                        <img
                            src="/2147802522.webp"
                            alt="Vista previa del administrador Crossfy para estudios de pilates"
                            className="h-full w-full object-cover object-center transition-transform duration-500 ease-in-out group-hover:scale-110"
                            loading="lazy"
                        />
                    </div>

                    {/* Columna del Testimonio con Animación */}
                    <div
                        ref={textRef}
                        className={`text-left lg:text-left transition-all duration-700 ease-in-out ${
                            textIsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
                        }`}
                    >
                        <p className="mt-6 mb-12 text-2xl text-gray-600 italic">
                            “Hemos utilizado varios software y han dejado mucho que desear.
                            Hemos magnetizado con Training Hub porque es muy amigable y me motiva a
                            organizarme y mantener un orden.”
                        </p>
                        <p className="text-xl font-semibold text-slate-800">Meli Santos de Evolution FYT</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonio;