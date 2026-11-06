import React from 'react'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';

function Navegacion() {
  return (
    <header className="border-top" style={{ backgroundColor: '#2D1810' }}>
      <Navbar expand="lg" className="py-3">
        <Container >
          <Navbar.Brand as={Link} to="/" className="p-2">
            <img
              src="/img/logoblanco.png"
              alt="PARÚ Steak House"
              height="15"
              className="d-inline-block align-top img-fluid"
            />
          </Navbar.Brand>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto gap-4">
              <Nav.Link as={Link} to="/" className="text-white fw-bold text-uppercase px-0 link-nav">
                INICIO
              </Nav.Link>
              <Nav.Link as={Link} to="/Carta" className="text-white fw-bold text-uppercase px-0 link-nav">
                CARTA
              </Nav.Link>
              <Nav.Link as={Link} to="/Locaciones" className="text-white fw-bold text-uppercase px-0 link-nav">
                LOCALES
              </Nav.Link>
              <Nav.Link as={Link} to="/Reservas" className="text-white fw-bold text-uppercase px-0 link-nav">
                RESERVACIONES
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Navegacion;
