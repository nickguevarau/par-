import React, { useState } from 'react';
import Navegacion from './Navegacion';
import Footer from './Footer';
import { Container, Card, Form, Button, Row, Col, Modal, Alert } from 'react-bootstrap';
import { FaCalendarAlt, FaInfoCircle, FaCreditCard, FaMobileAlt, FaCheckCircle } from 'react-icons/fa';

export default function Reservas() {
  const [horaSeleccionada, setHoraSeleccionada] = useState('');
  
  // Estados para controlar la ventana emergente y el pago//
  const [showModal, setShowModal] = useState(false);
  const [metodoPago, setMetodoPago] = useState('tarjeta');
  const [pagoCompletado, setPagoCompletado] = useState(false);

  // Funciones para abrir y cerrar el Modal//
  const handleAbrirPago = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const handleCerrarPago = () => {
    setShowModal(false);
    setPagoCompletado(false);
  };

  const handleProcesarPago = (e) => {
    e.preventDefault();
    setPagoCompletado(true);
  };

  return (
    <div style={{ backgroundColor: '#fffdf0' }}>
      <Navegacion />

      <div className="py-5">
        <Container className="py-2" style={{ maxWidth: '700px' }}>
          <div className="mb-4">
            <h1 className="fw-bold font-heading text-danger d-flex align-items-center gap-2">
              Realiza tu reserva y evita la espera: 
            </h1>
            <h5 className="fw-bold text-danger mt-2 font-heading" style={{ letterSpacing: '0.5px' }}>
              
            </h5>
            <p className="text-secondary font-inter small">
              Genera tu reservación y disfruta de nuestro servicio en tu local preferido y comparte una rica comida acompañada de tus Foodie's.
            </p>
          </div>

          <Card className="border-0 shadow-sm rounded-4 p-4 p-md-5 bg-white">
            <Card.Body>
              <h3 className="fw-bold mb-4 font-heading text-dark text-center">Detalles de la Reserva</h3>
              
              <Form onSubmit={handleAbrirPago}>
   
                <Form.Group className="mb-3">
                  <Form.Label className="fw-bold font-inter text-dark small">Nombre Completo:</Form.Label>
                  <Form.Control 
                    type="text" 
                    placeholder="Ej. Luis Suarez" 
                    required
                    className="py-2 rounded-3 bg-light border-0 font-inter"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label className="fw-bold font-inter text-dark small">Teléfono de Contacto:</Form.Label>
                  <Form.Control 
                    type="text" 
                    placeholder="940560934" 
                    required
                    className="py-2 rounded-3 bg-light border-0 font-inter"
                  />
                </Form.Group>

                {/* Sede */}
                <Form.Group className="mb-3">
                  <Form.Label className="fw-bold font-inter text-dark small">Sede de Preferencia:</Form.Label>
                  <Form.Select required className="py-2 rounded-3 bg-light border-0 font-inter">
                    <option value="">Selecciona una sede...</option>
                    <option value="callao">Callao</option>
                    <option value="smp">San Martin de Porres</option>
                    <option value="lima">Lima</option>
                    <option value="surco">Santiago de Surco</option>
                    <option value="san-isidro">San Isidro</option>
                    <option value="la-molina">La Molina</option>
                  </Form.Select>
                </Form.Group>

                {/* Fecha y Hora */}
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label className="fw-bold font-inter text-dark small">Fecha de Visita:</Form.Label>
                      <Form.Control 
                        type="date" 
                        required
                        className="py-2 rounded-3 bg-light border-0 font-inter"
                      />
                    </Form.Group>
                  </Col>
                  
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label className="fw-bold font-inter text-dark small">Hora de Llegada (12:00 PM - 10:00 PM):</Form.Label>
                      <Form.Select 
                        required
                        className="py-2 rounded-3 bg-light border-0 font-inter"
                        value={horaSeleccionada}
                        onChange={(e) => setHoraSeleccionada(e.target.value)}
                      >
                        <option value="">Selecciona una hora...</option>
                        <option value="12:00">12:00 PM</option>
                        <option value="13:00">01:00 PM</option>
                        <option value="14:00">02:00 PM</option>
                        <option value="15:00">03:00 PM</option>
                        <option value="16:00">04:00 PM</option>
                        <option value="17:00">05:00 PM</option>
                        <option value="18:00">06:00 PM</option>
                        <option value="19:00">07:00 PM</option>
                        <option value="20:00">08:00 PM</option>
                        <option value="21:00">09:00 PM</option>
                        <option value="22:00">10:00 PM</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>

                {!horaSeleccionada && (
                  <p className="text-muted font-inter small mb-4 d-flex align-items-center gap-1" style={{ fontSize: '0.82rem' }}>
                    <FaInfoCircle className="text-warning fs-6" /> Por favor selecciona una hora para consultar la disponibilidad de las 14 mesas.
                  </p>
                )}

                {/* Despliegue de Mesas */}
                {horaSeleccionada && (
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-bold font-inter text-dark small">
                      Mesa a Reservar (Disponibles para las {horaSeleccionada} hrs):
                    </Form.Label>
                    <Form.Select required className="py-2 rounded-3 bg-light border-0 font-inter">
                      <option value="">Selecciona tu mesa...</option>
                      
                      <option value="m1">Mesa 01 - Salón Principal (2 pers.) — [DISPONIBLE]</option>
                      <option value="m2">Mesa 02 - Salón Principal (2 pers.) — [DISPONIBLE]</option>
                      <option value="m3" disabled>Mesa 03 - Salón Principal (4 pers.) — [RESERVADA]</option>
                      <option value="m4">Mesa 04 - Salón Principal (4 pers.) — [DISPONIBLE]</option>
                      <option value="m5">Mesa 05 - Salón Principal (6 pers.) — [DISPONIBLE]</option>
                      <option value="m6" disabled>Mesa 06 - Salón Principal (6 pers.) — [RESERVADA]</option>

                      <option value="m7">Mesa 07 - Terraza (2 pers.) — [DISPONIBLE]</option>
                      <option value="m8">Mesa 08 - Terraza (2 pers.) — [DISPONIBLE]</option>
                      <option value="m9" disabled>Mesa 09 - Terraza (4 pers.) — [RESERVADA]</option>
                      <option value="m10">Mesa 10 - Terraza (4 pers.) — [DISPONIBLE]</option>
                      <option value="m11">Mesa 11 - Terraza (8 pers. Familiar) — [DISPONIBLE]</option>

                      <option value="m12">Mesa 12 - Zona VIP (2 pers. Pareja) — [DISPONIBLE]</option>
                      <option value="m13" disabled>Mesa 13 - Zona VIP (4 pers.) — [RESERVADA]</option>
                      <option value="m14">Mesa 14 - Zona VIP (6 pers. Lounge) — [DISPONIBLE]</option>
                    </Form.Select>
                  </Form.Group>
                )}

                {/* Número de Personas */}
                <Form.Group className="mb-4">
                  <Form.Label className="fw-bold font-inter text-dark small">Número de Personas (Máximo 8):</Form.Label>
                  <Form.Select required className="py-2 rounded-3 bg-light border-0 font-inter">
                    <option value="">Selecciona la cantidad de personas...</option>
                    <option value="1">1 Persona</option>
                    <option value="2">2 Personas</option>
                    <option value="3">3 Personas</option>
                    <option value="4">4 Personas</option>
                    <option value="5">5 Personas</option>
                    <option value="6">6 Personas</option>
                    <option value="7">7 Personas</option>
                    <option value="8">8 Personas (Máximo por mesa)</option>
                  </Form.Select>
                </Form.Group>

                {/* Botón que activa el Modal de Pago */}
                <div className="d-grid">
                  <Button 
                    type="submit"
                    className="fw-bold text-dark border-0 py-3 rounded-3 shadow-sm font-inter"
                    style={{ backgroundColor: '#FFEDD0' }}
                  >
                    CONFIRMAR RESERVACIÓN
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Container>
      </div>

      {/* ================= VENTANA EMERGENTE MODAL DE PAGO ================= */}
      <Modal show={showModal} onHide={handleCerrarPago} centered backdrop="static" className="font-inter">
        <Modal.Header closeButton className="border-0 pb-0">
          <Modal.Title className="fw-bold text-dark font-heading fs-4">
            Garantía de Reserva (S/ 30.00)
          </Modal.Title>
        </Modal.Header>

        <Modal.Body className="p-4">
          {!pagoCompletado ? (
            <Form onSubmit={handleProcesarPago}>
              <p className="text-secondary small mb-4">
                Para asegurar tu mesa solicitamos un adelanto consumible de <strong>S/ 30.00</strong> que se descontará de tu cuenta final.
              </p>

              {/* Selección del método de pago */}
              <Form.Group className="mb-4">
                <Form.Label className="fw-bold text-dark small">Método de Pago:</Form.Label>
                <div className="d-flex gap-2">
                  <Button
                    type="button"
                    variant={metodoPago === 'tarjeta' ? 'warning' : 'outline-secondary'}
                    className="w-50 py-2 d-flex align-items-center justify-content-center gap-2 fw-bold text-dark"
                    onClick={() => setMetodoPago('tarjeta')}
                  >
                    <FaCreditCard /> Tarjeta
                  </Button>
                  <Button
                    type="button"
                    variant={metodoPago === 'yape' ? 'warning' : 'outline-secondary'}
                    className="w-50 py-2 d-flex align-items-center justify-content-center gap-2 fw-bold text-dark"
                    onClick={() => setMetodoPago('yape')}
                  >
                    <FaMobileAlt /> Yape / Plin
                  </Button>
                </div>
              </Form.Group>

              {/* Campos según el método seleccionado */}
              {metodoPago === 'tarjeta' ? (
                <>
                  <Form.Group className="mb-3">
                    <Form.Label className="small font-inter fw-bold">Número de Tarjeta:</Form.Label>
                    <Form.Control type="text" placeholder="4557 •••• •••• 1234" required className="bg-light border-0 py-2" />
                  </Form.Group>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label className="small font-inter fw-bold">Vencimiento:</Form.Label>
                        <Form.Control type="text" placeholder="MM/AA" required className="bg-light border-0 py-2" />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label className="small font-inter fw-bold">CVV:</Form.Label>
                        <Form.Control type="password" placeholder="123" required maxLength={4} className="bg-light border-0 py-2" />
                      </Form.Group>
                    </Col>
                  </Row>
                </>
              ) : (
                <div className="text-center p-3 bg-light rounded-3 mb-3">
                  <p className="small text-muted mb-2">Escanea o yapea al número:</p>
                  <h4 className="fw-bold text-danger mb-1">940 560 934</h4>
                  <span className="badge bg-secondary mb-3">A nombre de Parú Steakhouse</span>
                  <Form.Group className="text-start">
                    <Form.Label className="small font-inter fw-bold">Número de Operación:</Form.Label>
                    <Form.Control type="text" placeholder="Ej. 098123" required className="bg-white border-0 py-2" />
                  </Form.Group>
                </div>
              )}

              <div className="d-grid mt-4">
                <Button 
                  type="submit" 
                  className="fw-bold text-dark border-0 py-2 rounded-3 shadow-sm"
                  style={{ backgroundColor: '#ff9800' }}
                >
                  PAGAR Y FINALIZAR RESERVA
                </Button>
              </div>
            </Form>
          ) : (
            /* Mensaje de Pago Exitoso */
            <div className="text-center py-4">
              <FaCheckCircle className="text-success display-3 mb-3" />
              <h4 className="fw-bold font-heading text-dark">¡Reserva Confirmada!</h4>
              <p className="text-secondary small font-inter mt-2">
                Hemos recibido tu pago de adelanto. Te enviamos los detalles a tu número de contacto.
              </p>
              <Button 
                onClick={handleCerrarPago} 
                className="btn-dark fw-bold px-4 py-2 mt-3 rounded-3 font-inter"
                
              >
                ENTENDIDO
              </Button>
            </div>
          )}
        </Modal.Body>
      </Modal>
      <Footer />
    </div>
  );
}