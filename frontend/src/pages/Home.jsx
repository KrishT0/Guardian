import React from "react";
import HeroSection from "../components/HomePage/hero/HeroSection";
import Survey from "../components/HomePage/survey/Survey";
import Feature from "../components/HomePage/feature/Feature";
import BussinessPricing from "../components/HomePage/bussinessPricing/BussinessPricing";
import Extra from "../components/HomePage/extraFeatures/Extra";

function Home() {
  return (
    <div>
      <HeroSection />
      <Survey />
      <Feature />
      <BussinessPricing />
      <Extra />
    </div>
  );
}

export default Home;
