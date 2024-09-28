import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logo.png'
import CardWidget from './CardWidget'

function NavBar () {
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="#home">
        <img src={logo} width="200" height="30" className="d-inline-block align-top" alt="logo pelucars" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="#autos">Autos</Nav.Link>
          <Nav.Link href="#motos">Motos</Nav.Link>
          <Nav.Link href="#camionetas">Camionetas</Nav.Link>
          <Nav.Link href="#utilitarios">Utilitarios</Nav.Link>
          {/* CardWidget */}
          <CardWidget cant='0' color='white' />
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  ) 
}

export default NavBar;