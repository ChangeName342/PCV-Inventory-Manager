import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/public/Inicio";
import Valores from "./pages/public/Valores";
import Contacto from "./pages/public/Contacto";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/valores" element={<Valores />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;





