import { useEffect, useRef, useState } from "react";
import { usePortfolio } from "../context/PortfolioContext";
import "../styles/assistant.css";
import PortfolioTour from "./PortfolioTour";

function BaymaxFace({ small = false }) {
  return (
    <svg
      className={`baymax-face ${small ? "baymax-face-small" : ""}`}
      viewBox="0 0 120 88"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id={small ? "baymax-small" : "baymax-white"}
          x1="60"
          y1="9"
          x2="60"
          y2="79"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset=".6" stopColor="#f3f7fc" />
          <stop offset="1" stopColor="#c4d4e7" />
        </linearGradient>
      </defs>
      <ellipse
        cx="60"
        cy="45"
        rx="53"
        ry="34"
        fill={`url(#${small ? "baymax-small" : "baymax-white"})`}
        stroke="#e8f2ff"
        strokeWidth="1.5"
      />
      <path
        d="M25 31c14-15 51-21 72-1"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        opacity=".65"
      />
      <g className="baymax-eyes">
        <path d="M41 44h38" stroke="#171d2b" strokeWidth="2.4" />
        <circle cx="39" cy="44" r="6.8" fill="#171d2b" />
        <circle cx="81" cy="44" r="6.8" fill="#171d2b" />
      </g>
      <path
        d="M23 61c20 12 54 13 75-1"
        stroke="#a7bcd3"
        strokeWidth="1"
        opacity=".35"
      />
    </svg>
  );
}

const paths = {
  web: {
    icon: "globe",
    es: "Una web para mi negocio",
    en: "A website for my business",
    question: "¿Qué necesitas que haga tu web?",
    questionEn: "What should your website help you do?",
    options: [
      ["show", "Mostrar mi marca", "Present my brand"],
      ["sell", "Vender productos", "Sell products"],
      ["custom", "Crear una plataforma", "Build a platform"],
    ],
  },
  automation: {
    icon: "gears",
    es: "Automatizar un proceso",
    en: "Automate a process",
    question: "¿Dónde se te va más tiempo hoy?",
    questionEn: "What takes up the most time today?",
    options: [
      ["tasks", "Tareas repetitivas", "Repetitive tasks"],
      ["requests", "Gestión de solicitudes", "Request management"],
      ["information", "Organizar información", "Organizing information"],
    ],
  },
  data: {
    icon: "brain",
    es: "Explorar datos e IA",
    en: "Explore data and AI",
    question: "¿Qué te gustaría hacer con tus datos o con IA?",
    questionEn: "What would you like to do with data or AI?",
    options: [
      ["analysis", "Entender mis datos", "Understand my data"],
      ["content", "Generar contenido visual", "Generate visual content"],
      ["explore", "Explorar una idea", "Explore an idea"],
    ],
  },
  career: {
    icon: "briefcase",
    es: "Conocer el perfil de Martín",
    en: "Explore Martín’s profile",
    question: "¿Qué te gustaría conocer primero?",
    questionEn: "What would you like to explore first?",
    options: [
      ["projects", "Proyectos y experiencia", "Projects and experience"],
      ["stack", "Tecnologías que utiliza", "Technology stack"],
      ["cv", "Currículum y contacto", "Résumé and contact"],
    ],
  },
};

function recommendation(path, goal, en) {
  if (path === "web" && goal === "sell")
    return {
      project: "todofreak",
      name: "TodoFreak",
      text: en
        ? "A useful starting point is a clear product catalog and a defined purchase flow. TodoFreak shows Martín’s work on a digital storefront and e-commerce platform. We can discuss the scope that fits your business."
        : "Un buen punto de partida sería un catálogo claro y un flujo de compra definido. TodoFreak muestra el trabajo de Martín en una vitrina digital y plataforma de comercio electrónico. El siguiente paso es conversar sobre el alcance de tu negocio.",
    };
  if (path === "web" && goal === "show")
    return {
      project: "nina",
      name: "El Horno de Nina",
      text: en
        ? "A landing page can introduce your brand, showcase your offering and connect visitors with your social channels. El Horno de Nina is a related example. Start with your main goal and the action you want visitors to take."
        : "Una landing puede presentar tu marca, mostrar lo que ofreces y conectar con tus redes sociales. El Horno de Nina es un ejemplo cercano. Podemos partir por tu objetivo principal y la acción que quieres que realicen tus visitantes.",
    };
  if (path === "web" || path === "automation")
    return {
      project: "duoc-desk",
      name: "DUOC-DESK (DARA)",
      text: en
        ? "First, map the current process, the people involved and the task that creates the most friction. A focused first version can help validate the solution. DARA is an example of Martín’s work on request management."
        : "Primero conviene identificar el proceso actual, quiénes participan y qué tarea genera más fricción. Con eso se puede definir una primera versión enfocada y validar la solución. DARA es un ejemplo del trabajo de Martín en gestión de requerimientos.",
    };
  if (path === "data" && goal === "content")
    return {
      project: "mystikal",
      name: "Mystikal-AI",
      text: en
        ? "We can start by defining the visual content you need and how it would fit into your workflow. Mystikal-AI explores image generation through a web interface. A small prototype can help evaluate the idea."
        : "Podemos partir definiendo qué contenido visual necesitas y cómo se integraría en tu trabajo. Mystikal-AI explora la generación de imágenes mediante una interfaz web. Un prototipo acotado permitiría evaluar tu idea.",
    };
  if (path === "data")
    return {
      project: "kinedict",
      name: "Kinedict AI",
      text: en
        ? "The first step is a clear question and a review of the available data. From there, we can explore visualization, analysis or an AI prototype. Kinedict AI is a related project focused on sports data."
        : "El primer paso es una pregunta concreta y revisar qué datos tienes disponibles. Desde ahí podemos explorar visualización, análisis o un prototipo con IA. Kinedict AI es un proyecto relacionado con el análisis de datos deportivos.",
    };
  return {
    project: "duoc-desk",
    name: "DUOC-DESK (DARA)",
    text: en
      ? "Martín’s profile combines Full Stack development, AI and data, with Scrum project experience. Explore his work, browse his technology stack or download his CV to learn more."
      : "El perfil de Martín combina desarrollo Full Stack, IA y datos, con experiencia de proyecto en Scrum. Puedes explorar sus proyectos, revisar su stack o descargar el CV para conocer su trayectoria.",
  };
}

