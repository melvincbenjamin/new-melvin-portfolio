import { React, useEffect } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { Envelope, Facebook, Instagram, Twitter, Linkedin, Whatsapp } from "react-bootstrap-icons";
import "./Contact.css";
import "aos/dist/aos.css";
import AOS from "aos";

function Contact() {
  useEffect(() => {
      AOS.init({ duration: 1000, once: true });
    }, []);

  return (
    <section id="contact" className="py-5 text-center text-md-left" style={{ backgroundColor: '#0d0d3d', width: '100vw' }}>
      <Container>
        <h6 className="text-uppercase text-secondary">Get In Touch</h6>
        <h2 className="fw-bold mb-4">Contact Me</h2>

        <Row className="g-4">
          {/* Social Media Links */}
          <Col xs={12} md={4} className="text-white text-start" data-aos="fade-up">
            <h5 className="fs-3">Let's Talk</h5>
            <p className="mt-4">
              <Envelope className="me-1" size={20} />
              <a href="mailto:melvinbenjamin777@gmail.com" className="text-white">Email</a>
            </p>
            <p>
              <Whatsapp className="me-1 text-success" size={20} />
              <a href="https://wa.me/2348166927834" target="_blank" rel="noopener noreferrer" className="text-white">WhatsApp</a>
            </p>
            <p>
              <Facebook className="me-1 text-primary" size={20} />
              <a href="https://web.facebook.com/home.php" target="_blank" rel="noopener noreferrer" className="text-white">Facebook</a>
            </p>
            <p>
              <Instagram className="me-1 text-danger" size={20} />
              <a href="https://www.instagram.com/iammelvin__mel?igsh=cTNhNTByczBrYW1n&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-white">Instagram</a>
            </p>
            <p>
              <Twitter className="me-1 text-info" size={20} />
              <a href="https://twitter.com/melvinb36653762?s=21&t=ZyVVNP6Gvk8_wPWb-rG-Ig" target="_blank" rel="noopener noreferrer" className="text-white">Twitter</a>
            </p>
            <p>
              <Linkedin className="me-1 text-primary" size={20} />
              <a href="https://www.linkedin.com/in/melvin-benjamin-b746a022b/" target="_blank" rel="noopener noreferrer" className="text-white">LinkedIn</a>
            </p>
          </Col>

          {/* Contact Form */}
          <Col xs={12} md={8} data-aos="fade-up">
            <Card className="p-4 shadow-sm border-0 rounded-lg" style={{ backgroundColor: "#000000", color: "#fff" }}>
              <Card.Body>
              <Form>
  <Form.Group className="mb-3">
    <Form.Control
      type="text"
      placeholder="Name*"
      required
      className="text-white border-0"
      style={{backgroundColor: '#ccc'}}
    />
  </Form.Group>

  <Form.Group className="mb-3">
    <Form.Control
      type="email"
      placeholder="Email*"
      required
      className="text-white border-0"
      style={{backgroundColor: '#ccc'}}
    />
  </Form.Group>

  <Form.Group className="mb-3">
    <Form.Control
      type="text"
      placeholder="Enter subject"
      required
      className="text-white border-0" 
      style={{backgroundColor: '#ccc'}}
    />
  </Form.Group>

  <Form.Group className="mb-3">
    <Form.Control
      as="textarea"
      rows={3}
      placeholder="Write your message"
      required
      className="text-white border-0" 
      style={{backgroundColor: '#ccc'}}
    />
  </Form.Group>

  <Button variant="primary" type="submit" className="w-100">
    Send Message
  </Button>
</Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
