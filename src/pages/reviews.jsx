import React from 'react';

const Reviews = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Reseñas de Usuarios</h1>
      <p className="text-lg text-gray-600 max-w-2xl text-center">
        Aquí puedes ver y compartir reseñas sobre los negocios locales que amas.
      </p>
      <div className="mt-6 space-y-4">
        <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-4">
          <p className="text-gray-700 font-medium">
            <span className="font-bold">Usuario:</span> Juan Pérez
          </p>
          <p className="text-gray-600 mt-2">
            ¡Este negocio es increíble! El servicio fue excelente y la comida deliciosa.
          </p>
        </div>
        <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-4">
          <p className="text-gray-700 font-medium">
            <span className="font-bold">Usuario:</span> María López
          </p>
          <p className="text-gray-600 mt-2">
            Muy limpio y organizado. Definitivamente lo recomiendo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
