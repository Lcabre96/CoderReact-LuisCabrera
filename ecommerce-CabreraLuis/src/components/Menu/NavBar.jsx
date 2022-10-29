
import CartWidget from '../CartWidget'
import './menu.css'

const NavBar = () => {
  return (
    <nav>
      <ul className="nav-container">
        <li><a className="item-list" href="#">Inicio</a></li>
        <li><a className="item-list" href="#">Productos</a></li>
        <li><a className="item-list" href="#">Contacto</a></li>
        <CartWidget />
      </ul>
    </nav>
  )
}

export default NavBar