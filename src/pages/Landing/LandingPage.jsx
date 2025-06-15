// Tu archivo de LandingPage
import AnimatedSection from "../../components/AnimatedSection"; // ¡Importante! Asegúrate de que la ruta sea correcta.

import FeatureSection from "./FeatureSection";
import GestionCamas from "./GestionCamas";
import Hero from './Hero';
import RegistroAsistencias from "./RegistroAsistencias";
import Testimonio from "./Testimonio";
import CardsTestimonios from "./CardsTestimonios";
import Faq from "./Faq";
import Footer from "../../components/Footer";
import WhatsAppButton from "../../components/WhatsAppButton";
import Navbar from "./Navbar";
import Gallery from "../../components/Gallery";

const LandingPage = () => {
    return (
        // Es importante tener overflow-x-hidden aquí para que las animaciones laterales no creen una barra de scroll
        <div className="min-h-screen w-full overflow-x-hidden bg-white">
            <WhatsAppButton />
            <Navbar />
            <Hero />

            {/* A partir de aquí, envolvemos cada sección con nuestro componente animado */}

            {/* <AnimatedSection direction="up"> */} {/* Comentamos la envoltura */}
                <FeatureSection />
            {/* </AnimatedSection> */}
            
            <AnimatedSection direction="left">
                <GestionCamas />
            </AnimatedSection>

            <AnimatedSection direction="right">
                <RegistroAsistencias />
            </AnimatedSection>

            <AnimatedSection direction="left">
                <Testimonio />
            </AnimatedSection>

            <AnimatedSection direction="up">
                <CardsTestimonios />
            </AnimatedSection>

            {/* <Gallery /> */}

            <AnimatedSection direction="up">
                <Faq />
            </AnimatedSection>

            <AnimatedSection direction="up">
                <Footer />
            </AnimatedSection>
        </div>
    );
};

export default LandingPage;