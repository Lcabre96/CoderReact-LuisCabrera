import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function NavBar() {
  let title = "Groot Importados";
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>

      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link" aria-current="page">
              Inicio
            </Link>
          </li>
          <li className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle"
              to="/productos"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Productos
            </Link>
            <ul className="dropdown-menu" style={{ margin: 0 }}>
              <li>
                <Link to="/categoria/Zapatillas" className="dropdown-item">
                  Zapatillas
                </Link>
              </li>
              <li>
                <Link to="/categoria/Buzos" className="dropdown-item">
                  Buzos
                </Link>
              </li>
            </ul>
          </li>
          <div className="cart">
            <CartWidget />
          </div>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
