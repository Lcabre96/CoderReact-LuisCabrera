
import CartWidget from '../CartWidget'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './menu.css'
import { Link } from 'react-router-dom';


const NavBar = () => {
  return (
  <Navbar  collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container className="navBar">
      <Link className='categorias' to='/'>inicio</Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Link className='categorias' to='/categoria/Zapatillas'>Zapatillas</Link>
          <Link className='categorias' to='/categoria/Buzos'>Buzos</Link>

        {/* <Nav.Link href="#features">Zapatillas</Nav.Link>
        <Nav.Link href="#pricing">Buzos</Nav.Link>   */}
        </Nav>
        <Link to='/cart'>
          <CartWidget />
        </Link>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  
  )
}
     
export default NavBar


{/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown"> */}
  {/* <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item> */}
  {/* <NavDropdown.Item href="#action/3.2"> */}
    // Another action
  {/* </NavDropdown.Item> */}
  {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item> */}
  {/* <NavDropdown.Divider /> */}
  {/* <NavDropdown.Item href="#action/3.4"> */}
    // Separated link
  {/* </NavDropdown.Item> */}
{/* </NavDropdown> */}