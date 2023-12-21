import React, { useContext, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { TiendaContext } from '../context/TiendaContext';
import '../styles/detalleProducto.css';

const DetalleProducto = () => {
  const { codigoProducto } = useParams();
  const { productos } = useContext(TiendaContext);
  const producto = productos.find((r) => r.codigo === codigoProducto);

  const [cantidad, setCantidad] = useState(1);
  const [stockInsuficiente, setStockInsuficiente] = useState(false);

  const navigate = useNavigate(); // Para redireccionar

  const handleCantidadChange = (event) => {
    const newCantidad = parseInt(event.target.value, 10);
    setCantidad(newCantidad);
    setStockInsuficiente(false); // Reiniciar mensaje de stock insuficiente al cambiar la cantidad
  };

  const calcularTotal = () => {
    const total = cantidad * producto.precio;
    const formattedTotal = total.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return formattedTotal;
  };

  const handleAgregarAlCarrito = () => {
    if (cantidad <= 0 || cantidad > producto.cantidadDisponible) {
      setStockInsuficiente(true);
      return;
    }

    // Obtener el carrito actual del localStorage o inicializar un nuevo carrito
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    // Verificar si el producto ya está en el carrito
    const productoExistente = carrito.find((item) => item.codigo === producto.codigo);

    if (productoExistente) {
      // Si el producto existe, mostrar una alerta de confirmación
      const confirmarReemplazo = window.confirm('Este producto ya está en el carrito. ¿Deseas reemplazarlo?');

      if (confirmarReemplazo) {
        // Si el usuario confirma, reemplazar el producto existente
        const carritoActualizado = carrito.map((item) =>
          item.codigo === productoExistente.codigo ? {
            ...producto,
            cantidad: cantidad
          } : item
        );

        // Guardar el carrito actualizado en el Local Storage
        localStorage.setItem('carrito', JSON.stringify(carritoActualizado));
      }else{
        return;
      }
    } else {
      // Si el producto no existe en el carrito, agregarlo
      const productoParaAgregar = {
        codigo: producto.codigo,
        imagen: producto.imagen,
        nombre: producto.nombre,
        descripcionCorta: producto.descripcionCorta,
        precio: producto.precio,
        cantidad: cantidad
      };

      // Agregar el producto al carrito
      carrito.push(productoParaAgregar);

      // Guardar el carrito actualizado en el Local Storage
      localStorage.setItem('carrito', JSON.stringify(carrito));
    }


      // Redireccionar a la página de carrito
      navigate('/carrito');

  };

  if (!producto) {
    return(
        <div className='pagina-no-encontrada'>
            <h1>404 - Página no encontrada</h1>
        </div>
    )
  }

  return (
    <div className="producto-details">
    <div className='producto-details-image'>
      <img src={producto.imagen} alt={producto.descripcionCorta} />
    </div>
    <div className='producto-details-data'>
      <h2 className="producto-details-data-nombre">{producto.nombre}</h2>
      <p>
        <label className="producto-details-data-label">Descripción: </label> {producto.descripcionLarga}
        <br />
        <label className="producto-details-data-label">Categoría: </label>S/. {producto.categoria}
        <br />
        <label className="producto-details-data-label">Empresa: </label>
        {producto.empresaAsociada}
        <br />
        <label className="producto-details-data-label">Stock: </label> {producto.cantidadDisponible}
        <br />
        <label className="producto-details-data-label">Precio: </label>S/. {producto.precio}
        <br />
        <label className="producto-details-data-label">Puntuación: </label>
        {producto.puntuacion}
        <br />
        <label className="producto-details-data-label" htmlFor="cantidad">Cantidad: </label>
        <input
          type="number"
          id="cantidad"
          min="1"
          value={cantidad}
          onChange={handleCantidadChange}
        /> {stockInsuficiente && <div className="producto-error-cantidad">Stock insuficiente</div>}
        <br />
        <label className="producto-details-data-label">Total: </label>
        <span>S/. {calcularTotal()}</span>
        <br />
        <button className="producto-details-data-button-agregar" onClick={handleAgregarAlCarrito}>Agregar al Carrito</button>
        <button className="producto-details-data-button-cancelar" onClick={() => navigate('/productos')}>Cancelar</button>
      </p>
    </div>
  </div>
  );
};

export default DetalleProducto;
