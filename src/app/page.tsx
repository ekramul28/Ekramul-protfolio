import Banner from "@/components/banner/Bannae";
import Navbar from "@/components/navber/navber";
import React from "react";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar />
      <Banner></Banner>
    </div>
  );
};

export default Home;
