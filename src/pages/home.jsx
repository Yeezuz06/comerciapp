import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-green-500 text-white">
      <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">Bienvenido a ComerciApp</h1>
      <p className="text-lg font-light max-w-md text-center drop-shadow-sm">
        Encuentra negocios locales y comparte tus experiencias con la comunidad.
      </p>
      <div className="mt-8 flex space-x-6">
        <a
          href="/login"
          className="px-6 py-3 bg-white text-blue-500 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition"
        >
          Iniciar Sesión
        </a>
        <a
          href="/register"
          className="px-6 py-3 bg-white text-green-500 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition"
        >
          Registrarse
        </a>
      </div>
    </div>
  );
};

export default Home;
