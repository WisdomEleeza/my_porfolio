import React from "react";
import "./nav.css";
import { IoHomeOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { GrServices } from "react-icons/gr";
import { IoIosBookmarks } from "react-icons/io";
import { IoMdContact } from "react-icons/io";
import { useState } from "react";

const Nav = () => {
  // useState to change the nav-bar to active when it is clicked
  const [activeNav, setActiveNav] = useState("/#");

  return (
    <nav>
      <a
        href="/#"
        onClick={() => setActiveNav("/#")}
        className={activeNav === "/#" ? "active" : ""}
      >
        <IoHomeOutline />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <FaRegUser />
      </a>
      <a
        href="#services"
        onClick={() => setActiveNav("#services")}
        className={activeNav === "#services" ? "active" : ""}
      >
        <GrServices />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <IoIosBookmarks />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <IoMdContact />
      </a>
    </nav>
  );
};

export default Nav;
