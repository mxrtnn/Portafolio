import { useEffect, useRef, useState } from "react";

export default function WorkMethodModal({ english: en, onClose }) {
  const dialogRef = useRef(null);
  const timerRef = useRef(null);
  const [closing, setClosing] = useState(false);
  useEffect(() => {
    const dialog = dialogRef.current;
    const opener = document.activeElement;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialog.showModal();
    return () => {
      clearTimeout(timerRef.current);
      dialog.close();
      document.body.style.overflow = overflow;
      if (opener instanceof HTMLElement && opener.isConnected)
        opener.focus({ preventScroll: true });
    };
  }, []);
  function close() {
    if (closing) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      onClose();
      return;
    }
    setClosing(true);
    timerRef.current = setTimeout(onClose, 180);
  }
  const plans = en
    ? [
        [
          "bullseye",
          "Defined scope",
          "For a landing page, a website or a focused first version. We agree on the goal, deliverables and acceptance criteria before development.",
        ],
        [
          "arrows-rotate",
          "Sprint-based development",
          "For a product that evolves in stages. We prioritize a backlog and build short increments, reviewing progress and adjusting priorities together.",
        ],
        [
          "screwdriver-wrench",
          "Continuous improvement",
          "For an existing project that needs fixes, improvements or new features. We organize work by impact, urgency and available capacity.",
        ],
      ]
    : [
        [
          "bullseye",
          "Alcance definido",
          "Para una landing, un sitio web o una primera versión acotada. Acordamos el objetivo, los entregables y los criterios de aceptación antes de desarrollar.",
        ],
        [
          "arrows-rotate",
          "Desarrollo por sprints",
          "Para un producto que evoluciona por etapas. Priorizamos un backlog y construimos incrementos cortos, revisando avances y ajustando prioridades en conjunto.",
        ],
        [
          "screwdriver-wrench",
          "Mejora continua",
          "Para un proyecto existente que necesita correcciones, mejoras o nuevas funcionalidades. Organizamos el trabajo según impacto, urgencia y capacidad disponible.",
        ],
      ];
  const meetings = en
    ? [
        [
          "Weekly review",
          "A meeting to show progress, collect feedback and agree on priorities. Google Meet or Discord, depending on the team’s preference.",
        ],
        [
          "Daily check-in, when useful",
          "Brief team coordination to share progress and surface blockers. It can be asynchronous when a call adds little value; the client does not need to attend every day.",
        ],
        [
          "Sprint planning and wrap-up",
          "We agree on a realistic sprint goal, review the delivered work and identify improvements for the next cycle.",
        ],
      ]
    : [
        [
          "Revisión semanal",
          "Una reunión para mostrar avances, recoger feedback y acordar prioridades. Por Google Meet o Discord, según la preferencia del equipo.",
        ],
        [
          "Check-in diario, cuando aporta",
          "Coordinación breve del equipo para compartir avances y detectar bloqueos. Puede ser asíncrona si una llamada no agrega valor; no requiere que el cliente participe todos los días.",
        ],
        [
          "Planificación y cierre de sprint",
          "Acordamos un objetivo realista para el sprint, revisamos lo entregado e identificamos mejoras para el siguiente ciclo.",
        ],
      ];
  return (
    <dialog
      ref={dialogRef}
      className={`work-method-dialog ${closing ? "is-closing" : ""}`}
      aria-labelledby="work-method-title"
      onCancel={(event) => {
        event.preventDefault();
        close();
      }}
      onClick={(event) => {
        if (event.target !== event.currentTarget) return;
        const r = event.currentTarget.getBoundingClientRect();
        if (
          event.clientX < r.left ||
          event.clientX > r.right ||
          event.clientY < r.top ||
          event.clientY > r.bottom
        )
          close();
      }}
    >
      <header className="work-method-toolbar">
        <span>
          <i className="fa-solid fa-diagram-project" aria-hidden="true" />
          {en ? "HOW WE WORK TOGETHER" : "CÓMO TRABAJAMOS JUNTOS"}
        </span>
        <button
          autoFocus
          onClick={close}
          aria-label={
            en ? "Close work methodology" : "Cerrar metodologías de trabajo"
          }
        >
          <i className="fa-solid fa-xmark" aria-hidden="true" />
        </button>
      </header>
      <div className="work-method-content">
        <p className="work-method-kicker">
          {en
            ? "CLARITY · COLLABORATION · PROGRESS"
            : "CLARIDAD · COLABORACIÓN · AVANCES"}
        </p>
        <h2 id="work-method-title">
          {en ? "A clear process." : "Un proceso claro."}
          <span>
            {en ? "A product that moves forward." : "Un producto que avanza."}
          </span>
        </h2>
        <p className="work-method-lead">
          {en
            ? "I propose a collaborative approach inspired by Scrum practices, adapted to the size of the team and the needs of each project. The goal is to make progress visible and decisions shared."
            : "Propongo una forma de trabajo colaborativa, inspirada en prácticas de Scrum y adaptada al tamaño del equipo y a las necesidades de cada proyecto. El objetivo es que los avances sean visibles y las decisiones, compartidas."}
        </p>
        <h3>
          {en ? "Ways to collaborate" : "Planes y formas de colaboración"}
        </h3>
        <div className="work-plan-grid">
          {plans.map(([icon, title, text]) => (
            <article key={title}>
              <i className={`fa-solid fa-${icon}`} aria-hidden="true" />
              <h4>{title}</h4>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <h3>
          {en
            ? "From the first conversation to delivery"
            : "De la primera conversación a la entrega"}
        </h3>
        <ol className="work-process-list">
          {(en
            ? [
                [
                  "Understand",
                  "We clarify the problem, the users and the expected result.",
                ],
                [
                  "Prioritize",
                  "We define the scope, the initial backlog and what a validated delivery looks like.",
                ],
                [
                  "Build",
                  "We work in short sprints, with a duration agreed at the start and visible progress.",
                ],
                [
                  "Review and improve",
                  "We demo, validate and document the work, then agree on the next step.",
                ],
              ]
            : [
                [
                  "Entender",
                  "Aclaramos el problema, los usuarios y el resultado esperado.",
                ],
                [
                  "Priorizar",
                  "Definimos el alcance, el backlog inicial y qué significa una entrega validada.",
                ],
                [
                  "Construir",
                  "Trabajamos en sprints cortos, con una duración acordada al inicio y avances visibles.",
                ],
                [
                  "Revisar y mejorar",
                  "Mostramos, validamos y documentamos lo desarrollado; luego acordamos el siguiente paso.",
                ],
              ]
          ).map(([title, text], i) => (
            <li key={title}>
              <span>0{i + 1}</span>
              <div>
                <h4>{title}</h4>
                <p>{text}</p>
              </div>
            </li>
          ))}
        </ol>
        <h3>
          {en
            ? "Communication that helps the work"
            : "Comunicación que acompaña el trabajo"}
        </h3>
        <div className="work-meeting-list">
          {meetings.map(([title, text]) => (
            <article key={title}>
              <i className="fa-regular fa-calendar-check" aria-hidden="true" />
              <div>
                <h4>{title}</h4>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="work-channel-pills">
          <span>
            <i className="fa-solid fa-video" aria-hidden="true" />
            Google Meet
          </span>
          <span>
            <i className="fa-brands fa-discord" aria-hidden="true" />
            Discord
          </span>
          <span>
            <i className="fa-solid fa-arrows-rotate" aria-hidden="true" />
            Scrum / Sprints
          </span>
        </div>
        <p className="work-method-note">
          {en
            ? "Meeting frequency, tools, availability and scope are agreed before starting. Changes are reviewed and prioritized together, with clear records of decisions and next steps."
            : "La frecuencia de reuniones, las herramientas, la disponibilidad y el alcance se acuerdan antes de comenzar. Los cambios se revisan y priorizan en conjunto, dejando claras las decisiones y los próximos pasos."}
        </p>
        <div className="work-method-actions">
          <a href="#contacto" onClick={onClose}>
            {en ? "Tell me about your project" : "Cuéntame tu proyecto"}
            <i className="fa-solid fa-arrow-right" aria-hidden="true" />
          </a>
          <button onClick={close}>
            {en ? "Back to portfolio" : "Volver al portafolio"}
          </button>
        </div>
      </div>
    </dialog>
  );
}
