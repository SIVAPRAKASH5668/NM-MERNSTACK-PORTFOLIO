import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      name: "Email",
      url: "mailto:siva99527@gmail.com",
      icon: "📧"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/sivaprakashs",
      icon: "💼"
    }
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Main Footer Info */}
          <div className="footer-main">
            <div className="footer-brand">
              <h3 className="footer-name">Siva Prakash S</h3>
              <p className="footer-title">AI & Data Science Student</p>
              <p className="footer-description">
                Passionate about leveraging technology to solve real-world problems. 
                Always eager to learn and contribute to innovative projects.
              </p>
            </div>
            
            {/* Quick Links */}
            <div className="footer-links">
              <h4 className="footer-section-title">Quick Links</h4>
              <ul className="footer-nav">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="footer-link"
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById(link.href.substring(1))?.scrollIntoView({
                          behavior: 'smooth'
                        });
                      }}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Contact Info */}
            <div className="footer-contact">
              <h4 className="footer-section-title">Get In Touch</h4>
              <div className="footer-contact-info">
                <p className="footer-contact-item">
                  📧 siva99527@gmail.com
                </p>
                <p className="footer-contact-item">
                  📍 Coimbatore, Tamil Nadu
                </p>
                <p className="footer-contact-item">
                  🎓 Anna University Regional Campus
                </p>
              </div>
              
              {/* Social Links */}
              <div className="footer-social">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target={social.url.startsWith('http') ? '_blank' : '_self'}
                    rel={social.url.startsWith('http') ? 'noopener noreferrer' : ''}
                    className="footer-social-link"
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="footer-copyright">
              © {currentYear} Siva Prakash S. All rights reserved.
            </p>
            <p className="footer-note">
              Built with ❤️ using React.js
            </p>
          </div>
        </div>
        
        {/* Back to Top Button */}
        <button
          onClick={() => {
            document.getElementById('about')?.scrollIntoView({
              behavior: 'smooth'
            });
          }}
          className="back-to-top"
          title="Back to top"
        >
          ↑
        </button>
      </div>
    </footer>
  );
};

export default Footer;