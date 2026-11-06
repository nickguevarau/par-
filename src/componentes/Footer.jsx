import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#704A33' }} className="text-white py-4 border-top border-secondary">
      <Container>
        <Row className="align-items-center gy-4">
          <Col md={4} sm={12}>            
            <p className="text-white mb-2 fw-semibold" style={{ fontFamily: "'Inter', sans-serif" }}>Síguenos:</p>
            <div className="d-flex gap-3 fs-4">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-white">
                <FaFacebook />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-white">
                <FaInstagram />
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noreferrer" className="text-white">
                <FaTiktok />
              </a>
            </div>
          </Col>
          <Col md={3} sm={6}>
            <h6 className="fw-bold mb-3 text-white" style={{ fontFamily: "'Inter', sans-serif" }}>Políticas</h6>
            <ul className="list-unstyled mb-0">
              <li>
                <a href="#terminos" className="text-decoration-none text-white opacity-75 hover-opacity-100">
                  Términos y Condiciones
                </a>
              </li>
            </ul>
          </Col>
          <Col md={3} sm={6}>
            <h6 className="fw-bold mb-3 text-white" style={{ fontFamily: "'Inter', sans-serif" }}>Sobre Nosotros</h6>
            <ul className="list-unstyled mb-0">
              <li>
                <a href="#contactenos" className="text-decoration-none text-white opacity-75">
                  Contáctenos
                </a>
              </li>
            </ul>
          </Col>
          <Col md={2} sm={12} className="text-center text-md-end">
            <img 
              src="/img/logonegro.png"
              alt="Parú Steak House Logo" 
              className="img-fluid shadow-sm rounded" 
              style={{ maxHeight: '50px', objectFit: 'cover', filter: 'brightness(10)' }}
            />
          </Col>

        </Row>
      </Container>
    </footer>
  );
}