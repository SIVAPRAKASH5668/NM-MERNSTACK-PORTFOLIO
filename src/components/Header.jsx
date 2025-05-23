import React from "react";
import profileImg from "../assets/image.jpg"; 

const Header = () => (
  <header className="header">
    <div className="container header-content">
      <div className="profile-section-centered">
        <div className="profile-image">
          <img src={profileImg} alt="Siva Prakash" className="profile-photo" />
        </div>
        <h1 className="name">SIVA PRAKASH S</h1>
        <p className="title">Artificial Intelligence and Data Science Undergraduate</p>
        <div className="footer-contact-info">
          <p className="footer-contact-item">📧 siva99527@gmail.com</p>
          <p className="footer-contact-item">📍 Coimbatore, Tamil Nadu</p>
          <p className="footer-contact-item">🎓 Anna University Regional Campus</p>
        </div>
      </div>
      <nav className="nav-links">
        <a href="#about">About</a>
        <a href="#education">Education</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#certifications">Certifications</a>
        <a href="#achievements">Achievements</a>
        <a href="#footer">Contact</a>
      </nav>
    </div>
  </header>
);

export default Header;
