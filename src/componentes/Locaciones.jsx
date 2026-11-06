import React from 'react';
import Navegacion from './Navegacion';
import Footer from './Footer';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaPhoneAlt, FaMapMarkedAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const localesData = [
  {
    id: 1,
    distrito: "CALLAO:",
    direccion: "AV. LA MARINA CON AV. UNIVERSITARIA, FRENTE A PLAZA SAN MIGUEL.",
    telefono: "(01) 555-1234 / +51 987 654 321",
    mapaEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.88858348705!2d-77.0850!3d-12.0760!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c9644f1a4e15%3A0x8e83f08f85d38a0!2sAv.%20la%20Marina%20%26%20Av.%20Universitaria!5e0!3m2!1ses!2spe!4v1700000000000!5m2!1ses!2spe",
    mapaUrl: "https://www.google.com/maps/search/?api=1&query=Av.+La+Marina+con+Av.+Universitaria+Callao",
    invertido: false
  },
  {
    id: 2,
    distrito: "SAN MARTIN DE PORRES:",
    direccion: "AV. TOMAS VALLE CON AV. UNIVERSITARIA. (AL COSTADO DE INKAFARMA)",
    telefono: "(01) 555-2345 / +51 987 654 322",
    mapaEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.90000000000!2d-77.0800!3d-12.0100!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105ce0000000000%3A0x0!2sAv.%20Tomas+Valle+%26+Av.%20Universitaria!5e0!3m2!1ses!2spe!4v1700000000000!5m2!1ses!2spe",
    mapaUrl: "https://www.google.com/maps/search/?api=1&query=Av.+Tomas+Valle+con+Av.+Universitaria+San+Martin+de+Porres",
    invertido: true
  },
  {
    id: 3,
    distrito: "LIMA:",
    direccion: "AV. 28 DE JULIO Nº 625 (JUNTO AL OVALO JORGE CHAVEZ)",
    telefono: "(01) 555-3456 / +51 987 654 323",
    mapaEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.60000000000!2d-77.0400!3d-12.0650!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c80000000000%3A0x0!2sAv.%2028%20de%20Julio%20625%2C%20Lima!5e0!3m2!1ses!2spe!4v1700000000000!5m2!1ses!2spe",
    mapaUrl: "https://www.google.com/maps/search/?api=1&query=Av.+28+de+Julio+625+Lima",
    invertido: false
  },
  {
    id: 4,
    distrito: "SANTIAGO DE SURCO:",
    direccion: "AV. CAMINOS DEL INCA 1163",
    telefono: "(01) 555-4567 / +51 987 654 324",
    mapaEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.80000000000!2d-76.9850!3d-12.1250!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c80000000000%3A0x0!2sAv.%20Caminos+del+Inca+1163%2C+Surco!5e0!3m2!1ses!2spe!4v1700000000000!5m2!1ses!2spe",
    mapaUrl: "https://www.google.com/maps/search/?api=1&query=Av.+Caminos+del+Inca+1163+Surco",
    invertido: true
  },
  {
    id: 5,
    distrito: "SAN ISIDRO:",
    direccion: "AV. JAVIER PRADO ESTE (FRENTE AL HOTEL SANTA CRUZ)",
    telefono: "(01) 555-5678 / +51 987 654 325",
    mapaEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.20000000000!2d-77.0300!3d-12.0900!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c80000000000%3A0x0!2sAv.%20Javier+Prado+Este%2C+San+Isidro!5e0!3m2!1ses!2spe!4v1700000000000!5m2!1ses!2spe",
    mapaUrl: "https://www.google.com/maps/search/?api=1&query=Av.+Javier+Prado+Este+San+Isidro",
    invertido: false
  },
  {
    id: 6,
    distrito: "LA MOLINA:",
    direccion: "AV. RAUL FERRERO S/N, LA MOLINA 1205. (DENTRO DE PLAZA CENTER - 2DO PISO)",
    telefono: "(01) 555-6789 / +51 987 654 326",
    mapaEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.00000000000!2d-76.9500!3d-12.0950!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c80000000000%3A0x0!2sPlaza+Center+La+Molina!5e0!3m2!1ses!2spe!4v1700000000000!5m2!1ses!2spe",
    mapaUrl: "https://www.google.com/maps/search/?api=1&query=Plaza+Center+La+Molina+Av.+Raul+Ferrero",
    invertido: true
  }
];

export default function Locaciones() {
  return (
    <div style={{ backgroundColor: '#FFFDF0', minHeight: '100vh' }}>
      <Navegacion />
      <div className="py-5">
        <Container className="py-2">
          <div className="mb-5">
            <h1 className="fw-bold font-heading text-dark">
              LOCALES:
            </h1>
            <p className="text-secondary font-inter" style={{ maxWidth: '600px' }}>
              Aquí encontrarás nuestros múltiples locales disponibles para Delivery o Recojo.
            </p>
          </div>

          <div className="d-flex flex-column gap-5">
            {localesData.map((local) => (
              <Card key={local.id} className="border-0 bg-transparent shadow-none p-0">
                <Row className="align-items-center g-4">
                  
                  {/* Información del Local */}
                  <Col lg={6} md={12} className={local.invertido ? "order-lg-2" : "order-lg-1"}>
                    <div className="pe-lg-4">
                      <h3 className="fw-bold font-heading mb-2" style={{ color: '#2D1810' }}>
                        {local.distrito}
                      </h3>
                      <p className="fw-bold text-dark font-inter mb-2" style={{ fontSize: '1.05rem', lineHeight: '1.5' }}>
                        {local.direccion}
                      </p>
                      
                      <p className="text-secondary font-inter mb-4 d-flex align-items-center gap-2" style={{ fontSize: '0.95rem' }}>
                        <FaPhoneAlt className="text-dark fs-6" /> 
                        <span>{local.telefono}</span>
                      </p>

                      <div className="d-flex flex-wrap gap-2">
                        {/* Botón principal con el color Marrón Café institucional */}
                        <Button 
                          as={Link}
                          to="/Reservas" 
                          className="fw-bold text-white border-0 px-4 py-2 rounded-3 shadow-sm font-inter"
                          style={{ backgroundColor: '#2D1810', transition: 'all 0.2s' }}
                        >
                          RESERVAR
                        </Button>

                        {/* Botón secundario con borde café */}
                        <Button 
                          href={local.mapaUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="fw-bold px-3 py-2 rounded-3 font-inter d-flex align-items-center gap-2"
                          style={{ borderColor: '#2D1810', color: '#2D1810', backgroundColor: 'transparent' }}
                        >
                          <FaMapMarkedAlt /> ABRIR MAPA COMPLETO
                        </Button>
                      </div>
                    </div>
                  </Col>

                  {/* Mapa Interactivo */}
                  <Col lg={6} md={12} className={local.invertido ? "order-lg-1" : "order-lg-2"}>
                    <div className="overflow-hidden rounded-4 shadow-sm border" style={{ height: '260px', borderColor: '#2D1810' }}>
                      <iframe
                        title={`Mapa Interactivo ${local.distrito}`}
                        src={local.mapaEmbed}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                  </Col>

                </Row>
              </Card>
            ))}
          </div>
        </Container>
      </div>

      <Footer />
    </div>
  );
}