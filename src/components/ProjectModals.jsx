import { useEffect, useRef, useState } from "react";
import { usePortfolio } from "../context/PortfolioContext";
import { projects } from "../data/projects";
import ProjectCover from "./ProjectCover";
import ProjectTechTags from "./ProjectTechTags";
import "../styles/projects.css";

function ProjectDialog({ project, english, closeModal }) {
  const dialogRef = useRef(null);
  const [selected, setSelected] = useState(0);
  const content = project[english ? "en" : "es"];
  const media = project.media[selected];
  const caption = media[english ? "en" : "es"];

  useEffect(() => {
    const dialog = dialogRef.current;
    const opener = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialog.showModal();
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
      if (opener instanceof HTMLElement && opener.isConnected)
        opener.focus({ preventScroll: true });
    };
  }, []);

  function navigate(step) {
    setSelected(
      (current) =>
        (current + step + project.media.length) % project.media.length,
    );
  }

  return (
    <dialog
      ref={dialogRef}
      className={`project-dialog project-theme-${project.theme}`}
      aria-labelledby="project-dialog-title"
      onCancel={(event) => {
        event.preventDefault();
        closeModal();
      }}
      onClick={(event) => {
        if (event.target !== event.currentTarget) return;
        const rect = event.currentTarget.getBoundingClientRect();
        if (
          event.clientX < rect.left ||
          event.clientX > rect.right ||
          event.clientY < rect.top ||
          event.clientY > rect.bottom
        )
          closeModal();
      }}
    >
      <header className="project-dialog-bar">
        <span>
          <span className="gx-opera-mark" aria-hidden="true">
            O
          </span>
          {project.tab}
        </span>
        <button
          className="project-dialog-close"
          onClick={closeModal}
          autoFocus
          aria-label={english ? "Close project" : "Cerrar proyecto"}
        >
          <i className="fa-solid fa-xmark" aria-hidden="true" />
        </button>
      </header>
      <div className="project-gallery">
        <div
          className="project-gallery-stage"
          tabIndex={project.media.length > 1 ? 0 : undefined}
          aria-label={english ? "Project gallery" : "Galería del proyecto"}
          onKeyDown={(event) => {
            if (event.target.tagName === "VIDEO") return;
            if (event.key === "ArrowLeft") {
              event.preventDefault();
              navigate(-1);
            }
            if (event.key === "ArrowRight") {
              event.preventDefault();
              navigate(1);
            }
          }}
        >
          {media.type === "video" ? (
            <video
              key={media.src}
              controls
              playsInline
              preload="metadata"
              poster={media.poster}
              src={media.src}
              aria-label={caption}
            />
          ) : media.type === "cover" ? (
            <ProjectCover project={project} large />
          ) : (
            <img
              key={media.src}
              className={`gallery-image gallery-image-${project.theme}`}
              src={media.src}
              alt={caption}
            />
          )}
          {project.media.length > 1 && (
            <>
              <button
                className="gallery-prev"
                onClick={() => navigate(-1)}
                aria-label={english ? "Previous image" : "Imagen anterior"}
              >
                <i className="fa-solid fa-chevron-left" aria-hidden="true" />
              </button>
              <button
                className="gallery-next"
                onClick={() => navigate(1)}
                aria-label={english ? "Next image" : "Imagen siguiente"}
              >
                <i className="fa-solid fa-chevron-right" aria-hidden="true" />
              </button>
            </>
          )}
        </div>
        <p className="project-gallery-caption" aria-live="polite">
          <span>{caption}</span>
          <span>
            {selected + 1} / {project.media.length}
          </span>
        </p>
        {project.media.length > 1 && (
          <div
            className="project-gallery-thumbnails"
            aria-label={english ? "Select media" : "Seleccionar contenido"}
          >
            {project.media.map((item, index) => (
              <button
                key={`${item.src || item.type}-${index}`}
                onClick={() => setSelected(index)}
                aria-pressed={selected === index}
                aria-label={`${english ? "View" : "Ver"}: ${item[english ? "en" : "es"]}`}
              >
                {item.type === "image" ? (
                  <img src={item.src} alt="" />
                ) : (
                  <i
                    className={`fa-solid ${item.type === "video" ? "fa-play" : "fa-image"}`}
                    aria-hidden="true"
                  />
                )}
              </button>
            ))}
          </div>
        )}
      </div>
      <div className="project-dialog-content">
        <p className="gx-project-category">{content.category}</p>
        <h2 id="project-dialog-title">
          {english ? project.titleEn : project.title}
        </h2>
        <div className="project-long-description">
          {content.long.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <h3>{english ? "Project highlights" : "Aspectos del proyecto"}</h3>
        <ul className="project-feature-list">
          {content.features.map((feature) => (
            <li key={feature}>
              <i className="fa-solid fa-circle-check" aria-hidden="true" />
              {feature}
            </li>
          ))}
        </ul>
        <h3>{english ? "Technologies used" : "Tecnologías utilizadas"}</h3>
        <ProjectTechTags technologies={project.technologies} />
        <div className="project-dialog-actions">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-github" aria-hidden="true" />
              {english ? "Repository" : "Repositorio"}
            </a>
          )}
          {project.site && (
            <a href={project.site} target="_blank" rel="noopener noreferrer">
              <i
                className="fa-solid fa-arrow-up-right-from-square"
                aria-hidden="true"
              />
              {english ? "Visit website" : "Visitar sitio"}
            </a>
          )}
          <button onClick={closeModal}>
            {english ? "Back to projects" : "Volver a proyectos"}
          </button>
        </div>
      </div>
    </dialog>
  );
}

export default function ProjectModals() {
  const { activeModal, closeModal, language } = usePortfolio();
  const project = projects.find((item) => item.id === activeModal?.id);
  return project ? (
    <ProjectDialog
      key={project.id}
      project={project}
      english={language === "en"}
      closeModal={closeModal}
    />
  ) : null;
}
