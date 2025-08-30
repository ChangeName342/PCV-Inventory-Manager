function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-800 via-indigo-700 to-purple-600 flex items-center justify-center px-4">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-10 relative z-10">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6 text-center">Admin Login</h1>
        <p className="text-gray-500 text-center mb-8">
          Accede a tu panel de administrador
        </p>

        <form className="flex flex-col gap-4">
          <input 
            type="text" 
            placeholder="Usuario" 
            className="p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          />
          <input 
            type="password" 
            placeholder="Contraseña" 
            className="p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          />
          <button 
            type="submit" 
            className="mt-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold rounded-xl shadow-lg hover:scale-105 transform transition duration-300"
          >
            Iniciar Sesión
          </button>
        </form>

        <div className="mt-6 flex justify-center gap-4">
          <button className="text-sm text-blue-600 hover:underline">Olvidé mi contraseña</button>
          <button className="text-sm text-blue-600 hover:underline">Ayuda</button>
        </div>
      </div>

      {/* Fondo decorativo grande y visible */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-64 -left-64 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute -bottom-64 -right-64 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>
      </div>
    </div>
  );
}

export default App;


