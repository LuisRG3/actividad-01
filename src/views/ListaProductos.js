import React, { useEffect,useContext,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {Producto} from "../components/Producto";
import {TiendaContext} from "../context/TiendaContext";
import '../styles/listaProducto.css';

  const ListaProductos = () => {
  const [nombre, setNombre] = useState('');
  const [categoria, setCategoria] = useState('');
  const [precio, setPrecio] = useState('');
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1); // Página actual
  const [itemsPerPage] = useState(24); // Cantidad de elementos por página

  useEffect(() => {
    const currentUserData = localStorage.getItem('currentUser');
    if (!currentUserData) {
        navigate('/login');
       }
  }, [navigate]);

  const { productos } = useContext(TiendaContext);

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
    }else{
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
            <main>
                <div className='contenedor-productos'>
                    {
                    productos.length > 0 ? (
                      currentProducts.map(productos => <Producto key={productos.codigo} productos={productos} />)
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