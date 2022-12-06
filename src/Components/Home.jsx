import React from "react";
import "../style/home.css";
import { Box, GridItem, Image, SimpleGrid, Text } from "@chakra-ui/react";
import rashmiProfile from "../rashmiProfile.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Home = () => {
  return (
    <div id="home">
      <div id="intro">
        <h1>Hello 👋 </h1>
        <div data-aos="fade-up">
          My name is Rashmi Gautam.
        </div>
        <div data-aos="fade-up">
          I am a full stack web developer.
        </div>
      </div>
      <div data-aos="fade-up">
        <img
          src={rashmiProfile}
          alt="Rashmi"
          className="img-boxes"
          width="400px"
          id="image"
        />
      </div>
    </div>
  );
};

export default Home;
