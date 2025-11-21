import React from "react";
import Navigation from "./Navigation";
import HeroSection from "./HeroSection";
import VisionMissionCards from "./VisionMissionCards";
import ServicesSection from "./ServicesSection";
import Footer from "./Footer";

const Homepage: React.FC = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
      />
      <Navigation />
      {/* <HeroSection /> */}
      <main className="box-border p-0 m-0 w-full bg-white flex flex-col mb-10 mt-32 items-center">
        {/* <VisionMissionCards /> */}
        <ServicesSection />
      </main>
      <Footer />
    </>
  );
};

export default Homepage;
