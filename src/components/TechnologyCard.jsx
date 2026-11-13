import { useState } from "react";

function TechnologyToken({ technology, groupId }) {
  return (
    <span
      className="technology-token"
      tabIndex={0}
      aria-label={technology.name}
    >
      {technology.logo ? (
        <img
          src={technology.logo}
          alt=""
          className={technology.monochrome ? "technology-monochrome" : ""}
          width="38"
          height="38"
        />
      ) : (
        <span className={`technology-wordmark technology-wordmark-${groupId}`}>
          {technology.mark}
        </span>
      )}
      <span className="technology-tooltip" aria-hidden="true">
        {technology.name}
      </span>
    </span>
  );
}

export default function TechnologyCard({ group, english }) {
  const [expanded, setExpanded] = useState(false);
  const primary = group.technologies.slice(0, 5);
  const additional = group.technologies.slice(5);
  return (
    <article className="technology-card">
      <div className="technology-card-heading">
        <span className="technology-category-icon">
          <i className={`fa-solid fa-${group.icon}`} aria-hidden="true" />
        </span>
        <div>
          <h3>{english ? group.en : group.title}</h3>
          <p>{english ? group.descriptionEn : group.description}</p>
        </div>
      </div>
      <div className="technology-icons">
        {primary.map((technology) => (
          <TechnologyToken
            technology={technology}
            groupId={group.id}
            key={technology.name}
          />
        ))}
        {additional.length > 0 && (
          <button
            type="button"
            className="technology-more"
            aria-expanded={expanded}
            aria-controls={`technologies-${group.id}`}
            aria-label={
              english
                ? `${expanded ? "Show fewer" : "Show more"}: ${group.en}`
                : `${expanded ? "Ver menos" : "Ver más"}: ${group.title}`
            }
            onClick={() => setExpanded((current) => !current)}
          >
            <span className="technology-toggle-mark" aria-hidden="true" />
          </button>
        )}
      </div>
      {additional.length > 0 && (
        <div
          className={`technology-extra ${expanded ? "is-expanded" : ""}`}
          id={`technologies-${group.id}`}
          aria-hidden={!expanded}
          inert={!expanded}
        >
          <div className="technology-extra-clip">
            <div className="technology-icons technology-extra-icons">
              {additional.map((technology) => (
                <TechnologyToken
                  technology={technology}
                  groupId={group.id}
                  key={technology.name}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </article>
  );
}
