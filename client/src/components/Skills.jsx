import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
    useEffect(() => {
        const triggers = [];

        triggers.push(gsap.from(".skill-card", {
            scrollTrigger: {
                trigger: "#skills",
                start: "top 75%",
            },
            opacity: 0,
            y: 40,
            duration: 0.8,
            stagger: 0.2
        }));

        triggers.push(gsap.from(".skill-card-list-item", {
            scrollTrigger: {
                trigger: ".skills-element",
                start: "top 70%",
            },
            opacity: 0,
            x: -20,
            duration: 0.4,
            stagger: 0.05,
            delay: 0.4
        }));

        return () => {
            triggers.forEach(t => {
                if(t.scrollTrigger) t.scrollTrigger.kill();
                t.kill();
            });
        };
    }, []);

    return (
        <section id="skills">
            <div className="container">
                <p className="about-head-p">What I Know</p>
                <h1 className="about-head-h1">My Skills</h1>
                <p className="mobile-scroll"> View More →</p>
                <div className="skills-element">
                    <div className="skill-card">
                        <h1 className="skill-card-head">Frontened</h1>
                        <ul className="skill-card-lists">
                            <li className="skill-card-list-item"><img src="/html.png" alt="Html" /> Html</li>
                            <li className="skill-card-list-item"><img src="/css.png" alt="Css" /> Css</li>
                            <li className="skill-card-list-item"><img src="/javascript.gif" alt="Javascript" /> Javascript</li>
                            <li className="skill-card-list-item"><img src="/bootstrap.png" alt="Bootstrap" /> Bootstrap</li>
                            <li className="skill-card-list-item"><img src="/react.png" className="react-rotate" alt="ReactJS" /> ReactJS</li>
                            <li className="skill-card-list-item">
                                <img src="/materialui.png" alt="Material UI" />
                                Material UI
                            </li>
                            <li className="skill-card-list-item">
                                <img src="/tailwind.png" alt="TailWind" />
                                TailWind
                            </li>
                        </ul>
                    </div>
                    <div className="skill-card">
                        <h1 className="skill-card-head">Backend</h1>
                        <ul className="skill-card-lists">
                            <li className="skill-card-list-item"><img src="/node.png" alt="Node JS" />Node JS</li>
                            <li className="skill-card-list-item"><img src="/express.png" alt="Express JS" />Express JS</li>
                            <li className="skill-card-list-item"><img src="/mongo.png" alt="MongoDB" />MongoDB</li>
                            <li className="skill-card-list-item"><img src="/mysql.png" alt="MySQL" />MySQL</li>
                            <li className="skill-card-list-item"><img src="/rest.png" alt="REST APIs" />REST APIs</li>
                        </ul>
                    </div>
                    <div className="skill-card">
                        <h1 className="skill-card-head">Technologies</h1>
                        <ul className="skill-card-lists">
                            <li className="skill-card-list-item"><img src="/git.png" alt="Git" />Git</li>
                            <li className="skill-card-list-item"><img src="/github.png" alt="GitHub" />GitHub</li>
                            <li className="skill-card-list-item"><img src="/authentication.png" alt="Authentication" />Authentication</li>
                            <li className="skill-card-list-item"><img src="/authorization.png" alt="Authorization" />Authorization</li>
                            <li className="skill-card-list-item"><img src="/figma.png" alt="Figma" />Figma</li>
                            <li className="skill-card-list-item"><img src="/cloud.png" alt="Cloud" />Cloud</li>
                            <li className="skill-card-list-item"><img src="/mvc.png" alt="MVC Architecture" />MVC Architecture</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
