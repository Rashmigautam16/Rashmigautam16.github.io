import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import { ImLocation2 } from "react-icons/im";
import "../style/about.css"
const Contact = () => {
  return (
    <div name="contact" className="w-full h-auto pt-10">
      <div className="flex flex-col p-4 justify-center mx-auto h-full md:w-[90%]">
        <div className="pb-4">
          <h1 className="text-3xl lg:text-5xl md:text-5xl pb-20 font-black text-slate-400 underline underline-offset-8 ">
            Contact
          </h1>

          <p >Get in touch with me </p>
         
        </div>
        <div className="">
          <div className="flex flex-col py-2 gap-8 font-bold  ">
            <div className="flex items-center gap-3">
              <p className="bhart text-3xl text-slate-400 "><BsFillTelephoneFill /></p>
              <p>: +91-8800428073</p>
            </div>
            <div className="flex items-center gap-3">
              <p className="bhart text-3xl text-slate-400 "><ImLocation2 /></p>
              <p>: Delhi</p>
            </div>
            <div className="flex items-center gap-3">
              <a href="https://mail.google.com/mail/u/0/?fs=1&to=rashmigaut99@gmail.com&tf=cm" target="_black">
                <p className="bhart text-4xl text-slate-400 ">
                  <MdOutlineEmail />
                </p>
              </a>
              <p> : rashmigaut99@gmail.com</p>
            </div>

            <div className="flex items-center gap-3">
              <a href="https://github.com/Rashmigautam16" target="_black">
                <p className="bhart text-4xl text-slate-400  ">
                  <BsGithub />
                </p>
              </a>
              <p> : github.com/Rashmigautam16</p>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/rashmi-gautam16/"
                target="_black"
              >
                <p className=" text-4xl text-slate-400  ">
                  <BsLinkedin />
                </p>
              </a>
              <p> : www.linkedin.com/in/rashmi-gautam16</p>
            </div>
          </div>
          {/* <div className=" flex justify-center items-center md:mt-18">
            <form
              action="https://formsubmit.co/67a53f8326e721afe0cd046d52db1c82"
              method="POST"
              className=" flex flex-col w-full md:w-1/2"
            >
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              />
              <input
                type="text"
                name="email"
                placeholder="Enter your email"
                className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              />
              <textarea
                name="message"
                placeholder="Enter your message"
                rows="10"
                className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              ></textarea>

              <button className="bg-gradient-to-r from-red-400 to-red-200 shadow-lg shadow-red-400/50 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
                Let's talk
              </button>
            </form>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
