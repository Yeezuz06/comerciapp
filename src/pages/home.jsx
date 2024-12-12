import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4 text-blue-600">Bienvenido a ComerciApp</h1>
      <p className="text-lg text-gray-700 mb-8">Encuentra negocios locales y comparte tus experiencias.</p>
      <div>
        <Link to="/login">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2">
            Iniciar Sesión
          </button>
        </Link>
        <Link to="/register">
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mx-2">
            Registrarse
          </button>
        </Link>
      </div>
    </div>
  );
};


export default Home;
