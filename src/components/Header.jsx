import React from "react";
import profileImg from "../assets/image.jpg"; // Make sure the path is correct

const Header = () => (
  <header className="header">
    <div className="container header-content">
      {/* Profile section: Image left, content right */}
      <div className="profile-section" style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
        {/* Profile image */}
        <img
          src={profileImg}
          alt="Siva Prakash"
          className="profile-image"
          style={{
            width: "200px",
            height: "200px",
            objectFit: "cover",
            borderRadius: "50%",

          }}
        />

        {/* Text content */}
        <div className="profile-details">
          <h1 className="name">SIVA PRAKASH S</h1>
          <p className="title">Artificial Intelligence and Data Science Undergraduate</p>

          <div className="footer-contact-info">
            <p className="footer-contact-item">📧 siva99527@gmail.com</p>
            <p className="footer-contact-item">📍 Coimbatore, Tamil Nadu</p>
            <p className="footer-contact-item">🎓 Anna University Regional Campus</p>
          </div>
        </div>
      </div>

      {/* Navigation links aligned right */}
      <nav className="nav-links" style={{ marginTop: "2rem" }}>
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
