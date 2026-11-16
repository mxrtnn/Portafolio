import { useEffect, useState } from "react";
import { usePortfolio } from "../context/PortfolioContext";
import { buildScrumCode, scrumPhases } from "../data/scrumPhases";
import "../styles/scrum-value.css";

export default function ValueProposition() {
  const { language } = usePortfolio();
  const en = language === "en";
  const [selection, setSelection] = useState(null);
  const [code, setCode] = useState("");
  const [typing, setTyping] = useState(false);
  const phase = scrumPhases.find(item => item.id === selection?.id);
  const copy = phase?.[language];

  useEffect(() => {
    setCode("");
    if (!phase) return;
    const source = buildScrumCode(phase, language);
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let timer;
    function start() {
      clearInterval(timer);
      if (preference.matches) {
        setCode(source);
        setTyping(false);
        return;
      }
      let cursor = 0;
      setTyping(true);
      setCode("");
      timer = setInterval(() => {
        cursor = Math.min(cursor + 5, source.length);
        setCode(source.slice(0, cursor));
        if (cursor === source.length) {
          clearInterval(timer);
          setTyping(false);
        }
      }, 16);
    }
    start();
    preference.addEventListener("change", start);
    return () => {
      clearInterval(timer);
      preference.removeEventListener("change", start);
    };
  }, [selection, phase, language]);

  function choose(id) {
    setSelection({ id });
  }

  return (
    <section id="propuesta-valor" data-page-surface className="scrum-value">
      <div className="scrum-value-inner">
        <header className="scrum-value-heading">
          <p className="scrum-eyebrow">{en ? "YOUR IDEA, WITH A CLEAR DIRECTION" : "TU IDEA, CON UN CAMINO CLARO"}</p>
          <h2>{en ? "FROM IDEA TO MVP." : "DE LA IDEA AL MVP."}<br /><span>{en ? "ONE SPRINT AT A TIME." : "UN SPRINT A LA VEZ."}</span></h2>
          <p>{en ? "We prioritize what matters, build a working version and improve with evidence. A transparent process to turn your idea into a product you can put to the test." : "Priorizamos lo que importa, construimos una versión funcional y mejoramos con evidencia. Un proceso transparente para convertir tu idea en un producto que puedas poner a prueba."}</p>
          <span className="scrum-cycle-label"><i className="fa-solid fa-arrows-rotate" aria-hidden="true" /> {en ? "An iterative cycle inspired by Scrum" : "Un ciclo iterativo basado en Scrum"}</span>
        </header>

        <div className="scrum-phase-grid" aria-label={en ? "Explore the Sprint cycle" : "Explora el ciclo del Sprint"}>
          {scrumPhases.map((item, index) => (
            <div className="scrum-card-reveal" key={item.id}>
              <button type="button" className={`scrum-phase-card${selection?.id === item.id ? " is-selected" : ""}`} aria-pressed={selection?.id === item.id} aria-controls="scrum-code-panel" onClick={() => choose(item.id)}>
                <span className="scrum-card-top"><span className="scrum-phase-icon"><i className={`fa-solid ${item.icon}`} aria-hidden="true" /></span><span className="scrum-phase-number">0{index + 1}</span></span>
                <h3>{item[language].title}</h3>
                <p>{item[language].description}</p>
                <span className="scrum-deliverable">{item[language].deliverable}</span>
                <span className="scrum-card-action">{en ? "Generate this phase" : "Generar esta fase"} <i className="fa-solid fa-arrow-down" aria-hidden="true" /></span>
              </button>
            </div>
          ))}
        </div>
        <p className="scrum-process-note">{en ? "Development takes place throughout the Sprint, with the Daily Scrum to inspect progress. Review and Retrospective close the cycle and inform the next one." : "El desarrollo ocurre durante el Sprint, con la Daily Scrum para inspeccionar el progreso. La Revisión y la Retrospectiva cierran el ciclo y alimentan el siguiente."}</p>

        <div id="scrum-code-panel" className="scrum-code-panel">
          <div className="scrum-editor-bar"><span><i className="fa-solid fa-terminal" aria-hidden="true" /> {phase?.file || "your-next-sprint.ts"}</span><span className="scrum-editor-language">TypeScript · {en ? "Illustrative" : "Ilustrativo"}</span></div>
          <div className="scrum-editor-body">
            <div className="scrum-code-area" aria-hidden="true">
              {phase ? <pre><code>{code.split("\n").map((line, index) => <span className={`scrum-code-line${line.startsWith("//") ? " is-comment" : ""}`} key={index}><span className="scrum-line-number">{index + 1}</span><span>{line || " "}</span></span>)}</code>{typing && <span className="scrum-code-caret">▌</span>}</pre> : <div className="scrum-editor-empty"><span>&lt;/&gt;</span><p>{en ? "Your next Sprint starts with a click." : "Tu próximo Sprint empieza con un clic."}</p><small>{en ? "Choose a card to generate its code." : "Elige una card para generar su código."}</small></div>}
            </div>
            <aside className="scrum-editor-explanation">
              <p className="scrum-eyebrow">{en ? "WHAT THIS MEANS FOR YOU" : "QUÉ SIGNIFICA PARA TI"}</p>
              <div key={`${phase?.id}-${language}`} className="scrum-phase-summary" role="status"><h3>{copy?.phrase || (en ? "Less uncertainty. More direction." : "Menos incertidumbre. Más dirección.")}</h3><p>{copy?.result || (en ? "Explore each phase to see how we organize the work, validate the outcome and improve together." : "Explora cada fase para ver cómo organizamos el trabajo, validamos el resultado y mejoramos juntos.")}</p></div>
              {phase && <button type="button" className="scrum-replay" onClick={() => choose(phase.id)}><i className="fa-solid fa-rotate-right" aria-hidden="true" /> {en ? "Generate again" : "Volver a generar"}</button>}
              <a className="scrum-contact" href="#contacto">{en ? "Let's talk about your idea" : "Conversemos sobre tu idea"} <i className="fa-solid fa-arrow-right" aria-hidden="true" /></a>
            </aside>
          </div>
          <div className="scrum-editor-status" role="status"><span className={typing ? "is-typing" : ""} />{typing ? (en ? "Generating phase…" : "Generando fase…") : phase ? (en ? "Phase ready · You set the next step" : "Fase lista · Tú eliges el siguiente paso") : (en ? "Waiting for your selection" : "Esperando tu selección")}</div>
        </div>
      </div>
    </section>
  );
}
