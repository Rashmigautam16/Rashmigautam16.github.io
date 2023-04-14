import apnidukan from "../assets/apnidukan.gif";
import sephora from "../assets/sephora.gif";
import nykaa from "../assets/nykaa.gif";
import nearby from "../assets/nearby.gif";
import uboric from "../assets/uboric.gif";
import techgame from "../assets/techgame.gif";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import React from "react";
import "swiper/css";
import { RiShareForwardLine } from "react-icons/ri";
import { BsGithub } from "react-icons/bs";

const Project = () => {

  return (
    <div id="projects" className=" w-[90%] m-auto pt-8 ">
      <p className="text-3xl lg:text-5xl md:text-5xl font-black text-slate-400 underline underline-offset-8 py-20 lg:py-10 md:py-10 pt-48">
        Projects
      </p>
      <div className=" grid grid-col lg:grid-cols-3 md:grid-cols-2 gap-10 items-center justify-center">
        {
          project.map((el) => (
            <div key={el.id} data-aos="fade-up" className="h-[500px]   p-2  bg-gradient-to-b from-black to-gray-800 shadow-md shadow-gray-500 "  >
              <div>
                <p className="text-center text-xl text-white font-bold  hover:scale-110 hover:duration-300"> {el.name} </p>
              </div>
              <div className="w-[100%]  m-auto ">
                <img className="w-[100%] h-[200px]" src={el.image} alt={el.name} />
              </div>
              <div className="flex flex-col align-bottom  pt-4 h-[200px]">
                <p className="text-start text-[16px] tracking-wide ">{el.description}</p>
                <p className="text-start text-md font-bold  text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-slate-200 underline pt-3">
                  ◉ Tech Stack:{" "}
                  <span className=" ">{el.tech}</span>
                </p>
              </div>
              <div className="flex flex-row items-center justify-between text-gray-700 px-2">
                <a href={el.github} target="_blank" >
                  <button class="bg-gradient-to-r from-red-400 to-red-300 shadow-lg shadow-gray-500 py-2 px-4 rounded-md text-sm font-bold  hover:scale-110 hover:duration-300">
                    <p className="text-3xl "> <BsGithub /> </p>
                  </button>
                </a>
                <a href={el.netlify} target="_blank">
                  <button class="bg-gradient-to-r from-red-400 to-red-300 shadow-lg shadow-gray-500 py-2 px-4 rounded-md text-sm font-bold  hover:scale-110 hover:duration-300">
                    <p className=" text-3xl "><RiShareForwardLine /> </p>
                  </button>
                </a>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Project;

const project = [
  {
    name: "TECH MEMORY",
    image: techgame,
    description:
      "This is a Gaming Website which is created by total of four members in Hackathon in Masai within 48 hours.",
    tech: "TypeScript | Redux | ChakraUI | nodejs | Express | MongoDB | MongoDB-atlas",
    github: "https://github.com/AvinashPatel15/Warm-Dirt-3394-Hackathon",
    netlify: "https://tech-memory-game.vercel.app/",
  },
  {
    name: "NEARBY",
    image: nearby,
    description:
      "nearbuy.com is India’s first hyper-local online platform that enables customers and local merchants to discover and engage with each other.",
    tech: "ReactJS | Redux | ChakraUI | nodejs | Express | MongoDB | MongoDB-atlas",
    github: "https://github.com/vinaybarve/lying-blade-5948",
    netlify: "https://unrivaled-dolphin-8cc168.netlify.app/",
  },
  {
    name: "APNI DUKAN",
    image: apnidukan,
    description:
      "Apni Dukan is a one stop shop for all your fashion and lifestyle  needs. Being India's largest e-commerce store for fashion and  lifestyle products.",
    tech: "Typescript | Redux | ChakraUI",
    github: "https://github.com/Vishwa9011/moaning-act-434",
    netlify: "https://apnidukaan-9a863.web.app/",
  },
  {
    name: "PANACHE BEAUT",
    image: nykaa,
    description:
      "Nykaa is an Indian e-commerce company, It sells beauty, wellness and fashion products across websites, mobile apps and 100+ offline stores.",
    tech: "ReactJS | Redux | ChakraUI | Tailwind",
    github: "https://github.com/AdityaBr11/Nykaa-Clone",
    netlify: "https://superb-semifreddo-4541c0.netlify.app/",
  },
  {
    name: "UBORIC",
    image: uboric,
    description:
      "This project is a clone of Uboric website. Uboric is your digital shopping assistant dedicated to saving you time and money. ",
    tech: "HTML | CSS | JavaScript",
    github: "https://github.com/Rashmigautam16/Uboric",
    netlify: "https://stellular-baklava-184da6.netlify.app/",
  },
  {
    name: " SEPHORA",
    image: sephora,
    description:
      " Sephora is a French multinational retailer of personal care and beauty products. Featuring nearly 340 brands, along with its own private label, Sephora Collection.",
    tech: "HTML | CSS | JavaScript",
    github: "https://github.com/erGaurav13/Sephore-Clone",
    netlify: "https://sephora-nnnow-masai.netlify.app/homepage.html",
  },

];
