import React from "react";
import aihealthImage from "../assets/aihealth.jpg";
import educationImage from "../assets/education.webp";
import autoImage from "../assets/auto.jpg";

const githubLink = "https://github.com/SIVAPRAKASH5668/WE-EmpoweHer-AI";

const projects = [
  {
    title: "Smart Healthcare Monitoring System",
    period: "Jan 2024 - Apr 2024",
    image: aihealthImage,
    details: [
      "AI-powered system to monitor patient vitals and predict health anomalies",
      "Machine learning algorithms for pattern recognition",
      "Dashboard using Flask and JavaScript"
    ]
  },
  {
    title: "Multilingual Education Platform",
    period: "Oct 2023 - Dec 2023",
    image: educationImage,
    details: [
      "AI-powered platform for video-to-PDF and summarization",
      "Multilingual notes including Tamil",
      "NLP for content classification and tagging"
    ]
  },
  {
    title: "Intelligent Remote PC Task Automation",
    period: "Jul 2023 - Sep 2023",
    image: autoImage,
    details: [
      "Remote PC task execution with natural language",
      "Computer vision for visual feedback",
      "Web/mobile interface for control"
    ]
  }
];

const Projects = () => (
  <section id="projects">
    <div className="container projects-container">
      {projects.map((project, index) => (
        <div className="project-item" key={index}>
          <img
            src={project.image}
            alt={project.title}
            className="project-image"
            style={{
              width: "100%",
              borderRadius: "8px",
              marginBottom: "1rem",
              maxHeight: "200px",
              objectFit: "cover"
            }}
          />
          <h3>{project.title}</h3>
          <p className="timeline">{project.period}</p>
          <ul className="skill-list">
            {project.details.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
          <div className="project-links">
            <a
              className="project-link github"
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
