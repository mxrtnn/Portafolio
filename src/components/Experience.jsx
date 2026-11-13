import { usePortfolio } from "../context/PortfolioContext";
import { useTimelineProgress } from "../hooks/useTimelineProgress";
import { journey } from "../data/journey";
import "../styles/journey.css";

export default function Experience() {
  const { language } = usePortfolio();
  const english = language === "en";
  const progress = useTimelineProgress();

  return (
    <section
      data-page-surface
      id="experiencia"
      className="journey-section"
      aria-labelledby="journey-title"
    >
      <div className="journey-container">
        <header className="journey-heading text-center">
          <div className="journey-kicker">
            <span aria-hidden="true" />
            <p>
              <i className="fa-solid fa-graduation-cap" aria-hidden="true" />
              {english ? "MY JOURNEY" : "MI TRAYECTORIA"}
            </p>
            <span aria-hidden="true" />
          </div>
          <h2 id="journey-title">
            {english ? "EXPERIENCE" : "EXPERIENCIA"}{" "}
            <span>& {english ? "EDUCATION" : "EDUCACIÓN"}</span>
          </h2>
          <p className="journey-subtitle">
            {english
              ? "A journey of continuous learning, development and passion for technology."
              : "Un camino de aprendizaje constante, desarrollo y pasión por la tecnología."}
          </p>
          <span className="journey-heading-glow" aria-hidden="true" />
        </header>
        <ol className="journey-timeline" id="timeline-vertical">
          <li className="journey-rail" aria-hidden="true">
            <span id="linea-progreso" style={{ height: `${progress}%` }} />
          </li>
          {journey.map((entry) => {
            const content = entry[english ? "en" : "es"];
            return (
              <li
                className={`timeline-item journey-item journey-item-${entry.id}`}
                key={entry.id}
              >
                <div className="journey-node" aria-hidden="true">
                  <i className={`fa-solid fa-${entry.icon}`} />
                </div>
                <article
                  className="journey-card"
                  aria-labelledby={`journey-${entry.id}-title`}
                >
                  <div className="journey-card-header">
                    <div
                      className={`journey-emblem ${entry.logo ? "journey-emblem-image" : ""}`}
                    >
                      {entry.logo ? (
                        <img
                          src={entry.logo}
                          alt={entry.logoAlt}
                          width="90"
                          height="90"
                        />
                      ) : (
                        <i
                          className={`fa-solid fa-${entry.icon}`}
                          aria-hidden="true"
                        />
                      )}
                    </div>
                    <div className="journey-card-titles">
                      <span className="journey-period">
                        <i
                          className="fa-regular fa-calendar-days"
                          aria-hidden="true"
                        />
                        {content.period}
                      </span>
                      <h3 id={`journey-${entry.id}-title`}>{content.title}</h3>
                      <p className="journey-card-subtitle">
                        {content.subtitle}
                      </p>
                    </div>
                  </div>
                  <p className="journey-description">{content.description}</p>
                  {content.highlights && (
                    <h4 className="journey-highlights">{content.highlights}</h4>
                  )}
                  {content.bullets && (
                    <ul className="journey-details">
                      {content.bullets.map((text) => (
                        <li key={text}>
                          <i
                            className="fa-solid fa-circle-check"
                            aria-hidden="true"
                          />
                          <span>{text}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  <ul
                    className="journey-tags"
                    aria-label={
                      english ? "Areas and technologies" : "Áreas y tecnologías"
                    }
                  >
                    {content.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                </article>
              </li>
            );
          })}
        </ol>
        <p className="journey-closing">
          <span aria-hidden="true" />
          <i className="fa-solid fa-code" aria-hidden="true" />
          {english
            ? "Always learning. Always building."
            : "Siempre aprendiendo. Siempre construyendo."}
          <span aria-hidden="true" />
        </p>
      </div>
    </section>
  );
}
