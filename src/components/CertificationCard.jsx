export default function CertificationCard({
  badge,
  issuer,
  english: en,
  index,
}) {
  return (
    <article
      className="certification-card"
      style={{ "--badge-delay": `${index * 65}ms` }}
    >
      <div className="certification-badge-art">
        <span aria-hidden="true" />
        <img
          src={badge.image}
          alt={badge.title}
          width="128"
          height="128"
          loading="lazy"
        />
      </div>
      <p className="certification-issuer">
        <i className="fa-solid fa-shield-halved" aria-hidden="true" />
        {issuer}
      </p>
      <h4>{badge.title}</h4>
      <p className="certification-description">
        {badge[en ? "descriptionEn" : "description"]}
      </p>
      {badge.context && (
        <span className="certification-context">
          <i className="fa-solid fa-graduation-cap" aria-hidden="true" />
          {en ? "Training" : "Formación"} · {badge.context}
        </span>
      )}
      <div className="certification-actions">
        <a href={badge.badgeUrl} target="_blank" rel="noopener noreferrer">
          {en ? "View badge" : "Ver insignia"}
          <i
            className="fa-solid fa-arrow-up-right-from-square"
            aria-hidden="true"
          />
        </a>
        {badge.certificate && (
          <a className="certification-pdf" href={badge.certificate} download>
            <i className="fa-regular fa-file-pdf" aria-hidden="true" />
            {en ? "Certificate" : "Certificado"}
          </a>
        )}
      </div>
    </article>
  );
}
