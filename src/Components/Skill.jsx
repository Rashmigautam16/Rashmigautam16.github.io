import tailwind from "../assets/tailwind.jpeg";
import chakra from "../assets/chakra.jpg";
import nextjs from "../assets/nextjs.png";
import mongo from "../assets/mongo.jpeg";
import React from "react";
import "../style/skills.css";

const Skill = () => {
  const Skills = [
    {
      name: "",
      link: ""
    }
  ]
  return (
    <>
      <div id="skills" className="m-auto w-[90%]  lg:w-[90%] md:w-[80%] mt-1  lg:mt-20 md:mt-16 " >
        <h1 className="text-3xl lg:text-5xl md:text-5xl font-black text-slate-400 underline underline-offset-8 py-20 lg:py-10 md:py-10 pt-48">
          Skills
        </h1>
        <div className="container  grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 items-center justify-center lg:pl-8">
          <div className="cardskill ">
            <div className="content">
              <div className="front">
                <img
                  width="90%"
                  src="https://chiranjeev-thapliyal.vercel.app/svg/html-5.svg"
                  alt="html"
                />
              </div>
              <div className="back">
                <p>HTML</p>
              </div>
            </div>
          </div>
          <div className="cardskill">
            <div className="content">
              <div className="front">
                <img
                  width="90%"
                  src="https://chiranjeev-thapliyal.vercel.app/svg/css3.svg"
                  alt="css"
                />
              </div>
              <div className="back">
                <p>CSS</p>
              </div>
            </div>
          </div>
          <div className="cardskill">
            <div className="content">
              <div className="front">
                <img
                  width="90%"
                  src="https://chiranjeev-thapliyal.vercel.app/svg/javascript.svg"
                  alt="js"
                />
              </div>
              <div className="back">
                <p>JAVASCRIPT</p>
              </div>
            </div>
          </div>
          <div className="cardskill">
            <div className="content">
              <div className="front">
                <img
                  width="90%"
                  src="https://chiranjeev-thapliyal.vercel.app/svg/reactjs.svg"
                  alt="react"
                />
              </div>
              <div className="back">
                <p>REACT</p>
              </div>
            </div>
          </div>
          <div className="cardskill">
            <div className="content">
              <div className="front">
                <img
                  width="90%"
                  src="https://chiranjeev-thapliyal.vercel.app/svg/redux.svg"
                  alt="redux"
                />
              </div>
              <div className="back">
                <p>REDUX</p>
              </div>
            </div>
          </div>
          <div className="cardskill">
            <div className="content">
              <div className="front">
                <img
                  width="90%"
                  src="https://chiranjeev-thapliyal.vercel.app/svg/nodejs.svg"
                  alt="node"
                />
              </div>
              <div className="back">
                <p>NODE</p>
              </div>
            </div>
          </div>
          <div className="cardskill">
            <div className="content">
              <div className="front">
                <img
                  width="90%"
                  src="https://camo.githubusercontent.com/d2821617ebb471dac3033a3e0b8e17c692f6ed59c0c9ad8acdfa7562a6ea6a81/68747470733a2f2f63646e2e737667706f726e2e636f6d2f6c6f676f732f6769742d69636f6e2e737667"
                  alt="github"
                />
              </div>
              <div className="back">
                <p>GITHUB</p>
              </div>
            </div>
          </div>
          <div className="cardskill">
            <div className="content">
              <div className="front">
                <img
                  width="70%"
                  src="https://camo.githubusercontent.com/94890eb1b8c3ce19ea73189dade730fa967a8fe08899f25cab17b57a5d4339dc/68747470733a2f2f70726f66696c696e61746f722e7269736861762e6465762f736b696c6c732d6173736574732f747970657363726970742d6f726967696e616c2e737667"
                  alt="typescript"
                />
              </div>
              <div className="back">
                <p>TYPE SCRIPT</p>
              </div>
            </div>
          </div>
          <div className="cardskill">
            <div className="content">
              <div className="front">
                <img width="90%" src="https://avinashpatel15.github.io/static/media/mongodb.967712d43604435a706f.png" alt="mongo" />
              </div>
              <div className="back">
                <p>MONGO DB</p>
              </div>
            </div>
          </div>
          <div className="cardskill">
            <div className="content">
              <div className="front">
                <img width="70%" src={nextjs} alt="nextjs" />
              </div>
              <div className="back">
                <p>NEXT JS</p>
              </div>
            </div>
          </div>
          <div className="cardskill">
            <div className="content">
              <div className="front">
                <img
                  width="70%"
                  src={chakra}
                  alt="chakra"
                />
              </div>
              <div className="back">
                <p>CHAKRA UI</p>
              </div>
            </div>
          </div>
          <div className="cardskill">
            <div className="content">
              <div className="front">
                <img width="70%" src={tailwind} alt="nextjs" />
              </div>
              <div className="back">
                <p>TAILWIND CSS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="skills"
        className="m-auto w-[90%]  lg:w-[90%] md:w-[80%] mt-1  lg:mt-20 md:mt-16 "
      >

        <h1 className="text-3xl lg:text-5xl md:text-5xl font-black text-slate-400 underline underline-offset-8 py-20 lg:py-10 md:py-10 pt-48">
          Tools
        </h1>
        <div className="container  grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 items-center justify-center lg:pl-8">
          <div className="cardskill ">
            <div className="content">
              <div className="front">
                <img
                  width="90%"
                  src="https://avinashpatel15.github.io/static/media/vscode.9c882ad5badc1ff1af21.png"
                  alt="VS code"
                />
              </div>
              <div className="back">
                <p>VS CODE</p>
              </div>
            </div>
          </div>
          <div className="cardskill">
            <div className="content">
              <div className="front">
                <img
                  width="90%"
                  src="https://img.stackshare.io/service/5739/atlas-360x360.png"
                  alt="mongodb atlas"
                />
              </div>
              <div className="back">
                <p>MONGODB ATLAS</p>
              </div>
            </div>
          </div>
          <div className="cardskill">
            <div className="content">
              <div className="front">
                <img
                  width="90%"
                  src="https://docs.cyclic.sh/img/logo-light.png"
                  alt="js"
                />
              </div>
              <div className="back">
                <p>CYCLIC.SH</p>
              </div>
            </div>
          </div>
          <div className="cardskill">
            <div className="content">
              <div className="front">
                <img
                  width="90%"
                  src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/postman-icon.png"
                  alt="postman"
                />
              </div>
              <div className="back">
                <p>POSTMAN</p>
              </div>
            </div>
          </div>
          <div className="cardskill">
            <div className="content">
              <div className="front">
                <img
                  width="90%"
                  src="https://camo.githubusercontent.com/d2821617ebb471dac3033a3e0b8e17c692f6ed59c0c9ad8acdfa7562a6ea6a81/68747470733a2f2f63646e2e737667706f726e2e636f6d2f6c6f676f732f6769742d69636f6e2e737667"
                  alt="github"
                />
              </div>
              <div className="back">
                <p>GITHUB</p>
              </div>
            </div>
          </div>
          <div className="cardskill">
            <div className="content">
              <div className="front">
                <img
                  width="90%"
                  src="https://avinashpatel15.github.io/static/media/Netlify.63d286a96086fbcce027.png"
                  alt="Netlify"
                />
              </div>
              <div className="back">
                <p>NETLIFY</p>
              </div>
            </div>
          </div>
          <div className="cardskill">
            <div className="content">
              <div className="front">
                <img
                  width="90%"
                  src="https://camo.githubusercontent.com/add2c9721e333f0043ac938f3dadbc26a282776e01b95b308fcaba5afaf74ae3/68747470733a2f2f6173736574732e76657263656c2e636f6d2f696d6167652f75706c6f61642f76313538383830353835382f7265706f7369746f726965732f76657263656c2f6c6f676f2e706e67"
                  alt="github"
                />
              </div>
              <div className="back">
                <p>Vercel</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Skill;
