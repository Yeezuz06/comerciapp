import React from 'react';

const Home = () => {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>Bienvenido a ComerciApp</h1>
      <p>Encuentra y comparte reseñas sobre negocios locales.</p>
      <div style={{ marginTop: '2rem' }}>
        <a href="/login" style={buttonStyle}>
          Iniciar Sesión
        </a>
        <a href="/register" style={buttonStyle}>
          Registrarse
        </a>
      </div>
    </div>
  );
};

// Estilo básico para los botones
const buttonStyle = {
  display: 'inline-block',
  margin: '0.5rem',
  padding: '0.5rem 1rem',
  textDecoration: 'none',
  backgroundColor: '#4CAF50',
  color: '#fff',
  borderRadius: '5px',
  fontSize: '1rem',
};

export default Home;
