import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import { ImLocation2 } from "react-icons/im";

const Contact = () => {
  return (
    <div name="contact" className="w-full h-auto py-10 ">
      <div className="flex flex-col p-4 justify-center mx-auto h-full md:w-[90%]">
        <div className="pb-4">
          <h1 className="text-3xl lg:text-5xl md:text-5xl pb-20 font-black text-slate-400 underline underline-offset-8 ">
            Contact
          </h1>

          <p className="text-gray-400 text-lg">Get in touch with me </p>
         
        </div>
        <div className="">
          <div className="flex flex-col py-2 gap-8 font-bold  ">
            <div className="flex items-center gap-3  text-slate-400 ">
              <div className="flex items-center gap-2">
              < BsFillTelephoneFill className="text-2xl" />
              <p>Phone:</p>
              </div>
              <p>+91-8800428073</p>
            </div>
            <div className="flex items-center gap-3  text-slate-400 ">
              <div  className="flex items-center gap-2">
                <ImLocation2 className="text-2xl" />
                <p>Location:</p>
              </div>
              <p> Delhi</p>
            </div>
            <div className="flex items-center gap-3 text-slate-400 ">
              <a href="https://mail.google.com/mail/u/0/?fs=1&to=rashmigaut99@gmail.com&tf=cm" target="_black">
                <div className="flex items-center gap-2">
                  <MdOutlineEmail  className=" text-2xl " />
                  <p>Email:</p>
                </div>
              </a>
              <p>rashmigaut99@gmail.com</p>
            </div>

            <div className="flex items-center gap-3  text-slate-400  ">
              <a href="https://github.com/Rashmigautam16" target="_black">
                <div className="flex items-center gap-2">
                  <BsGithub className=" text-2xl" />
                  <p>Github:</p>
                </div>
              </a>
              <p>github.com/Rashmigautam16</p>
            </div>
            <div className="flex items-center gap-3  text-slate-400  ">
              <a
                href="https://www.linkedin.com/in/rashmi-gautam16/"
                target="_black"
              >
                <div className="flex items-center gap-2">
                  <BsLinkedin className=" text-2xl text-slate-400  " />
                  <p>Linkedin:</p>
                </div>
              </a>
              <p>www.linkedin.com/in/rashmi-gautam16</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
