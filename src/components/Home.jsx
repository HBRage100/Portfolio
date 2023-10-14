import React from "react";
import Typewriter from "typewriter-effect";
import heroImg from "../assets/img/HeroImage.jpg";

const Home = () => {
  return (
    <>
      <section
        id="home"
        className="bg-[#191924] w-full text-white lg:px-40 md:px-10 px-4 h-screen max-sm:pb-4 flex flex-wrap lg:pt-52 md:pt-40 pt-24"
      >
        <div className="lg:w-1/2 md:w-full w-full flex flex-col">
          <img
            src={heroImg}
            alt="HeroImg"
            className="rounded-full lg:h-96 lg:w-96 md:h-80 md:w-80 border-2 border-purple-600 shadow-[0_10px_20px_rgba(147,_51,_234,_0.7)]"
          />
        </div>
        <div className="lg:w-1/2 md:w-full w-full flex flex-col max-sm:pt-20">
          <h1 className="lg:text-5xl md:text-5xl text-4xl font-bold">
            Hi, I'm M Hamza Iftikhar
          </h1>
          <h2 className="lg:text-4xl md:text-4xl text-2xl font-bold inline-flex text-purple-400 pt-4 ">
            <span className="pr-2">A</span>
            <Typewriter
              options={{
                strings: [
                  " React Developer",
                  " Programmer",
                  " Wordpress Developer",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
          <p className="text-lg pt-4">
            I am a Web Developer with a Excellent track record in designing,
            developing websites, and managing databases. 2+ years of experience
            in testing, designing, and implementing web-based projects. The
            ability to complete tasks accurately in a fast-paced environment
            with in deadlines. I am really open- minded and outgoing. To me,
            effective cooperation requires effective communication.
          </p>
          <a href="/" className="pt-4">
            <button className="border-2 border-purple-600 bg-purple-600 py-5 px-14 rounded-lg hover:scale-105 duration-300 text-lg font-semibold">
              Check My Resume
            </button>
          </a>
        </div>
      </section>
    </>
  );
};

export default Home;
