// import { Routes, Route, useNavigate } from "react-router";
// import "./App.css";
// import profile from "./assets/passport.jpeg";

// function Home() {
//   const navigate = useNavigate();

//   return (
//     <section className="hero">
//       <div className="hero-content">
//         <p className="eyebrow">WELCOME TO MY PORTFOLIO</p>
//         <h1>
//           Hi, I'm <span className="gradient-text">Swathika N</span>
//         </h1>
//         <h2>Software Developer | Full-Stack Developer</h2>
//         <p>
//           Computer Science Engineering student at S.A. Engineering
//           College with hands-on internship experience in web
//           development, Java, Spring Boot, React.js, and database
//           technologies.
//         </p>

//         <div className="hero-buttons">
//           <button onClick={() => navigate("/project")}>
//             Explore Projects ↗
//           </button>
//           <button
//             className="secondary-button"
//             onClick={() => navigate("/contact")}
//           >
//             Contact Me
//           </button>
//         </div>

//         <div className="hero-tags">
//           <span>Java</span>
//           <span>React.js</span>
//           <span>Spring Boot</span>
//           <span>UI/UX Design</span>
//         </div>
//       </div>

//       <div className="hero-image-wrap">
//         <div className="image-decoration"></div>
//         <img
//           src={profile}
//           alt="Swathika N - Profile"
//           className="profile-image"
//         />
//       </div>
//     </section>
//   );
// }

// export default function App() {
//   const navigate = useNavigate();

//   return (
//     <div className="portfolio">
//       <header className="navbar">
//         <button
//           className="brand"
//           onClick={() => navigate("/")}
//         >
//           Swathika<span>.</span>
//         </button>

//         <nav>
//           <button onClick={() => navigate("/")}>Home</button>
//           <button onClick={() => navigate("/about")}>About</button>
//           <button onClick={() => navigate("/education")}>Education</button>
//           <button onClick={() => navigate("/skill")}>Skill</button>
//           <button onClick={() => navigate("/project")}>Projects</button>
//           <button onClick={() => navigate("/achievements")}>
//             Achievements
//           </button>
//           <button
//             className="nav-contact"
//             onClick={() => navigate("/contact")}
//           >
//             Contact
//           </button>
//         </nav>
//       </header>

//       <main className="main-content">
//         <Home />
//       </main>

//       <footer className="footer">
//         <p>© {new Date().getFullYear()} Swathika N · Personal Portfolio</p>
//       </footer>
//     </div>
//   );
// }


import { useNavigate } from "react-router";
import "./App.css";
import profile from "./assets/passport.jpeg";
import { useTheme } from "./context/ThemeContext.jsx";

function Home() {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="hero-content">
        <p className="eyebrow">WELCOME TO MY PORTFOLIO</p>
        <h1>
          Hi, I'm <span className="gradient-text">Swathika N</span>
        </h1>
        <h2>Software Developer | Full-Stack Developer</h2>
        <p>
          Computer Science Engineering student at S.A. Engineering
          College with hands-on internship experience in web
          development, Java, Spring Boot, React.js, and database
          technologies.
        </p>

        <div className="hero-buttons">
          <button onClick={() => navigate("/project")}>
            Explore Projects ↗
          </button>
          <button
            className="secondary-button"
            onClick={() => navigate("/contact")}
          >
            Contact Me
          </button>
        </div>

        <div className="hero-tags">
          <span>Java</span>
          <span>React.js</span>
          <span>Spring Boot</span>
          <span>UI/UX Design</span>
        </div>
      </div>

      <div className="hero-image-wrap">
        <div className="image-decoration"></div>
        <img
          src={profile}
          alt="Swathika N - Profile"
          className="profile-image"
        />
      </div>
    </section>
  );
}

export default function App() {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`portfolio ${theme}-theme`}>
      <header className="navbar">
        <button
          className="brand"
          onClick={() => navigate("/")}
        >
          Swathika<span>.</span>
        </button>

        <nav>
          <button onClick={() => navigate("/")}>Home</button>
          <button onClick={() => navigate("/about")}>About</button>
          <button onClick={() => navigate("/education")}>Education</button>
          <button onClick={() => navigate("/skill")}>Skill</button>
          <button onClick={() => navigate("/project")}>Projects</button>
          <button onClick={() => navigate("/achievements")}>
            Achievements
          </button>
          <button
            className="nav-contact"
            onClick={() => navigate("/contact")}
          >
            Contact
          </button>

          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle dark and light theme"
          >
            {theme === "light" ? "Dark" : "Light"}
          </button>
        </nav>
      </header>

      <main className="main-content">
        <Home />
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Swathika N · Personal Portfolio</p>
      </footer>
    </div>
  );
}
