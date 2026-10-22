import React from "react";


const Education = () => (
  <section className="page-section">
    <div className="section-heading">
      <p className="eyebrow">MY ACADEMIC JOURNEY</p>
      <h1>My <span className="gradient-text">Education</span></h1>
      <p>The academic foundation behind my technical skills.</p>
    </div>

    <div className="timeline">
      <div className="timeline-card">
        <span className="timeline-year">2023 – 2027</span>
        <h2>B.E. Computer Science Engineering</h2>
        <h3>S.A. Engineering College</h3>
        <p>University: Anna University</p>
        <p>CGPA: 8.43</p>
      </div>

      <div className="timeline-card">
        <span className="timeline-year">2023</span>
        <h2>Higher Secondary Certificate (HSC)</h2>
        <h3>Good Hope New Generation Higher Secondary School</h3>
        <p>Score: 76%</p>
      </div>

      <div className="timeline-card">
        <span className="timeline-year">2021</span>
        <h2>Secondary School Leaving Certificate (SSLC)</h2>
        <h3>Good Hope New Generation Higher Secondary School</h3>
        <p>Score: 100%</p>
      </div>
    </div>
  </section>
);

export default Education;
