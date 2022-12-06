import React from "react";
import "../style/about.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const About = () => {
  return (
    <div className="about">
      <h1 id="head">About me</h1>
      <div id="aboutContain">
        <div data-aos="fade-up">
          <img
            alt="Coding"
            width="600"
            src="https://camo.githubusercontent.com/5ddf73ad3a205111cf8c686f687fc216c2946a75005718c8da5b837ad9de78c9/68747470733a2f2f7468756d62732e6766796361742e636f6d2f4576696c4e657874446576696c666973682d736d616c6c2e676966"
          />
        </div>
        <div>
          <h1  data-aos="fade-up">I am Rashmi Gautam</h1>
          <h2  data-aos="fade-up">I'm a Full-Stack Web Developer</h2>
          <h3  data-aos="fade-up">passionated to build website and I Love to work upon creative things. A full-stack React Js developer trained by Masai School, Bengaluru.</h3>
        </div>
      </div>
    </div>
  );
};

export default About;
