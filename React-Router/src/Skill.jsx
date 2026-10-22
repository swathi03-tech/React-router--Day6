import React from "react";


const Skill = () => {
  const groups = [
    {
      title: "Frontend Development",
      items: ["HTML", "CSS", "JavaScript", "React.js"],
    },
    {
      title: "Backend Development",
      items: ["Java", "Spring Boot", "Node.js", "Express.js"],
    },
    {
      title: "Databases",
      items: ["MongoDB", "MySQL", "PostgreSQL"],
    },
    {
      title: "Tools & Design",
      items: [
        "Figma",
        "Postman",
        "Keycloak",
        "Maven",
        "VS Code",
        "Miro",
      ],
    },
  ];

  return (
    <section className="page-section">
      <div className="section-heading">
        <p className="eyebrow">TECHNICAL EXPERTISE</p>
        <h1>My <span className="gradient-text">Skills</span></h1>
        <p>Technologies and tools from my development journey.</p>
      </div>

      <div className="info-grid">
        {groups.map((group) => (
          <div className="info-card skill-card" key={group.title}>
            <h2>{group.title}</h2>
            <div className="skill-list">
              {group.items.map((item) => (
                <span className="skill-chip" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="content-card">
        <h2>Additional Strengths</h2>
        <p>
          Data Structures, problem-solving, API testing,
          debugging, UI/UX design, wireframing, and prototyping.
        </p>
      </div>
    </section>
  );
};

export default Skill;
