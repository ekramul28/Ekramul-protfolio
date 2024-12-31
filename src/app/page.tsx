import About from "@/components/about/About";
import Banner from "@/components/banner/Bannae";
import Container from "@/components/container/Container";
import Navbar from "@/components/navber/navber";
import Skills from "@/components/skill/Skill";
import React from "react";

const Home = () => {
  return (
    <div>
      <Container>
        <Navbar />
        <Banner />
        <About />
        <Skills />
      </Container>
    </div>
    //
  );
};

export default Home;
