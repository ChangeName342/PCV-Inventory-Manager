import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import fondoMain from "../../assets/fondo_main.jpg";
import fondoMain2 from "../../assets/fondo_main2.jpg";
import fondoMain3 from "../../assets/fondo_main3.jpg";
import logoPortuaria from "../../assets/logo_portuaria.png";

function Inicio() {
  const images = [fondoMain, fondoMain2, fondoMain3];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

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
                <Link to="/" className="hover:text-green-600 transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/valores" className="hover:text-green-600 transition-colors">
                  Valores
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="hover:text-green-600 transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
            {/* Botón Login */}
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
                <Link to="/" className="hover:text-green-600 transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/valores" className="hover:text-green-600 transition-colors">
                  Valores
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="hover:text-green-600 transition-colors">
                  Contacto
                </Link>
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

      {/* Carrusel */}
      <section className="flex justify-center py-12">
        <div className="w-full max-w-6xl h-[500px] overflow-hidden rounded-3xl shadow-2xl relative">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Carrusel ${index + 1}`}
              className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/30"></div>
        </div>
      </section>

      {/* Sección Sobre Nosotros */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-5xl font-bold text-center mb-16 text-black">Sobre Nosotros</h2>
        <div className="grid md:grid-cols-3 gap-12 text-gray-700 text-lg md:text-xl">
          <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow transform hover:-translate-y-2">
            <h3 className="text-2xl font-semibold mb-4 text-green-700">PROPÓSITO</h3>
            <p>
              Continuar el legado del puerto más antiguo del sur de Chile, mantener la tradición fluvial y conectar la industria forestal de La Araucanía, Los Ríos y Los Lagos con el mundo.
            </p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow transform hover:-translate-y-2">
            <h3 className="text-2xl font-semibold mb-4 text-green-700">MISIÓN</h3>
            <p>
              Entregar servicios eficaces, cumpliendo lo comprometido, enfocados en la mejora continua y apoyando a los distintos equipos de la portuaria en la gestión de inventarios.
            </p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow transform hover:-translate-y-2">
            <h3 className="text-2xl font-semibold mb-4 text-green-700">VISIÓN</h3>
            <p>
              Ser un referente estratégico en la producción y exportación de astillas y pellets de alta calidad mediante procesos eficientes, seguros y sustentables, promoviendo la sustentabilidad y el desarrollo local.
            </p>
          </div>
        </div>
      </section>

      {/* Sección Objetivos Estratégicos */}
      <section className="max-w-6xl mx-auto px-6 py-20 bg-gradient-to-r from-green-100 to-white rounded-3xl shadow-lg">
        <h2 className="text-4xl font-bold text-center mb-12 text-green-700">Objetivos Estratégicos</h2>
        <div className="grid md:grid-cols-2 gap-10 text-gray-800 text-lg">
          <div className="space-y-4 bg-white/80 p-6 rounded-xl shadow-md">
            <h3 className="font-semibold text-xl text-green-600">Objetivo General</h3>
            <p>
              Consolidar a Portuaria Corral como un referente estratégico en la producción y exportación de astillas y pellets de alta calidad mediante procesos eficientes, seguros y sustentables que respondan a las necesidades de los clientes.
            </p>
          </div>
          <div className="space-y-4 bg-white/80 p-6 rounded-xl shadow-md">
            <h3 className="font-semibold text-xl text-green-600">Objetivos Específicos</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Asegurar la continuidad operativa de la planta de astillado.</li>
              <li>Optimizar la gestión logística y trazabilidad de la cadena productiva.</li>
              <li>Mejorar y mantener la infraestructura de planta y áreas de acopio.</li>
              <li>Fomentar el desarrollo local mediante empleo y capacitación.</li>
              <li>Promover la sustentabilidad y minimizar impacto ambiental.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-12">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-2">
          <p>© 2025 PCV Inventory Manager. Todos los derechos reservados.</p>
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

export default Inicio;

