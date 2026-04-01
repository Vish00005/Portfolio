import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
    useGSAP(() => {
        gsap.from("footer", {
            scrollTrigger: {
                trigger: "footer",
                start: "top bottom",
            },
            opacity: 0,
            y: 20,
            duration: 1
        });
    });

    const smoothScroll = (e, id) => {
        e.preventDefault();
        const target = document.querySelector(id);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <footer>
            <div className="row">
                <div className="cl">
                    <a href="#hero" onClick={(e) => smoothScroll(e, '#hero')}>
                        <div className="logo">Vishal</div>
                    </a>
                    <p>🖥️ A Full Stack Developer</p>
                </div>
                <div className="cl">
                    <p>&copy; 2026 All rights are Reserved</p>
                </div>
                <div className="cl">
                    <div className="cl-img">
                        <a href="https://github.com/Vish00005" target="_blank" rel="noreferrer">
                            <img src="/githuboutline.png" alt="GitHub" />
                        </a>
                        <a href="https://www.linkedin.com/in/vishal-khimsuriya-06075239b/" target="_blank" rel="noreferrer">
                            <img src="/linkedinoutline.png" alt="LinkedIn" />
                        </a>
                        <a href="https://www.instagram.com/vis.hxlll?igsh=NDliOTQ4OXh6MXVo" target="_blank" rel="noreferrer">
                            <img src="/instagramoutline.png" alt="Instagram" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
