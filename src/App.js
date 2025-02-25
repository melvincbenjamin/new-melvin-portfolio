import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "./App.css"; // Custom styling

function App() {
  return (
    <div style={{ backgroundColor: "#0d0d3d", width: "100vw" }}>
      <div className="container-fluid min-vh-100 d-flex flex-column bg-custom text-white">
        <Navbar />
        {/* Main Content */}
        <main className="flex-grow-1">
          <section id="home">
            <Home />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="experience">
            <Experience />
          </section>
          <section id="services">
            <Services />
          </section>
          <section id="portfolio">
            <Portfolio />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </main>
      </div>
      <div className="mt-5" style={{marginTop: 100}}>
      <Footer />
      </div>
      
    </div>
  );
}

export default App;
