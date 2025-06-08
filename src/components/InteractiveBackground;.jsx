// src/components/InteractiveBackground.jsx
import React, { useState, useCallback } from 'react';

const InteractiveBackground = ({ imageUrl, children }) => {
    const [ripples, setRipples] = useState([]);

    const handleClick = useCallback((event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;

        const newRipple = {
            key: Date.now(),
            size,
            x,
            y,
        };

        setRipples(prev => [...prev, newRipple]);
    }, []);

    const handleAnimationEnd = (key) => {
        // Limpiamos la onda del estado una vez que su animación termina para no acumular elementos
        setRipples(prev => prev.filter(ripple => ripple.key !== key));
    };

    return (
        // Este div actúa como el fondo y el área de clic
        <div
            className="absolute inset-0 z-0 overflow-hidden bg-cover bg-center"
            onClick={handleClick}
            style={{ backgroundImage: `url(${imageUrl})` }}
        >
            {/* Renderizamos las ondas aquí */}
            {ripples.map(({ key, size, x, y }) => (
                <span
                    key={key}
                    className="ripple-effect"
                    style={{
                        top: y,
                        left: x,
                        width: size,
                        height: size,
                    }}
                    onAnimationEnd={() => handleAnimationEnd(key)}
                />
            ))}
            {/* El contenido principal del Hero se renderiza aquí, "encima" del fondo */}
            {children}
        </div>
    );
};

export default InteractiveBackground;