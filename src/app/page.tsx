// pages/index.tsx or your Home component
import React from "react";
import About from "@/components/about/About";
import BlogSection from "@/components/blog/blog";
import ContactMe from "@/components/Contact/Contact";
import Container from "@/components/container/Container";
import Footer from "@/components/Footer/Footer";
import GoToTopButton from "@/components/GotoTop/GoToTop";
import Navbar from "@/components/navber/navber";
import Projects from "@/components/Project/Project";
import Qualification from "@/components/Qualification/Qualification";
import Skills from "@/components/skill/Skill";
import Banner from "@/components/banner/Bannae";

const Home = () => {
  return (
    <div>
      <Container>
        <Navbar />
        <section id="home">
          <Banner />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact-me">
          <ContactMe />
        </section>
        <section id="blog">
          <BlogSection />
        </section>
        <section id="qualification">
          <Qualification />
        </section>
        <GoToTopButton />
      </Container>
      <Footer />
    </div>
  );
};

export default Home;
