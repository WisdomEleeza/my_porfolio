import React from "react";
import "./services.css";
import { IoIosCheckmark } from "react-icons/io";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX & GRAPHIC Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <IoIosCheckmark className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <IoIosCheckmark className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <IoIosCheckmark className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <IoIosCheckmark className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <IoIosCheckmark className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <IoIosCheckmark className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX SECTION */}
        {/* --------------------------------------- */}
        {/* START OF WEB DEVELOPMENT SECTION */}
        <article className="service">
          <div className="service__head">
            <h3>WEB DEVELOPMENT</h3>
          </div>

          <ul className="service__list">
            <li>
              <IoIosCheckmark className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <IoIosCheckmark className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <IoIosCheckmark className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <IoIosCheckmark className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <IoIosCheckmark className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <IoIosCheckmark className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <IoIosCheckmark className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}
        {/* -------------------------------------------- */}
        {/* START OF OTHER SERVICES*/}
        <article className="service">
          <div className="service__head">
            <h3>OTHER SERVICES</h3>
          </div>

          <ul className="service__list">
            <li>
              <IoIosCheckmark className="service__list-icon" />
              <p>Data Entry</p>
            </li>
            <li>
              <IoIosCheckmark className="service__list-icon" />
              <p>Research & Development</p>
            </li>
            <li>
              <IoIosCheckmark className="service__list-icon" />
              <p>Typing</p>
            </li>
            <li>
              <IoIosCheckmark className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <IoIosCheckmark className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <IoIosCheckmark className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
          </ul>
        </article>
        {/* END OF OTHER SERVICES */}
      </div>
    </section>
  );
};

export default Services;
