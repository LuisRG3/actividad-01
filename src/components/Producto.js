import React from 'react';
import { Link } from "react-router-dom";
import '../styles/producto.css';

export const Producto = ({ productos }) => {
  return (
    <div className="producto">
      <h2>{productos.nombre}</h2>
      <img src={productos.imagen} alt={productos.nombre} />
      <p><label className="producto-label">Descripcion: </label> {productos.descripcionCorta}<br/>
          <label className="producto-label">Precio: </label>S/. {productos.precio}<br/> 
          <label className="producto-label">Puntuación: </label>{productos.puntuacion}<br/>    
      </p>
      <Link to={`/productos/${productos.codigo}`}>
       <button className="producto-button">Comprar</button>
      </Link>
    </div>
  );
};
