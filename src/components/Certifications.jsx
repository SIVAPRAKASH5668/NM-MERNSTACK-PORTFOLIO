import React from "react";

const certifications = [
  {
    title: "Machine Learning Specialization",
    issuer: "Coursera (Stanford University)",
    date: "Jun 2023"
  },

  {
    title: "Python for Data Science",
    issuer: "DataCamp",
    date: "Mar 2023"
  }
];

const Certifications = () => (
  <section id="certifications">
    <div className="container">
      <h2 className="section-title">CERTIFICATIONS</h2>
      <div className="certifications-container">
        {certifications.map((cert, index) => (
          <div className="certification-item" key={index}>
            <h3>{cert.title}</h3>
            <p>{cert.issuer}</p>
            <p className="timeline">{cert.date}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Certifications;
