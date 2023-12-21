import React from 'react';
import {useProductos} from "./hooks/useProductos";
import {TiendaContext} from "./context/TiendaContext";
import GlobalRouter from './routes/GlobalRouter';
import Footer from './components/Footer';

function App() {
  const productos = useProductos();

  return (
    
    <TiendaContext.Provider value={{productos}}>
      <GlobalRouter />
      <Footer />
    </TiendaContext.Provider>
  );
}

export default App;
