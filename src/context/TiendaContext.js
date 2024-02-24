import React, { createContext, useState, useEffect } from 'react';
import { useProductos } from "../hooks/useProductos";

export const TiendaContext = createContext();

export const TiendaProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Usamos el hook useProductos para obtener los productos
  const [productosData, productosError] = useProductos();

  useEffect(() => {
    if (productosData) {
      setProductos(productosData);
      setLoading(false);
    }
  }, [productosData]);

  useEffect(() => {
    if (productosError) {
      setError(productosError);
      setLoading(false);
    }
  }, [productosError]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <TiendaContext.Provider value={{ productos, setProductos }}>
      {children}
    </TiendaContext.Provider>
  );
};
