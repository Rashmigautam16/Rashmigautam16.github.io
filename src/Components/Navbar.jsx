import "../style/navbar.css"
import {Link} from "react-scroll"
import React from 'react'

import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';

import { HamburgerIcon } from '@chakra-ui/icons';


const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box  px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
          bg={"black"}
            size={'md'}
            icon={ <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={"20"} alignItems={'center'} fontSize="16px" fontWeight={"bold"}>
          <Link activeClass="active" to="home" spy={true} smooth={true} offset={50} duration={1000} ><i class="fa fa-chevron-left" aria-hidden="true"></i> Rashmi <span>/ </span><i class="fa fa-chevron-right" aria-hidden="true"></i></Link>
            <HStack
              as={'nav'}
              spacing={50}
              display={{ base: 'none', md: 'flex' }}>
            <Link activeClass="active" to="home" spy={true} smooth={true} offset={50} duration={1000} >Home </Link>
            <Link activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={1000}>About</Link>
            <Link activeClass="active" to="skills" spy={true} smooth={true} offset={50} duration={1000}>Skills</Link>
            <Link activeClass="active" to="project" spy={true} smooth={true} offset={50} duration={1000}>Project</Link>
            <Link activeClass="active" to="contact" spy={true} smooth={true} offset={50} duration={1000}>Contact</Link>
      
            </HStack>
          </HStack>
         
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4} fontSize="16px" fontWeight={"bold"}>
            <Link activeClass="active" to="home" spy={true} smooth={true} offset={50} duration={1000} >Home </Link>
            <Link activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={1000}>About</Link>
            <Link activeClass="active" to="skills" spy={true} smooth={true} offset={50} duration={1000}>Skills</Link>
            <Link activeClass="active" to="project" spy={true} smooth={true} offset={50} duration={1000}>Project</Link>
            <Link activeClass="active" to="contact" spy={true} smooth={true} offset={50} duration={1000}>Contact</Link>
            </Stack>
          </Box>
        ) : null}
      </Box>

      {/* <Box p={4}>Main Content Here</Box> */}
    </>
  );
}


//   function myFunction() {
//     var x = document.getElementById("myTopnav");
//     if (x.className === "topnav") {
//       x.className += " responsive";
//     } else {
//       x.className = "topnav";
//     }
//   }
  
//   return (
  
      
// <div className="topnav" id="myTopnav">
//   <Link className="name"><i class="fa fa-chevron-left" aria-hidden="true"></i> Rashmi <span></span><i class="fa fa-chevron-right" aria-hidden="true"></i>   </Link>
//   <Link className="link"  href="/" spy={true} smooth={true} offset={50} duration={500}>Home</Link>
//   <Link className="link" href="/about" spy={true} smooth={true} offset={50} duration={500}>About</Link>
//   <Link className="link" href="/skills" spy={true} smooth={true} offset={50} duration={500}>Skills</Link>
//   <Link className="link" href="/projects" spy={true} smooth={true} offset={50} duration={500}>Projects</Link>
//   <Link className="link" href="/contact" spy={true} smooth={true} offset={50} duration={500}>Contact</Link>

 
// <Link href="javascript:void(0);" className="icon" onClick={myFunction}>
//     <i className="fa fa-bars"></i>
//   </Link>
// </div>
    
//   )
// }

// export default Navbar