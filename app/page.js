import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";

import CarCards from "../components/CarCards";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />

      <CarCards />
    </div>
  );
};

export default Home;
