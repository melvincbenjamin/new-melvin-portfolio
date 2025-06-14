import { useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { BarChart, Code, Camera, CheckCircle } from "react-bootstrap-icons";
import "aos/dist/aos.css";
import AOS from "aos";

function ServicesComponent() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="services" className="py-5">
      <Container>
        <h6 className="text-secondary text-center">What I offer</h6>
        <h2 className="text-center fw-bold text-primary fs-4 mb-4">My Services</h2>
        <Row className="gy-4">
          {/* FullStack Web Development */}
          <Col xs={12} md={4} data-aos="fade-up">
            <Card className="text-center border-0 shadow-sm service-card h-100">
              <div className="icon-title-section">
                <Code size={30} className="text-light me-2" />
                <Card.Title className="fw-bold fs-6 text-light mb-0">FullStack Web Dev</Card.Title>
              </div>
              <Card.Body className="d-flex flex-column">
                <Card.Text className="flex-grow-1">
                  <ul className="text-light">
                    <li><CheckCircle className="text-primary me-2" />Web Application Development</li>
                    <li><CheckCircle className="text-primary me-2" />Mobile App Development</li>
                    <li><CheckCircle className="text-primary me-2" />WordPress</li>
                    <li><CheckCircle className="text-primary me-2" />DevOps & Automation</li>
                    <li><CheckCircle className="text-primary me-2" />QA & App Support</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Content Creation */}
          <Col xs={12} md={4} data-aos="fade-up">
            <Card className="text-center border-0 shadow-sm service-card h-100">
              <div className="icon-title-section">
                <Camera size={30} className="text-light me-2" />
                <Card.Title className="fw-bold fs-6 text-light mb-0">Content Creation</Card.Title>
              </div>
              <Card.Body className="d-flex flex-column">
                <Card.Text className="flex-grow-1">
                  <ul className="text-light">
                    <li><CheckCircle className="text-primary me-2" />Instagram Content Strategy</li>
                    <li><CheckCircle className="text-primary me-2" />Social Media Management</li>
                    <li><CheckCircle className="text-primary me-2" />Training Material Creation</li>
                    <li><CheckCircle className="text-primary me-2" />Social Media Content</li>
                    <li><CheckCircle className="text-primary me-2" />YouTube Video Creation</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Cyber Security */}
          <Col xs={12} md={4} data-aos="fade-up">
            <Card className="text-center border-0 shadow-sm service-card h-100">
              <div className="icon-title-section">
                <BarChart size={30} className="text-light me-2" />
                <div>
                  <Card.Title className="fw-bold fs-6 text-light mb-0">Cyber Security</Card.Title>
                  <small className="text-muted fst-italic">in progress...</small>
                </div>
              </div>
              <Card.Body className="d-flex flex-column">
                <Card.Text className="flex-grow-1">
                  <ul className="text-light">
                    <li><CheckCircle className="text-primary me-2" />Network Security</li>
                    <li><CheckCircle className="text-primary me-2" />Threat Detection & Response</li>
                    <li><CheckCircle className="text-primary me-2" />Security Information & Event Management (SIEM)</li>
                    <li><CheckCircle className="text-primary me-2" />Vulnerability Assessment</li>
                    <li><CheckCircle className="text-primary me-2" />Incident Response</li>
                    <li><CheckCircle className="text-primary me-2" />Ethical Hacking & Penetration Testing</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Custom Styles */}
        <style>{`
          .service-card {
            background-color: #1C1C5A !important;
            border-radius: 10px;
            transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
            display: flex;
            flex-direction: column;
            height: 100%;
          }

          .service-card:hover {
            transform: scale(1.05);
            box-shadow: 0 10px 20px rgba(0, 255, 255, 0.3);
          }

          .icon-title-section {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            padding: 10px;
            background-color: #4169E1;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
            flex-wrap: wrap;
          }

          .service-card ul {
            list-style-type: none;
            padding-left: 0;
            text-align: left;
          }

          .service-card li {
            display: flex;
            align-items: center;
          }

          @media (max-width: 576px) {
            .icon-title-section {
              flex-direction: column;
              text-align: center;
            }
          }
        `}</style>
      </Container>
    </section>
  );
}

export default ServicesComponent;
