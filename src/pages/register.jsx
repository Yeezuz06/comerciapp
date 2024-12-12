import React from 'react';

const Register = () => {
  return (
    <div>
      <h1>Regístrate</h1>
      <form>
        <div>
          <label>Nombre:</label>
          <input type="text" placeholder="Ingresa tu nombre" />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" placeholder="Ingresa tu correo" />
        </div>
        <div>
          <label>Contraseña:</label>
          <input type="password" placeholder="Crea una contraseña" />
        </div>
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default Register;
