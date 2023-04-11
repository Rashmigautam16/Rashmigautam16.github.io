import rashmi from "../assets/rashmi.png";
import { BsGithub } from "react-icons/bs";
import Typeabout from "./TypeAbout";
import React from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import Social from "./Social";
import { Show } from "@chakra-ui/react";
import { AiOutlineDownload } from "react-icons/ai";
AOS.init();


const Home = () => {
  return (
    <div
      id="home"
      className=" "
    >
      <div className="w-[90%] md:w-[90%] lg:w-[90%] flex flex-col justify-center lg:justify-around md:justify-around py-36 items-center  mx-auto  lg:flex-row md:flex-row lg:pt-36 md:pt-36">
        <div className=" flex flex-col gap-3 md:w-[50%] ">
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-slate-100 text-3xl md:text-3xl lg:text-5xl  font-bold text-start">
            Hi!
          </h1>
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-slate-100 text-3xl md:text-3xl lg:text-5xl  font-bold text-start">
            I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-100">Rashmi Gautam</span>
          </h1>
          <div className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-slate-100 text-3xl md:text-3xl lg:text-4xl font-bold text-start">
            <Typeabout />
          </div>
          <Social />
          <div class="flex gap-4  ">
            <a href="Rashmi_Gautam_Resume.pdf" download="fw19_0825-Rashmi_Gautam_Resume" >
              <button class="bg-gradient-to-r from-red-400 to-red-200 shadow-lg shadow-red-400/50 py-2 px-4 rounded-xl text-sm font-bold">
                <p className=" flex justify-center" onClick={() => window.open("https://drive.google.com/file/d/1PfT5sY5IlpDLNQhTHrJiV0wGieTo7mFD/view?usp=sharing")}>RESUME <span className="text-xl">< AiOutlineDownload /></span></p>
              </button>
            </a>
          </div>
        </div>

        <div className="w-[80%] md:w-[40%] lg:[45%] flex justify-end items-center border-3 border-red-400 rounded-[20%] p-2" >
          <img className="w-[100%] h-[100%] rounded-[50%] border-3 border-red-400" src={rashmi} alt="Rashmi" />
        </div>

      </div>
    </div>
  );
};
export default Home;
