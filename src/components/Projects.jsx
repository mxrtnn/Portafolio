import { usePortfolio } from "../context/PortfolioContext";
import { projects } from "../data/projects";
import ProjectCover from "./ProjectCover";
import ProjectTechTags from "./ProjectTechTags";
import "../styles/projects.css";

function BrowserBar({ project }) {
  return (
    <div className="gx-browser-bar" aria-hidden="true">
      <span className="gx-opera-mark">O</span>
      <span className="gx-tab">
        <i className={`fa-solid fa-${project.icon}`} />
        {project.tab}
        <span>×</span>
      </span>
      <span className="gx-bar-plus">+</span>
      <span className="gx-window-controls">— ◇ ×</span>
    </div>
  );
}

export default function Projects() {
  const { language, openModal } = usePortfolio();
  const english = language === "en";
  const featured = projects.find((project) => project.featured);
  const featuredContent = featured[english ? "en" : "es"];
  return (
    <section
      data-page-surface
      id="proyectos"
      className="projects-section"
      aria-labelledby="projects-title"
    >
      <div className="projects-container">
        <header className="projects-heading">
          <p>{english ? "SELECTED WORK" : "MI TRABAJO"}</p>
          <h2 id="projects-title">
            {english ? "IDEAS TURNED INTO" : "IDEAS CONVERTIDAS EN"}{" "}
            <span>{english ? "PROJECTS" : "PROYECTOS"}</span>
          </h2>
          <p className="projects-introduction">
            <span>
              {english
                ? "Every project starts with an idea. The challenge is making it work."
                : "Cada proyecto empieza con una idea. El desafío está en hacerla funcionar."}
            </span>
            <span>
              {english
                ? "I combine development, design and AI to build solutions with a purpose."
                : "Combino desarrollo, diseño e IA para construir soluciones con propósito."}
            </span>
            <strong>
              {english
                ? "Explore what happens when creativity becomes code."
                : "Explora lo que pasa cuando la creatividad se convierte en código."}
            </strong>
          </p>
        </header>
        <article className="project-featured">
          <span className="featured-ribbon">
            <i className="fa-solid fa-crown" aria-hidden="true" />
            {english ? "Featured Project" : "Proyecto Destacado"}
          </span>
          <div className="featured-brand">
            <img
              src={featured.logo}
              alt="TodoFreakStore"
              width="150"
              height="150"
            />
          </div>
          <div className="featured-content">
            <p className="featured-category">{featuredContent.category}</p>
            <h3>{english ? featured.titleEn : featured.title}</h3>
            <p className="featured-description">{featuredContent.short}</p>
            <ProjectTechTags technologies={featured.technologies} />
          </div>
          <button
            className="featured-open"
            onClick={() => openModal(featured.id)}
          >
            {english ? "View project" : "Ver proyecto"}
            <i className="fa-solid fa-arrow-right" aria-hidden="true" />
          </button>
          <div className="featured-decoration" aria-hidden="true">
            <i className="fa-solid fa-dice-d20" />
            <span>TF</span>
          </div>
        </article>
        <div className="gx-project-grid">
          {projects
            .filter((project) => !project.featured)
            .map((project) => {
              const content = project[english ? "en" : "es"];
              return (
                <article
                  className={`gx-project-card project-theme-${project.theme}`}
                  key={project.id}
                >
                  <BrowserBar project={project} />
                  <ProjectCover project={project} />
                  <div className="gx-card-body">
                    <span className="gx-project-category">
                      {content.category}
                    </span>
                    <h3 id={`project-title-${project.id}`}>
                      {english ? project.titleEn : project.title}
                    </h3>
                    <p>{content.short}</p>
                    <div className="gx-card-technologies">
                      <ProjectTechTags technologies={project.technologies} />
                    </div>
                  </div>
                  <button
                    type="button"
                    className="gx-card-launch"
                    onClick={() => openModal(project.id)}
                    aria-label={`${english ? "View project" : "Ver proyecto"}: ${project.title}`}
                  >
                    <span>
                      <i className="fa-solid fa-expand" aria-hidden="true" />
                    </span>
                  </button>
                </article>
              );
            })}
        </div>
      </div>
    </section>
  );
}
