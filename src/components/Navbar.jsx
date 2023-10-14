import React, { useState } from "react";
import { Link } from "react-scroll";
import {
  FaBars,
  FaTimes,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaMailBulk,
} from "react-icons/fa";

const Navbar = (props) => {
  const [myNav, setNav] = useState(false);
  const handleClick = () => setNav(!myNav);

  return (
    <nav className="bg-[#191924] h-[80px] px-4 md:px-8 lg:px-40 w-full text-white items-center justify-between flex fixed z-20">
      <div>
        <Link to="home" spy={true} smooth={true} offset={0} duration={500}>
          <span className="font-signature text-3xl font-bold hover:text-purple-300">
            M Hamza
          </span>
        </Link>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex text-lg">
        <li className="hover:text-purple-300 uppercase">
          <Link to="home" spy={true} smooth={true} offset={0} duration={500}>
            {props.hmTxt}
          </Link>
        </li>
        <li className="hover:text-purple-300 uppercase">
          <Link to="about" spy={true} smooth={true} offset={0} duration={500}>
            {props.abtTxt}
          </Link>
        </li>
        <li className="hover:text-purple-300 uppercase">
          <Link to="skills" spy={true} smooth={true} offset={0} duration={500}>
            {props.sklTxt}
          </Link>
        </li>
        <li className="hover:text-purple-300 uppercase">
          <Link to="contact" spy={true} smooth={true} offset={0} duration={500}>
            {props.cntTxt}
          </Link>
        </li>
      </ul>

      {/* Humburger */}
      <div
        onClick={handleClick}
        className="md:hidden  bg-purple-600 rounded-full p-4"
      >
        {!myNav ? (
          <FaBars size={30} className="hover:text-purple-300" />
        ) : (
          <FaTimes size={30} className="hover:text-purple-300" />
        )}
      </div>

      {/* Mobile Menu */}
      <ul
        className={
          !myNav
            ? "hidden"
            : "absolute top-20 left-0 bg-gradient-to-b from-[#191924] from-10% to-[#260638] w-full h-screen justify-start px-2 text-lg"
        }
      >
        <li className="hover:text-purple-300 uppercase">
          <Link to="home" spy={true} smooth={true} offset={0} duration={500}>
            {props.hmTxt}
          </Link>
        </li>
        <li className="hover:text-purple-300 uppercase">
          <Link to="about" spy={true} smooth={true} offset={0} duration={500}>
            {props.abtTxt}
          </Link>
        </li>
        <li className="hover:text-purple-300 uppercase">
          <Link to="skills" spy={true} smooth={true} offset={0} duration={500}>
            {props.sklTxt}
          </Link>
        </li>
        <li className="hover:text-purple-300 uppercase">
          <Link to="contact" spy={true} smooth={true} offset={0} duration={500}>
            {props.cntTxt}
          </Link>
        </li>
        <li className="inline-flex justify-between items-center w-[60px] h-[60px] bg-blue-600 border-b-4 border-blue-800 mx-3 my-4">
          <a
            className="flex justify-between items-center w-full"
            href="https://www.facebook.com/id.1000175604161401/"
            target="blank"
          >
            <FaFacebook size={30} />
          </a>
        </li>
        <li className="inline-flex justify-between items-center w-[60px] h-[60px] bg-gray-600 border-b-4 border-gray-800 mx-3 my-4">
          <a
            className="flex justify-between items-center w-full"
            target="blank"
            href="https://github.com/HBRage100"
          >
            <FaGithub size={30} />
          </a>
        </li>
        <li className="inline-flex justify-between items-center w-[60px] h-[60px] bg-red-600 border-b-4 border-red-800 mx-3 my-4">
          <a
            className="flex justify-between items-center w-full"
            target="blank"
            href="mailto:hamzach153@gmail.com"
          >
            <FaMailBulk size={30} />
          </a>
        </li>
        <li className="inline-flex justify-between items-center w-[60px] h-[60px] bg-blue-600 border-b-4 border-blue-800 mx-3 my-4">
          <a
            className="flex justify-between items-center w-full"
            href="https://www.linkedin.com/in/m-hamza-632480261/"
            target="blank"
          >
            <FaLinkedin size={30} />
          </a>
        </li>
      </ul>

      {/* Social icons */}
      <div className="lg:flex md:hidden fixed flex-col left-0 top-[35%] hidden">
        <ul>
          <li className="flex justify-between items-center w-[160px] h-[60px] ml-[-100px] hover:ml-[-10px] bg-blue-600 duration-300">
            <a
              className="flex justify-between items-center w-full"
              href="https://www.facebook.com/id.1000175604161401/"
              target="blank"
            >
              Facebook <FaFacebook size={30} />
            </a>
          </li>
          <li className="flex justify-between items-center w-[160px] h-[60px] ml-[-100px] hover:ml-[-10px] bg-gray-600 duration-300">
            <a
              className="flex justify-between items-center w-full"
              target="blank"
              href="https://github.com/HBRage100"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="flex justify-between items-center w-[160px] h-[60px] ml-[-100px] hover:ml-[-10px] bg-red-600 duration-300">
            <a
              className="flex justify-between items-center w-full"
              target="blank"
              href="mailto:hamzach153@gmail.com"
            >
              Mail <FaMailBulk size={30} />
            </a>
          </li>
          <li className="flex justify-between items-center w-[160px] h-[60px] ml-[-100px] hover:ml-[-10px] bg-blue-600 duration-300">
            <a
              className="flex justify-between items-center w-full"
              href="https://www.linkedin.com/in/m-hamza-632480261/"
              target="blank"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
