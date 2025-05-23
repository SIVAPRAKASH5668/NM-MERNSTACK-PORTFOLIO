import React from "react";

import { FaUniversity, FaSchool } from "react-icons/fa";

const Education = () => (
  <section id="education">
    <div className="container">
      <h2 className="section-title">EDUCATION</h2>
      <div className="education-grid">
        <div className="education-card">
          <FaUniversity className="edu-icon" />
          <h3>Anna University Regional Campus, Coimbatore</h3>
          <p className="timeline">2022 - 2026</p>
          <p>B.Tech Artificial Intelligence and Data Science</p>
          <p><strong>CGPA:</strong> 7.8 / 10</p>
        </div>
        <div className="education-card">
          <FaSchool className="edu-icon" />
          <h3>Ramanagar Suburban Higher Secondary School</h3>
          <p className="timeline">2020 - 2021</p>
          <p>Higher Secondary: <strong>90%</strong></p>
          <p>Secondary: <strong>92%</strong></p>
        </div>
      </div>
    </div>
  </section>
);

export default Education;
