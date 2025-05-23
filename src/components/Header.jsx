import React from "react";

const Header = () => (
  <header className="header">
    <div className="container header-content">
      {/* Profile section on the left */}
      <div className="profile-section-centered">
        <div className="profile-image">S</div>
        <h1 className="name">SIVA PRAKASH S</h1>
        <p className="title">Artificial Intelligence and Data Science Undergraduate</p>

        <div className="contact-info">
          <div className="contact-item">
            <i className="fas fa-envelope icon"></i>
            <span>siva99527@gmail.com</span>
          </div>
          <div className="contact-item">
            <i className="fas fa-map-marker-alt icon"></i>
            <span>Coimbatore, Tamil Nadu, India</span>
          </div>
        </div>
      </div>

      {/* Navigation links aligned right */}
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
