import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Categories from "@/components/Categories";
import HowItWorks from "@/components/HowItWorks";
import Benefits from "@/components/Benefits";
import DownloadCTA from "@/components/DownloadCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <Categories />
      <HowItWorks />
      <Benefits />
      <DownloadCTA />
      <Footer />
    </main>
  );
};

export default Index;
