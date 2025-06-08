import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';

// --- Componente Reutilizable para cada Pregunta Frecuente ---
const FaqItem = ({ item, index, onToggle, delay }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <div
            ref={ref}
            className={`transition-all duration-500 ease-in-out border border-gray-200 rounded-xl shadow-sm hover:shadow-lg ${
                item.open ? 'shadow-lg bg-white' : ''
            } ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            <button
                type="button"
                className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
                onClick={() => onToggle(index)}
            >
                <span className="flex text-lg font-semibold text-black text-left">{item.question}</span>
                <svg
                    className={`w-6 h-6 text-gray-400 transition-transform duration-300 ${item.open ? 'rotate-180' : ''}`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            {/* Contenedor de la respuesta con animación de max-height */}
            <div
                className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${item.open ? 'max-h-96' : 'max-h-0'}`}
            >
                <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                    <p className="text-gray-600" dangerouslySetInnerHTML={{ __html: item.answer }}></p>
                </div>
            </div>
        </div>
    );
};


// --- Componente Principal ---
const Faq = () => {
    const [faq, setFaq] = useState([
        {
            question: '¿Qué es un software sistema, o app para estudio de pilates?',
            answer: 'Es una herramienta digital que ayuda a gestionar un negocio de forma fácil y sencilla, desde cualquier dispositivo. Esta incluye todas las funcionalidades necesarias para administrar el negocio óptimamente.',
            open: false
        },
        {
            question: '¿Cuánto cuesta un software para un estudio de pilates?',
            answer: 'Training Hub es el software con la mejor relación calidad-precio. Si aún no estás seguro de si es perfecta para tu centro de pilates, puedes probar gratis la plataforma demo durante un periodo y ver si se adapta a tus necesidades.',
            open: false
        },
        {
            question: '¿Cómo me cambio a Training Hub si en la actualidad tengo otro software de gestión?',
            answer: '¡Es mucho más fácil de lo que imaginas! Nuestro equipo de soporte te acompañará paso a paso y te ayudará a importar todos los datos de tu anterior software en cuestión de minutos.',
            open: false
        },
        {
            question: '¿Cómo gestionar mi Estudio de pilates?',
            answer: 'Training Hub cuenta con muchas funcionalidades que te permitirán administrar la agenda, clientes, ventas, recordatorios, pagos y mucho más.',
            open: false
        }
    ]);

    const toggleFaq = (index) => {
        setFaq(
            faq.map((item, i) => {
                if (i === index) {
                    item.open = !item.open;
                } else {
                    item.open = false; // Cierra las otras preguntas
                }
                return item;
            })
        );
    };

    const { ref: titleRef, inView: titleInView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    return (
        <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div 
                    ref={titleRef}
                    className={`max-w-2xl mx-auto text-center transition-opacity duration-700 ease-in-out ${titleInView ? 'opacity-100' : 'opacity-0'}`}
                >
                    <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Preguntas frecuentes</h2>
                </div>

                <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
                    {faq.map((item, index) => (
                        <FaqItem
                            key={index}
                            item={item}
                            index={index}
                            onToggle={toggleFaq}
                            delay={index * 100} // Retraso escalonado para la animación
                        />
                    ))}
                </div>

                <p className="text-center text-gray-600 textbase mt-9">
                    ¿No encontraste la respuesta?{' '}
                    <a href="https://wa.me/5492235110038?text=Hola%20quiero%20probar%20la%20demo." title="" className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline">
                        Contacta al soporte.
                    </a>
                </p>
            </div>
        </section>
    );
};

export default Faq;