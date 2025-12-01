"use client";

import Header from "@/components/sukienbanchuyendat02/Header";
import HeroSection from "@/components/sukienbanchuyendat02/HeroSection";
import ProblemsSection from "@/components/sukienbanchuyendat02/ProblemsSection";
import ContentSection from "@/components/sukienbanchuyendat02/ContentSection";
import ValuesSection from "@/components/sukienbanchuyendat02/ValuesSection";
import SpeakersSection from "@/components/sukienbanchuyendat02/SpeakersSection";
import PricingSection from "@/components/sukienbanchuyendat02/PricingSection";
import RegistrationSection from "@/components/sukienbanchuyendat02/RegistrationSection";
import StatsAndPartnersSection from "@/components/sukienbanchuyendat02/StatsAndPartnersSection";
import Footer from "@/components/sukienbanchuyendat02/Footer";
import { useState } from "react";
import { useScrollTracking } from "@/hooks/useScrollTracking";

export default function SukienBanChuyenDat01Page() {
    const [selectedPackage, setSelectedPackage] = useState<string | null>(null);

    // Track scroll depth for all major sections
    useScrollTracking([
        'hero',
        'problems',
        'content',
        'values',
        'speakers',
        'pricing',
        'register',
        'stats'
    ]);

    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div id="hero">
          <HeroSection />
        </div>
        <div id="problems">
          <ProblemsSection />
        </div>
        <div id="content">
          <ContentSection />
        </div>
        <div id="values">
          <ValuesSection />
        </div>
        <div id="speakers">
          <SpeakersSection />
        </div>
        <div id="pricing" className="bg-[#E2F6FC] py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12">
            <h2 className="text-3xl sm:text-4xl lg:text-[60px] font-semibold text-[#0D0F2C] text-center mb-12 lg:mb-16 leading-tight">
              Thông tin vé tham gia sự kiện
            </h2>
            <PricingSection />
          </div>
        </div>
        <div className="bg-[#E2F6FC] py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12">
            <h2 className="text-3xl sm:text-4xl lg:text-[60px] font-semibold text-[#0D0F2C] text-center mb-12 lg:mb-16 leading-tight">
              Thông tin vé tham gia sự kiện
            </h2>
            <PricingSection />
          </div>
        </div>
        <div id="register">
          <RegistrationSection />
        </div>
        <div id="stats">
        <StatsAndPartnersSection />
        </div>
        <Footer />
      </div>
    );
}
