import React, { useEffect, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Producto } from "../components/Producto";
import { TiendaContext } from "../context/TiendaContext";
import '../styles/listaProducto.css';

const ListaProductos = () => {
  const [nombre, setNombre] = useState('');
  const [descripcionLarga, setdescripcionLarga] = useState('');
  const [categoria, setCategoria] = useState('');
  const [agregados, setAgregados] = useState([]); // Estado para almacenar los agregados
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1); // Página actual
  const [itemsPerPage] = useState(24); // Cantidad de elementos por página
  const {productos, setProductos} = useContext(TiendaContext);

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
              categoria:[categoria],
              descripcionLarga:[descripcionLarga],
              aggregate:[false]
            }
          })
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setProductos(data.products); // Actualiza el estado de productos con los datos obtenidos
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [nombre,categoria,descripcionLarga, setProductos]);

  useEffect(() => {
    const fetchCatalago = async () => {
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
              categoria:[categoria],
              descripcionLarga:[descripcionLarga],
              aggregate:[true]
            }
          })
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setAgregados(data.aggs); // Actualiza el estado de agregados con los datos obtenidos
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchCatalago();
  }, [nombre,descripcionLarga,categoria, setProductos]);

  // Calcular los índices de los productos para la página actual
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = productos.slice(indexOfFirstItem, indexOfLastItem);

  // Cambiar de página
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Funciones para cambiar los filtros y restablecer la página a 1
  const handleNombreChange = (e) => {
    setNombre(e.target.value);
    setCurrentPage(1);
  };
  const handleDescripcionLargaChange = (e) => {
    setdescripcionLarga(e.target.value);
    setCurrentPage(1);
  };

// Función para manejar el clic en los elementos de la lista de agregados
const handleAgregadoClick = async (e, key) => {
  e.preventDefault(); // Evita que el navegador siga el enlace
  try {
    setCategoria(key)
  } catch (error) {
    console.error('Error fetching data:', error);
  }
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
          placeholder="Buscar por descripcion"
          value={descripcionLarga}
          onChange={handleDescripcionLargaChange}
        />
      </div>
      
      <main>
      <div className='contenedor-productos-total'>
        <div className="agregados-lista">
          
          <ul>
          <h3>Categoria</h3>
          <li>
                <a href="#.com" onClick={(e) => handleAgregadoClick(e,"")}>
                  Borrar
                </a>
              </li>
            {agregados.map((agregado, index) => (
              <li key={index}>
                <a href={agregado.uri} onClick={(e) => handleAgregadoClick(e, agregado.key)}>
                  {`${agregado.key} (${agregado.count})`}
                </a>
              </li>
            ))}
          </ul>
        </div>

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
        </div>
      </main>
      <div className="pagination">
        {/* Botones de paginación */}
        {productos.length > itemsPerPage && (
          <ul className="pagination-list">
            {Array(Math.ceil(productos.length / itemsPerPage)).fill().map((_, i) => (
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
