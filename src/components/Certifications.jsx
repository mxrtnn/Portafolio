import { useState } from "react";
import { usePortfolio } from "../context/PortfolioContext";
import { learningPaths } from "../data/certifications";
import CertificationCard from "./CertificationCard";
import "../styles/certifications.css";

export default function Certifications() {
  const { language } = usePortfolio();
  const en = language === "en";
  const [expanded, setExpanded] = useState(() => new Set(["scrum", "ai"]));
  const total = learningPaths.reduce(
    (count, path) => count + path.badges.length,
    0,
  );
  function toggle(id) {
    setExpanded((current) => {
      const next = new Set(current);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }
  return (
    <section
      data-page-surface
      id="certificaciones"
      className="certifications-section"
      aria-labelledby="certifications-title"
    >
      <div className="certifications-heading">
        <p>
          {en
            ? "CONTINUOUS LEARNING · VERIFIED CREDENTIALS"
            : "APRENDIZAJE CONTINUO · CREDENCIALES"}
        </p>
        <h2 id="certifications-title">
          {en ? "BADGES &" : "INSIGNIAS Y"}{" "}
          <span>{en ? "CERTIFICATIONS" : "CERTIFICACIONES"}</span>
        </h2>
        <p className="certifications-lead">
          {en
            ? "A learning journey organized by discipline. Explore each path, its badges and the organizations behind my training."
            : "Un recorrido de aprendizaje organizado por disciplinas. Explora cada línea, sus insignias y las entidades que acompañan mi formación."}
        </p>
        <div className="certifications-summary">
          <span>
            <strong>{String(total).padStart(2, "0")}</strong>
            {en ? "badges" : "insignias"}
          </span>
          <i aria-hidden="true" />
          <span>
            <strong>{String(learningPaths.length).padStart(2, "0")}</strong>
            {en ? "learning paths" : "líneas de aprendizaje"}
          </span>
        </div>
      </div>
      <div className="certifications-toolbar">
        <p>
          <i className="fa-solid fa-route" aria-hidden="true" />
          {en ? "Choose a path to explore" : "Elige una línea para explorar"}
        </p>
        <div>
          <button
            disabled={expanded.size === learningPaths.length}
            onClick={() =>
              setExpanded(new Set(learningPaths.map((path) => path.id)))
            }
          >
            <i className="fa-solid fa-plus" aria-hidden="true" />
            {en ? "Expand all" : "Desplegar todas"}
          </button>
          <button
            disabled={expanded.size === 0}
            onClick={() => setExpanded(new Set())}
          >
            <i className="fa-solid fa-minus" aria-hidden="true" />
            {en ? "Collapse all" : "Cerrar todas"}
          </button>
        </div>
      </div>
      <div className="learning-paths">
        {learningPaths.map((path, index) => {
          const open = expanded.has(path.id);
          return (
            <section
              className={`cert-learning-line cert-line-${path.color} ${open ? "is-open" : ""}`}
              key={path.id}
              data-cert-line={path.id}
              aria-labelledby={`cert-line-${path.id}-title`}
            >
              <h3 className="cert-line-heading">
                <button
                  type="button"
                  className="cert-line-toggle"
                  onClick={() => toggle(path.id)}
                  aria-expanded={open}
                  aria-controls={`cert-panel-${path.id}`}
                  id={`cert-line-${path.id}-title`}
                >
                  <span className="cert-line-icon">
                    <i
                      className={`fa-solid fa-${path.icon}`}
                      aria-hidden="true"
                    />
                  </span>
                  <span className="cert-line-content">
                    <span className="cert-line-number">
                      {en ? "LEARNING PATH" : "LÍNEA DE APRENDIZAJE"} / 0
                      {index + 1}
                    </span>
                    <strong>{path[en ? "titleEn" : "title"]}</strong>
                    <span className="cert-line-subtitle">
                      {path[en ? "subtitleEn" : "subtitle"]}
                    </span>
                    <span className="cert-line-providers">
                      <span>{path.issuer}</span>
                      {path.context && <span>{path.context}</span>}
                    </span>
                  </span>
                  <span className="cert-line-meta">
                    <span className="cert-line-count">
                      {path.badges.length}{" "}
                      {en
                        ? path.badges.length === 1
                          ? "badge"
                          : "badges"
                        : path.badges.length === 1
                          ? "insignia"
                          : "insignias"}
                    </span>
                    <span className="cert-line-chevron">
                      <i
                        className="fa-solid fa-chevron-down"
                        aria-hidden="true"
                      />
                    </span>
                  </span>
                  <i
                    className={`cert-line-watermark fa-solid fa-${path.icon}`}
                    aria-hidden="true"
                  />
                </button>
              </h3>
              <div
                className="cert-line-panel"
                id={`cert-panel-${path.id}`}
                role="region"
                aria-labelledby={`cert-line-${path.id}-title`}
                aria-hidden={!open}
                inert={!open}
              >
                <div className="cert-line-clip">
                  <div className="cert-line-inner">
                    <p className="cert-line-description">
                      {path[en ? "descriptionEn" : "description"]}
                    </p>
                    <div className="certification-grid">
                      {path.badges.map((badge, i) => (
                        <CertificationCard
                          key={badge.id}
                          badge={badge}
                          issuer={path.issuer}
                          english={en}
                          index={i}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>
      <p className="certifications-footnote">
        <i
          className="fa-solid fa-arrow-up-right-from-square"
          aria-hidden="true"
        />
        {en
          ? "Each badge links to its external credential. Available certificates can be downloaded from each card."
          : "Cada insignia enlaza a su credencial externa. Los certificados disponibles se pueden descargar desde cada tarjeta."}
      </p>
    </section>
  );
}
