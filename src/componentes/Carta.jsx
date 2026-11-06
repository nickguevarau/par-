import React from 'react';
import Navegacion from './Navegacion';
import Footer from './Footer';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaUtensils } from 'react-icons/fa';

const MENU_DATA = {
  espadas1: [
    { id: 's1', nombre: 'BIFE CHORIZO', precio: '84.00', img: '/img/bife chorizo.jpg' },
    { id: 's2', nombre: 'PICAÑA', precio: '85.00', img: '/img/picaña.jpg' },
    { id: 's3', nombre: 'CUADRIL', precio: '66.00', img: '/img/cuadril.jpg' },
    { id: 's4', nombre: 'RIB EYE', precio: '138.00', img: '/img/rib eye.jpg' }
  ],
  espadas2: [
    { id: 'd1', nombre: 'PICAÑA + ENTRAÑA', precio: '162.00', img: '/img/duo 1.jpg' },
    { id: 'd2', nombre: 'PICAÑA + BIFE ANGOSTO', precio: '166.00', img: '/img/duo 2.jpg' },
    { id: 'd3', nombre: 'CUADRIL + BIFE ANGOSTO', precio: '142.00', img: '/img/duo 3.jpg' },
    { id: 'd4', nombre: 'BIFE ANCHO + BIFE ANGOSTO', precio: '166.00', img: '/img/duo 4.jpg' }
  ],
  espadas3: [
    { id: 't1', nombre: '+ PICAÑA\n+ ENTRAÑA\n+ BIFE ANGOSTO', precio: '238.00', img: '/img/trio 1.jpg' },
    { id: 't2', nombre: '+ BIFE ANCHO\n+ CUADRIL\n+ BIFE ANGOSTO', precio: '224.00', img: '/img/trio 2.jpg' },
    { id: 't3', nombre: '+ PICAÑA\n+ BIFE ANCHO\n+ BIFE ANGOSTO', precio: '243.00', img: '/img/trio 3.jpg' },
    { id: 't4', nombre: '+ CUADRIL\n+ PICAÑA\n+ BIFE ANGOSTO', precio: '224.00', img: '/img/trio 4.jpg' }
  ],
  piqueos: [
    { id: 'p1', nombre: 'CHAMPIÑONES RELLENOS', precio: '30.00', desc: 'Champiñones horneados, rellenos con jamón, perejil y queso parmesano.', img: '/img/champiñones rellenos.jpg' },
    { id: 'p2', nombre: 'CHAMPIÑONES CON SALSA PARRILLERA', precio: '25.00', desc: 'Champiñones con salsa parrillera.', img: '/img/champiñones con salsa parrillera.jpg' },
    { id: 'p3', nombre: 'ANTICUCHO DE LOMO FINO', precio: '52.00', desc: 'Trozos de Lomo fino marinado en salsa anticuchera a la parrilla.', img: '/img/lomo fino a la parrilla.jpg' },
    { id: 'p4', nombre: 'ROLL BEEF', precio: '30.00', desc: 'Trozos de carne salteada envueltos en pasta al huevo.', img: '/img/trozos salteados.jpg' }
  ],
  ensaladas: [
    { id: 'e1', nombre: 'GRILL SALAD', precio: '20.00', desc: 'Lechuga americana con tomates, aros de cebolla, rabanito y palta.', img: '/img/Grill salad.jpg' },
    { id: 'e2', nombre: 'PARÚ CAESAR', precio: '34.00', desc: 'Pechuga a la parrilla, pecanas acarameladas, croutones, arúgula, lechuga orgánica, tomate y vinagreta.', img: '/img/Paru caesar.jpg' },
    { id: 'e3', nombre: 'CARLOTTA GRILL', precio: '36.00', desc: 'Pechuga crocante, lechuga americana, tomate, palta, espinaca, queso fresco, aros de cebolla blanca y salsa de la casa.', img: '/img/carlota grill.jpg' },
    { id: 'e4', nombre: 'CRISPY CHICKEN', precio: '30.00', desc: 'Lechuga orgánica, arúgula, espinaca, láminas de palta, jamón inglés, queso dambo, pechuga a la parrilla y vinagreta.', img: '/img/cryspi chiken.jpg' }
  ],
  cocteles: [
    { id: 'c1', nombre: 'PARÚ PUNCH', precio: '36.00', desc: 'Atrevida mezcla de piña, maracuyá, naranja y chicha morada, vino tinto, pisco y hielo.', img: '/img/coctel 1.jpg' },
    { id: 'c2', nombre: 'PUNCH COLORADO', precio: '36.00', desc: 'Dulce mix de cranberry, piña, maracuyá, base de pisco y hielo.', img: '/img/coctel 2.jpg' },
    { id: 'c3', nombre: 'PARÚ MORENO', precio: '36.00', desc: 'Aromática mezcla de cítricos, hierbas y fruto seco, ron, fernet y hielo.', img: '/img/coctel 3.jpg' },
    { id: 'c4', nombre: 'FERNETCHAYA', precio: '36.00', desc: 'Amaderada mezcla con zumo de maracuyá, cranberry, naranja, fernet y pisco con hielo.', img: '/img/coctel 4.jpg' }
  ],
  bebidas: [
    { id: 'b1', nombre: 'LIMONADA DE CAMU CAMU', precio: '12.00', img: '/img/bebida 1.jpg' },
    { id: 'b2', nombre: 'ZUMOS NATURALES', precio: '14.00', img: '/img/bebida 2.jpg' },
    { id: 'b3', nombre: 'LIMONADA FROZEN', precio: '12.00', img: '/img/bebida 3.jpg' },
    { id: 'b4', nombre: 'MARACUYÁ', precio: '10.00', img: '/img/bebida 4.jpg' }
  ]
};

