import React, { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";

import port1 from "../assets/images/port1.png";
import port2 from "../assets/images/port2.png";
import port3 from "../assets/images/port3.png";
import port4 from "../assets/images/port4.png";
import port5 from "../assets/images/port5.png";
import port6 from "../assets/images/port6.png";
import port7 from "../assets/images/port7.png";

function Portfolio() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS
  }, []);

  // Different animations for each card
  const animations = ["fade-up", "fade-down", "fade-right", "fade-left", "zoom-in", "zoom-out"];

  const projects = [
    { image: port1, github: "https://github.com/melvincbenjamin/city-wide/", liveDemo: "https://city-wide-q6gz.onrender.com/" },
    { image: port2, github: "https://github.com/Fahyvor/frontend-homly/", liveDemo: "https://homly-frontend-eight.vercel.app/" },
    { image: port3, github: "https://github.com/Fahyvor/flexysub-frontend/", liveDemo: "https://www.flexysub.ng/" },
    { image: port4, github: "https://github.com/melvincbenjamin/", liveDemo: "https://speedupcreative.onrender.com/" },
    { image: port5, github: "#", liveDemo: "https://tech19.onrender.com/" },
    { image: port6, github: "#", liveDemo: "https://cmonlineradio.vercel.app/" },
    { image: port7, github: "https://github.com/melvincbenjamin/new-melvin-portfolio", liveDemo: "https://melvincbenjamin-portfolio.web.app" },

  ];

  return (
    <section id="portfolio" className="py-5">
      <Container>
        <h6 className="text-center text-secondary fw-bold mb-4">My Recent Work</h6>
        <h3 className="text-center text-primary fw-bold">Portfolio</h3>
        <Row className="gy-4">
          {projects.map((project, index) => (
            <Col key={index} md={6} lg={4} data-aos={animations[index % animations.length]}>
              <Card className="portfolio-card border-0 shadow-sm" style={{ backgroundColor: "#10103f" }}>
                <Card.Img variant="top" src={project.image} alt={`Project ${index + 1}`} className="portfolio-image" />
                <Card.Body className="text-center">
                  <div className="d-flex justify-content-center mt-3 w-100">
                    <Button variant="outline-primary" href={project.github} className="me-4 w-50">GitHub</Button>
                    <Button variant="outline-primary" href={project.liveDemo} className="text-white w-50">Live Demo</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Portfolio;
