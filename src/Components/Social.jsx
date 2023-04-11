import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import "../style/about.css"
const Social = () => {

  return (
    <div className='flex py-2 gap-8 font-bold  '>
        <div >
          <a href="https://mail.google.com/mail/u/0/?fs=1&to=rashmigaut99@gmail.com&tf=cm" target="_black">
            <p className='bhart text-4xl text-slate-400 hover:scale-110 hover:duration-300'><MdOutlineEmail/></p>
          </a>
        </div>
       
        <div >
          <a href="https://github.com/Rashmigautam16" target="_black">
            <p className='bhart text-4xl text-slate-400  hover:scale-110 hover:duration-300'><BsGithub/></p>
          </a>
        </div>
        <div >
          <a href="https://www.linkedin.com/in/rashmi-gautam16/" target="_black">
            <p  className='bhart text-4xl hover:scale-110 hover:duration-300'><BsLinkedin /></p>
          </a>
        </div>
    </div>
  )
}

export default Social

///href="https://mail.google.com/mail/u/0/?fs=1&to=satansharma7549@gmail.com&tf=cm