export default function Carta() {
  return (
    <div style={{ backgroundColor: '#FFFDF0', minHeight: '100vh' }}>
      <Navegacion />

      <Container className="py-4 font-inter">
        
        {/* Titulo Principal */}
        <h2 className="fw-bold text-dark mb-4 font-heading d-flex align-items-center gap-2">
          CARTA: <FaUtensils className="p-1 rounded text-white fs-4" style={{ backgroundColor: '#FF9800' }} />
        </h2>

        {/* 1. PINCHO PARÚ (1 ESPADA) */}
        <div className="mb-5">
          <h4 className="fw-bold text-dark font-heading mb-3">PINCHO PARÚ (1 ESPADA):</h4>
          <Row className="g-3">
            {MENU_DATA.espadas1.map((item) => (
              <Col key={item.id} xs={6} md={3}>
                <Card className="border-0 shadow-sm rounded-3 overflow-hidden h-100 bg-transparent">
                  {/* Contenedor con aspecto 1:1 cuadrado */}
                  <div className="w-100 position-relative" style={{ aspectRatio: '1 / 1' }}>
                    <img 
                      src={item.img} 
                      alt={item.nombre} 
                      className="w-100 h-100 object-fit-cover rounded-3 shadow-sm"
                      onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=400&q=80'; }}
                    />
                  </div>
                  <Card.Body className="px-1 py-2">
                    <h6 className="fw-bold text-dark font-heading mb-1 small">{item.nombre}</h6>
                    <span className="extra-small text-dark font-inter" style={{ fontSize: '0.8rem' }}>PRECIO S/. {item.precio}</span>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        {/* 2. CONTIGO PARÚ (2 ESPADAS) */}
        <div className="mb-5">
          <h4 className="fw-bold text-dark font-heading mb-3">CONTIGO PARÚ (2 ESPADAS):</h4>
          <Row className="g-3">
            {MENU_DATA.espadas2.map((item) => (
              <Col key={item.id} xs={6} md={3}>
                <Card className="border-0 shadow-sm rounded-3 overflow-hidden h-100 bg-transparent">
                  <div className="w-100 position-relative" style={{ aspectRatio: '1 / 1' }}>
                    <img 
                      src={item.img} 
                      alt={item.nombre} 
                      className="w-100 h-100 object-fit-cover rounded-3 shadow-sm"
                      onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=400&q=80'; }}
                    />
                  </div>
                  <Card.Body className="px-1 py-2">
                    <h6 className="fw-bold text-dark font-heading mb-1 small">{item.nombre}</h6>
                    <span className="extra-small text-dark font-inter" style={{ fontSize: '0.8rem' }}>PRECIO S/. {item.precio}</span>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        {/* 3. VAMOS PARÚ (3 ESPADAS) */}
        <div className="mb-5">
          <h4 className="fw-bold text-dark font-heading mb-3">VAMOS PARÚ (3 ESPADAS):</h4>
          <Row className="g-3">
            {MENU_DATA.espadas3.map((item) => (
              <Col key={item.id} xs={6} md={3}>
                <Card className="border-0 shadow-sm rounded-3 overflow-hidden h-100 bg-transparent">
                  <div className="w-100 position-relative" style={{ aspectRatio: '1 / 1' }}>
                    <img 
                      src={item.img} 
                      alt={item.nombre} 
                      className="w-100 h-100 object-fit-cover rounded-3 shadow-sm"
                      onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=400&q=80'; }}
                    />
                  </div>
                  <Card.Body className="px-1 py-2">
                    <h6 className="fw-bold text-dark font-heading mb-1 small lh-sm text-pre-line">{item.nombre}</h6>
                    <span className="extra-small text-dark font-inter" style={{ fontSize: '0.8rem' }}>PRECIO S/. {item.precio}</span>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        {/* 4. PIQUEOS */}
        <div className="mb-5">
          <h4 className="fw-bold text-dark font-heading mb-3">PIQUEOS:</h4>
          <Row className="g-3">
            {MENU_DATA.piqueos.map((item) => (
              <Col key={item.id} xs={6} md={3}>
                <Card className="border-0 shadow-sm rounded-3 overflow-hidden h-100 bg-transparent">
                  <div className="w-100 position-relative" style={{ aspectRatio: '1 / 1' }}>
                    <img 
                      src={item.img} 
                      alt={item.nombre} 
                      className="w-100 h-100 object-fit-cover rounded-3 shadow-sm"
                      onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1561758033-d89a9ad46330?auto=format&fit=crop&w=400&q=80'; }}
                    />
                  </div>
                  <Card.Body className="px-1 py-2">
                    <h6 className="fw-bold text-dark font-heading mb-0 small">{item.nombre}</h6>
                    <span className="extra-small text-dark font-inter d-block mb-1" style={{ fontSize: '0.8rem' }}>PRECIO S/. {item.precio}</span>
                    <p className="text-secondary font-inter extra-small mb-0" style={{ fontSize: '0.75rem', lineHeight: '1.2' }}>{item.desc}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        {/* 5. ENSALADAS */}
        <div className="mb-5">
          <h4 className="fw-bold text-dark font-heading mb-3">ENSALADAS:</h4>
          <Row className="g-3">
            {MENU_DATA.ensaladas.map((item) => (
              <Col key={item.id} xs={6} md={3}>
                <Card className="border-0 shadow-sm rounded-3 overflow-hidden h-100 bg-transparent">
                  <div className="w-100 position-relative" style={{ aspectRatio: '1 / 1' }}>
                    <img 
                      src={item.img} 
                      alt={item.nombre} 
                      className="w-100 h-100 object-fit-cover rounded-3 shadow-sm"
                      onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=400&q=80'; }}
                    />
                  </div>
                  <Card.Body className="px-1 py-2">
                    <h6 className="fw-bold text-dark font-heading mb-0 small">{item.nombre}</h6>
                    <span className="extra-small text-dark font-inter d-block mb-1" style={{ fontSize: '0.8rem' }}>PRECIO S/. {item.precio}</span>
                    <p className="text-secondary font-inter extra-small mb-0" style={{ fontSize: '0.75rem', lineHeight: '1.2' }}>{item.desc}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        {/* 6. COCTELES */}
        <div className="mb-5">
          <h4 className="fw-bold text-dark font-heading mb-3">COCTELES:</h4>
          <Row className="g-3">
            {MENU_DATA.cocteles.map((item) => (
              <Col key={item.id} xs={6} md={3}>
                <Card className="border-0 shadow-sm rounded-3 overflow-hidden h-100 bg-transparent">
                  <div className="w-100 position-relative" style={{ aspectRatio: '1 / 1' }}>
                    <img 
                      src={item.img} 
                      alt={item.nombre} 
                      className="w-100 h-100 object-fit-cover rounded-3 shadow-sm"
                      onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=400&q=80'; }}
                    />
                  </div>
                  <Card.Body className="px-1 py-2">
                    <h6 className="fw-bold text-dark font-heading mb-0 small">{item.nombre}</h6>
                    <span className="extra-small text-dark font-inter d-block mb-1" style={{ fontSize: '0.8rem' }}>PRECIO S/. {item.precio}</span>
                    <p className="text-secondary font-inter extra-small mb-0" style={{ fontSize: '0.75rem', lineHeight: '1.2' }}>{item.desc}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        {/* 7. BEBIDAS */}
        <div className="mb-5">
          <h4 className="fw-bold text-dark font-heading mb-3">BEBIDAS:</h4>
          <Row className="g-3">
            {MENU_DATA.bebidas.map((item) => (
              <Col key={item.id} xs={6} md={3}>
                <Card className="border-0 shadow-sm rounded-3 overflow-hidden h-100 bg-transparent">
                  <div className="w-100 position-relative" style={{ aspectRatio: '1 / 1' }}>
                    <img 
                      src={item.img} 
                      alt={item.nombre} 
                      className="w-100 h-100 object-fit-cover rounded-3 shadow-sm"
                      onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=400&q=80'; }}
                    />
                  </div>
                  <Card.Body className="px-1 py-2">
                    <h6 className="fw-bold text-dark font-heading mb-0 small">{item.nombre}</h6>
                    <span className="extra-small text-dark font-inter d-block" style={{ fontSize: '0.8rem' }}>PRECIO S/. {item.precio}</span>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>

      </Container>

      <Footer />
    </div>
  );
}