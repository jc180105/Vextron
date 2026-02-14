import HeroSection from "./components/HeroSection";
import AuthorityBanner from "./components/AuthorityBanner";
import BentoGridFeatures from "./components/BentoGridFeatures";
import WhyVextron from "./components/WhyVextron";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="min-h-screen bg-[#09090b] text-white">
      <HeroSection />
      <AuthorityBanner />
      <BentoGridFeatures />
      <WhyVextron />
      <FAQ />
      <Footer />
    </main>
  );
}

export default App;
