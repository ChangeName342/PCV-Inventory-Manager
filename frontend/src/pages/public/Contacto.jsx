import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoPortuaria from "../../assets/logo_portuaria.png";
import { MapPinIcon, PhoneIcon, EnvelopeIcon, PrinterIcon } from "@heroicons/react/24/solid";

function Contacto() {
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

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <ul className="flex gap-6 text-black font-semibold">
              <li>
                <Link to="/" className="hover:text-green-600 transition-colors">Inicio</Link>
              </li>
              <li>
                <Link to="/valores" className="hover:text-green-600 transition-colors">Valores</Link>
              </li>
              <li>
                <Link to="/contacto" className="hover:text-green-600 transition-colors">Contacto</Link>
              </li>
            </ul>
            <button className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-md transition transform hover:scale-105">
              Login Administrador
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-black focus:outline-none"
            >
              {isMenuOpen ? <span className="text-2xl">&#10005;</span> : <span className="text-2xl">&#9776;</span>}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md shadow-md px-6 py-4">
            <ul className="flex flex-col gap-4 text-black font-semibold">
              <li>
                <Link to="/" className="hover:text-green-600 transition-colors">Inicio</Link>
              </li>
              <li>
                <Link to="/valores" className="hover:text-green-600 transition-colors">Valores</Link>
              </li>
              <li>
                <Link to="/contacto" className="hover:text-green-600 transition-colors">Contacto</Link>
              </li>
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
      <main className="max-w-7xl mx-auto px-6 py-12 text-center">
        <h2 className="text-5xl font-bold mb-8 text-black">Contacto</h2>

        {/* Mapa de Google Maps */}
        <div className="w-full h-[500px] mb-12">
          <iframe
            title="Ubicación Portuaria"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3063.637200158583!2d-73.25781164778192!3d-39.83755118699473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9615efcdfc420aa3%3A0x5d10df145fba36ea!2sVTI%20Valdivia%20Terminal%20Internacional!5e0!3m2!1ses-419!2scl!4v1756582939620!5m2!1ses-419!2scl"
            width="100%"
            height="100%"
            className="border-0 rounded-xl"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Información de contacto con íconos */}
        <div className="flex flex-col md:flex-row justify-center gap-12 text-gray-800 text-lg md:text-xl mb-12">
          <div className="flex items-center gap-3">
            <MapPinIcon className="w-6 h-6 text-green-600" />
            <span>Sede Central: Esmeralda Nº80, Corral-Los Ríos</span>
          </div>
          <div className="flex items-center gap-3">
            <MapPinIcon className="w-6 h-6 text-green-600" />
            <span>Astillero: Arica 2335-2499, Valdivia, Los Ríos</span>
          </div>
          <div className="flex items-center gap-3">
            <PhoneIcon className="w-6 h-6 text-green-600" />
            <span>+56 63 247 1239</span>
          </div>
          <div className="flex items-center gap-3">
            <PrinterIcon className="w-6 h-6 text-green-600" />
            <span>+56 63 247 1239</span>
          </div>
          <div className="flex items-center gap-3">
            <EnvelopeIcon className="w-6 h-6 text-green-600" />
            <span>contacto@corralport.com</span>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-auto">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p>© 2025 PCV Inventory Manager. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default Contacto;

