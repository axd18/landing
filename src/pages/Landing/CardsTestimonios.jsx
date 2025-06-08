import React, { useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

// --- El componente TestimonialCard no necesita cambios ---
const TestimonialCard = ({ quote, authorName, authorRole, authorImage }) => {
    return (
        <div
            className="flex flex-col overflow-hidden rounded-xl shadow-xl transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2 flex-shrink-0 w-full sm:w-[45%] md:w-[31%]"
        >
            <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
                <div className="flex-1">
                    <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-5 h-5 text-[#FDB241]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        ))}
                    </div>
                    <blockquote className="flex-1 mt-8">
                        <p className="text-lg leading-relaxed text-gray-900 font-pj italic">{quote}</p>
                    </blockquote>
                </div>
                <div className="flex items-center mt-8">
                    <img
                        className="flex-shrink-0 object-cover rounded-full w-20 h-20"
                        src={authorImage}
                        alt={`Foto de ${authorName}`}
                    />
                    <div className="ml-4">
                        <p className="text-base font-bold text-gray-900 font-pj">{authorName}</p>
                        <p className="mt-0.5 text-sm font-pj text-gray-600">{authorRole}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};


// --- Componente Principal con la nueva funcionalidad de "Freno" ---
const CardsTestimonios = () => {
    const testimonials = [
        ...[
            { quote: "Antes perdía horas en planillas y mensajes...", authorName: "Laura M.", authorRole: "Instructora Pilates", authorImage: "/testimonios/Laura.jpg" },
            { quote: "La función de asistencia me salvó la vida...", authorName: "Sofía R.", authorRole: "Studio Flex", authorImage: "/testimonios/Sofia.jpg" },
            { quote: "Olvidé los problemas de 'cama ya ocupada'...", authorName: "Pilar Iorio", authorRole: "Pilates Conecta", authorImage: "/testimonios/Pilar.jpg" },
            { quote: "La gestión de pagos es mucho más simple ahora...", authorName: "Carlos G.", authorRole: "Centro de Yoga", authorImage: "/testimonios/carlos.jpg" },
        ],
        ...[
            { quote: "Antes perdía horas en planillas y mensajes...", authorName: "Laura M.", authorRole: "Instructora Pilates", authorImage: "/testimonios/Laura.jpg" },
            { quote: "La función de asistencia me salvó la vida...", authorName: "Sofía R.", authorRole: "Studio Flex", authorImage: "/testimonios/Sofia.jpg" },
            { quote: "Olvidé los problemas de 'cama ya ocupada'...", authorName: "Pilar Iorio", authorRole: "Pilates Conecta", authorImage: "/testimonios/Pilar.jpg" },
            { quote: "La gestión de pagos es mucho más simple ahora...", authorName: "Carlos G.", authorRole: "Centro de Yoga", authorImage: "/testimonios/carlos.jpg" },
        ]
    ];

    const containerRef = useRef(null);
    const { ref: sectionRef, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

    const velocityRef = useRef(0);
    const animationFrameRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const friction = 0.97;
        const forceFactor = 2.1;

        // Función para detener la animación
        const stopAnimation = () => {
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
                animationFrameRef.current = null;
            }
            velocityRef.current = 0; // Pone la velocidad en cero
        };

        const animationLoop = () => {
            if (Math.abs(velocityRef.current) < 0.1) {
                stopAnimation();
                return;
            }

            velocityRef.current *= friction;
            
            if (velocityRef.current > 0 && container.scrollLeft >= container.scrollWidth / 2) {
                container.scrollLeft -= container.scrollWidth / 2;
            } 
            else if (velocityRef.current < 0 && container.scrollLeft <= 0) {
                container.scrollLeft += container.scrollWidth / 2;
            }

            container.scrollLeft += velocityRef.current;
            animationFrameRef.current = requestAnimationFrame(animationLoop);
        };

        const startAnimation = () => {
            if (!animationFrameRef.current) {
                animationFrameRef.current = requestAnimationFrame(animationLoop);
            }
        };

        const handleWheel = (e) => {
            e.preventDefault();
            velocityRef.current += e.deltaY * forceFactor;
            startAnimation();
        };

        // Nueva función para manejar el clic y detener la animación
        const handleManualInteraction = () => {
            stopAnimation();
        };

        container.scrollLeft = container.scrollWidth / 2;
        
        // --- Event Listeners ---
        container.addEventListener('wheel', handleWheel, { passive: false });
        // Añadimos listeners para la interacción manual (clic o toque)
        container.addEventListener('mousedown', handleManualInteraction);
        container.addEventListener('touchstart', handleManualInteraction, { passive: true });

        // --- Limpieza de todos los listeners ---
        return () => {
            container.removeEventListener('wheel', handleWheel);
            container.removeEventListener('mousedown', handleManualInteraction);
            container.removeEventListener('touchstart', handleManualInteraction);
            stopAnimation(); // Detiene cualquier animación al desmontar
        };
    }, []);

    return (
        <section className="py-12 sm:py-16 lg:py-20 bg-white" ref={sectionRef}>
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="flex flex-col items-center">
                    <div className="relative mt-10 md:mt-24 w-full">
                        
                        <div className="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6">
                            <div
                                className={`w-full h-full max-w-5xl mx-auto rounded-3xl blur-lg filter transition-all duration-1000 ease-in-out ${
                                    inView ? 'opacity-30 scale-100' : 'opacity-0 scale-90'
                                }`}
                                style={{ background: "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)" }}
                            ></div>
                        </div>

                        <div
                            ref={containerRef}
                            className="relative flex overflow-x-scroll elegant-scrollbar space-x-6 lg:space-x-10 py-4 cursor-grab active:cursor-grabbing"
                        >
                            {testimonials.map((testimonial, index) => (
                                <TestimonialCard key={index} {...testimonial} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CardsTestimonios;