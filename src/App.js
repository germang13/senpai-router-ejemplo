import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import PaginaPrincipal from "./pages/PaginaPrincipal";
import PaginaNoEncontrada from "./pages/PaginaNoEncontrada";
import Producto from "./pages/Producto";
import DetalleProducto from "./pages/DetalleProducto";
import Header from "./components/Header";
import DetalleLibro from "./pages/DetalleLibro";

const listaProductosInicial = [
  { id: "l1", nombre: "libro", precio: 30.6 },
  { id: "p2", nombre: "computadora", precio: 1270.6 },
  { id: "p3", nombre: "silla", precio: 60.6 },
  { id: "p4", nombre: "escritorio", precio: 270.6 },
];

function App() {
  const [listaProductos, setlistaProductos] = useState(listaProductosInicial);
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/pagina-principal" element={<PaginaPrincipal />} />
          <Route
            path="/productos/:productoId"
            element={<DetalleProducto listaProductos={listaProductos} />}
          />

          <Route
            path="/libros/:productoId"
            element={<DetalleLibro listaProductos={listaProductos} />}
          />
          <Route
            path="/productos"
            element={<Producto listaProductos={listaProductos} />}
          />
          <Route path="/404" element={<PaginaNoEncontrada />} />
          <Route
            path="/"
            element={<Navigate to="/pagina-principal" replace />}
          />

          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
