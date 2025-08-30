import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <header className="navbar">
        <div className="logo">Michrotech Solutions</div>
        <nav>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h1>Innovating IT Solutions for Your Business</h1>
        <p>
          We provide modern software solutions to help your business grow and
          succeed in the digital world.
        </p>
        <button className="btn">Get Started</button>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <h2>Our Services</h2>
        <div className="service-cards">
          <div className="card">
            <h3>Web Development</h3>
            <p>Responsive and scalable web apps tailored for your business.</p>
          </div>
          <div className="card">
            <h3>Cloud Solutions</h3>
            <p>Secure cloud migration and deployment services.</p>
          </div>
          <div className="card">
            <h3>DevOps Automation</h3>
            <p>Streamlined CI/CD pipelines for faster delivery.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <h2>About Us</h2>
        <p>
          Michrotech Solutions is an IT company dedicated to providing cutting
          edge technology services. Our mission is to empower businesses through
          innovation and automation.
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2>Contact Us</h2>
        <p>Email: contact@michrotech.com</p>
        <p>Phone: +91 98765 43210</p>
      </section>

      {/* Footer */}
      <footer>
        <p>© {new Date().getFullYear()} Michrotech Solutions. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
