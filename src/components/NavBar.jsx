import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logo.png'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom';

function NavBar () {
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
    <Container fluid>
      <Navbar.Brand as={Link} to='/'>
        <img src={logo} width="200" height="30" className="d-inline-block align-top" alt="logo pelucars" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link as={Link} to='/category/autos'>Autos</Nav.Link>
          <Nav.Link as={Link} to='/category/motos'>Motos</Nav.Link>
          <Nav.Link as={Link} to='/category/camionetas'>Camionetas</Nav.Link>
          <Nav.Link as={Link} to='/category/utilitarios'>Utilitarios</Nav.Link>
          {/* CartWidget */}
          <CartWidget color='white' />
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  ) 
}

export default NavBar;