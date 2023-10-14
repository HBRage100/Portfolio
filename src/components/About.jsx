import React from "react";

const About = () => {
  return (
    <>
      <section
        id="about"
        className="bg-gradient-to-b from-[#191924] from-75% to-[#260638] w-full text-white lg:px-40 md:px-10 px-4 h-auto max-sm:pb-4 flex flex-wrap lg:pt-32 md:pt-4 pt-80"
      >
        {/* 1st Div */}
        <div className="lg:w-1/2 md:w-full w-full flex flex-col">
          <h1 className="lg:text-5xl md:text-5xl text-4xl font-bold">
            Work Experience
          </h1>
          <h2 className="lg:text-4xl md:text-4xl text-2xl font-bold text-purple-400 pt-4 ">
            <span className="pr-2">Virtual Assistant</span>
          </h2>
          <p className="text-lg pt-4">Freelancer</p>
          <p className="text-lg pt-4">10/2020 - 09/2021</p>
          <h2 className="lg:text-4xl md:text-4xl text-2xl font-bold text-purple-400 pt-4 ">
            <span className="pr-2">Wordpress Developer</span>
          </h2>
          <p className="text-lg pt-4">6xperts</p>
          <p className="text-lg pt-4">11/2021 - Present</p>
        </div>
        {/* 2nd div */}
        <div className="lg:w-1/2 md:w-full w-full flex flex-col max-sm:pt-8">
          <h1 className="lg:text-5xl md:text-5xl text-4xl font-bold">
            Education
          </h1>
          <h2 className="lg:text-4xl md:text-4xl text-2xl font-bold text-purple-400 pt-4 ">
            <span className="pr-2">BSCS</span>
          </h2>
          <p className="text-lg pt-4">
            Government College University Faisalabad (Sahiwal Campus)
          </p>
          <p className="text-lg pt-4">11/2016 - 11/2020</p>
        </div>
        {/* 3rd div */}
        <div className="w-full flex flex-col lg:pt-20 pt-8">
          <h1 className="lg:text-5xl md:text-5xl text-4xl font-bold">
            Personal Projects
          </h1>
          <p className="text-lg pt-4">1: instabarcode.com</p>
          <p className="text-lg pt-4">2: smartfreezecontainers.com</p>
          <p className="text-lg pt-4">3: bookyourdata.com</p>
          <p className="text-lg pt-4">4: blackmoontattoocompany.com</p>
          <p className="text-lg pt-4">5: webelievewevote.com</p>
          <p className="text-lg pt-4">6: incitestrategies.credit</p>
          <p className="text-lg pt-4">7: chlnet.ca</p>
          <p className="text-lg pt-4">8: burgerprospect.com</p>
        </div>
      </section>
    </>
  );
};

export default About;
