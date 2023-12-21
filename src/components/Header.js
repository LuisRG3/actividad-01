import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../styles/header.css';
import Imagen1 from '../imagenes/baner/baner1.jpg';
import Imagen2 from '../imagenes/baner/baner2.jpg';
import Imagen3 from '../imagenes/baner/baner3.jpg';
import Imagen4 from '../imagenes/baner/baner4.jpg';

const Header = () => {
    const images = [Imagen1, Imagen2, Imagen3, Imagen4];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((currentImageIndex + 1) % images.length);
        }, 10000);
        return () => clearInterval(timer);
    }, [currentImageIndex, images.length]);

    const nextImage = () => {
        setCurrentImageIndex((currentImageIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length);
    };

    const handleLogout = () => {
        // Elimina los datos del usuario del localStorage
        localStorage.removeItem('currentUser');
        // Redirige al usuario a la página de inicio de sesión ("/login")
        navigate('/login');
    };

    const currentUserData = localStorage.getItem('currentUser');
    const isAuthenticated = !!currentUserData; // isAuthenticated será true si hay datos

    return (
        <header>
            <div className="carousel ">
                <button onClick={prevImage}>←</button>
                <img src={images[currentImageIndex]} alt="Imagen del banner"/>
                <button onClick={nextImage}>→</button>
            </div>
            <ul className="menu">
                <li><Link to="/inicio">Inicio</Link></li>
                <li><Link to="/quienes">Quienes Somos</Link></li>
                {isAuthenticated ? (
                    <>
                    <li><Link to="/productos">Productos</Link></li>
                    <li><Link to="/carrito">Carrito</Link></li>
                    <li><Link to="/perfil">Mi Perfil</Link></li>
                    </>
                ) : (
                    <li></li>
                )}
                {isAuthenticated ? (
                    <li><Link to="/login" onClick={handleLogout}>Cerrar Sesión</Link></li>
                ) : (
                    <li><Link to="/login">Iniciar Sesión</Link></li>
                )}
            </ul>
        </header>
    );
};

export default Header;
