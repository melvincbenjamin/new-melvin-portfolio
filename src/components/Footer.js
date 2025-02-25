import React from "react";
import Container from "react-bootstrap/Container";

function Footer() {
  return (
    <footer style={{ backgroundColor: "#000000", padding: "20px 0", marginTop: "30px" }}>
      <Container className="text-end text-white">
        <p>&copy; 2025 Melvin Academy.</p>
        <p>All rights reserved.</p>
      </Container>
    </footer>
  );
}

export default Footer;
