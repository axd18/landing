import React from 'react';
import { useInView } from 'react-intersection-observer';

// Componente para cada tarjeta de característica individual
// Recibe props para personalizar su contenido y la animación
const FeatureCard = ({ icon, title, description, delay }) => {
    const { ref, inView } = useInView({
        // La animación se activa una sola vez
        triggerOnce: true,
        // Se activa cuando el 10% del elemento es visible
        threshold: 0.1,
    });

    return (
        <div
            ref={ref}
            // Clases base para el estilo y la transición
            className={`
                p-6 sm:p-8 lg:p-14 // Padding base para todas las pantallas, ajustado para sm y lg
                border border-gray-200 // Bordes generales para todas las tarjetas
                transform transition-all duration-700 ease-in-out
                ${inView
                    // Estado final (visible): opacidad 1, sin traslación, sin desenfoque
                    ? 'opacity-100 translate-y-0 blur-0'
                    // Estado inicial (oculto): opacidad 0, movido hacia abajo, desenfocado
                    : 'opacity-0 translate-y-10 blur-sm'
                }
                hover:shadow-2xl hover:-translate-y-2 rounded-xl
            `}
            // Aplicamos un retraso a la transición para un efecto escalonado
            style={{ transitionDelay: `${delay}ms` }}
        >
            <img
                src={icon}
                alt={`Icono ${title}`}
                className="mx-auto h-auto w-auto"
            />
            <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">{title}</h3>
            <p className="mt-5 text-base text-gray-600 font-pj">{description}</p>
        </div>
    );
};


const FeatureSection = () => {
    // Array de datos para las tarjetas para no repetir código JSX
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
            title: 'Calendario',
            description: 'Incluye un calendario donde podés agregar eventos y de fácil acceso.',
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
                    grid grid-cols-1 // Por defecto, una columna en móviles
                    gap-8 // Espacio consistente entre elementos en todas las pantallas
                    mt-10 text-center
                    sm:mt-16 sm:grid-cols-2 // En sm, dos columnas
                    md:grid-cols-3 // En md, tres columnas
                    xl:mt-24
                ">
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                            // Retraso escalonado para cada tarjeta (0ms, 150ms, 300ms, ...)
                            delay={index * 150}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeatureSection;