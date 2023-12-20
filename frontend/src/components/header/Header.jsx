import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      {/* class container(general container class in index.css) */}
      <div className="container header__container">
        <h5>Hello, I'm</h5>
        <h1>Wisdom Eleeza</h1>
        {/* class name text-light is in the general index.css */}
        <h5 className="text-light">Backend Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
