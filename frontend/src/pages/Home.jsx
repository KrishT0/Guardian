import React from "react";
import HeroSection from "../components/HomePage/hero/HeroSection";
import Survey from "../components/HomePage/survey/Survey";
import Feature from "../components/HomePage/feature/Feature";
import BussinessPricing from "../components/HomePage/bussinessPricing/BussinessPricing";
import Extra from "../components/HomePage/extraFeatures/Extra";
import Ebook from "../components/HomePage/ebook/Ebook";
import PreFooter from "../components/HomePage/links/PreFooter";

function Home() {
  return (
    <div>
      <HeroSection />
      <Survey />
      <Feature />
      <BussinessPricing />
      <Extra />
      <Ebook />
      <PreFooter />
    </div>
  );
}

export default Home;
