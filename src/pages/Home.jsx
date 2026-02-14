import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AuthorityBanner from "../components/AuthorityBanner";
import BentoGridFeatures from "../components/BentoGridFeatures";
import WhyVextron from "../components/WhyVextron";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <>
            <Navbar />
            <HeroSection />
            <AuthorityBanner />
            <BentoGridFeatures />
            <WhyVextron />
            <FAQ />
            <Footer />
        </>
    );
};

export default Home;
