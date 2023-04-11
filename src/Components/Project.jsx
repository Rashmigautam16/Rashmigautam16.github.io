import apnidukan from "../assets/apnidukan.gif";
import sephora from "../assets/sephora.gif";
import nykaa from "../assets/nykaa.gif";
import nearby from "../assets/nearby.gif";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import React from "react";
import "swiper/css";
import { SiNetlify } from "react-icons/si";
import { BsGithub } from "react-icons/bs";

const Project = () => {
  const project = [ 
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
      image:  apnidukan ,
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
      name: " SEPHORA",
      image: sephora,
      description:
        " Sephora is a French multinational retailer of personal care and beauty products. Featuring nearly 340 brands, along with its own private label, Sephora Collection.",
      tech: "HTML | CSS | JavaScript",
      github: "https://github.com/erGaurav13/Sephore-Clone",
      netlify: "https://sephora-nnnow-masai.netlify.app/homepage.html",
    },
    
  ];

  return (
    <div id="projects" className=" w-[90%] m-auto pt-8 ">
      <p className="text-3xl lg:text-5xl md:text-5xl font-black text-slate-400 underline underline-offset-8 py-20 lg:py-10 md:py-10 pt-48">
        Projects
      </p>
      <div className=" grid grid-col lg:grid-cols-3 md:grid-cols-2 gap-16 items-center justify-center">
        {
          project.map((el)=>(
         <div key={el.id} data-aos="fade-up" className="h-[500px] flex flex-col gap-3 p-2  bg-gradient-to-b from-black to-gray-800 shadow-md shadow-white "  >
          <p className="text-center text-xl text-white font-bold  hover:scale-110 hover:duration-300"> {el.name} </p>
          <div className="w-[100%] m-auto ">
            <img src={el.image} alt={el.name} />
          </div>
          <div className=" ">
            <p className="text-start text-[16px]  tracking-wide ">{el.description}</p>

            <p className="text-start text-md font-bold  text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-slate-200 underline pt-3">
              ◉Tech Stack:{" "}
              <span className=" font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-300">{el.tech}</span>
            </p>
            <div className="flex flex-row items-center justify-between ">
              <a href={el.github} target="_blank" >
                <button class="bg-gradient-to-r from-red-400 to-red-200 shadow-lg shadow-red-400/50 py-1 my-2 px-4 rounded-xl text-sm font-bold  hover:scale-110 hover:duration-300">
                  <p className="text-gray-900 text-3xl "> <BsGithub /> </p>
                </button>
              </a>
              <a href={el.netlify} target="_blank">
                <button class="bg-gradient-to-r from-red-400 to-red-200 shadow-lg shadow-red-400/50 py-1 my-2 px-4 rounded-xl text-sm font-bold  hover:scale-110 hover:duration-300">
                  <p className="text-gray-900 text-3xl "><SiNetlify /> </p>
                </button>
              </a>
            </div>
          </div>
           </div>
          ))
        }
      </div>
    </div>
  );
};

export default Project;

