import React, { useEffect } from 'react';
import gsap from 'gsap';

const Hero = () => {
    useEffect(() => {
        const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });

        heroTl.from(".left-text-p", { opacity: 0, x: -50, duration: 0.8 }, "+=1.2")
            .from(".left-text-h1", { opacity: 0, x: -50, duration: 0.8 }, "-=0.6")
            .from(".left-text-desc", { opacity: 0, x: -50, duration: 0.8 }, "-=0.6")
            .from(".left-btns", { opacity: 0, y: 30, duration: 0.8 }, "-=0.6")
            .from(".social-logos a", {
                opacity: 0,
                y: 20,
                duration: 0.5,
                stagger: 0.1
            }, "-=0.4")
            .from(".right", {
                opacity: 0,
                scale: 0.8,
                duration: 1.2,
                ease: "elastic.out(1, 0.5)"
            }, "-=1");

        return () => {
            heroTl.kill();
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
        <section id="hero" style={{ marginTop: '50px' }}>
            <div className="container">
                <div className="hero-info">
                    <div className="left">
                        <div className="left-text">
                            <p className="left-text-p">Hi I'am</p>
                            <h1 className="left-text-h1">Vishal</h1>
                            <p className="left-text-desc">
                                Full Stack Developer crafting beautiful digital experiences <br />
                                with modern technologies and clean code.
                            </p>
                            <div className="left-btns">
                                <a href="#getintouch" onClick={(e) => smoothScroll(e, '#getintouch')} className="left-btn-1 left-btn">
                                    <p className="btn-text">Get In Touch</p>
                                    <p className="btn-text">Get In Touch</p>
                                </a>
                                <a href="#mywork" onClick={(e) => smoothScroll(e, '#mywork')} className="left-btn-2 left-btn">
                                    <p className="btn-text">View Works</p>
                                    <p className="btn-text">View Works</p>
                                </a>
                            </div>
                            <div className="social-logos">
                                <a href="https://github.com/Vish00005" target="_blank" rel="noreferrer" className="git-logo">
                                    <img src="/github.png" className="social-logo" alt="GitHub" />
                                </a>
                                <a href="https://www.linkedin.com/in/vishal-khimsuriya-06075239b/" target="_blank" rel="noreferrer" className="linked-in">
                                    <img src="/linkedin.png" className="social-logo" alt="LinkedIn" />
                                </a>
                                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=vishal.j.khim@gmail.com" target="_blank" rel="noreferrer" className="linked-in">
                                    <img src="/gmail.png" className="social-logo" alt="Gmail" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="cube-wrapper">
                            <div className="scene">
                                <div className="cube">
                                    <div className="face front"></div>
                                    <div className="face back"></div>
                                    <div className="face rightCube"></div>
                                    <div className="face leftCube"></div>
                                    <div className="face top"></div>
                                    <div className="face bottom"></div>
                                </div>
                            </div>
                        </div>
                        <div className="big-dot"></div>
                        <div className="small-dot"></div>
                        <img src="/profile.jpeg" className="dev-img" alt="Vishal" />
                    </div>
                </div>
                <a className="down-arrow" href="#about" onClick={(e) => smoothScroll(e, '#about')}>↓</a>
            </div>
        </section>
    );
};

export default Hero;
