import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from '../views/LoginPage';
import Header from "../components/Header";
import ListaProductos from '../views/ListaProductos';
import Inicio from '../components/Inicio';
import DetalleProducto from '../components/DetalleProducto';
import QuienesSomos from '../components/QuienesSomos';
import Carrito from '../components/Carrito';
import Perfil from '../components/Perfil';

function GlobalRouter() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/inicio" element={<Layout><Inicio /></Layout>} />
        <Route path="/login" element={<Layout><LoginPage /></Layout>} />
        <Route path="/perfil" element={<Layout><Perfil /></Layout>} />
        <Route path="/quienes" element={<Layout><QuienesSomos /></Layout>} />
        <Route path="/productos" element={<Layout><ListaProductos /></Layout>} />
        <Route path="/productos/:codigoProducto" element={<Layout><DetalleProducto /></Layout>} />
        <Route path="/carrito" element={<Layout><Carrito /></Layout>} />
        <Route path="/*" element={<Navigate to="/inicio" />} />
      </Routes>
    </BrowserRouter>
  );
}

const Layout = ({children}) => (
  <>
    <Header />
    {children}
  </>
);

export default GlobalRouter;
