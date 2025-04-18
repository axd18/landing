import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from '@/pages/Landing/LandingPage';
import HelpPage from '@/pages/Help/HelpPage';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/help" element={<HelpPage />} />
        {/* Otras rutas... */}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;