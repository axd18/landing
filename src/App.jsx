import { BrowserRouter } from 'react-router-dom';
import AppRouter from '@/routes/AppRouter';
import ReactGA from "react-ga4";
import { useEffect } from 'react';

const GA_MEASUREMENT_ID = "G-CML7FX338X";

function App() {
  // Es una mejor práctica inicializar dentro de un useEffect para asegurar que se ejecute una sola vez en el cliente.
  useEffect(() => {
    ReactGA.initialize(GA_MEASUREMENT_ID);
  }, []);

  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;