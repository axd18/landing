import FeatureSection from "./FeatureSection";
import GestionCamas from "./GestionCamas";
import Hero from './Hero';
import RegistroAsistencias from "./RegistroAsistencias";
import Testimonio from "./Testimonio";
import CardsTestimonios from "./CardsTestimonios";

const LandingPage = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white">
        <Hero />
        <FeatureSection />
        <GestionCamas />
        <RegistroAsistencias />
        <Testimonio />
        <CardsTestimonios />
    </div>
  );
};

export default LandingPage;