import React from "react";

const projects = [
  {
    title: "Smart Healthcare Monitoring System",
    period: "Jan 2024 - Apr 2024",
    details: [
      "AI-powered system to monitor patient vitals and predict health anomalies",
      "Machine learning algorithms for pattern recognition",
      "Dashboard using Flask and JavaScript"
    ]
  },
  {
    title: "Multilingual Education Platform",
    period: "Oct 2023 - Dec 2023",
    details: [
      "AI-powered platform for video-to-PDF and summarization",
      "Multilingual notes including Tamil",
      "NLP for content classification and tagging"
    ]
  },
  {
    title: "Intelligent Remote PC Task Automation",
    period: "Jul 2023 - Sep 2023",
    details: [
      "Remote PC task execution with natural language",
      "Computer vision for visual feedback",
      "Web/mobile interface for control"
    ]
  }
];

const Projects = () => (
  <section id="projects">
    <div className="container">
      <h2 className="section-title">PROJECTS</h2>
      {projects.map((project, index) => (
        <div className="project-item" key={index}>
          <h3>{project.title}</h3>
          <p className="timeline">{project.period}</p>
          <ul className="skill-list">
            {project.details.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
