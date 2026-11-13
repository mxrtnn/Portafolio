import { usePortfolio } from "../context/PortfolioContext";

export default function Navbar() {
  const { language, translate, toggleLanguage, dark, toggleTheme } =
    usePortfolio();

  return (
    <>
      <nav className="flex justify-between items-center px-6 md:px-10 py-6 max-w-7xl mx-auto">
        <div className="text-xl font-bold flex items-center gap-2 relative z-20">
          <span className="bg-accentBlue text-white p-1 rounded shadow-md">
            {"M"}
          </span>
          {" Martin Jara "}
        </div>
        <div className="hidden md:flex items-center space-x-8 text-sm font-bold text-slate-600 dark:text-gray-300 bg-white/60 dark:bg-[#16233d]/80 backdrop-blur-md px-8 py-3 rounded-full border border-blue-100 dark:border-gray-700/50 shadow-sm relative z-20">
          <a
            href="#inicio"
            className="hover:text-accentBlue dark:hover:text-white transition-colors"
            data-lang="nav_home"
          >
            {translate("nav_home", <>{"Inicio"}</>)}
          </a>
          <a
            href="#perfil"
            className="hover:text-accentBlue dark:hover:text-white transition-colors"
            data-lang="nav_profile"
          >
            {translate("nav_profile", <>{"Perfil"}</>)}
          </a>
          <a
            href="#experiencia"
            className="hover:text-accentBlue dark:hover:text-white transition-colors"
            data-lang="nav_exp"
          >
            {translate("nav_exp", <>{"Experiencia"}</>)}
          </a>
          <a
            href="#proyectos"
            className="hover:text-accentBlue dark:hover:text-white transition-colors"
            data-lang="nav_projects"
          >
            {translate("nav_projects", <>{"Proyectos"}</>)}
          </a>
        </div>
        <div className="flex items-center gap-4 md:gap-6 relative z-20">
          <button
            onClick={toggleTheme}
            className="text-slate-600 dark:text-gray-300 hover:text-accentBlue dark:hover:text-white transition-colors"
            aria-label="Cambiar tema"
          >
            <i
              id="theme-icon"
              className={`fa-solid ${dark ? "fa-sun" : "fa-moon"} text-xl`}
            ></i>
          </button>
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 text-slate-600 dark:text-gray-300 hover:text-accentBlue dark:hover:text-white transition-colors"
            aria-label="Cambiar idioma"
          >
            <i className="fa-solid fa-globe text-xl"></i>
            <span
              id="lang-text"
              className="text-xs font-bold tracking-widest hidden sm:inline-block"
            >
              {language === "es" ? "EN" : "ES"}
            </span>
          </button>
          <a
            href="#contacto"
            className="bg-accentBlue hover:bg-blue-700 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-md shadow-blue-500/20 hover:shadow-blue-500/40 transition-all hidden md:block hover:-translate-y-0.5"
            data-lang="nav_contact"
          >
            {translate("nav_contact", <>{" Trabajemos Juntos "}</>)}
          </a>
        </div>
      </nav>
    </>
  );
}
