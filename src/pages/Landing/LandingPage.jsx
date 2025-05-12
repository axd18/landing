import FeatureSection from "./FeatureSection";
import GestionCamas from "./GestionCamas";
import Hero from './Hero';
import RegistroAsistencias from "./RegistroAsistencias";
import Testimonio from "./Testimonio";
import CardsTestimonios from "./CardsTestimonios";
import Faq from "./Faq";
import Footer from "../../components/Footer";

const LandingPage = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
        <Hero />
        <FeatureSection />
        <GestionCamas />
        <RegistroAsistencias />
        <Testimonio />
        <CardsTestimonios />
        <Faq />
        <Footer />
    </div>
  );
};

export default LandingPage;