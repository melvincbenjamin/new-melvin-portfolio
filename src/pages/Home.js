import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import melvin from '../assets/images/melvin.jpeg';
import melvin_benjamin from '../assets/files/melvin_benjamin_CV.pdf';

const Home = () => {
  const handleDownloadCV = () => {
    const cvUrl = melvin_benjamin;
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "Melvin_Benjamin_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleLetsTalk = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Container fluid className="d-flex justify-content-center align-items-start vh-100 text-center">
      <Row className="w-100 mt-1">
        <Col>
          <p className="fs-6">Hello, I'm</p> {/* Small size, muted color */}
          <p className="fw-bold display-4">Melvin Benjamin</p> {/* Larger size for emphasis */}
          <p className="fs-6 text-secondary">Fullstack Developer</p> {/* Reduced size and blue color */}
          <div className="mt-4">
          <Button 
  variant="outline-primary" 
  className="me-2 btn-lg fw-bold shadow-sm text-white"
  onMouseOver={(e) => e.target.style.backgroundColor = "#004085"} 
  onMouseOut={(e) => e.target.style.backgroundColor = "#007bff"}
  onClick={handleDownloadCV}
>
  Download CV
</Button>

            <Button variant="outline-primary" onClick={handleLetsTalk}>
              Let's Talk
            </Button>
          </div>
          <div 
  className="d-flex justify-content-center align-items-center mt-5"
  style={{
    background: "linear-gradient(135deg, #6a11cb,rgb(26, 50, 92))", // Gradient colors
    padding: "20px", // Adds spacing around the image
    borderRadius: "10%", // Circular background
    display: "inline-block", // Ensures it wraps around the image properly
    width: "100%", // Make sure it fits in smaller screens
    maxWidth: "340px", // Restrict width on larger screens
    height: "400px", // Give height to the container
    margin: "0 auto", // Center the container horizontally
  }}
>
  <img 
    src={melvin} 
    alt="my-pic" 
    className="img-fluid rounded-circle" 
    style={{
      width: "100%", // Smaller size for the image, responsive
      height: "auto", 
      display: "block", // Prevents extra spacing issues
      margin: "0 auto", // Center the image horizontally
    }} 
  />
</div>

        </Col>
      </Row>
    </Container>
  );
};

export default Home;
