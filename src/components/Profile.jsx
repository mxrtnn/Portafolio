import { usePortfolio } from "../context/PortfolioContext";
import { technologyGroups } from "../data/technologies";
import TechnologyCard from "./TechnologyCard";
import "../styles/profile.css";

const stats = [
  {
    value: "6+",
    icon: "rocket",
    es: "Proyectos realizados",
    en: "Projects completed",
  },
  {
    value: "2+",
    icon: "calendar-days",
    es: "Años de experiencia",
    en: "Years of experience",
  },
  { value: "25+", icon: "layer-group", es: "Tecnologías", en: "Technologies" },
];

export default function Profile() {
  const { language } = usePortfolio();
  const english = language === "en";
  return (
    <section data-page-surface
      id="perfil"
      className="profile-section"
      aria-labelledby="profile-title"
    >
      <div className="profile-layout">
        <div className="profile-stack">
          <div className="profile-stack-heading">
            <h2>
              <i className="fa-solid fa-layer-group" aria-hidden="true" />
              <span>
                STACK <b>&</b> {english ? "TECHNOLOGIES" : "TECNOLOGÍAS"}
              </span>
            </h2>
            <span className="profile-heading-line" aria-hidden="true" />
            <span className="profile-stack-count">
              <i className="fa-solid fa-bolt" aria-hidden="true" />
              25+ <span>{english ? "technologies" : "tecnologías"}</span>
            </span>
          </div>
          <div className="technology-grid">
            {technologyGroups.map((group) => (
              <TechnologyCard group={group} english={english} key={group.id} />
            ))}
          </div>
        </div>
        <div className="profile-intro">
          <p className="profile-eyebrow">
            {english ? "WHO AM I?" : "¿QUIÉN SOY?"}
          </p>
          <h2 id="profile-title">
            {english
              ? "READY TO EMPOWER YOUR"
              : "LISTO PARA POTENCIAR TU EQUIPO DE"}
            <span>{english ? "WEB DEVELOPMENT TEAM" : "DESARROLLO WEB"}</span>
          </h2>
          <svg
            className="profile-title-stroke"
            viewBox="0 0 190 12"
            aria-hidden="true"
          >
            <path
              d="M2 10 Q88 -4 187 8"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
          <div className="profile-contact-pills">
            <span className="profile-availability">
              <span className="profile-status-lights" aria-hidden="true">
                <i />
                <i />
                <i />
              </span>
              {english ? "AVAILABLE" : "DISPONIBLE"}
            </span>
            <a
              href="https://wa.me/56956211721"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-solid fa-phone" aria-hidden="true" />
              +56 9 5621 1721
            </a>
          </div>
          <p className="profile-description">
            {english
              ? "I’m Martin Jara, a Software Engineer and Scrum Master specializing in AI and Data Science. I transform complex ideas into scalable solutions where technical strength and UX/UI design work in harmony. I build software that connects digital innovation with your company’s unique identity."
              : "Soy Martin Jara, Ingeniero Informático y Scrum Master especializado en IA y Ciencia de Datos. Mi enfoque es transformar ideas complejas en soluciones escalables donde la potencia técnica y el diseño UX/UI conviven en armonía. No solo construyo software; diseño el encaje perfecto entre la innovación digital y la identidad única de tu empresa."}
          </p>
          <div className="profile-stats">
            {stats.map((stat) => (
              <div className="profile-stat" key={stat.value}>
                <i className={`fa-solid fa-${stat.icon}`} aria-hidden="true" />
                <div>
                  <strong>{stat.value}</strong>
                  <span>{english ? stat.en : stat.es}</span>
                </div>
              </div>
            ))}
          </div>
          <a
            className="profile-cv"
            href="/assets/cv/martin_jara_cv_2.pdf"
            download="Martin_Jara_CV.pdf"
          >
            <i className="fa-solid fa-download" aria-hidden="true" />
            {english ? "DOWNLOAD CV" : "DESCARGAR CV"}
          </a>
        </div>
      </div>
      <div className="profile-wave" aria-hidden="true">
        <svg viewBox="0 0 1600 150" preserveAspectRatio="none">
          <defs>
            <linearGradient id="profileWaveGradient">
              <stop stopColor="#8b5cf6" />
              <stop offset=".5" stopColor="#294cff" />
              <stop offset="1" stopColor="#38bdf8" />
            </linearGradient>
          </defs>
          {Array.from({ length: 22 }, (_, index) => (
            <path
              key={index}
              d={`M-100 ${30 + index * 4} C200 ${-35 + index * 3}, 360 ${180 + index * 2}, 680 ${100 + index * 3} S1050 ${170 - index * 3}, 1700 ${5 + index * 4}`}
            />
          ))}
        </svg>
      </div>
    </section>
  );
}
