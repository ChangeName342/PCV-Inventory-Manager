import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "./pages/public/Inicio";
import Valores from "./pages/public/Valores";
import Contacto from "./pages/public/Contacto";
import Login from "./pages/auth/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/valores" element={<Valores />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;







