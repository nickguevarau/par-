import React, { useState } from 'react';
import Navegacion from './Navegacion';
import Footer from './Footer';
import { Container, Row, Col, Card, Carousel, Button } from 'react-bootstrap';
import { FaMotorcycle, FaMobileAlt, FaGooglePlay, FaApple, FaStar, FaUtensils } from 'react-icons/fa';

export default function Inicio() {
  const [mensajeInteraccion, setMensajeInteraccion] = useState('');

  const mostrarMensaje = (nombreItem) => {
    setMensajeInteraccion(`¡Has seleccionado: "${nombreItem}"! Redirigiendo a tu pedido...`);
    setTimeout(() => setMensajeInteraccion(''), 4000);
  };

  return (
    <div style={{ backgroundColor: '#FFFDF0', minHeight: '100vh' }}>
      <Navegacion />

      {/* Alerta de interacción visual con color institucional */}
      {mensajeInteraccion && (
        <div className="alert text-center fw-bold font-inter m-0 rounded-0 py-2 shadow-sm" style={{ backgroundColor: '#2D1810', color: '#FFFDF0' }}>
          {mensajeInteraccion}
        </div>
      )}

      {/* ================= 1. CARRUSEL DE BANNERS (ESTILO STEAK HOUSE) ================= */}
      <section className="py-4">
        <Container>
          <Carousel interval={4000} className="shadow-sm rounded-4 overflow-hidden border border-2" style={{ borderColor: '#2D1810' }}>
            
            {/* Slide 1: Picaña y Cortes */}
            <Carousel.Item>
              <div className="position-relative" style={{ height: '400px' }}>
                <img 
                  className="d-block w-100 h-100 object-fit-cover" 
                  src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80" 
                  alt="Espadas Parrilleras"
                />
                <div className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-end p-4 p-md-5" style={{ background: 'linear-gradient(to top, rgba(45,24,16,0.9), transparent)' }}>
                  <span className="badge bg-warning text-dark mb-2 font-inter fs-6 w-auto align-self-start fw-bold">ESPECIAL DE LA CASA</span>
                  <h1 className="fw-bold font-heading text-white display-5 mb-1">PICAÑA + ENTRAÑA</h1>
                  <p className="font-inter text-light fs-5 mb-3">Disfruta de nuestras espadas parrilleras (Contigo Parú) a S/ 162.00</p>
                  <Button 
                    className="fw-bold rounded-3 px-4 py-2 font-inter align-self-start border-0"
                    style={{ backgroundColor: '#D4AF37', color: '#2D1810' }}
                    onClick={() => mostrarMensaje('Espadas: Picaña + Entraña')}
                  >
                    ¡PEDIR AHORA!
                  </Button>
                </div>
              </div>
            </Carousel.Item>

            {/* Slide 2: Anticucho de Lomo Fino */}
            <Carousel.Item>
              <div className="position-relative" style={{ height: '400px' }}>
                <img 
                  className="d-block w-100 h-100 object-fit-cover" 
                  src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80" 
                  alt="Anticucho de Lomo Fino"
                />
                <div className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-end p-4 p-md-5" style={{ background: 'linear-gradient(to top, rgba(45,24,16,0.9), transparent)' }}>
                  <span className="badge bg-danger mb-2 font-inter fs-6 w-auto align-self-start">PIQUEO ESTELAR</span>
                  <h1 className="fw-bold font-heading text-white display-5 mb-1">ANTICUCHO DE LOMO FINO</h1>
                  <p className="font-inter text-light fs-5 mb-3">Trozos de Lomo fino marinados en salsa anticuchera a la parrilla (S/ 52.00).</p>
                  <Button 
                    variant="danger" 
                    className="fw-bold text-white rounded-3 px-4 py-2 font-inter align-self-start border-0"
                    onClick={() => mostrarMensaje('Anticucho de Lomo Fino')}
                  >
                    RESERVAR EXPERIENCIA
                  </Button>
                </div>
              </div>
            </Carousel.Item>

            {/* Slide 3: Cocteles Parú */}
            <Carousel.Item>
              <div className="position-relative" style={{ height: '400px' }}>
                <img 
                  className="d-block w-100 h-100 object-fit-cover" 
                  src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1200&q=80" 
                  alt="Coctelería Parú"
                />
                <div className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-end p-4 p-md-5" style={{ background: 'linear-gradient(to top, rgba(45,24,16,0.9), transparent)' }}>
                  <span className="badge bg-light text-dark mb-2 font-inter fs-6 w-auto align-self-start">COCTELERÍA DE AUTOR</span>
                  <h1 className="fw-bold font-heading text-white display-5 mb-1">PARÚ PUNCH & TRAGOS</h1>
                  <p className="font-inter text-light fs-5 mb-3">Atrevida mezcla de frutas, vino tinto y pisco a solo S/ 36.00</p>
                  <Button 
                    variant="light" 
                    className="fw-bold text-dark rounded-3 px-4 py-2 font-inter align-self-start border-0"
                    onClick={() => mostrarMensaje('Coctel Parú Punch')}
                  >
                    VER COCTELES
                  </Button>
                </div>
              </div>
            </Carousel.Item>

          </Carousel>
        </Container>
      </section>

      {/* ================= 2. OFERTAS Y PIQUEOS DESTACADOS ================= */}
      <section className="py-4">
        <Container>
          <h3 className="fw-bold font-heading mb-4 d-flex align-items-center gap-2" style={{ color: '#2D1810' }}>
            Ofertas y Piqueos Destacados:
          </h3>
          <Row className="g-4">
            
            {/* Plato 1 */}
            <Col md={4}>
              <Card className="border-0 shadow-sm rounded-4 overflow-hidden h-100 bg-white">
                <div style={{ height: '220px' }}>
                  <img 
                    src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80" 
                    className="w-100 h-100 object-fit-cover" 
                    alt="Anticucho de Lomo Fino"
                  />
                </div>
                <Card.Body className="p-4 d-flex flex-column justify-content-between">
                  <div>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <h5 className="fw-bold font-heading text-dark m-0">Anticucho de Lomo Fino</h5>
                      <span className="fw-bold fs-5" style={{ color: '#2D1810' }}>S/ 52.00</span>
                    </div>
                    <p className="text-secondary font-inter small mb-3">
                      Trozos de Lomo fino marinado en salsa anticuchera a la parrilla.
                    </p>
                  </div>
                  <Button 
                    className="fw-bold text-white border-0 rounded-3 font-inter w-100"
                    style={{ backgroundColor: '#2D1810' }}
                    onClick={() => mostrarMensaje('Anticucho de Lomo Fino')}
                  >
                    <FaUtensils className="me-2" /> Pedir Platillo
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            {/* Plato 2 */}
            <Col md={4}>
              <Card className="border-0 shadow-sm rounded-4 overflow-hidden h-100 bg-white">
                <div style={{ height: '220px' }}>
                  <img 
                    src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80" 
                    className="w-100 h-100 object-fit-cover" 
                    alt="Bife de Chorizo"
                  />
                </div>
                <Card.Body className="p-4 d-flex flex-column justify-content-between">
                  <div>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <h5 className="fw-bold font-heading text-dark m-0">Bife de Chorizo</h5>
                      <span className="fw-bold fs-5" style={{ color: '#2D1810' }}>S/ 84.00</span>
                    </div>
                    <p className="text-secondary font-inter small mb-3">
                      Pincho Parú (1 Espada) con el punto exacto de cocción a las brasas.
                    </p>
                  </div>
                  <Button 
                    className="fw-bold text-white border-0 rounded-3 font-inter w-100"
                    style={{ backgroundColor: '#2D1810' }}
                    onClick={() => mostrarMensaje('Bife de Chorizo')}
                  >
                    <FaUtensils className="me-2" /> Pedir Espada
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            {/* Plato 3 */}
            <Col md={4}>
              <Card className="border-0 shadow-sm rounded-4 overflow-hidden h-100 bg-white">
                <div style={{ height: '220px' }}>
                  <img 
                    src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80" 
                    className="w-100 h-100 object-fit-cover" 
                    alt="Champiñones Rellenos"
                  />
                </div>
                <Card.Body className="p-4 d-flex flex-column justify-content-between">
                  <div>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <h5 className="fw-bold font-heading text-dark m-0">Champiñones Rellenos</h5>
                      <span className="fw-bold fs-5" style={{ color: '#2D1810' }}>S/ 30.00</span>
                    </div>
                    <p className="text-secondary font-inter small mb-3">
                      Champiñones horneados, rellenos con jamón, perejil y queso parmesano.
                    </p>
                  </div>
                  <Button 
                    className="fw-bold text-white border-0 rounded-3 font-inter w-100"
                    style={{ backgroundColor: '#2D1810' }}
                    onClick={() => mostrarMensaje('Champiñones Rellenos')}
                  >
                    <FaUtensils className="me-2" /> Pedir Piqueo
                  </Button>
                </Card.Body>
              </Card>
            </Col>

          </Row>
        </Container>
      </section>

      {/* ================= 3. DESCUENTOS Y PROMOCIONES ================= */}
      <section className="py-4">
        <Container>
          <h3 className="fw-bold font-heading mb-4" style={{ color: '#2D1810' }}>Descuentos en tus pedidos:</h3>
          <Row className="g-4">
            
            <Col md={6}>
              <Card className="border-0 shadow-sm rounded-4 overflow-hidden h-100 bg-white">
                <div style={{ height: '200px' }}>
                  <img 
                    src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=600&q=80" 
                    className="w-100 h-100 object-fit-cover" 
                    alt="Ensalada Parú Caesar"
                  />
                </div>
                <Card.Body className="p-4 d-flex flex-column justify-content-between">
                  <div>
                    <span className="badge mb-2 text-dark fw-bold" style={{ backgroundColor: '#D4AF37' }}>20% DSCTO EN ENSALADAS</span>
                    <h4 className="fw-bold font-heading text-dark">Parú Caesar (S/ 34.00)</h4>
                    <p className="text-secondary font-inter small">
                      Pechuga a la parrilla, pecanas acarameladas, croutones, arúgula, lechuga orgánica, tomate y vinagreta con descuento web.
                    </p>
                  </div>
                  <Button 
                    className="fw-bold rounded-3 font-inter w-100 mt-3 border-2"
                    style={{ borderColor: '#2D1810', color: '#2D1810', backgroundColor: 'transparent' }}
                    onClick={() => mostrarMensaje('Descuento Parú Caesar')}
                  >
                    Aplicar Descuento
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6}>
              <Card className="border-0 shadow-sm rounded-4 overflow-hidden h-100 bg-white">
                <div style={{ height: '200px' }}>
                  <img 
                    src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=600&q=80" 
                    className="w-100 h-100 object-fit-cover" 
                    alt="Cocteles"
                  />
                </div>
                <Card.Body className="p-4 d-flex flex-column justify-content-between">
                  <div>
                    <span className="badge bg-danger mb-2">HAPPY HOUR</span>
                    <h4 className="fw-bold font-heading text-dark">Punch Colorado / Parú Punch (S/ 36.00)</h4>
                    <p className="text-secondary font-inter small">
                      Pide cualquiera de nuestros cocteles de autor a base de pisco y llévate la segunda unidad a mitad de precio.
                    </p>
                  </div>
                  <Button 
                    variant="outline-danger" 
                    className="fw-bold rounded-3 font-inter w-100 mt-3"
                    onClick={() => mostrarMensaje('Promoción Cocteles')}
                  >
                    Reclamar Promoción
                  </Button>
                </Card.Body>
              </Card>
            </Col>

          </Row>
        </Container>
      </section>

      {/* ================= 4. SERVICIO DIRECTO A TU DOMICILIO ================= */}
      <section className="py-5 my-3 bg-white border-top border-bottom" style={{ borderColor: '#e0d8c5' }}>
        <Container>
          <Row className="align-items-center g-4">
            <Col md={6}>
              <div className="d-flex align-items-center gap-2 mb-3">
                <FaMotorcycle className="fs-1" style={{ color: '#2D1810' }} />
                <h2 className="fw-bold font-heading m-0" style={{ color: '#2D1810' }}>Servicio Directo a tu Domicilio:</h2>
              </div>
              <p className="text-secondary font-inter mb-3">
                Disfruta de nuestros piqueos, ensaladas y espadas parrilleras desde la comodidad de tu hogar:
              </p>
              <ul className="list-unstyled font-inter text-dark lh-lg">
                <li>✔️ Explora la carta digital y elige tus platos.</li>
                <li>✔️ Solicita tu Delivery Fast-Peru.</li>
                <li>✔️ Selecciona tu local Parú más cercano.</li>
                <li>✔️ Confirma, paga tu pedido y ¡A disfrutar!</li>
              </ul>
            </Col>

            <Col md={6} className="text-center">
              <div className="rounded-4 overflow-hidden shadow-sm">
                <img 
                  src="https://images.unsplash.com/photo-1526367460867-13a3a464188c?auto=format&fit=crop&w=600&q=80" 
                  alt="Delivery moto" 
                  className="w-100 object-fit-cover"
                  style={{ maxHeight: '300px' }}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ================= 5. DESCARGA NUESTRA APP ================= */}
      <section className="py-5">
        <Container>
          <Card className="border-0 shadow-sm rounded-4 text-white overflow-hidden" style={{ backgroundColor: '#2D1810' }}>
            <Card.Body className="p-4 p-md-5">
              <Row className="align-items-center">
                <Col md={7}>
                  <div className="d-flex align-items-center gap-2 mb-3">
                    <FaMobileAlt className="fs-2" style={{ color: '#D4AF37' }} />
                    <h2 className="fw-bold font-heading text-white m-0">Descarga Nuestra App:</h2>
                  </div>
                  
                  <ul className="list-unstyled font-inter mb-4 text-light">
                    <li className="mb-2"><strong>📱 Al alcance de tu mano!</strong><br/><span className="small text-secondary">Realiza tus pedidos de cortes y cocteles desde cualquier lugar.</span></li>
                    <li className="mb-2"><strong>⚡ Siempre Ofertas!</strong><br/><span className="small text-secondary">Entérate primero de las promociones en espadas parrilleras.</span></li>
                    <li className="mb-2"><strong>🔥 Descuentos Locos!</strong><br/><span className="small text-secondary">Aprovecha los beneficios exclusivos para miembros de la app.</span></li>
                  </ul>

                  <div className="d-flex flex-wrap gap-3">
                    <Button 
                      className="d-flex align-items-center gap-2 px-4 py-2 rounded-3 font-inter fw-bold border-0"
                      style={{ backgroundColor: '#D4AF37', color: '#2D1810' }}
                      onClick={() => mostrarMensaje('Redirigiendo a Google Play Store')}
                    >
                      <FaGooglePlay className="fs-5" /> Google Play
                    </Button>
                    <Button 
                      variant="outline-light" 
                      className="d-flex align-items-center gap-2 px-4 py-2 rounded-3 font-inter fw-bold"
                      onClick={() => mostrarMensaje('Redirigiendo a Apple App Store')}
                    >
                      <FaApple className="fs-5" /> App Store
                    </Button>
                  </div>
                </Col>

                <Col md={5} className="text-center mt-4 mt-md-0">
                  <div className="bg-white p-3 rounded-4 shadow-sm">
                    <img 
                      src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=400&q=80" 
                      alt="App Preview" 
                      className="rounded-3 w-100 object-fit-cover"
                      style={{ maxHeight: '220px' }}
                    />
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Container>
      </section>

      {/* ================= 6. RECOMENDADOS POR NUESTROS CLIENTES ================= */}
      <section className="py-4 mb-5">
        <Container>
          <h4 className="fw-bold font-heading mb-4" style={{ color: '#2D1810' }}>Recomendados por nuestros Clientes:</h4>
          <Row className="g-3">
            
            <Col md={4}>
              <Card className="border-0 shadow-sm rounded-4 p-3 bg-white h-100">
                <Card.Body className="p-2 font-inter">
                  <div className="mb-2" style={{ color: '#D4AF37' }}>
                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                  </div>
                  <h6 className="fw-bold text-dark">«Cortes Exquisitos»</h6>
                  <p className="text-secondary extra-small m-0" style={{ fontSize: '0.85rem' }}>
                    El bife de chorizo y los anticuchos de lomo fino son una verdadera delicia.
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="border-0 shadow-sm rounded-4 p-3 bg-white h-100">
                <Card.Body className="p-2 font-inter">
                  <div className="mb-2" style={{ color: '#D4AF37' }}>
                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                  </div>
                  <h6 className="fw-bold text-dark">«Cocteles de Autor»</h6>
                  <p className="text-secondary extra-small m-0" style={{ fontSize: '0.85rem' }}>
                    El Parú Punch acompaña perfectamente cualquier corte de carne.
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="border-0 shadow-sm rounded-4 p-3 bg-white h-100">
                <Card.Body className="p-2 font-inter">
                  <div className="mb-2" style={{ color: '#D4AF37' }}>
                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                  </div>
                  <h6 className="fw-bold text-dark">«Excelente Delivery»</h6>
                  <p className="text-secondary extra-small m-0" style={{ fontSize: '0.85rem' }}>
                    Llegó caliente y perfectamente empacado. Muy recomendado.
                  </p>
                </Card.Body>
              </Card>
            </Col>

          </Row>
        </Container>
      </section>

      <Footer />
    </div>
  );
}