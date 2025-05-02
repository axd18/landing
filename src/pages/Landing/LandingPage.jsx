import React from "react";
import FeatureSection from "./FeatureSection";
import GestionCamas from "./GestionCamas";
import Hero from './Hero';
import RegistroAsistencias from "./RegistroAsistencias";

const LandingPage = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white">
        <Hero />
        <FeatureSection />
        <GestionCamas />
        <RegistroAsistencias />
    </div>
  );
};

export default LandingPage;