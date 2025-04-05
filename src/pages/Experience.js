import { useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Code, Server } from "react-bootstrap-icons";
import "aos/dist/aos.css";
import AOS from "aos";

function ExperienceComponent() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="experience" className="py-5">
      <Container>
        <h6 className="text-secondary text-center">What skill i have</h6>
        <h2 className="text-center fw-bold text-primary fs-4 mb-4">My Experience</h2>

        {/* Frontend Development */}
        <h4 className="text-info fw-bold text-center mb-3">Frontend Development</h4>
        <Row className="gy-4">
          {[
            { skill: "HTML", level: "Experienced" },
            { skill: "CSS", level: "Experienced" },
            { skill: "JavaScript", level: "Experienced" },
            { skill: "Bootstrap", level: "Intermediate" },
            { skill: "React", level: "Experienced" }
          ].map(({ skill, level }, index) => (
            <Col xs={12} sm={6} md={4} key={index} data-aos="fade-up">
              <Card className="text-center border-0 shadow-sm skill-card">
                <Card.Body className="d-flex flex-column justify-content-between">
                  <Code size={40} className="text-info mb-2" />
                  <Card.Title className="fw-bold text-light">{skill}</Card.Title>
                  <Card.Text className="text-secondary mb-0">{level}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Backend Development */}
        <h4 className="text-success fw-bold text-center mt-5 mb-3">Backend Development</h4>
        <Row className="gy-4">
          {[
            { skill: "MongoDB", level: "Intermediate" },
            { skill: "Python", level: "Experienced" },
            { skill: "MySQL", level: "Intermediate" },
            { skill: "Django", level: "Intermediate" },
          ].map(({ skill, level }, index) => (
            <Col xs={12} sm={6} md={4} key={index} data-aos="fade-up">
              <Card className="text-center border-0 shadow-sm skill-card">
                <Card.Body className="d-flex flex-column justify-content-between">
                  <Server size={40} className="text-success mb-2" />
                  <Card.Title className="fw-bold text-light">{skill}</Card.Title>
                  <Card.Text className="text-secondary mb-0">{level}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Custom Styles */}
      <style>{`
        .skill-card {
          background-color: #1C1C5A !important; /* Dark background */
          border-radius: 10px;
          transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
          height: 100%; /* Ensures even height */
        }

        .skill-card:hover {
          transform: scale(1.05);
          box-shadow: 0 10px 20px rgba(0, 255, 255, 0.3);
        }

        .skill-card .card-body {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
        }

        .skill-card .card-title {
          margin-top: 5px;
        }

        .skill-card .card-text {
          margin-top: 0;
          margin-bottom: 5px;
        }

        /* Responsive adjustments */
        @media (max-width: 576px) {
          .skill-card {
            transform: scale(1.1); /* Scale up on mobile */
          }
        }
      `}</style>
    </section>
  );
}

export default ExperienceComponent;
