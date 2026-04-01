import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
    useEffect(() => {
        // Navbar Animation
        gsap.from("nav", {
            y: -100,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        });

        // Navbar Scroll Progress Animation
        gsap.to(".nav-scroll-progress", {
            scaleX: 1,
            ease: "none",
            scrollTrigger: {
                trigger: document.documentElement,
                start: "top top",
                end: "bottom bottom",
                scrub: 0.3
            }
        });

        // ScrollSpy Logic
        const sections = document.querySelectorAll("section");
        const navLinks = document.querySelectorAll(".nav-link");

        function setActive(id) {
            navLinks.forEach(link => {
                link.classList.remove("active");
                if (link.getAttribute("href") === `#${id}`) {
                    link.classList.add("active");
                }
            });
        }

        const triggers = [];
        sections.forEach((section) => {
            triggers.push(
                ScrollTrigger.create({
                    trigger: section,
                    start: "top 150px",
                    end: "bottom 150px",
                    onEnter: () => setActive(section.id),
                    onEnterBack: () => setActive(section.id),
                })
            );
        });

        return () => {
             triggers.forEach(t => t.kill());
        };
    }, []);

    const smoothScroll = (e, id) => {
        e.preventDefault();
        const target = document.querySelector(id);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <nav>
            <div className="logo">
                <a href="#hero" onClick={(e) => smoothScroll(e, '#hero')}>Vishal</a>
            </div>
            <div className="nav-links">
                <a href="#hero" onClick={(e) => smoothScroll(e, '#hero')} className="nav-link">Home</a>
                <a href="#about" onClick={(e) => smoothScroll(e, '#about')} className="nav-link">About</a>
                <a href="#skills" onClick={(e) => smoothScroll(e, '#skills')} className="nav-link">Skills</a>
                <a href="#mywork" onClick={(e) => smoothScroll(e, '#mywork')} className="nav-link">My Work</a>
                <a href="#getintouch" onClick={(e) => smoothScroll(e, '#getintouch')} className="nav-link">Get In Touch</a>
            </div>
            <div className="nav-scroll-progress"></div>
        </nav>
    );
};

export default Navbar;
