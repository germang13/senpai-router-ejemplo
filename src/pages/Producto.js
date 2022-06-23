import { Link } from "react-router-dom";

const Producto = ({ listaProductos }) => {
  console.log("rederizo productos");
  return (
    <section>
      <h1>Listado de productos</h1>
      <ul>
        {listaProductos.map((p) => (
          <li key={p.id}>
            <Link to={`/productos/${p.id}`}>{p.nombre}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Producto;
