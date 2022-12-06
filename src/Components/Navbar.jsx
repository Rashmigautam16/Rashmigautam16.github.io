import "../style/navbar.css"
import {Link} from "react-scroll"
import React from 'react'

const Navbar = () => {

  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  
  return (
  
      
<div className="topnav" id="myTopnav">
  <a className="link">Rashmi Gautam</a>
  <Link className="link"  to="/" spy={true} smooth={true} offset={50} duration={500}>Home</Link>
  <Link className="link" to="/about" spy={true} smooth={true} offset={50} duration={500}>About</Link>
  <Link className="link" to="/skills" spy={true} smooth={true} offset={50} duration={500}>Skills</Link>
  <Link className="link" to="/projects" spy={true} smooth={true} offset={50} duration={500}>Projects</Link>
  <Link className="link" to="/contact" spy={true} smooth={true} offset={50} duration={500}>Contact</Link>

 
<a href="javascript:void(0);" className="icon" onClick={myFunction}>
    <i className="fa fa-bars"></i>
  </a>
</div>
    
  )
}

export default Navbar