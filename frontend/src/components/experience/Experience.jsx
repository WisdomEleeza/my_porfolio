import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>The Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>HTML</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>CSS</h4>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>JavaScript</h4>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>React</h4>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>Redux</h4>
              <small className="text-light">Beginner</small>
            </article>
          </div>
        </div>
        {/* END OF FRONTEND */}
        {/* ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ */}
        {/* START OF BACKEND */}
        <div className="experience__backend">
          <h3>Backeend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>Node JS</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>Express</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>Docker</h4>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>Postgresql(Prisma ORM)</h4>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>MongoDB</h4>
              <small className="text-light">Experienced</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
