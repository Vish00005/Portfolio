import React, { useEffect } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
    useEffect(() => {
        const cursorCircle = document.querySelector('.cursor-circle');

        if (window.matchMedia("(pointer: fine)").matches) {
            const handleMouseMove = (e) => {
                gsap.to(cursorCircle, {
                    x: e.clientX - 12,
                    y: e.clientY - 12,
                    duration: 2,
                    ease: "power3.out"
                });
            };

            document.addEventListener('mousemove', handleMouseMove);

            // Using event delegation so we don't need to reattach on element changes
            const handleMouseEnter = (e) => {
                const target = e.target.closest('a, button, .logo, .info-card, .form-card, .skill-card, .aboutCard, .mywork-card, .social-logo');
                if(target) {
                    gsap.to(cursorCircle, {
                        scale: 2.5,
                        backgroundColor: 'rgba(78, 240, 226, 0.4)',
                        duration: 0.3
                    });
                }
            };
            
            const handleMouseLeave = (e) => {
                const target = e.target.closest('a, button, .logo, .info-card, .form-card, .skill-card, .aboutCard, .mywork-card, .social-logo');
                if(target) {
                    gsap.to(cursorCircle, {
                        scale: 1,
                        backgroundColor: '#4ef0e3',
                        duration: 0.3
                    });
                }
            };

            document.addEventListener('mouseover', handleMouseEnter);
            document.addEventListener('mouseout', handleMouseLeave);

            return () => {
                document.removeEventListener('mousemove', handleMouseMove);
                document.removeEventListener('mouseover', handleMouseEnter);
                document.removeEventListener('mouseout', handleMouseLeave);
            };
        } else {
            cursorCircle.style.display = 'none';
        }
    }, []);

    return (
        <div className="cursor-circle"></div>
    );
};

export default CustomCursor;
