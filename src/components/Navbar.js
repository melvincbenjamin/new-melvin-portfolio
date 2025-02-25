import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaHome, FaInfoCircle, FaBriefcase, FaLaptopCode, FaImages, FaEnvelope } from "react-icons/fa";

function NavList() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Dynamic icon size based on screen width
  const getIconSize = () => {
    if (screenWidth < 400) return 14;  // Smallest screens
    if (screenWidth < 576) return 16;  // Mobile screens
    if (screenWidth < 768) return 18;  // Tablets
    return 20; // Default size for larger screens
  };

  return (
    <Navbar 
      fixed="bottom"
      style={{ backgroundColor: "transparent", padding: "20px 0" }} 
      className="w-100 shadow-lg"
    >
      <Container className="d-flex justify-content-center">
        <Nav className="d-flex flex-row gap-1" style={{ backgroundColor: '#1C1C5A', borderRadius: 10}}>
          <a href="#home" className="nav-link text-white"><FaHome size={getIconSize()} /></a>
          <a href="#about" className="nav-link text-white"><FaInfoCircle size={getIconSize()} /></a>
          <a href="#services" className="nav-link text-white"><FaBriefcase size={getIconSize()} /></a>
          <a href="#experience" className="nav-link text-white"><FaLaptopCode size={getIconSize()} /></a>
          <a href="#portfolio" className="nav-link text-white"><FaImages size={getIconSize()} /></a>
          <a href="#contact" className="nav-link text-white"><FaEnvelope size={getIconSize()} /></a>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavList;
