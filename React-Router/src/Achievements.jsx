import React from "react";


const Achievements = () => {
  const internships = [
    {
      role: "Web Development Intern",
      company: "Bonbloc Technologies Ltd.",
      period: "June 2026 – July 2026",
      project: "FPO Management System",
      details:
        "Worked with Java, Spring Boot, PostgreSQL, Maven, authentication, API development, testing, and debugging.",
    },
    {
      role: "Frontend Developer Intern",
      company: "Amihive Solution Pvt. Ltd.",
      period: "May 2026 – June 2026",
      project: "Marble Shop Billing Application",
      details:
        "Customized a billing application, enhanced product and billing interfaces, integrated REST APIs, and used Git.",
    },
    {
      role: "Software Development Intern – HMI",
      company: "CVRDE (DRDO)",
      period: "May 2025 – June 2025",
      project: "Human Machine Interface Applications",
      details:
        "Worked with Qt, C++, GUI development, CSV-based error logging, and interactive input components.",
    },
  ];

  const certifications = [
    "NPTEL – Programming in Java",
    "Infosys Springboard – Frontend Development",
    "AWS – Cloud Practitioner",
  ];

  return (
    <section className="page-section">
      <div className="section-heading">
        <p className="eyebrow">EXPERIENCE & LEARNING</p>
        <h1>Internships & <span className="gradient-text">Achievements</span></h1>
        <p>Industry exposure and certifications from my resume.</p>
      </div>

      <h2 className="subsection-title">Internship Experience</h2>

      <div className="timeline">
        {internships.map((item) => (
          <article className="timeline-card" key={item.company}>
            <span className="timeline-year">{item.period}</span>
            <h2>{item.role}</h2>
            <h3>{item.company}</h3>
            <p><strong>Project:</strong> {item.project}</p>
            <p>{item.details}</p>
          </article>
        ))}
      </div>

      <h2 className="subsection-title">Certifications</h2>

      <div className="info-grid">
        {certifications.map((cert) => (
          <div className="info-card" key={cert}>
            {/* <span className="card-icon">✦</span> */}
            <h3>{cert}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
