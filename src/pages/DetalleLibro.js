import { Navigate } from "react-router-dom";

const DetalleLibro = () => {
  const urlActual = window.location.pathname;

  return <Navigate to={urlActual.replace("libros", "productos")} replace />;
};

export default DetalleLibro;
