import React from "react";
import Header from "./Header";
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
      <Header />
      {/* <HeroSection /> */}
      <main className="box-border p-0 m-0 w-full bg-gradient-to-b from-[#E2F6FC] to-white flex flex-col mb-10 pt-32 max-md:pt-24 items-center">
        {/* <VisionMissionCards /> */}
        <ServicesSection />
      </main>
      <Footer />
    </>
  );
};

export default Homepage;
