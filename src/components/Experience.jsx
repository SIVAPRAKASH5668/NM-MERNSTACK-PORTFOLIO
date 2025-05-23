import React from "react";

const experiences = [
  {
    title: "AI INTERNSHIP",
    company: "CLOUD ZOO SOFTWARES",
    location: "Coimbatore",
    period: "May 2024 - Present",
    tasks: [
      "Developing machine learning models for predictive analysis",
      "Collaborating on data preprocessing",
      "Developed Visualization and plotting models from the dataset"
    ]
  },
  {
    title: "Data Science Internship",
    company: "Data Analytics",
    location: "Coimbatore",
    period: "Dec 2023 - Feb 2024",
    tasks: [
      "Data cleaning and preparation",
      "Visualizations using Python",
      "Customer segmentation model"
    ]
  }
];

const Experience = () => (
  <section id="experience">
    <div className="container">
      <h2 className="section-title">PROFESSIONAL EXPERIENCE</h2>
      {experiences.map((exp, i) => (
        <div key={i} className="experience-item">
          <h3>{exp.title}</h3>
          <p className="timeline">{exp.period}</p>
          <p><strong>{exp.company}, {exp.location}</strong></p>
          <ul className="skill-list">
            {exp.tasks.map((task, j) => <li key={j}>{task}</li>)}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default Experience;
