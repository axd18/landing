import { Routes, Route } from 'react-router-dom';
import LandingPage from '@/pages/Landing/LandingPage';
import HelpPage from '@/pages/Help/HelpPage';
import usePageTracking from '../hooks/usePageTracking';

const AppRouter = () => {
  usePageTracking(); // <-- AHORA FUNCIONA CORRECTAMENTE
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/ayuda" element={<HelpPage />} />
      {/* Otras rutas... */}
    </Routes>
  );
};

export default AppRouter;