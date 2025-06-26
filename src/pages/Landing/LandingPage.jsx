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
import Gallery from "./Gallery";

const LandingPage = () => {
    return (
        // Es importante tener overflow-x-hidden aquí para que las animaciones laterales no creen una barra de scroll
        <div className="">
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

            {/* APLICAMOS ANIMACIÓN A LA GALERÍA AQUÍ */}
            <AnimatedSection direction="up"> {/* Puedes elegir 'up', 'left', 'right' o el que tengas configurado */}
                <Gallery />
            </AnimatedSection>
            {/* FIN DE LA APLICACIÓN DE ANIMACIÓN */}

            <AnimatedSection direction="up">
                <CardsTestimonios />
            </AnimatedSection>

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