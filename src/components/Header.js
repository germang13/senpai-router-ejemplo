import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className={"header"}>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/pagina-principal"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Welcome
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/productos"
            >
              Productos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
