import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Briefcase, People, Layers } from "react-bootstrap-icons"; // Import Bootstrap icons
import melvin2 from "../assets/images/melvin2.jpg"; // Ensure correct path
import styles from "../pages/About.module.css";

function AboutSection() {
  const handleLetsTalk = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section id="aboutus" className=" about-section text-white py-5" >
      <Container>
        <Row className="align-items-center">
          {/* Left Section - Image */}
          <Col xs={12} md={5} className="d-flex justify-content-center mb-4 mb-md-0">
            <div className={styles.imageContainer}>
              <img src={melvin2} alt="Melvin Benjamin" className={styles.rotatingImage} />
            </div>
          </Col>

          {/* Right Section - About Me Text & Cards */}
          <Col xs={12} md={7} className={styles.textContainer}>
            <h6 className="text-uppercase text-secondary">Get to know</h6>
            <h2 className="fw-bold text-white fs-4">About Me</h2>

            {/* Cards Section */}
            <Row className="mt-4 g-3">
              {[
                { icon: <Briefcase size={40} className="text-primary mb-3" />, title: "Experience", text: "3+ Years Working" },
                { icon: <People size={40} className="text-primary mb-3" />, title: "Clients", text: "100+ Worldwide" },
                { icon: <Layers size={40} className="text-primary mb-3" />, title: "Projects", text: "50+ Completed" }
              ].map((card, index) => (
                <Col xs={12} sm={4} key={index}>
                  <Card className={styles.cardCustom}>
                    <Card.Body style={{ backgroundColor: '#1C1C5A', borderRadius: 10}}>
                      {card.icon}
                      <Card.Title className="fw-bold text-primary">{card.title}</Card.Title>
                      <Card.Text className="text-white">{card.text}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>

            {/* About Me Paragraph */}
            <p className="text-white mt-4">
              <span className="text-primary">Chinedu Melvin Benjamin,</span> a Nigerian Computer Scientist, FullStack Web Developer,
              Cyber Security, Independent Consultant for Real Estate, and Co-founder of Trading Times company.  
              I graduated from <strong>Michael Okpara University</strong>, where I started my Web Development journey.
            </p>
            
            {/* Call-to-Action Button */}
            <Button variant="primary" onClick={handleLetsTalk}>Let's Talk</Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AboutSection;
