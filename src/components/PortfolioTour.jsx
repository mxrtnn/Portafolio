import { useEffect, useRef, useState } from "react";
import { portfolioTours } from "../data/portfolioTours";
import { usePortfolio } from "../context/PortfolioContext";
import "../styles/tour.css";

export default function PortfolioTour({ onClose, onBack }) {
  const { language, openModal } = usePortfolio();
  const en = language === "en";
  const [route, setRoute] = useState(null);
  const [index, setIndex] = useState(0);
  const [finished, setFinished] = useState(false);
  const closeRef = useRef(null);
  const tour = route ? portfolioTours[route] : null;
  const step = tour?.steps[index];

  useEffect(() => {
    closeRef.current?.focus({ preventScroll: true });
  }, []);
  useEffect(() => {
    if (!step || finished) return;
    const target = document.querySelector(step.target);
    if (!target) return;
    // Only navigation clicks change the step. No countdown or timed scrolling.
    target.classList.add("portfolio-tour-target");
    target.classList.add("reveal-visible");
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (window.innerWidth <= 600) {
      const panelTop = document
        .querySelector(".portfolio-tour-panel")
        .getBoundingClientRect().top;
      const rect = target.getBoundingClientRect();
      const visibleHeight = Math.min(rect.height, Math.max(0, panelTop - 40));
      const navBottom =
        document.querySelector(".neon-nav-dock")?.getBoundingClientRect()
          .bottom || 0;
      const top = Math.max(navBottom + 12, (panelTop - visibleHeight) / 2);
      window.scrollTo({
        top: Math.max(0, window.scrollY + rect.top - top),
        behavior: reduced ? "instant" : "smooth",
      });
    } else {
      target.scrollIntoView({
        behavior: reduced ? "instant" : "smooth",
        block: "center",
      });
    }
    return () => target.classList.remove("portfolio-tour-target");
  }, [route, index, finished, step]);

  function choose(key) {
    setRoute(key);
    setIndex(0);
    setFinished(false);
  }
  function restart() {
    setRoute(null);
    setIndex(0);
    setFinished(false);
  }

  return (
    <section
      id="portfolio-chat"
      className={`assistant-panel portfolio-tour-panel ${route ? "tour-is-running" : ""}`}
      role="dialog"
      aria-modal="false"
      aria-labelledby="tour-title"
    >
      <header className="assistant-header tour-header">
        <span className="tour-clock" aria-hidden="true">
          <i className="fa-solid fa-stopwatch" />
        </span>
        <div>
          <h2 id="tour-title">
            {en ? "Meet me in 60 seconds" : "Conóceme en 60 segundos"}
          </h2>
          <p>{en ? "3 stops · at your own pace" : "3 paradas · a tu ritmo"}</p>
        </div>
        <button
          ref={closeRef}
          onClick={onClose}
          aria-label={en ? "Close tour" : "Cerrar recorrido"}
        >
          <i className="fa-solid fa-xmark" aria-hidden="true" />
        </button>
      </header>
      {!route ? (
        <div className="tour-picker">
          <p>
            {en
              ? "What brings you here? Let me show you the most relevant parts."
              : "¿Qué te trae por aquí? Te muestro lo más relevante para ti."}
          </p>
          <div className="tour-route-options">
            {Object.entries(portfolioTours).map(([key, item]) => (
              <button key={key} onClick={() => choose(key)}>
                <span className="tour-route-icon">
                  <i
                    className={`fa-solid fa-${item.icon}`}
                    aria-hidden="true"
                  />
                </span>
                <span>
                  <strong>{item[en ? "en" : "es"]}</strong>
                  <small>{item[en ? "detailEn" : "detail"]}</small>
                </span>
                <i className="fa-solid fa-arrow-right" aria-hidden="true" />
              </button>
            ))}
          </div>
          <button className="tour-back-to-chat" onClick={onBack}>
            <i className="fa-solid fa-arrow-left" aria-hidden="true" />
            {en ? "Back to the assistant" : "Volver al asistente"}
          </button>
        </div>
      ) : finished ? (
        <div className="tour-finish" aria-live="polite">
          <span className="tour-finish-icon">
            <i className="fa-solid fa-check" aria-hidden="true" />
          </span>
          <h3>{en ? "Nice to meet you!" : "¡Un gusto conocerte!"}</h3>
          <p>
            {en
              ? "That was a quick look. You can keep exploring or take the next step."
              : "Eso fue una primera mirada. Puedes seguir explorando o dar el siguiente paso."}
          </p>
          <a
            href="/assets/cv/martin_jara_cv_2.pdf"
            download="Martin_Jara_CV.pdf"
          >
            <i className="fa-solid fa-download" aria-hidden="true" />
            {en ? "Download CV" : "Descargar CV"}
          </a>
          <a
            href="https://wa.me/56956211721"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-whatsapp" aria-hidden="true" />
            {en ? "Talk to Martín" : "Conversar con Martín"}
          </a>
          <button onClick={restart}>
            {en ? "Try another route" : "Probar otra ruta"}
          </button>
        </div>
      ) : (
        <>
          <div
            className="tour-progress"
            aria-label={
              en ? `Step ${index + 1} of 3` : `Paso ${index + 1} de 3`
            }
          >
            {tour.steps.map((_, i) => (
              <span key={i} className={i <= index ? "is-complete" : ""} />
            ))}
          </div>
          <div className="tour-stop" aria-live="polite" aria-atomic="true">
            <p className="tour-stop-count">
              {tour[en ? "en" : "es"]}
              <span>0{index + 1} / 03</span>
            </p>
            <h3>{step[en ? "en" : "es"]}</h3>
            <p>{step[en ? "textEn" : "text"]}</p>
          </div>
          <div className="tour-stop-actions">
            {step.project && (
              <button onClick={() => openModal(step.project)}>
                <i className="fa-solid fa-expand" aria-hidden="true" />
                {en ? "View project" : "Ver proyecto"}
              </button>
            )}
            {step.cv && (
              <a
                href="/assets/cv/martin_jara_cv_2.pdf"
                download="Martin_Jara_CV.pdf"
              >
                <i className="fa-solid fa-download" aria-hidden="true" />
                {en ? "Download CV" : "Descargar CV"}
              </a>
            )}
            {step.contact && (
              <a
                href="https://wa.me/56956211721"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-whatsapp" aria-hidden="true" />
                {en ? "Talk to Martín" : "Conversar con Martín"}
              </a>
            )}
          </div>
          <footer className="tour-navigation">
            <button
              onClick={() => (index === 0 ? restart() : setIndex(index - 1))}
            >
              <i className="fa-solid fa-arrow-left" aria-hidden="true" />
              {en ? "Back" : "Atrás"}
            </button>
            <button
              className="tour-next"
              onClick={() =>
                index === tour.steps.length - 1
                  ? setFinished(true)
                  : setIndex(index + 1)
              }
            >
              {index === tour.steps.length - 1
                ? en
                  ? "Finish"
                  : "Terminar"
                : en
                  ? "Next"
                  : "Siguiente"}
              <i className="fa-solid fa-arrow-right" aria-hidden="true" />
            </button>
          </footer>
        </>
      )}
    </section>
  );
}
