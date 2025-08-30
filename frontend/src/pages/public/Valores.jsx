import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoPortuaria from "../../assets/logo_portuaria.png";
import valoresImg from "../../assets/valores.PNG";

function Valores() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen font-sans bg-gray-50">
      {/* Navbar */}
      <nav className="w-full bg-white/95 fixed top-0 left-0 z-50 shadow-md backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <img src={logoPortuaria} alt="Logo Portuaria" className="h-16 w-auto" />
            <h1 className="text-black font-bold text-2xl">PCV Inventory</h1>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <ul className="flex gap-6 text-black font-semibold">
              <li><Link to="/" className="hover:text-green-600 transition-colors">Inicio</Link></li>
              <li><Link to="/valores" className="hover:text-green-600 transition-colors">Valores</Link></li>
              <li><Link to="/contacto" className="hover:text-green-600 transition-colors">Contacto</Link></li>
            </ul>
            <button className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-md transition transform hover:scale-105">
              Login Administrador
            </button>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-black focus:outline-none">
              {isMenuOpen ? <span className="text-2xl">&#10005;</span> : <span className="text-2xl">&#9776;</span>}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md shadow-md px-6 py-4">
            <ul className="flex flex-col gap-4 text-black font-semibold">
              <li><Link to="/" className="hover:text-green-600 transition-colors">Inicio</Link></li>
              <li><Link to="/valores" className="hover:text-green-600 transition-colors">Valores</Link></li>
              <li><Link to="/contacto" className="hover:text-green-600 transition-colors">Contacto</Link></li>
              <li>
                <button className="w-full px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-md transition transform hover:scale-105">
                  Login Administrador
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>

      <div className="h-24"></div> {/* Espacio para navbar fijo */}

      {/* Contenido principal */}
      <main className="max-w-6xl mx-auto px-6 py-12 text-center">
        <h2 className="text-5xl font-bold mb-8 text-black">Nuestros Valores</h2>
        <img src={valoresImg} alt="Valores" className="mx-auto rounded-xl shadow-lg" />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-auto">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-2">
          <p className="mb-2">© 2025 PCV Inventory Manager. Todos los derechos reservados.</p>
          <p>Dirección sede Central: Esmeralda Nº80, Corral-Los Ríos</p>
          <p>Dirección Astillero: Arica 2335-2499, Valdivia, Los Ríos</p>
          <p>Teléfono: +56 63 247 1239 | FAX: +56 63 247 1239</p>
          <p>
            Email:{" "}
            <a href="mailto:contacto@corralport.com" className="underline hover:text-green-400 transition-colors">
              contacto@corralport.com
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Valores;
