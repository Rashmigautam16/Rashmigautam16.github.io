import { Box, Flex, Heading, Hide, IconButton, Show, Stack, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import "../style/navbar.css"
import { Link } from "react-scroll"
import { AiOutlineDownload } from 'react-icons/ai'
import { HamburgerIcon } from '@chakra-ui/icons'


const Navbaar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const Head = [
        {
            name: "Home",
            to: "home"
        },
        {
            name: "About",
            to: "about"
        },
        {
            name: "Skills",
            to: "skills"
        },
        {
            name: "Projects",
            to: "projects"
        },
        {
            name: "Contact",
            to: "contact"
        }
    ]

    return (
        <Box bg="Black" w="100%" id="navtop" >
            <Hide below='md'>
                <Flex justifyContent={"space-between"} alignItems={"center"} w="95%" h={"20"} m="auto" >
                    <Flex >
                        <Link activeClass="active" to="home" spy={true} smooth={true} offset={50} duration={1000} >
                            <Heading id="name"  >Rashmi</Heading>
                        </Link>
                    </Flex>
                    <Flex alignItems={"center"} gap="10">
                        {
                            Head.map((el) => (
                                <Link className="cursor-pointer" activeClass="active" to={el.to} spy={true} smooth={true} offset={50} duration={1500}>
                                    <Text fontSize={"lg"} className="text-white text-4xl hover:text-slate-400 hover:scale-110 hover:duration-300" >{el.name}</Text>
                                </Link>

                            ))
                        }

                        <Flex as="h1" size={{ base: "md", md: "lg" }}  >
                            <a href="Rashmi_Gautam_Resume.pdf" download="fw19_0825-Rashmi_Gautam_Resume" >
                                <button class="bg-gradient-to-r from-red-400 to-red-300 shadow-lg shadow-gray-500 py-3 px-4 rounded-md text-sm font-bold text-white">
                                    <p className=" flex justify-center" onClick={() => window.open("https://drive.google.com/drive/folders/1K51AnWY03x3COr-MEHBKllCoNFgRTRJf?usp=sharing")}>RESUME <span className="text-xl">< AiOutlineDownload /></span></p>
                                </button>
                            </a>
                        </Flex>

                    </Flex>
                </Flex>
            </Hide>

            {/* show in small size screen*/}
            <Show below='md'>
                <Flex justifyContent={"space-between"} h={"20"} w="95%" m="auto">
                    <Flex alignItems={"center"}>
                        <Link activeClass="active" to="home" spy={true} smooth={true} offset={50} duration={1000} >
                            <Heading id="name" >Rashmi</Heading>
                        </Link>
                    </Flex>
                    <Flex alignItems={"center"}>
                        <IconButton alignItems={"center"} class="bg-gradient-to-r from-red-400 to-red-200 shadow-lg shadow-red-400/50 px-2 rounded-xl font-bold text-4xl pb-1" colorScheme='orange' icon={<HamburgerIcon />} aria-label={'Open Menu'}
                            onClick={isOpen ? onClose : onOpen}
                        />

                    </Flex>
                </Flex>
            </Show>

            {isOpen ? (
                <Box display={{ md: 'none' }}  >
                    <Flex p="6" gap={"16"} flexDir="column" height={"100vh"}>
                        {
                            Head.map((el) => (
                                <Link className="cursor-pointer" activeClass="active" to={el.to} spy={true} smooth={true} offset={50} duration={1500}>
                                    <Text fontSize={"20px"} className="text-white text-4xl hover:text-slate-400 hover:scale-y-110 hover:duration-300">{el.name}</Text>
                                </Link>

                            ))             
                        }
                    </Flex>
                </Box>
            ) : null}
        </Box>
    )
}

export default Navbaar