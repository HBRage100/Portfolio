import React from "react";
import bootStrap from "../assets/img/Bootstrap.png";
import Html from "../assets/img/HTML.png";
import JavaScript from "../assets/img/JavaScript.png";
import Css from "../assets/img/Css.png";
import TailWind from "../assets/img/Tailwind.png";
import PhotoShop from "../assets/img/Photoshop.png";
import PHP from "../assets/img/PHP.png";
import ReactJs from "../assets/img/React.png";
import MySql from "../assets/img/MySql.png";
import WordPress from "../assets/img/WordPress.png";

const Skills = () => {
  return (
    <>
      <section
        id="skills"
        className="bg-[#260638] w-full text-white lg:px-40 md:px-10 px-4 h-auto max-sm:pb-4 flex flex-wrap lg:pt-32 md:pt-32 pt-20"
      >
        {/* 1st Div */}
        <div className="w-full flex flex-col">
          <h1 className="lg:text-5xl md:text-5xl text-4xl font-bold">Skills</h1>
          <div className="pt-10 flex flex-wrap">
            <span className="flex justify-center items-center w-32 h-12 rounded-sm border-[1px] border-blue-600 text-white font-semibold text-lg uppercase m-1">
              <img src={ReactJs} alt="" className="h-6 w-6 mr-4" />
              React
            </span>
            <span className="flex justify-center items-center w-44 h-12 rounded-sm border-[1px] border-yellow-600 text-white font-semibold text-lg uppercase m-1">
              <img src={JavaScript} alt="" className="h-6 w-6 mr-4" />
              JavaScript
            </span>
            <span className="flex justify-center items-center w-32 h-12 rounded-sm border-[1px] border-orange-600 text-white font-semibold text-lg uppercase m-1">
              <img src={Html} alt="" className="h-6 w-6 mr-4" />
              HTML
            </span>
            <span className="flex justify-center items-center w-40 h-12 rounded-sm border-[1px] border-sky-600 text-white font-semibold text-lg uppercase m-1">
              <img src={TailWind} alt="" className="h-6 w-6 mr-4" />
              TailWind
            </span>
            <span className="flex justify-center items-center w-44 h-12 rounded-sm border-[1px] border-purple-600 text-white font-semibold text-lg uppercase m-1">
              <img src={bootStrap} alt="" className="h-6 w-6 mr-4" />
              bootStrap
            </span>
            <span className="flex justify-center items-center w-28 h-12 rounded-sm border-[1px] border-sky-600 text-white font-semibold text-lg uppercase m-1">
              <img src={Css} alt="" className="h-6 w-6 mr-4" />
              CSS
            </span>
            <span className="flex justify-center items-center w-28 h-12 rounded-sm border-[1px] border-violet-600 text-white font-semibold text-lg uppercase m-1">
              <img src={PHP} alt="" className="h-6 w-6 mr-4" />
              PHP
            </span>
            <span className="flex justify-center items-center w-44 h-12 rounded-sm border-[1px] border-blue-600 text-white font-semibold text-lg uppercase m-1">
              <img src={WordPress} alt="" className="h-6 w-6 mr-4" />
              WordPress
            </span>
            <span className="flex justify-center items-center w-32 h-12 rounded-sm border-[1px] border-orange-600 text-white font-semibold text-lg uppercase m-1">
              <img src={MySql} alt="" className="h-6 w-6 mr-4" />
              MySql
            </span>
            <span className="flex justify-center items-center w-44 h-12 rounded-sm border-[1px] border-green-800 text-white font-semibold text-lg uppercase m-1">
              <img src={PhotoShop} alt="" className="h-6 w-6 mr-4" />
              PhotoShop
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
