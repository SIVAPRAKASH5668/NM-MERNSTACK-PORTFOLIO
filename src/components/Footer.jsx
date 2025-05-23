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
      <div className="footer-container container">
        <div className="footer-content grid">

          <div className="footer-brand">
            <h3 className="footer-name">Siva Prakash S</h3>
            <p className="footer-title">AI & Data Science Student</p>
            <blockquote className="footer-quote">
              <p>
                “My journey into AI and Data Science began with one simple idea: technology should empower and uplift people. Every project I build is a step toward solving real-world problems and creating meaningful impact.”
              </p>
              <cite>— Siva Prakash S</cite>
            </blockquote>
          </div>

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

          <div className="footer-contact">
            <h4 className="footer-section-title">Get Connected</h4>
            <form className="login-form">
              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Password" required />
              <button type="submit">Login</button>
            </form>
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

        <div className="footer-bottom">
          <p>© {currentYear} Siva Prakash S. All rights reserved.</p>
          <p>Built with ❤️ using React.js</p>
        </div>

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
