import React from "react";

const skills = {
  "Programming Languages": ["Python", "Java", "JavaScript", "C", "HTML & CSS"],
  Development: ["Backend Development with Flask", "API Integration", "Cloud Solutions", "Database Management"],
  "Artificial Intelligence": ["Machine Learning", "Deep Learning", "NLP", "Computer Vision"],
};

const Skills = () => (
  <section id="skills">
    <div className="container">
      <h2 className="section-title">SKILLS</h2>
      <div className="skills-container">
        {Object.entries(skills).map(([category, list]) => (
          <div key={category} className="skill-category">
            <h3>{category}</h3>
            <ul className="skill-list">
              {list.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
