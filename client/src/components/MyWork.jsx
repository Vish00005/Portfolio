import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MyWork = () => {
  useEffect(() => {
    const triggers = gsap.utils.toArray(".mywork-card").map((card) => {
      return gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: 60,
        duration: 1,
        ease: "power3.out",
      });
    });

    return () => {
      triggers.forEach((t) => {
        if (t.scrollTrigger) t.scrollTrigger.kill();
        t.kill();
      });
    };
  }, []);

  return (
    <section id="mywork">
      <div className="container">
        <p className="about-head-p">What I've Built</p>
        <h1 className="about-head-h1">My Work</h1>
        <p className="mobile-scroll"> View More →</p>
        <div className="mywork-elements">
          <div className="mywork-card">
            <img
              src="https://res.cloudinary.com/ddglanrrg/image/upload/v1774801379/project1_scujdq.png"
              alt="EcoBin"
              className="work-card-img"
            />
            <div className="mywork-content">
              <div className="mycard-head">
                <h1>♻️ EcoBin</h1>
                <div className="mycard-links">
                  <a
                    href="https://github.com/Vish00005/E-Waste-BIn-Management.git"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="mywork-link"
                      src="/github.png"
                      alt="GitHub"
                      height="36px"
                    />
                  </a>
                  <a
                    href="https://e-waste-bin-management.onrender.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="mywork-link"
                      src="/link2.png"
                      alt="Live"
                      height="30px"
                    />
                  </a>
                </div>
              </div>
              <p>
                E-Waste Bin Management is a full-stack web application designed
                to support efficient monitoring and management of electronic
                waste disposal systems. The app provides an intuitive interface
                for users and administrators to track e-waste bins, view
                statuses, and improve the sustainability of recycling efforts.
              </p>
              <p>
                This project highlights my skills in frontend and backend
                development, responsive UI design, and cloud deployment. It was
                built as a practical solution to modern e-waste challenges and
                demonstrates how web technology can support environmental
                initiatives.
              </p>
            </div>
          </div>
          <div className="mywork-card">
            <img
              src="https://res.cloudinary.com/ddglanrrg/image/upload/v1774801421/project2_lpsbmt.png"
              alt="Traveller"
              className="work-card-img"
            />
            <div className="mywork-content">
              <div className="mycard-head">
                <h1>🌏 Traveller</h1>
                <div className="mycard-links">
                  <a
                    href="https://github.com/Vish00005/Traveller.git"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="mywork-link"
                      src="/github.png"
                      alt="GitHub"
                      height="36px"
                    />
                  </a>
                  <a
                    href="https://traveller-nfrf.onrender.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="mywork-link"
                      src="/link2.png"
                      alt="Live"
                      height="30px"
                    />
                  </a>
                </div>
              </div>
              <p>
                Traveller is a thoughtfully designed web application developed
                by me to provide users with a visually engaging and
                easy-to-navigate platform for exploring travel destinations and
                travel-related content. The project focuses on delivering a
                smooth user experience while presenting travel information in a
                clean, modern layout.
              </p>
              <p>
                This application demonstrates my ability to design and build
                responsive, user-centric web interfaces, structure content
                effectively, and deploy a complete project on a cloud platform.
              </p>
            </div>
          </div>
          <div className="mywork-card">
            <img
              src="https://res.cloudinary.com/ddglanrrg/image/upload/v1774801292/project3_x4etrd.png"
              alt="Delta Institute"
              className="work-card-img"
            />

            <div className="mywork-content">
              <div className="mycard-head">
                <h1>🏫 Delta Institute</h1>
                <div className="mycard-links">
                  <a
                    href="https://github.com/Vish00005/Tution-Management.git"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="mywork-link"
                      src="/github.png"
                      alt="GitHub"
                      height="36px"
                    />
                  </a>
                  <a
                    href="https://tution-management-chi.vercel.app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="mywork-link"
                      src="/link2.png"
                      alt="Live"
                      height="30px"
                    />
                  </a>
                </div>
              </div>
              <p>
                Tuition Management System is a thoughtfully designed web
                application developed by me to provide an efficient and
                user-friendly platform for managing tuition classes, student
                records, and academic activities. The project focuses on
                delivering a smooth user experience while organizing essential
                data such as attendance, fees, and course details in a clean and
                modern interface.
              </p>
              <p>
                This application demonstrates my ability to develop full-stack
                solutions using the MERN stack, build responsive and scalable
                web applications, manage backend APIs and databases, and deploy
                a complete project on a cloud platform.
              </p>
            </div>
          </div>
          <div className="mywork-card">
            <img
              src="https://res.cloudinary.com/ddglanrrg/image/upload/v1775137350/Screenshot_2026-04-02_at_7.11.29_PM_agy9wp.png"
              alt="Traveller"
              className="work-card-img"
            />
            <div className="mywork-content">
              <div className="mycard-head">
                <h1>🏭 Core Inventory</h1>
                <div className="mycard-links">
                  <a
                    href="https://github.com/Vish00005/core-Inventory.git"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="mywork-link"
                      src="/github.png"
                      alt="GitHub"
                      height="36px"
                    />
                  </a>
                  <a
                    href="https://core-inventory-six.vercel.app/login"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="mywork-link"
                      src="/link2.png"
                      alt="Live"
                      height="30px"
                    />
                  </a>
                </div>
              </div>
              <p>
                Core Inventory is a full-stack web application developed using
                the MERN stack, designed to manage inventory efficiently through
                a role-based architecture. It provides secure access for
                different users like admins and managers to handle stock
                operations.
              </p>
              <p>
                The application includes interactive data visualization using
                Chart.js, enabling users to track and analyze inventory trends
                easily. This project showcases my skills in building scalable,
                user-friendly, and data-driven web applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyWork;
