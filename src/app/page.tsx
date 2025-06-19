// pages/index.tsx or your Home component
import React from "react";
import About from "@/components/about/About";
import BlogSection from "@/components/blog/blog";
import ContactMe from "@/components/Contact/Contact";
import Container from "@/components/container/Container";
import Footer from "@/components/Footer/Footer";
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
        <section id="home" className="scroll-mt-14">
          <Banner />
        </section>
        <section id="about" className="scroll-mt-14">
          <About />
        </section>
        <section id="skills" className="scroll-mt-14">
          <Skills />
        </section>
        <section id="projects" className="scroll-mt-14">
          <Projects />
        </section>
        <section id="contact-me" className="scroll-mt-14">
          <ContactMe />
        </section>
        <section id="blog" className="scroll-mt-14">
          <BlogSection />
        </section>
        <section id="qualification" className="scroll-mt-14">
          <Qualification />
        </section>
      </Container>
      <Footer />
    </div>
  );
};

export default Home;
