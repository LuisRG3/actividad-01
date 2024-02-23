import React, { useEffect, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Producto } from "../components/Producto";
import { Agregados } from "../components/Agregados";
import { TiendaContext } from "../context/TiendaContext";
import '../styles/listaProducto.css';

const ListaProductos = () => {
  const [nombre, setNombre] = useState('');
  const [categoria, setCategoria] = useState('');
  const [precio, setPrecio] = useState('');
  const [agregados, setAgregados] = useState([]); // Estado para almacenar los agregados
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1); // Página actual
  const [itemsPerPage] = useState(24); // Cantidad de elementos por página
  const { productos, setProductos } = useContext(TiendaContext);

  useEffect(() => {
    const currentUserData = localStorage.getItem('currentUser');
    if (!currentUserData) {
      navigate('/login');
    }
  }, [navigate]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8762/ms-buscador-products-elasticsearch/products', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            targetMethod: 'GET',
            queryParams: {
              nombre: [nombre],
              aggregate:[true]
            }
          })
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setProductos([]);
        setProductos(data.products); // Actualiza el estado de productos con los datos obtenidos
        setAgregados(data.aggs); // Actualiza el estado de agregados con los datos obtenidos
      } catch (error) {
        console.error('Error fetching data:', error);
        // Si hay un error, podrías querer manejarlo de alguna manera, como mostrar un mensaje al usuario.
      }
    };

    fetchData();
  }, [nombre, setProductos]);

  const productosFiltrados = productos.filter((producto) => {
    return (
      producto.nombre.toLowerCase().includes(nombre.toLowerCase()) &&
      producto.categoria.toLowerCase().includes(categoria.toLowerCase()) &&
      producto.precio.toString().includes(precio)
    );
  });

  // Calcular los índices de los productos para la página actual
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = productosFiltrados.slice(indexOfFirstItem, indexOfLastItem);

  // Cambiar de página
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Funciones para cambiar los filtros y restablecer la página a 1
  const handleNombreChange = (e) => {
    setNombre(e.target.value);
    setCurrentPage(1);
  };

  const handleCategoriaChange = (e) => {
    setCategoria(e.target.value);
    setCurrentPage(1);
  };

  const handlePrecioChange = (e) => {
    const newPrecio = parseFloat(e.target.value);

    if (!isNaN(newPrecio) && newPrecio >= 0) {
      setPrecio(newPrecio);
    } else {
      setPrecio('');
    }
    setCurrentPage(1);
  };

  return (
    <div>
      <div className="barra-busqueda">
        <input
          className="barra-busqueda-input nombre"
          type="text"
          placeholder="Buscar por nombre"
          value={nombre}
          onChange={handleNombreChange}
        />
        <input
          className="barra-busqueda-input categoria"
          type="text"
          placeholder="Buscar por categoría"
          value={categoria}
          onChange={handleCategoriaChange}
        />
        <input
          className="barra-busqueda-input precio"
          type="number"
          placeholder="Buscar por precio"
          value={precio}
          onChange={handlePrecioChange}
        />
      </div>
      <div className="agregados-lista">
        <h3>Categorias</h3>
          {agregados.map(aggs => <Agregados key={aggs.key} agregados={aggs} />)}
      </div>
      <main>
        <div className='contenedor-productos'>
          {
            productos.length > 0 ? (
              currentProducts.map(producto => <Producto key={producto.codigo} productos={producto} />)
            ) : (
              <div className='contenedor-animacion'>
                <div className='loading-animation'></div>
              </div>
            )
          }
        </div>
      </main>
      <div className="pagination">
        {/* Botones de paginación */}
        {productosFiltrados.length > itemsPerPage && (
          <ul className="pagination-list">
            {Array(Math.ceil(productosFiltrados.length / itemsPerPage)).fill().map((_, i) => (
              <li key={i} className={`pagination-item ${currentPage === i + 1 ? 'active' : ''}`}>
                <button onClick={() => paginate(i + 1)}>{i + 1}</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ListaProductos;
