import React, { useEffect, useRef } from 'react';
import caveman from '../../assets/caveman.jpg';
import hoppyhour from '../../assets/hoppyhour.png';
import obrothers from '../../assets/obrothers.png';
import pkn from '../../assets/pkn.avif';
import farmors from '../../assets/farmors.png';

const PreviousClients = () => {
    const scrollRef = useRef(null);

    const images = [
        [caveman, 'Caveman'],
        [hoppyhour, 'Hoppy Hour'],
        [obrothers, 'O Brothers'],
        [pkn, 'PKN'],
        [farmors, 'Farmors']
    ];
    
    const tripledImages = [...images, ...images, ...images];

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        let animationId;
        let translateX = 0;
        const scrollSpeed = 0.1;
        
        const animate = () => {
            translateX -= scrollSpeed;
            
            if (translateX <= -33.333) {
                translateX = 0;
            }
            
            scrollContainer.style.transform = `translateX(${translateX}%)`;
            animationId = requestAnimationFrame(animate);
        };

        animationId = requestAnimationFrame(animate);

        const handleMouseEnter = () => {
            if (animationId) {
                cancelAnimationFrame(animationId);
            }
        };

        const handleMouseLeave = () => {
            animationId = requestAnimationFrame(animate);
        };

        scrollContainer.addEventListener('mouseenter', handleMouseEnter);
        scrollContainer.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            if (animationId) {
                cancelAnimationFrame(animationId);
            }
            scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
            scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <div className="overflow-hidden bg-white py-20">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-12">
                PREVIOUS CLIENTS
            </h2>
            <div 
                ref={scrollRef}
                className="flex gap-12 w-max"
            >
                {tripledImages.map(([src, alt], index) => (
                    <img
                        key={index}
                        src={src}
                        alt={alt}
                        className="h-24 w-auto object-contain flex-shrink-0 transition-transform duration-300 hover:scale-110"
                    />
                ))}
            </div>
        </div>
    );
};

export default PreviousClients;