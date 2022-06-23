import { Navigate, useParams } from "react-router-dom";

const DetalleProducto = ({ listaProductos }) => {
  const params = useParams();

  const producto = listaProductos.find((p) => p.id === params.productoId);

  let redireccion = <></>;
  let hayRedireccion = false;
  if (!producto) {
    redireccion = <Navigate to="/404" replace />;
    hayRedireccion = true;
  }
  return (
    <>
      {hayRedireccion ? (
        redireccion
      ) : (
        <section>
          <h1>Detalle Producto</h1>
          <p>{producto.id}</p>
          <p>{producto.no}</p>
          <p>{producto.precio}</p>
        </section>
      )}
    </>
  );
};

export default DetalleProducto;
