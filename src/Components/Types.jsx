import { Box } from '@chakra-ui/react';
import React from 'react'
import Typewriter from "typewriter-effect";

const Types = () => {

  return (
    
         <>
            <Box    color='#fb982f' >
        <Typewriter 
        options={{
            strings:[ 'Full Stack web Developer....','Coder....','Web Developer..'],
            autoStart: true,
            loop: true,
            deleteSpeed: 200,  
            delay:500, 
            
        }}
        />
        </Box>
          </>
   
  )
}

export default Types