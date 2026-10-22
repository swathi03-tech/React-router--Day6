import React from 'react'

const About = () => (
  <section className="page-section">
    <div className="section-heading">
      <p className="eyebrow">GET TO KNOW ME</p>
      <h1>About <span className="gradient-text">Me</span></h1>
      <p>Building practical solutions through technology.</p>
    </div>

    <div className="content-card">
      <h2>Career Objective</h2>
      <p>
        I am a Computer Science Engineering student aspiring to
        build a career as a Software Developer or Full-Stack
        Developer. I enjoy developing efficient, user-friendly
        applications and applying my knowledge of Java,
        Spring Boot, React.js, databases, and UI/UX design.
      </p>
      <p>
        Through internships and projects, I have gained exposure
        to API development, frontend development, database
        integration, testing, debugging, and collaborative
        software development.
      </p>
    </div>

    <div className="info-grid">
      <div className="info-card">
        {/* <span className="card-icon">💻</span> */}
        <h3>Development</h3>
        <p>Frontend and full-stack web applications.</p>
      </div>
      <div className="info-card">
        {/* <span className="card-icon">🎨</span> */}
        <h3>UI/UX Design</h3>
        <p>User-friendly interfaces, wireframes, and prototypes.</p>
      </div>
      <div className="info-card">
        {/* <span className="card-icon">🚀</span> */}
        <h3>Continuous Learning</h3>
        <p>Improving technical and problem-solving skills.</p>
      </div>
    </div>
  </section>
);

export default About;
