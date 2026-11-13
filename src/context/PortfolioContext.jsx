import { createContext, useContext, useEffect, useState } from "react";
import { translations } from "../data/content";

const PortfolioContext = createContext(null);

// The translation dictionary only uses line breaks, bold text and arrows.
// Build React nodes directly so translated text never injects HTML into the page.
function richText(text) {
  return text
    .split(/(<br\s*\/?>(?:\s*)|<strong>.*?<\/strong>)/gi)
    .map((part, index) => {
      if (/^<br/i.test(part)) return <br key={index} />;
      if (part.startsWith("<strong>"))
        return <strong key={index}>{part.slice(8, -9)}</strong>;
      return part.replaceAll("&rarr;", "→").replaceAll("&amp;", "&");
    });
}

export function PortfolioProvider({ children }) {
  const [language, setLanguage] = useState("es");
  const [dark, setDark] = useState(true);
  const [activeModal, setActiveModal] = useState(null);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);
  useEffect(() => {
    if (!activeModal) return;
    const onKey = (event) => {
      if (event.key === "Escape") setActiveModal(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeModal]);

  function openModal(id, data) {
    setActiveModal({
      id,
      github: data.github && data.github !== "#" ? data.github : null,
      site:
        data.siteAvailable === "true" && data.site && data.site !== "#"
          ? data.site
          : null,
    });
  }

  const value = {
    language,
    dark,
    activeModal,
    openModal,
    toggleLanguage: () =>
      setLanguage((current) => (current === "es" ? "en" : "es")),
    toggleTheme: () => setDark((current) => !current),
    closeModal: () => setActiveModal(null),
    translate: (key, fallback) =>
      language === "es" || !translations.en[key]
        ? fallback
        : richText(translations.en[key]),
  };
  return (
    <PortfolioContext.Provider value={value}>
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolio() {
  return useContext(PortfolioContext);
}
