import React, { useEffect, useState } from "react";
import logoPortuaria from "../../assets/logo_portuaria.png";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";

function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    document.title = "Login Administrador - PCV Inventory";

    const link = document.querySelector("link[rel~='icon']");
    if (link) {
      link.href = logoPortuaria;
    } else {
      const newLink = document.createElement("link");
      newLink.rel = "icon";
      newLink.href = logoPortuaria;
      document.head.appendChild(newLink);
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full">
        <div className="flex justify-center mb-6">
          <img src={logoPortuaria} alt="Logo Portuaria" className="h-20 w-auto" />
        </div>
        <h1 className="text-3xl font-bold text-center text-green-700 mb-6">Login Administrador</h1>

        <form className="space-y-6">
          {/* Usuario / Correo / RUT */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Usuario / Correo / RUT</label>
            <input
              type="text"
              placeholder="Ingresa tu usuario, correo o RUT"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            />
          </div>

          {/* Contraseña */}
          <div className="relative">
            <div className="flex justify-between items-center mb-2">
              <label className="text-gray-700 font-semibold">Contraseña</label>
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-gray-500 hover:text-green-600 focus:outline-none"
              >
                {showPassword ? <EyeSlashIcon className="w-6 h-6" /> : <EyeIcon className="w-6 h-6" />}
              </button>
            </div>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Ingresa tu contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            />
          </div>

          {/* Olvidé mi contraseña centrado */}
          <div className="text-center">
            <a href="#" className="text-sm text-green-600 hover:underline">
              Olvidé mi contraseña
            </a>
          </div>

          {/* Botón Login */}
          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-xl shadow-md transition transform hover:scale-105"
          >
            Ingresar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;



