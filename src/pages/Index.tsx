import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AppShowcase from "@/components/AppShowcase";
import AISection from "@/components/AISection";
import FeaturesGrid from "@/components/FeaturesGrid";
import ProgressSection from "@/components/ProgressSection";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <AppShowcase />
      <AISection />
      <FeaturesGrid />
      <ProgressSection />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
