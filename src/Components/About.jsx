import gifabout from "../assets/gifabout.gif";
import React from "react";
import "aos/dist/aos.css";
import AOS from "aos";

AOS.init();

const About = () => {
  return (
    <div
      id="about"
      className=" w-[90%] m-auto"
    >
      <h1 className="text-3xl lg:text-5xl md:text-5xl pb-20 font-black text-slate-400 underline underline-offset-8 ">
        About
      </h1>

      <div className="  m-auto  md:flex-row sm:flex-col bg-black shadow-md shadow-gray-500  bg-gradient-to-r from-black to-gray-800">
        <div className="flex flex-col items-center justify-around w-[100%] py-6 lg:flex-row md:flex-row ">
          <div className=" w-[70%] lg:w-[40%] md:w-[40%] rounded-2xl ">
            <img className="w-100% rounded-2xl" src={gifabout} alt="aboutus" />
          </div>
          <div className="w-[100%] lg:w-[50%] md:w-[50%] pb-8 ">
        
           
            <p  className=" p-2 md:p-0 text-md flex text-left lg:text-xl md:text-base  font-sans md:font-seri font-wider  ">
              {" "}
              A passionate React JS Front-End Web Developer, Dedicated to
              developing robust applications that interact with the front-end
              part of web applications. Extensive expertise in website
              architecture, design, and web design, and web API designs.
              Problem-solving mindset with a goal to optimize my application for
              better stability and speed. Love to work in a team.
            </p>
          </div>
        </div>
      </div>
    
    </div>
  );
};

export default About;
