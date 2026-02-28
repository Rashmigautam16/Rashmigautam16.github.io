import tailwind from "../assets/tailwind.jpeg";
import chakra from "../assets/chakra.jpg";
import nextjs from "../assets/nextjs.png";
import "../style/skills.css";
import html from "../assets/html.png";
import github from "../assets/github.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import redux from "../assets/redux.png";
import nodejs from "../assets/nodejs.png";
import typescript from "../assets/typescript.png";
import sql from "../assets/sql.png";

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
                  src={html}
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
                  src={css}
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
                  src={javascript}
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
                  src={react}
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
                  src={redux}
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
                  src={nodejs}
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
                  src={github}
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
                  src={typescript}
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
                <img width="90%" src={sql} alt="sql" />
              </div>
              <div className="back">
                <p>SQL</p>
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
          {/* <div className="cardskill">
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
          </div> */}
          {/* <div className="cardskill">
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
          </div> */}
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
                  src={github}
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
          {/* <div className="cardskill">
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
          </div> */}

        </div>
      </div>
    </>
  );
};

export default Skill;
