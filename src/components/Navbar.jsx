import React from "react";
import { useState } from "react";
import { FaBars, FaTimes, FaFacebook, FaGithub } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [shadow, setShadow] = useState(false);
  const addShadow = () => {
    if (window.scrollY >= 80) {
      setShadow(true);
    } else setShadow(false);
  };
  window.addEventListener("scroll", addShadow);

  const [toggle, setToggle] = useState(false);
  const menuClick = () => {
    setToggle((prev) => !prev);
  };

  return (
    <div
      className={
        shadow
          ? "fixed z-10 w-full h-20 backdrop-blur-[16px] bg-[rgba(236, 240, 243, 1)]"
          : "fixed bg-bgColor w-full h-20 z-50"
      }
    >
      <div className="flex max-w-[1200px] w-full h-full mx-auto px-[15px] md:px-[30px] lg:px-10 justify-between items-center">
        <h1 className="text-[32px] text-textColor">Portfolio</h1>

        <div className="md:hidden hover:scale-105" onClick={menuClick}>
          <FaBars size={24} />
        </div>

        <ul className="hidden md:flex space-x-10 uppercase text-base">
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            delay={300}
            isDynamic={true}
            className="link"
          >
            home
          </Link>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-43}
            duration={300}
            delay={500}
            isDynamic={true}
            className="link"
          >
            about
          </Link>
          <Link
            activeClass="active"
            to="resume"
            spy={true}
            smooth={true}
            offset={-65}
            duration={300}
            delay={500}
            isDynamic={true}
            className="link"
          >
            resume
          </Link>
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-61}
            duration={300}
            delay={500}
            isDynamic={true}
            className="link"
          >
            projects
          </Link>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-43}
            duration={300}
            delay={500}
            isDynamic={true}
            className="link"
          >
            contact
          </Link>
        </ul>
      </div>

      <div
        className={
          toggle
            ? "fixed top-0 left-0 w-full h-screen bg-black/70 z-50 md:hidden duration-300 ease-in-out"
            : ""
        }
      >
        <div
          className={
            toggle
              ? "fixed top-0 left-0 h-screen w-[75%] sm:w-[55%] bg-bgColor px-4 pb-10 flex flex-col ease-in duration-300"
              : "fixed top-0 left-[-100%] h-screen w-[75%] sm:w-[55%] bg-bgColor px-4 flex flex-col justify-between ease-in duration-300"
          }
        >
          <div className="flex w-full h-[80px] justify-between items-center transition ease-in-out duration-300">
            <div
              className="w-9 h-9 rounded-full flex justify-center items-center group hover:scale-105"
              onClick={menuClick}
            >
              <FaTimes size={22} className="group-hover:scale-105" />
            </div>
          </div>

          <ul className="flex flex-col space-y-10 uppercase text-[18px] justify-center items-center my-auto">
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              delay={300}
              isDynamic={true}
              className="link"
              onClick={menuClick}
            >
              home
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-50}
              duration={300}
              delay={500}
              isDynamic={true}
              className="link"
              onClick={menuClick}
            >
              about
            </Link>
            <Link
              to="resume"
              spy={true}
              smooth={true}
              offset={-70}
              duration={300}
              delay={500}
              isDynamic={true}
              className="link"
              onClick={menuClick}
            >
              resume
            </Link>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-80}
              duration={300}
              delay={500}
              isDynamic={true}
              className="link"
              onClick={menuClick}
            >
              projects
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-80}
              duration={300}
              delay={500}
              isDynamic={true}
              className="link"
              onClick={menuClick}
            >
              contact
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
