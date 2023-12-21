import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import users from '../components/users';
import '../styles/login.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // Estado para el mensaje de error
  const navigate = useNavigate();

  useEffect(() => {
    const currentUserData = localStorage.getItem('currentUser');
    if (currentUserData) {
      navigate('/productos');
    }
  }, [navigate]);

  const handleLogin = () => {
    const user = users.find((user) => user.username === username);

    if (user && user.password === password) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      navigate('/productos');
    } else {
      setErrorMessage('Credenciales incorrectas'); // Establecer el mensaje de error
    }
  };

  const handleClear = () => {
    setUsername(''); // Limpiar el campo de nombre de usuario
    setPassword(''); // Limpiar el campo de contraseña
    setErrorMessage(''); // Limpiar el mensaje de error
  };

  return (
    <div className="login-body">
      <div className="login-container">
        <h2>Iniciar sesión</h2>
        <input
          type="text"
          placeholder="Nombre de usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
        
        {/* Botón "Limpiar" */}
        <button onClick={handleClear}>Limpiar</button>

        {/* Mostrar el mensaje de error si existe */}
        {errorMessage && <div className="login-error">{errorMessage}</div>}
      </div>
    </div>
  );
};

export default LoginPage;
