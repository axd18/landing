// src/components/AnimatedSection.jsx
import React from 'react';
import { useInView } from 'react-intersection-observer';

const AnimatedSection = ({ children, direction = 'up', className = '' }) => {
    // ---- Lógica de la Animación ----
    const { ref, inView } = useInView({
        // triggerOnce: false -> La animación se activa cada vez que entra en la vista
        triggerOnce: false, 
        // threshold: 0.1 -> La animación empieza cuando el 15% del elemento es visible
        threshold: 0.15,
        // rootMargin: '-50px' -> "Encoge" el viewport para que la animación no se sienta prematura
        rootMargin: '-50px',
    });

    // ---- Lógica para la Dirección de la Animación ----
    let baseClasses = 'transition-all duration-1000 ease-in-out';
    let hiddenClasses = '';

    switch (direction) {
        case 'left':
            hiddenClasses = 'opacity-0 -translate-x-20 blur-sm';
            break;
        case 'right':
            hiddenClasses = 'opacity-0 translate-x-20 blur-sm';
            break;
        case 'up':
        default:
            hiddenClasses = 'opacity-0 translate-y-20 blur-sm';
            break;
    }

    const visibleClasses = 'opacity-100 translate-x-0 translate-y-0 blur-0';

    return (
        // Aplicamos las clases condicionalmente al 'div' que envuelve la sección
        <div 
            ref={ref} 
            className={`${baseClasses} ${inView ? visibleClasses : hiddenClasses} ${className}`}
        >
            {children}
        </div>
    );
};

export default AnimatedSection;