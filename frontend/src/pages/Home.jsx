import React from "react";
import HeroSection from "../components/Home/hero/HeroSection";
import Survey from "../components/Home/survey/Survey";
import Feature from "../components/Home/feature/Feature";
import BussinessPricing from "../components/Home/bussinessPricing/BussinessPricing";
import Extra from "../components/Home/extraFeatures/Extra";
import Ebook from "../components/Home/ebook/Ebook";

function Home() {
  return (
    <div>
      <HeroSection />
      <Survey />
      <Feature />
      <BussinessPricing />
      <Extra />
      <Ebook />
    </div>
  );
}

export default Home;
