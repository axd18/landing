import React from 'react';
import { useInView } from 'react-intersection-observer';

// Componente para cada tarjeta de característica individual
// Recibe props para personalizar su contenido y la animación
const FeatureCard = ({ icon, title, description, delay }) => {
    const { ref, inView } = useInView({
        // La animación se activa una sola vez
        triggerOnce: true,
        // Se activa cuando el 5% del elemento es visible
        threshold: 0.05,
    });

    return (
        <div
            ref={ref}
            // Clases base para el estilo y la transición
            className={`
                p-6 sm:p-8 lg:p-14 // Padding base para todas las pantallas, ajustado para sm y lg
                border border-gray-200 // Bordes generales para todas las tarjetas
                transform transition-all duration-700 ease-in-out // Duración y tipo de transición

                // Estado de animación:
                // Si inView es true (visible): opacidad 1, sin traslación.
                // Si inView es false (oculto): opacidad 0, movido hacia abajo ligeramente.
                ${inView
                    ? 'opacity-100 translate-y-0' // No blur applied here
                    : 'opacity-0 translate-y-2'   // No blur applied here
                }
                
                // Efecto hover y bordes redondeados
                hover:shadow-2xl hover:-translate-y-2 rounded-xl
            `}
            // Aplicamos un retraso a la transición para un efecto escalonado
            style={{ transitionDelay: `${delay}ms` }}
        >
            <img
                src={icon}
                alt={`Icono ${title}`}
                className="mx-auto h-auto w-auto" // mx-auto para centrar, h-auto w-auto para escalado natural
            />
            <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">{title}</h3>
            <p className="mt-5 text-base text-gray-600 font-pj">{description}</p>
        </div>
    );
};

// FeatureSection component remains the same, it just uses the updated FeatureCard
const FeatureSection = () => {
    const features = [
        {
            icon: '/features/camas-icon.svg',
            title: 'Reservas de camas',
            description: 'Evitá dobles agendamientos y maximizá tu ocupación y todo bajo control.',
        },
        {
            icon: '/features/illus-icon.svg',
            title: 'Asistencia bajo control',
            description: 'Controlá quién viene, quién falta y cuántas clases le quedan a cada cliente.',
        },
        {
            icon: '/features/illus-icon-2.svg',
            title: 'Gestión de cobros',
            description: 'Llevá el control de los cobros y deudas a simple vista.',
        },
        {
            icon: '/features/illus-icon-3.svg',
            title: 'Registro de Profesores',
            description: 'Podés gestionar los horarios y pagos de los profesores.',
        },
        {
            icon: '/features/illus-icon-4.svg',
            title: 'Mix de Actividades',
            description: 'Incluye variedad de actividades para sumar y Administrar',
        },
        {
            icon: '/features/illus-icon-5.svg',
            title: 'Gestión de clientes',
            description: 'Registrá tus clientes creando una base de datos y lleva el control de sus actividades.',
        },
    ];

    return (
        <section className="py-12 bg-white sm:py-16 lg:py-20 overflow-hidden">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold leading-tight text-slate-950 sm:text-4xl xl:text-5xl font-pj">
                        Podrás mejorar tu eficiencia y simplificar tu día a día
                    </h2>
                </div>

                <div className="
                    grid grid-cols-1
                    gap-8
                    mt-10 text-center
                    sm:mt-16 sm:grid-cols-2
                    md:grid-cols-3
                    xl:mt-24
                ">
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                            delay={index * 150}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeatureSection;