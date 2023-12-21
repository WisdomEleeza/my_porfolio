import React from "react";
import "./nav.css";
import { IoHomeOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { GrServices } from "react-icons/gr";
import { IoIosBookmarks } from "react-icons/io";
import { IoMdContact } from "react-icons/io";

const Nav = () => {
  return (
    <nav>
      <a href="##">
        <IoHomeOutline />
      </a>
      <a href="#about">
        <FaRegUser />
      </a>
      <a href="#services">
        <GrServices />
      </a>
      <a href="#experience">
        <IoIosBookmarks />
      </a>
      <a href="#contact">
        <IoMdContact />
      </a>
      {/* <a href="#">
        <IoHomeOutline />
      </a> */}
    </nav>
  );
};

export default Nav;
