import React from 'react';
import {TiendaProvider } from "./context/TiendaContext";
import GlobalRouter from './routes/GlobalRouter';
import Footer from './components/Footer';

function App() {

  return (
    <TiendaProvider>
      <GlobalRouter />
      <Footer />
     </TiendaProvider>
  );
}

export default App;
