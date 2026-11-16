import { useState } from "react";
import { usePortfolio } from "../context/PortfolioContext";
import WorkMethodModal from "./WorkMethodModal";
import "../styles/footer.css";

export default function Footer() {
  const { language } = usePortfolio();
  const en = language === "en";
  const [methodOpen, setMethodOpen] = useState(false);
  return (
    <>
      <footer className="site-footer" id="footer">
        <div className="footer-container">
          <div className="footer-intro">
            <div>
              <p>
                {en
                  ? "LET’S BUILD THE NEXT STEP"
                  : "CONSTRUYAMOS EL SIGUIENTE PASO"}
              </p>
              <h2>
                {en ? "Your idea deserves" : "Tu idea merece"}
                <span>{en ? "a clear way forward." : "un camino claro."}</span>
              </h2>
            </div>
            <div className="footer-intro-aside">
              <p>
                {en
                  ? "Clear goals, visible progress and direct communication. Let’s find the way of working that fits your project."
                  : "Objetivos claros, avances visibles y comunicación directa. Encontremos una forma de trabajo que se adapte a tu proyecto."}
              </p>
              <button
                className="footer-method-button"
                onClick={() => setMethodOpen(true)}
              >
                <i className="fa-solid fa-diagram-project" aria-hidden="true" />
                {en ? "Work methodologies" : "Metodologías de trabajo"}
                <i
                  className="fa-solid fa-arrow-up-right-from-square"
                  aria-hidden="true"
                />
              </button>
            </div>
          </div>
          <div className="footer-grid">
            <div className="footer-brand-column">
              <a className="footer-brand" href="#inicio">
                <span>M</span>
                <strong>Martin Jara</strong>
              </a>
              <p>
                {en
                  ? "Full Stack development, artificial intelligence and data. Technology with purpose, attention to detail and an identity of its own."
                  : "Desarrollo Full Stack, inteligencia artificial y datos. Tecnología con propósito, atención al detalle e identidad propia."}
              </p>
              <span className="footer-status">
                <i />
                {en
                  ? "Let’s talk about your next project"
                  : "Conversemos sobre tu próximo proyecto"}
              </span>
            </div>
            <div>
              <h3>{en ? "WAYS TO COLLABORATE" : "FORMAS DE COLABORAR"}</h3>
              <ul className="footer-work-links">
                {(en
                  ? [
                      "Defined-scope projects",
                      "Sprint-based development",
                      "Continuous improvement",
                    ]
                  : [
                      "Proyectos de alcance definido",
                      "Desarrollo por sprints",
                      "Mejora continua",
                    ]
                ).map((label) => (
                  <li key={label}>
                    <button onClick={() => setMethodOpen(true)}>
                      <span>{label}</span>
                      <i
                        className="fa-solid fa-arrow-right"
                        aria-hidden="true"
                      />
                    </button>
                  </li>
                ))}
              </ul>
              <span className="footer-channel-note">
                <i className="fa-solid fa-video" aria-hidden="true" />
                Meet <span>/</span>
                <i className="fa-brands fa-discord" aria-hidden="true" />
                Discord
              </span>
            </div>
            <div>
              <h3>{en ? "EXPLORE" : "EXPLORA"}</h3>
              <ul className="footer-page-links">
                <li>
                  <a href="#perfil">
                    {en ? "Profile & technologies" : "Perfil y tecnologías"}
                  </a>
                </li>
                <li>
                  <a href="#experiencia">
                    {en ? "Experience & education" : "Experiencia y educación"}
                  </a>
                </li>
                <li>
                  <a href="#proyectos">{en ? "Projects" : "Proyectos"}</a>
                </li>
                <li>
                  <a
                    href="/assets/cv/martin_jara_cv_2.pdf"
                    download="Martin_Jara_CV.pdf"
                  >
                    {en ? "Download CV" : "Descargar CV"}
                    <i className="fa-solid fa-download" aria-hidden="true" />
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3>{en ? "LET’S CONNECT" : "CONECTEMOS"}</h3>
              <a className="footer-email" href="mailto:martinjara580@gmail.com">
                martinjara580@gmail.com
              </a>
              <div className="footer-socials">
                <a
                  href="https://github.com/mxrtnn"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <i className="fa-brands fa-github" aria-hidden="true" />
                </a>
                <a
                  href="https://www.linkedin.com/in/martín-jara-castañeda-0bb552148/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <i className="fa-brands fa-linkedin-in" aria-hidden="true" />
                </a>
                <a
                  href="https://wa.me/56956211721"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                >
                  <i className="fa-brands fa-whatsapp" aria-hidden="true" />
                </a>
              </div>
              <a className="footer-contact-link" href="#contacto">
                {en ? "Start a conversation" : "Iniciar una conversación"}
                <i className="fa-solid fa-arrow-right" aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="footer-bottom">
            <span>
              © {new Date().getFullYear()} Martin Jara.{" "}
              {en ? "All rights reserved." : "Todos los derechos reservados."}
            </span>
            <span className="footer-signature">
              <i className="fa-solid fa-code" aria-hidden="true" />
              {en
                ? "Designed with intention. Built with care."
                : "Diseñado con intención. Construido con detalle."}
            </span>
            <a
              href="#inicio"
              aria-label={en ? "Back to top" : "Volver al inicio"}
            >
              <i className="fa-solid fa-arrow-up" aria-hidden="true" />
            </a>
          </div>
        </div>
      </footer>
      {methodOpen && (
        <WorkMethodModal english={en} onClose={() => setMethodOpen(false)} />
      )}
    </>
  );
}
