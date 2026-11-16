import { useEffect, useRef, useState } from "react";
import { usePortfolio } from "../context/PortfolioContext";
import "../styles/navbar.css";

const links = [
  { id: "inicio", icon: "house", es: "Inicio", en: "Home" },
  { id: "perfil", icon: "user", es: "Perfil", en: "Profile" },
  { id: "experiencia", icon: "briefcase", es: "Experiencia", en: "Experience" },
  { id: "proyectos", icon: "layer-group", es: "Proyectos", en: "Projects" },
];

export default function Navbar() {
  const { language, toggleLanguage, dark, toggleTheme } = usePortfolio();
  const en = language === "en";
  const [active, setActive] = useState("inicio");
  const [scrolled, setScrolled] = useState(false);
  const anchorRef = useRef(null);
  const dockRef = useRef(null);
  const progressRef = useRef(null);

  useEffect(() => {
    let frame;
    const sections = [
      ...links.map(({ id }) => document.getElementById(id)),
      document.getElementById("contacto"),
    ].filter(Boolean);
    function update() {
      const line = Math.min(220, window.innerHeight * 0.3);
      let current = "inicio";
      sections.forEach((section) => {
        if (section.getBoundingClientRect().top <= line) current = section.id;
      });
      setActive(current);
      setScrolled(window.scrollY > 24);
      // The anchor reserves space; only the center dock stays in the viewport.
      if (anchorRef.current && dockRef.current)
        dockRef.current.style.top = `${Math.max(12, anchorRef.current.getBoundingClientRect().top)}px`;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (progressRef.current)
        progressRef.current.style.scale = `${max > 0 ? Math.max(0, Math.min(1, window.scrollY / max)) : 0} 1`;
    }
    function schedule() {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    }
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    const observer = new ResizeObserver(schedule);
    observer.observe(anchorRef.current);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  return (
    <header className={`neon-navbar ${scrolled ? "is-scrolled" : ""}`}>
      <div className="neon-nav-shell">
        <a
          href="#inicio"
          className="neon-nav-brand"
          aria-label="Martin Jara · Inicio"
        >
          <span className="neon-brand-icon">M</span>
          <span className="neon-brand-name">
            Martin Jara<span>FULL STACK · AI & DATA</span>
          </span>
        </a>
        <div className="neon-nav-anchor" ref={anchorRef} aria-hidden="true" />
        <div className="neon-nav-actions">
          <button
            className="neon-nav-tool"
            onClick={toggleTheme}
            aria-label="Cambiar tema"
            title={en ? "Switch theme" : "Cambiar tema"}
          >
            <i
              id="theme-icon"
              className={`fa-solid ${dark ? "fa-sun" : "fa-moon"}`}
              aria-hidden="true"
            />
          </button>
          <button
            className="neon-nav-tool neon-language-tool"
            onClick={toggleLanguage}
            aria-label="Cambiar idioma"
            title={en ? "Switch language" : "Cambiar idioma"}
          >
            <i className="fa-solid fa-globe" aria-hidden="true" />
            <span id="lang-text">{en ? "ES" : "EN"}</span>
          </button>
          <a
            href="#contacto"
            className={`neon-nav-contact ${active === "contacto" ? "is-active" : ""}`}
            aria-label={en ? "Let’s work together" : "Trabajemos Juntos"}
            title={en ? "Let’s work together" : "Trabajemos Juntos"}
          >
            <span>{en ? "Let’s work together" : "Trabajemos Juntos"}</span>
            <i className="fa-solid fa-paper-plane" aria-hidden="true" />
          </a>
        </div>
        <div className="neon-nav-dock" ref={dockRef}>
          <nav
            className="neon-nav-links"
            aria-label={en ? "Main navigation" : "Navegación principal"}
          >
            {links.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`neon-nav-link ${active === item.id ? "is-active" : ""}`}
                aria-current={active === item.id ? "location" : undefined}
                onClick={() => setActive(item.id)}
              >
                <i className={`fa-solid fa-${item.icon}`} aria-hidden="true" />
                <span>{item[en ? "en" : "es"]}</span>
                <span className="nav-link-light" aria-hidden="true" />
              </a>
            ))}
          </nav>
          <div className="neon-reading-progress" aria-hidden="true">
            <span ref={progressRef} />
          </div>
        </div>
      </div>
    </header>
  );
}
