import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    useEffect(() => {
        const triggers = [];

        triggers.push(gsap.from(".about-head-p, .about-head-h1", {
            scrollTrigger: {
                trigger: "#about",
                start: "top 80%",
            },
            opacity: 0,
            y: 30,
            duration: 0.8,
            stagger: 0.2
        }));

        triggers.push(gsap.from(".aboutCard", {
            scrollTrigger: {
                trigger: ".about-elements",
                start: "top 80%",
            },
            opacity: 0,
            y: 50,
            duration: 1,
            stagger: 0.3,
            ease: "power2.out"
        }));

        return () => {
            triggers.forEach(t => {
                if(t.scrollTrigger) t.scrollTrigger.kill();
                t.kill();
            });
        };
    }, []);

    return (
        <section id="about">
            <div className="container">
                <p className="about-head-p">Get to Know</p>
                <h1 className="about-head-h1">About Me</h1>
                <p className="mobile-scroll"> View More →</p>
                <div className="about-elements">
                    <div className="aboutCard">
                        <h1 className="about-h1-desc">About Me</h1>
                        <p className="about-p-desc">
                            I’m a passionate <b style={{ color: 'cyan' }}>Full-Stack Web Developer</b> who
                            enjoys building clean, functional, and visually
                            engaging web experiences. I focus on writing scalable code and creating interfaces that feel
                            smooth, intuitive, and user-friendly.
                        </p>
                        <p className="about-p-desc">
                            I have hands-on experience with <b style={{ color: 'cyan' }}>HTML, CSS,
                            JavaScript, Node.js, Express, ReactJS and MongoDB</b>, and I enjoy
                            turning ideas into real-world projects. Whether it’s backend logic or frontend animations, I
                            love understanding how things work under the hood.
                        </p>
                        <p className="about-p-desc">
                            I’m constantly learning, experimenting with new technologies, and pushing
                            myself to grow as a developer. My goal is to build meaningful digital products that solve real problems and deliver
                            great user experiences.
                        </p>
                    </div>
                    <div className="aboutCard">
                        <h1 className="about-h1-desc">Education</h1>
                        <div className="about-data">
                            <p className="about-data-head">📜 Bachelor's In Computer Engineering</p>
                            <p className="about-data-bottom">Pursuing (2027)</p>
                        </div>
                        <div className="about-data">
                            <p className="about-data-head">🏫 G H Patel College Of Engineering & Technology (CVMU)</p>
                            <p className="about-data-bottom">University & College</p>
                        </div>
                        <div className="about-data" style={{ borderBottom: 0 }}>
                            <p className="about-data-desc">
                                Self-taught developer with hands-on experience building real-world
                                projects using modern web technologies.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
