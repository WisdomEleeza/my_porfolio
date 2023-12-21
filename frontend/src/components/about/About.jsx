import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa6";
import { FiUsers } from "react-icons/fi";
import { FaFolderOpen } from "react-icons/fa";

// socials
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const About = () => {
  return (
    // general style for section in index.css
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Portrait" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__card-icon" />
              <h5>Experience</h5>
              <small>1+ year Experience</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__card-icon" />
              <h5>LinkedIn</h5>
              <small>
                <a
                  href="https://www.linkedin.com/in/wisdom2023/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin />
                </a>
              </small>
            </article>
            <article className="about__card">
              <FaFolderOpen className="about__card-icon" />
              <h5>Projects</h5>
              <small>
                <a
                  href="https://github.com/WisdomEleeza/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub />
                </a>
              </small>
            </article>
          </div>

          <p>
            Software enthusiast passionate about crafting elegant solutions to
            complex problems. Full-stack developer with expertise in Backend
            technologies.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
