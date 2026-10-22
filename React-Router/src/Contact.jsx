import React from "react";


const Contact = () => (
  <section className="page-section">
    <div className="section-heading">
      <p className="eyebrow">LET'S CONNECT</p>
      <h1>Contact <span className="gradient-text">Me</span></h1>
      <p>Let's connect about software development and opportunities.</p>
    </div>

    <div className="contact-card">
      <div className="contact-icon">✉</div>
      <h2>Get in Touch</h2>
      <p>
        Feel free to reach out for professional connections,
        collaboration, and career opportunities.
      </p>

      <div className="contact-item">
        <span>✉</span>
        <div>
          <h3>Email</h3>
          <a href="mailto:swathika.n0307@gmail.com">
            swathika.n0307@gmail.com
          </a>
        </div>
      </div>

      <div className="contact-item">
        <span>in</span>
        <div>
          <h3>LinkedIn</h3>
          <a
            href="https://www.linkedin.com/in/swathika-n-1876132a4/"
            target="_blank"
            rel="noreferrer"
          >
            Connect on LinkedIn ↗
          </a>
        </div>
      </div>

      <div className="contact-item">
        <span>⌘</span>
        <div>
          <h3>GitHub</h3>
          <a
            href="https://github.com/swathi03-tech"
            target="_blank"
            rel="noreferrer"
          >
            View GitHub Profile ↗
          </a>
        </div>
      </div>

      <div className="contact-item">
        <span>🌐</span>
        <div>
          <h3>Portfolio</h3>
          <a
            href="https://nswathika-portfolio.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Visit Portfolio ↗
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
