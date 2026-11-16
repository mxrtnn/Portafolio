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
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef(null);
  const toggleRef = useRef(null);
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
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    function onKey(event) {
      if (event.key === "Escape") {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    }
    function onOutside(event) {
      if (!headerRef.current?.contains(event.target)) setMenuOpen(false);
    }
    window.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onOutside);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onOutside);
    };
  }, [menuOpen]);

  function navigate(id) {
    setActive(id);
    setMenuOpen(false);
  }
  function navLink(item) {
    return (
      <a
        key={item.id}
        href={`#${item.id}`}
        className={`neon-nav-link ${active === item.id ? "is-active" : ""}`}
        aria-current={active === item.id ? "location" : undefined}
        onClick={() => navigate(item.id)}
      >
        <i className={`fa-solid fa-${item.icon}`} aria-hidden="true" />
        <span>{item[en ? "en" : "es"]}</span>
        <span className="nav-link-light" aria-hidden="true" />
      </a>
    );
  }

  return (
    <header
      ref={headerRef}
      className={`neon-navbar ${scrolled ? "is-scrolled" : ""}`}
    >
      <div className="neon-nav-shell">
        <a
          href="#inicio"
          className="neon-nav-brand"
          onClick={() => navigate("inicio")}
          aria-label="Martin Jara · Inicio"
        >
          <span className="neon-brand-icon">M</span>
          <span className="neon-brand-name">
            Martin Jara<span>FULL STACK · AI & DATA</span>
          </span>
        </a>
        <span className="neon-nav-divider" aria-hidden="true" />
        <nav
          className="neon-nav-links"
          aria-label={en ? "Main navigation" : "Navegación principal"}
        >
          {links.map(navLink)}
        </nav>
        <span
          className="neon-nav-divider neon-nav-divider-end"
          aria-hidden="true"
        />
        <div className="neon-nav-actions">
          <button
            className="neon-nav-tool"
            onClick={toggleTheme}
            aria-label="Cambiar tema"
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
          >
            <i className="fa-solid fa-globe" aria-hidden="true" />
            <span id="lang-text">{en ? "ES" : "EN"}</span>
          </button>
          <a
            href="#contacto"
            className={`neon-nav-contact ${active === "contacto" ? "is-active" : ""}`}
            onClick={() => navigate("contacto")}
          >
            <span>{en ? "Let’s work together" : "Trabajemos Juntos"}</span>
            <i className="fa-solid fa-paper-plane" aria-hidden="true" />
          </a>
          <button
            ref={toggleRef}
            className={`neon-menu-toggle ${menuOpen ? "is-open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="neon-mobile-menu"
            aria-label={en ? "Navigation menu" : "Menú de navegación"}
          >
            <span />
            <span />
          </button>
        </div>
        <div className="neon-reading-progress" aria-hidden="true">
          <span ref={progressRef} />
        </div>
        <div
          className={`neon-mobile-menu ${menuOpen ? "is-open" : ""}`}
          id="neon-mobile-menu"
          inert={!menuOpen}
          aria-hidden={!menuOpen}
        >
          <div className="neon-mobile-clip">
            <nav aria-label={en ? "Mobile navigation" : "Navegación móvil"}>
              {links.map(navLink)}
              <a
                href="#contacto"
                className={`neon-nav-link ${active === "contacto" ? "is-active" : ""}`}
                onClick={() => navigate("contacto")}
              >
                <i className="fa-solid fa-paper-plane" aria-hidden="true" />
                <span>{en ? "Contact" : "Contacto"}</span>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
