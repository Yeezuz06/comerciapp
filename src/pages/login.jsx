import React from 'react';

const Login = () => {
  return (
    <div>
      <h1>Inicia Sesión</h1>
      <form>
        <div>
          <label>Email:</label>
          <input type="email" placeholder="Ingresa tu correo" />
        </div>
        <div>
          <label>Contraseña:</label>
          <input type="password" placeholder="Ingresa tu contraseña" />
        </div>
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default Login;
