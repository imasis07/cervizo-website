import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServiceCategories from "@/components/ServiceCategories";
import HowItWorks from "@/components/HowItWorks";
import PopularServices from "@/components/PopularServices";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import GrowBusiness from "@/components/GrowBusiness";
import MobileHeader from "@/mobile/MobileHeader";
import MobileHero from "@/mobile/MobileHero";
import MobileServiceCategories from "@/mobile/MobileServiceCategories";
import MobileHowItWorks from "@/mobile/MobileHowItWorks";
import MobilePopularServices from "@/mobile/MobilePopularServices";
import MobileEmergencyServices from "@/mobile/MobileEmergencyServices";
//import MobileCTASection from "@/mobile/MobileCTASection";
import MobileFooter from "@/mobile/MobileFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">

      {/* ================= DESKTOP UI ================= */}
      <div className="hidden lg:block">
        <Header />
        <main>
          <Hero />
          <ServiceCategories />
          <HowItWorks />
          <PopularServices />
          <GrowBusiness />
          <CTASection />
        </main>
        <Footer />
      </div>
      {/* ================= MOBILE UI ================= */}
      <div className="block lg:hidden">
        <MobileHeader />
        <MobileHero />
        <MobileServiceCategories />
        <MobileHowItWorks />
        <MobilePopularServices />
        <MobileEmergencyServices />
       {/*  <MobileCTASection />  */}
       <MobileFooter />
      </div>
    </div>
  );
};

export default Index;
