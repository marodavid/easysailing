import { Routes, Route } from "react-router-dom";
import ReactGA from "react-ga";
import LicenciaNavegacion from "./components/cursos/LicenciaNavegacion";
import Home from "./Home";


/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */

ReactGA.initialize('G-E0N5TTD7QD')

export default function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="licencia_navegacion" element={<LicenciaNavegacion />} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<Home />} />
      </Routes>

  );
}
