import Header from "@/components/Header";
import HeroSection from "@/components/sukienbanchuyendat01/HeroSection";
import ProblemsSection from "@/components/sukienbanchuyendat01/ProblemsSection";
import ContentSection from "@/components/sukienbanchuyendat01/ContentSection";
import ValuesSection from "@/components/sukienbanchuyendat01/ValuesSection";
import PricingSection from "@/components/sukienbanchuyendat01/PricingSection";
import RegistrationSection from "@/components/sukienbanchuyendat01/RegistrationSection";
import StatsAndPartnersSection from "@/components/sukienbanchuyendat01/StatsAndPartnersSection";
import Footer from "@/components/sukienbanchuyendat01/Footer";

export default function SukienBanChuyenDat01Page() {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <HeroSection />
            <ProblemsSection />
            <ContentSection />
            <ValuesSection />
            <div className="bg-[#E2F6FC] py-16 lg:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-12">
                    <h2 className="text-3xl sm:text-4xl lg:text-[60px] font-semibold text-[#0D0F2C] text-center mb-12 lg:mb-16 leading-tight">
                        Thông tin vé tham gia sự kiện
                    </h2>
                    <PricingSection />
                </div>
            </div>
            <RegistrationSection />
            <StatsAndPartnersSection />
            <Footer />
        </div>
    );
}
