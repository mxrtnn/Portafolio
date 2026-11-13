export default function ProjectCover({ project, large = false }) {
  return (
    <div
      className={`project-cover project-cover-${project.theme} ${large ? "project-cover-large" : ""}`}
    >
      {project.cover ? (
        <img
          src={project.cover}
          alt={project.title}
          loading={large ? "eager" : "lazy"}
        />
      ) : (
        <div className="neo-cover-art" aria-label="Neo-Vault · Retro gaming">
          <span className="neo-orbit" aria-hidden="true" />
          <i className="fa-solid fa-gamepad" aria-hidden="true" />
          <strong>
            NEO<span>VAULT</span>
          </strong>
          <span className="neo-cover-caption">RETRO GAMING / LOCAL SYSTEM</span>
        </div>
      )}
      {project.id === "nina" && (
        <span className="nina-cover-name">
          El Horno de Nina<span>GALLETAS HECHAS CON CARIÑO</span>
        </span>
      )}
      <span className="project-cover-vignette" aria-hidden="true" />
    </div>
  );
}
