import React from "react";
import "../style/home.css";

import { Box, Button, GridItem, Image, SimpleGrid, Text } from "@chakra-ui/react";

import rashmiProfile from "../rashmiProfile.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";
import Types from "./Types";
AOS.init();

const Home = () => {
  return (
    <div id="home">
      <div id="intro">
        <h1>Hello 👋</h1>
        <h2>
          My name is <span className="span">Rashmi Gautam</span>
        </h2>
        <div id="type">
          <div>I'm a  </div>
          <Types/>
       </div>
        <Button id="resume"><a href="https://drive.google.com/uc?id=1LbCRoGDnppvKj5Z4SWh2CSh3xDv0lPmt&export=download" download >RESUME</a></Button>
      </div>
      <div>
        <img src={rashmiProfile} alt="rashmi" id="image" />
      </div>
    </div>
  );
};

export default Home;
