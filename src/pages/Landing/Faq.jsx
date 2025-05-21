
import React, { useState } from 'react';

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
            answer: 'AgendaPro cuenta con muchas funcionalidades que te permitirán administrar la agenda, clientes, ventas, recordatorios, pagos y mucho más.',
            open: false
        }
    ]);

    const toggleFaq = (index) => {
        setFaq(faq.map((item, i) => {
            if (i === index) {
                item.open = !item.open;
            } else {
                item.open = false;
            }

            return item;
        }));
    }

    return (
        <section className="py-10 sm:py-16 lg:py-24">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Preguntas frecuentes</h2>
                    {/* <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do</p> */}
                </div>

                <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
                    {faq.map((item, index) => (
                        <div key={index} className="transition-all duration-200 bg-white border border-gray-200 cursor-pointer hover:bg-gray-50">
                            <button type="button" className="flex items-center justify-between w-full px-4 py-5 sm:p-6" onClick={() => toggleFaq(index)}>
                                <span className="flex text-lg font-semibold text-black text-left"> {item.question} </span>

                                <svg className={`w-6 h-6 text-gray-400 ${item.open ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            <div className={`${item.open ? 'block' : 'hidden'} px-4 pb-5 sm:px-6 sm:pb-6`}>
                                <p dangerouslySetInnerHTML={{ __html: item.answer }}></p>
                            </div>
                        </div>
                    ))}
                </div>

                <p className="text-center text-gray-600 textbase mt-9">¿No encontraste la respuesta? <a href="#" title="" className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline">Contacta al soporte.</a></p>
            </div>
        </section>
    );
}

export default Faq;