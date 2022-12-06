import React from "react";
import "../style/skills.css";
const Skills = () => {
  return (
    <div id="skills">
      <h1 id="head">Skills</h1>
      <div id="aboutskills">
        <div data-aos="fade-up">
          <img
            src="https://chiranjeev-thapliyal.vercel.app/svg/html-5.svg"
            alt="html"
          />
          <h1>HTML</h1>
        </div>
        <div data-aos="fade-up">
          <img
            src="https://chiranjeev-thapliyal.vercel.app/svg/css3.svg"
            alt="css"
          />
          <h1>CSS</h1>
        </div>
        <div data-aos="fade-up">
          <img
            src="https://chiranjeev-thapliyal.vercel.app/svg/javascript.svg"
            alt="js"
          />
          <h1>JavaScript</h1>
        </div>
        <div data-aos="fade-up">
          <img
            src="https://chiranjeev-thapliyal.vercel.app/svg/reactjs.svg"
            alt="react"
          />
          <h1>React JS</h1>
        </div>
        <div data-aos="fade-up">
          <img
            src="https://chiranjeev-thapliyal.vercel.app/svg/redux.svg"
            alt="redux"
          />
          <h1>Redux</h1>
        </div>

        <div data-aos="fade-up">
          <img
            src="https://chiranjeev-thapliyal.vercel.app/svg/nodejs.svg"
            alt="node"
          />
          <h1>NodeJS</h1>
        </div>
        <div data-aos="fade-up">
          <img
            src="https://www.coffeeclass.io/logos/chakra-ui.png"
            alt="chakra"
          />
          <h1>Chakra ui</h1>
        </div>
        <div data-aos="fade-up">
          <img src="https://camo.githubusercontent.com/d2821617ebb471dac3033a3e0b8e17c692f6ed59c0c9ad8acdfa7562a6ea6a81/68747470733a2f2f63646e2e737667706f726e2e636f6d2f6c6f676f732f6769742d69636f6e2e737667" alt="github" />
        <h1>Github</h1>
        </div>
      </div>
    </div>
  );
};

export default Skills;
