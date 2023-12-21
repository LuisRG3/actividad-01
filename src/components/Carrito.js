import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/carrito.css';

const Carrito = () => {
  const [carritoItems, setCarritoItems] = useState([]);
  // Función para cargar los elementos del carrito desde el Local Storage
  const cargarCarritoDesdeLocalStorage = () => {
    const carritoGuardado = JSON.parse(localStorage.getItem('carrito')) || [];
    setCarritoItems(carritoGuardado);
  };

  const navigate = useNavigate(); // Para redireccionar

  useEffect(() => {
    cargarCarritoDesdeLocalStorage();
  }, []);

  // Función para calcular el monto total a pagar
  const calcularTotalAPagar = () => {
    let total = 0;
    carritoItems.forEach((item) => {
      total += item.cantidad * item.precio;
    });
    return total.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  // Función para eliminar todos los elementos del carrito
  const eliminarCompra = () => {
    localStorage.removeItem('carrito');
    setCarritoItems([]); // Vaciar el carrito en el estado local
    navigate('/productos');
  };

    // Función para eliminar un artículo específico del carrito
    const eliminarItem = (index) => {
        const nuevoCarrito = [...carritoItems];
        nuevoCarrito.splice(index, 1); // Eliminar el artículo en el índice especificado
        localStorage.setItem('carrito', JSON.stringify(nuevoCarrito)); // Actualizar el Local Storage
        setCarritoItems(nuevoCarrito); // Actualizar el estado local del carrito
      };

  return (
    <>
    <h1 className='carrito-titulo'>Carrito de Compras</h1>
    <div className="carrito-productos">
      {carritoItems.map((item, index) => (
                    <>
                    <div className='carrito-productos-image'>
                        <img src={item.imagen} alt={item.descripcionCorta} />
                    </div>
                    <div className='carrito-productos-data'>
                    <h2 className="carrito-productos-data-nombre">{item.nombre}</h2>
                    <p>
                      <label className="carrito-productos-data-label">Descripción: </label> {item.descripcionCorta}
                      <br />
                      <label className="carrito-productos-data-label">Precio: </label>S/. {item.precio}
                      <br />
                      <label className="carrito-productos-data-label">Cantidad: </label> {item.cantidad}
                      <br />
                      <label className="carrito-productos-data-label">Total: </label>
                      <span>S/. {(item.cantidad * item.precio).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}</span>
                      <br />
                      <Link to={`/productos/${item.codigo}`}>
                      <button className="carrito-productos-data-button-editar" >Editar</button>
                      </Link>
                      <button className="carrito-productos-data-button-eliminar" onClick={() => eliminarItem(index)} >
                        Eliminar
                      </button>
                    </p>
                  </div>
                  </>
                  
      ))}

        <div className="carrito-productos-total">
            <label className="carrito-productos-total-label">Total a Pagar: </label>
            <span className="carrito-productos-total-monto">S/. {calcularTotalAPagar()}</span>
            <button className="carrito-productos-total-button-comprar" >
                Comprar
            </button>
            <button className="carrito-productos-total-button-eliminar" onClick={eliminarCompra}>
                Eliminar Compra
            </button>
        </div>
    </div>
    </>
  );
};

export default Carrito;
