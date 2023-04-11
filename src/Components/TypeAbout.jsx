import React from 'react'
import { Typewriter } from "react-simple-typewriter";

const Typeabout = () => {

  return (
    
      <>
        <Typewriter 
                  words={[
                    "a Full Stack Web Developer.",
                    "a Professional Coder.",
                    "a Fast Learner.",
                  ]}
                  loop={500000}
                  cursor
                  cursorColor='text-white-300'
                  cursorStyle="|"
                  typeSpeed={90}
                  deleteSpeed={70}
                  delaySpeed={3000}
                />
      
        </>
        
   
  )
}

export default Typeabout