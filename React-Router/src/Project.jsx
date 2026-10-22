import React from "react";


const projects = [
  {
    number: "01",
    title: "Movie Ticket Booking Application",
    description:
      "A full-stack application for browsing movies, selecting seats, booking tickets, and managing reservations.",
    tech: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MongoDB"],
  },
  {
    number: "02",
    title: "Church Member Monitoring Application",
    description:
      "A web application for managing church member records, attendance, and administrative information.",
    tech: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MongoDB"],
  },
  {
    number: "03",
    title: "Silent Help Support System",
    description:
      "A community support and resource management platform with anonymous help requests and role-based administration.",
    tech: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MongoDB"],
  },
  {
    number: "04",
    title: "Event Management Application",
    description:
      "An application for event discovery, ticket booking, and event management with authentication and an admin dashboard.",
    tech: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MongoDB"],
  },
  {
    number: "05",
    title: "Food Delivery App UI/UX",
    description:
      "A Figma mobile-app design featuring restaurant browsing, order placement, intuitive navigation, and delivery tracking.",
    tech: ["Figma", "Wireframing", "Prototyping", "UI/UX"],
  },
];

const Project = () => (
  <section className="page-section">
    <div className="section-heading">
      <p className="eyebrow">SELECTED WORK</p>
      <h1>My <span className="gradient-text">Projects</span></h1>
      <p>Practical applications and designs from my resume.</p>
    </div>

    <div className="project-grid">
      {projects.map((project) => (
        <article className="project-card" key={project.number}>
          <div className="project-number">{project.number}</div>
          <h2>{project.title}</h2>
          <p>{project.description}</p>

          <div className="skill-list">
            {project.tech.map((tech) => (
              <span className="skill-chip" key={tech}>
                {tech}
              </span>
            ))}
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default Project;
