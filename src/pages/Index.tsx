import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServiceCategories from "@/components/ServiceCategories";
import HowItWorks from "@/components/HowItWorks";
import PopularServices from "@/components/PopularServices";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import GrowBusiness from "@/components/GrowBusiness";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
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
  );
};

export default Index;