export default function PortfolioAssistant() {
  const { language, openModal } = usePortfolio();
  const en = language === "en";
  const [open, setOpen] = useState(false);
  const [tourMode, setTourMode] = useState(false);
  const [path, setPath] = useState(null);
  const [result, setResult] = useState(null);
  const [messages, setMessages] = useState([]);
  const [typing, setTyping] = useState(false);
  const launcherRef = useRef(null);
  const closeRef = useRef(null);
  const scrollRef = useRef(null);
  const timerRef = useRef(null);
  const greeting = en
    ? "Hi! I’m Martín’s portfolio assistant. Tell me what you have in mind and we’ll find a useful starting point."
    : "¡Hola! Soy el asistente del portafolio de Martín. Cuéntame qué tienes en mente y encontremos un buen punto de partida.";

  function reset() {
    clearTimeout(timerRef.current);
    setTyping(false);
    setPath(null);
    setResult(null);
    setMessages([{ role: "assistant", text: greeting }]);
  }
  useEffect(() => {
    reset();
    return () => clearTimeout(timerRef.current);
  }, [language]);
  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus({ preventScroll: true });
    const onKey = (event) => {
      if (event.key === "Escape" && !document.querySelector("dialog[open]")) {
        setOpen(false);
        setTourMode(false);
        launcherRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);
  useEffect(() => {
    if (scrollRef.current)
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, typing, result, open]);

  function answer(text, next) {
    setMessages((current) => [...current, { role: "user", text }]);
    setTyping(true);
    timerRef.current = setTimeout(() => {
      setTyping(false);
      next();
    }, 450);
  }
  function choosePath(key) {
    const item = paths[key];
    answer(item[en ? "en" : "es"], () => {
      setPath(key);
      setMessages((current) => [
        ...current,
        { role: "assistant", text: item[en ? "questionEn" : "question"] },
      ]);
    });
  }
  function chooseGoal(option) {
    answer(option[en ? 2 : 1], () => {
      const next = recommendation(path, option[0], en);
      setResult(next);
      setMessages((current) => [
        ...current,
        { role: "assistant", text: next.text },
      ]);
    });
  }
  function dismiss() {
    setOpen(false);
    setTourMode(false);
    launcherRef.current?.focus({ preventScroll: true });
  }
  function visitProject() {
    setOpen(false);
    openModal(result.project);
  }

  return (
    <aside
      className="portfolio-assistant"
      aria-label={en ? "Portfolio assistant" : "Asistente del portafolio"}
    >
      {open && tourMode && (
        <PortfolioTour
          key={language}
          onClose={dismiss}
          onBack={() => setTourMode(false)}
        />
      )}
      {open && !tourMode && (
        <section
          id="portfolio-chat"
          className="assistant-panel"
          role="dialog"
          aria-modal="false"
          aria-labelledby="assistant-title"
        >
          <header className="assistant-header">
            <span className="assistant-avatar">
              <BaymaxFace small />
            </span>
            <div>
              <h2 id="assistant-title">
                {en ? "Let’s build something" : "Construyamos algo"}
              </h2>
              <p>
                <span />
                {en
                  ? "Your next idea starts here"
                  : "Tu próxima idea empieza aquí"}
              </p>
            </div>
            <button
              ref={closeRef}
              onClick={dismiss}
              aria-label={en ? "Close assistant" : "Cerrar asistente"}
            >
              <i className="fa-solid fa-xmark" aria-hidden="true" />
            </button>
          </header>
          <div className="assistant-conversation" ref={scrollRef}>
            <p className="assistant-intro-label">
              <span />
              {en ? "GUIDED CONVERSATION" : "CONVERSACIÓN GUIADA"}
            </p>
            {!path && !result && !typing && (
              <button
                className="assistant-tour-entry"
                onClick={() => setTourMode(true)}
              >
                <i className="fa-solid fa-stopwatch" aria-hidden="true" />
                <span>
                  <strong>
                    {en ? "Meet me in 60 seconds" : "Conóceme en 60 segundos"}
                  </strong>
                  <small>
                    {en
                      ? "Choose your route. I’ll guide you."
                      : "Elige tu ruta. Yo te acompaño."}
                  </small>
                </span>
                <i className="fa-solid fa-arrow-right" aria-hidden="true" />
              </button>
            )}
            <div
              className="assistant-messages"
              role="log"
              aria-live="polite"
              aria-relevant="additions text"
            >
              {messages.map((message, index) => (
                <div
                  className={`assistant-message assistant-message-${message.role}`}
                  key={index}
                >
                  <span className="assistant-message-author">
                    {message.role === "user"
                      ? en
                        ? "YOU"
                        : "TÚ"
                      : "ASISTENTE"}
                  </span>
                  <p>{message.text}</p>
                </div>
              ))}
            </div>
            {typing && (
              <div
                className="assistant-typing"
                role="status"
                aria-label={en ? "Preparing a reply" : "Preparando respuesta"}
              >
                <i />
                <i />
                <i />
              </div>
            )}
            {!typing && !result && (
              <div
                className="assistant-options"
                aria-label={en ? "Choose an option" : "Elige una opción"}
              >
                {!path
                  ? Object.entries(paths).map(([key, item]) => (
                      <button key={key} onClick={() => choosePath(key)}>
                        <i
                          className={`fa-solid fa-${item.icon}`}
                          aria-hidden="true"
                        />
                        <span>{item[en ? "en" : "es"]}</span>
                        <i
                          className="fa-solid fa-arrow-right"
                          aria-hidden="true"
                        />
                      </button>
                    ))
                  : paths[path].options.map((option) => (
                      <button
                        key={option[0]}
                        onClick={() => chooseGoal(option)}
                      >
                        <span>{option[en ? 2 : 1]}</span>
                        <i
                          className="fa-solid fa-arrow-right"
                          aria-hidden="true"
                        />
                      </button>
                    ))}
              </div>
            )}
            {result && (
              <div className="assistant-result-actions">
                <button
                  className="assistant-project-action"
                  onClick={visitProject}
                >
                  <i className="fa-solid fa-layer-group" aria-hidden="true" />
                  {result.name}
                  <i
                    className="fa-solid fa-arrow-up-right-from-square"
                    aria-hidden="true"
                  />
                </button>
                {path === "career" && (
                  <>
                    <a href="#perfil" onClick={dismiss}>
                      {en
                        ? "Explore the technology stack"
                        : "Explorar el stack"}
                    </a>
                    <a
                      href="/assets/cv/martin_jara_cv_2.pdf"
                      download="Martin_Jara_CV.pdf"
                    >
                      <i className="fa-solid fa-download" aria-hidden="true" />
                      {en ? "Download CV" : "Descargar CV"}
                    </a>
                  </>
                )}
                <a
                  className="assistant-contact-action"
                  href={`https://wa.me/56956211721?text=${encodeURIComponent(en ? "Hi Martín! I visited your portfolio and would like to discuss an idea." : "¡Hola Martín! Visité tu portafolio y me gustaría conversar sobre una idea.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-whatsapp" aria-hidden="true" />
                  {en ? "Talk to Martín" : "Conversar con Martín"}
                </a>
              </div>
            )}
          </div>
          <footer className="assistant-panel-footer">
            <span>
              <i
                className="fa-solid fa-wand-magic-sparkles"
                aria-hidden="true"
              />
              {en ? "From idea to next step." : "De la idea al siguiente paso."}
            </span>
            <button
              onClick={reset}
              aria-label={
                en ? "Restart conversation" : "Reiniciar conversación"
              }
            >
              <i className="fa-solid fa-rotate-left" aria-hidden="true" />
            </button>
          </footer>
        </section>
      )}
      <button
        ref={launcherRef}
        className={`assistant-launcher ${open ? "is-open" : ""}`}
        onClick={() => {
          if (open) dismiss();
          else setOpen(true);
        }}
        aria-expanded={open}
        aria-controls="portfolio-chat"
        aria-label={
          en ? "Open portfolio assistant" : "Abrir asistente del portafolio"
        }
      >
        <span className="assistant-launcher-halo" />
        <BaymaxFace />
        <span className="assistant-launcher-status" />
        <span className="assistant-launcher-tooltip">
          {en ? "Got an idea?" : "¿Tienes una idea?"}
          <span>{en ? "Let’s explore it together" : "Exploremos juntos"}</span>
        </span>
      </button>
    </aside>
  );
}
