import React from "react";

function Achievements() {
  return (
    <section id="achievements">
      <div className="container">
        <h2 className="section-title">ACHIEVEMENTS & RECOGNITION</h2>
        <div className="achievements-container">
          <div className="achievement-item">
            <h3>2nd Place - Hackathon</h3>
            <p>Developed accessibility tools for education.</p>
          </div>
          <div className="achievement-item">
            <h3>Best Project - Smart Healthcare</h3>
            <p>Award-winning AI-powered patient monitoring.</p>
          </div>
          <div className="achievement-item">
            <h3>TechFest Quiz Winner</h3>
            <p>Top scorer in technical quiz at TechFest 2022.</p>
          </div>
          {/* You can add more items here */}
        </div>
      </div>
    </section>
  );
}

export default Achievements;
