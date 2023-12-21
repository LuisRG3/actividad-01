import React, { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/perfil.css';

const Perfil = () => {
    const navigate = useNavigate();
    const [perfilActual, setPerfilItems] = useState([]);
    
    useEffect(() => {
        const currentUserData = localStorage.getItem('currentUser');
        if (!currentUserData) {
            navigate('/login');
           }
      }, [navigate]);

    const cargarPerfilDesdeLocalStorage = () => {
        const perfil= JSON.parse(localStorage.getItem('currentUser'))|| [];
        setPerfilItems(perfil);
    };

    useEffect(() => {
        cargarPerfilDesdeLocalStorage();
    }, []);


  return (
        <div className="perfil-container">
            <div className="perfil-info">
                
                <div className="perfil-datos">
                    <h2>{perfilActual.nombre} {perfilActual.apellidoPaterno} {perfilActual.apellidoMaterno}</h2>
                    <p><label>Descripción:</label></p> <p>{perfilActual.descripcion}<br/><br/></p>
                    <p><label>País:</label> {perfilActual.pais}</p>
                    <p><label>Departamento:</label> {perfilActual.departamento}</p>
                    <p><label>Ciudad:</label> {perfilActual.ciudad}</p>
                    <p><label>Correo Electrónico:</label> {perfilActual.correo}</p>
                </div>
                <img src={perfilActual.imagen} alt="Foto de perfil" />
            </div>
        </div>

  );
};

export default Perfil;
