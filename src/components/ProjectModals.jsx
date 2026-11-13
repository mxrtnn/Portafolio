import { usePortfolio } from "../context/PortfolioContext";

export default function ProjectModals() {
  const { dark, activeModal, closeModal } = usePortfolio();

  return (
    <>
      <div
        id="modal1"
        className={
          "fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm   transition-opacity duration-300" +
          (activeModal?.id === "modal1"
            ? " opacity-100"
            : " opacity-0 pointer-events-none")
        }
        onClick={(event) => {
          if (event.target === event.currentTarget) closeModal();
        }}
        role="dialog"
        aria-modal="true"
        aria-label="Detalles del proyecto"
        aria-hidden={activeModal?.id !== "modal1"}
        inert={activeModal?.id !== "modal1"}
      >
        <div
          id="modal-content-1"
          className="bg-cardLight dark:bg-cardDark w-full max-w-2xl rounded-3xl border border-blue-100 dark:border-gray-800 shadow-2xl transform scale-100 transition-transform duration-300 max-h-[90vh] flex flex-col"
        >
          <div className="bg-slate-100 dark:bg-gray-900 px-6 py-4 flex items-center justify-between border-b border-blue-100 dark:border-gray-800 rounded-t-3xl">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
              <span className="ml-4 text-xs text-slate-500 dark:text-gray-500 font-mono">
                {"duoc-desk-dara.exe"}
              </span>
            </div>
            <button
              onClick={closeModal}
              aria-label="Cerrar proyecto"
              className="text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors"
            >
              <i className="fa-solid fa-xmark text-lg"></i>
            </button>
          </div>
          <div className="p-6 md:p-8 overflow-y-auto flex-grow text-slate-700 dark:text-gray-300">
            <div className="w-full h-48 md:h-64 mb-6 overflow-hidden rounded-2xl border border-blue-100 dark:border-gray-800 bg-slate-100 dark:bg-gray-900">
              <img
                src="/assets/img/icono_duoc_negro.jpg"
                alt="Vista previa Duoc Desk"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">
              {"DUOC-DESK DARA"}
            </h3>
            <p className="text-xs font-bold text-accentBlue dark:text-accentLight tracking-wider uppercase mb-4">
              {"Sistema de Mesa de Ayuda internos"}
            </p>
            <div className="space-y-4 text-sm leading-relaxed">
              <p>
                {
                  "Duoc Desk Dara fue un proyecto realizado para optimizar la gestión de requerimientos y mesas de ayuda, implementando metodologías ágiles (Scrum) y un dashboard intuitivo para los usuarios."
                }
              </p>
            </div>
            <div className="mt-6">
              <h4 className="text-xs font-bold text-slate-400 dark:text-gray-500 uppercase tracking-widest mb-2">
                {"Tecnologías"}
              </h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-xs font-semibold rounded-md border border-orange-200 dark:border-orange-800/50">
                  {"HTML5"}
                </span>
                <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-yellow-400 text-xs font-semibold rounded-md border border-orange-200 dark:border-yellow-800/50">
                  {"JavaScript"}
                </span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-xs font-semibold rounded-md border border-green-200 dark:border-green-800/50">
                  {"Django"}
                </span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-blue-400 text-xs font-semibold rounded-md border border-green-200 dark:border-blue-800/50">
                  {"MySQL"}
                </span>
              </div>
            </div>
          </div>
          <div className="p-6 bg-slate-50 dark:bg-gray-900/40 border-t border-blue-100 dark:border-gray-800 rounded-b-3xl flex items-center justify-between gap-4">
            <a
              rel="noopener noreferrer"
              target="_blank"
              title="Ver Repositorio"
              href={activeModal?.github || undefined}
              className={
                "modal-github-link text-slate-500 hover:text-slate-800 dark:text-gray-400 dark:hover:text-white text-2xl transition-colors" +
                (activeModal?.github ? "" : " opacity-50 cursor-not-allowed")
              }
              aria-disabled={!activeModal?.github}
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href={activeModal?.site || undefined}
              className={
                "modal-site-link flex items-center justify-center gap-2 bg-transparent border-2 border-accentBlue dark:border-accentLight text-accentBlue dark:text-accentLight hover:bg-accentBlue hover:text-white dark:hover:bg-accentLight dark:hover:text-gray-900 px-6 py-2 rounded-full text-sm font-bold transition-all shadow-sm" +
                (activeModal?.site ? "" : " opacity-50 cursor-not-allowed")
              }
              aria-disabled={!activeModal?.site}
            >
              {activeModal?.site ? (
                <>
                  VER SITIO - PROYECTO{" "}
                  <i className="fa-solid fa-globe text-xs" />
                </>
              ) : (
                <>
                  SITIO NO DISPONIBLE <i className="fa-solid fa-lock text-xs" />
                </>
              )}
            </a>
          </div>
        </div>
      </div>
      <div
        id="modal2"
        className={
          "fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm   transition-opacity duration-300" +
          (activeModal?.id === "modal2"
            ? " opacity-100"
            : " opacity-0 pointer-events-none")
        }
        onClick={(event) => {
          if (event.target === event.currentTarget) closeModal();
        }}
        role="dialog"
        aria-modal="true"
        aria-label="Detalles del proyecto"
        aria-hidden={activeModal?.id !== "modal2"}
        inert={activeModal?.id !== "modal2"}
      >
        <div
          id="modal-content-2"
          className="bg-cardLight dark:bg-cardDark w-full max-w-2xl rounded-3xl border border-blue-100 dark:border-gray-800 shadow-2xl transform scale-100 transition-transform duration-300 max-h-[90vh] flex flex-col"
        >
          <div className="bg-slate-100 dark:bg-gray-900 px-6 py-4 flex items-center justify-between border-b border-blue-100 dark:border-gray-800 rounded-t-3xl">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
              <span className="ml-4 text-xs text-slate-500 dark:text-gray-500 font-mono">
                {"modelo-predictivo.py"}
              </span>
            </div>
            <button
              onClick={closeModal}
              aria-label="Cerrar proyecto"
              className="text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors"
            >
              <i className="fa-solid fa-xmark text-lg"></i>
            </button>
          </div>
          <div className="p-6 md:p-8 overflow-y-auto flex-grow text-slate-700 dark:text-gray-300">
            <div className="w-full h-48 md:h-64 mb-6 overflow-hidden rounded-2xl border border-blue-100 dark:border-gray-800 bg-slate-100 dark:bg-gray-900">
              <img
                src="/assets/img/mystikal_ai_icon.jpg"
                alt="Vista previa IA"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">
              {"Mystikal-AI"}
            </h3>
            <p className="text-xs font-bold text-accentBlue dark:text-accentLight tracking-wider uppercase mb-4">
              {"Inteligencia Artifical & Integración de API's"}
            </p>
            <div className="space-y-4 text-sm leading-relaxed">
              <p>
                {
                  "Como parte del proyecto, se desarrolló un generador de imágenes mediante la integración de diversas tecnologías y servicios en la nube. La aplicación fue desarrollada utilizando Python, React, JavaScript y TypeScript, incorporando una base de datos MySQL administrada mediante TiDB Cloud. El frontend se encuentra alojado en Vercel, mientras que el backend está desplegado en Render. Además, se integró el motor de generación de imágenes FLUX 1.1 Pro para la creación de contenido mediante inteligencia artificial. Actualmente, el proyecto se encuentra en proceso de despliegue, configuración y optimización de sus distintos componentes, con el objetivo de disponer de una plataforma funcional y escalable."
                }
              </p>
            </div>
            <div className="mt-6">
              <h4 className="text-xs font-bold text-slate-400 dark:text-gray-500 uppercase tracking-widest mb-2">
                {"Tecnologías"}
              </h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-semibold rounded-md border border-blue-200 dark:border-blue-800/50">
                  {"Python"}
                </span>
                <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-xs font-semibold rounded-md border border-orange-200 dark:border-orange-800/50">
                  {"React"}
                </span>
                <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-xs font-semibold rounded-md border border-orange-200 dark:border-orange-800/50">
                  {"MySQL"}
                </span>
                <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 text-xs font-semibold rounded-md border border-yellow-200 dark:border-yellow-800/50">
                  {"JavaScript"}
                </span>
                <span className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-xs font-semibold rounded-md border border-red-200 dark:border-red-800/50">
                  {"TiDB-Cloud"}
                </span>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-xs font-semibold rounded-md border border-purple-200 dark:border-purple-800/50">
                  {"TypeScript"}
                </span>
              </div>
            </div>
          </div>
          <div className="p-6 bg-slate-50 dark:bg-gray-900/40 border-t border-blue-100 dark:border-gray-800 rounded-b-3xl flex items-center justify-between gap-4">
            <a
              rel="noopener noreferrer"
              target="_blank"
              title="Ver Repositorio"
              href={activeModal?.github || undefined}
              className={
                "modal-github-link text-slate-500 hover:text-slate-800 dark:text-gray-400 dark:hover:text-white text-2xl transition-colors" +
                (activeModal?.github ? "" : " opacity-50 cursor-not-allowed")
              }
              aria-disabled={!activeModal?.github}
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href={activeModal?.site || undefined}
              className={
                "modal-site-link flex items-center justify-center gap-2 bg-transparent border-2 border-accentBlue dark:border-accentLight text-accentBlue dark:text-accentLight hover:bg-accentBlue hover:text-white dark:hover:bg-accentLight dark:hover:text-gray-900 px-6 py-2 rounded-full text-sm font-bold transition-all shadow-sm" +
                (activeModal?.site ? "" : " opacity-50 cursor-not-allowed")
              }
              aria-disabled={!activeModal?.site}
            >
              {activeModal?.site ? (
                <>
                  VER SITIO - PROYECTO{" "}
                  <i className="fa-solid fa-globe text-xs" />
                </>
              ) : (
                <>
                  SITIO NO DISPONIBLE <i className="fa-solid fa-lock text-xs" />
                </>
              )}
            </a>
          </div>
        </div>
      </div>
      <div
        id="modal3"
        className={
          "fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm   transition-opacity duration-300" +
          (activeModal?.id === "modal3"
            ? " opacity-100"
            : " opacity-0 pointer-events-none")
        }
        onClick={(event) => {
          if (event.target === event.currentTarget) closeModal();
        }}
        role="dialog"
        aria-modal="true"
        aria-label="Detalles del proyecto"
        aria-hidden={activeModal?.id !== "modal3"}
        inert={activeModal?.id !== "modal3"}
      >
        <div
          id="modal-content-3"
          className="bg-cardLight dark:bg-cardDark w-full max-w-2xl rounded-3xl border border-blue-100 dark:border-gray-800 shadow-2xl transform scale-100 transition-transform duration-300 max-h-[90vh] flex flex-col"
        >
          <div className="bg-slate-100 dark:bg-gray-900 px-6 py-4 flex items-center justify-between border-b border-blue-100 dark:border-gray-800 rounded-t-3xl">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
              <span className="ml-4 text-xs text-slate-500 dark:text-gray-500 font-mono">
                {"kine-predict.web"}
              </span>
            </div>
            <button
              onClick={closeModal}
              aria-label="Cerrar proyecto"
              className="text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors"
            >
              <i className="fa-solid fa-xmark text-lg"></i>
            </button>
          </div>
          <div className="p-6 md:p-8 overflow-y-auto flex-grow text-slate-700 dark:text-gray-300">
            <div className="w-full h-48 md:h-64 mb-6 overflow-hidden rounded-2xl border border-blue-100 dark:border-gray-800 bg-slate-100 dark:bg-gray-900">
              <img
                src="/assets/img/logo_kinedict.png"
                onError={(event) => {
                  event.currentTarget.onerror = null;
                  event.currentTarget.src = "/assets/img/project-fallback.svg";
                }}
                alt="Vista previa Kinedict"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">
              {"KINEDICT | PAUSADO"}
            </h3>
            <p className="text-xs font-bold text-accentBlue dark:text-accentLight tracking-wider uppercase mb-4">
              {"Análisis del Índice Lesivo Deportivo"}
            </p>
            <div className="space-y-4 text-sm leading-relaxed">
              <p>
                {
                  "Plataforma web enfocada en predecir lesiones deportivas y calcular el índice lesivo de atletas mediante análisis de datos y cargas de entrenamiento."
                }
              </p>
            </div>
            <div className="mt-6">
              <h4 className="text-xs font-bold text-slate-400 dark:text-gray-500 uppercase tracking-widest mb-2">
                {"Tecnologías"}
              </h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-xs font-semibold rounded-md border border-orange-200 dark:border-orange-800/50">
                  {"HTML"}
                </span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-purple-400 text-xs font-semibold rounded-md border border-purple-200 dark:border-purple-800/50">
                  {"IA | ML"}
                </span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-xs font-semibold rounded-md border border-green-200 dark:border-green-800/50">
                  {"MySQL"}
                </span>
              </div>
            </div>
          </div>
          <div className="p-6 bg-slate-50 dark:bg-gray-900/40 border-t border-blue-100 dark:border-gray-800 rounded-b-3xl flex items-center justify-between gap-4">
            <a
              rel="noopener noreferrer"
              target="_blank"
              title="Ver Repositorio"
              href={activeModal?.github || undefined}
              className={
                "modal-github-link text-slate-500 hover:text-slate-800 dark:text-gray-400 dark:hover:text-white text-2xl transition-colors" +
                (activeModal?.github ? "" : " opacity-50 cursor-not-allowed")
              }
              aria-disabled={!activeModal?.github}
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href={activeModal?.site || undefined}
              className={
                "modal-site-link flex items-center justify-center gap-2 bg-transparent border-2 border-accentBlue dark:border-accentLight text-accentBlue dark:text-accentLight hover:bg-accentBlue hover:text-white dark:hover:bg-accentLight dark:hover:text-gray-900 px-6 py-2 rounded-full text-sm font-bold transition-all shadow-sm" +
                (activeModal?.site ? "" : " opacity-50 cursor-not-allowed")
              }
              aria-disabled={!activeModal?.site}
            >
              {activeModal?.site ? (
                <>
                  VER SITIO - PROYECTO{" "}
                  <i className="fa-solid fa-globe text-xs" />
                </>
              ) : (
                <>
                  SITIO NO DISPONIBLE <i className="fa-solid fa-lock text-xs" />
                </>
              )}
            </a>
          </div>
        </div>
      </div>
      <div
        id="modal4"
        className={
          "fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm   transition-opacity duration-300" +
          (activeModal?.id === "modal4"
            ? " opacity-100"
            : " opacity-0 pointer-events-none")
        }
        onClick={(event) => {
          if (event.target === event.currentTarget) closeModal();
        }}
        role="dialog"
        aria-modal="true"
        aria-label="Detalles del proyecto"
        aria-hidden={activeModal?.id !== "modal4"}
        inert={activeModal?.id !== "modal4"}
      >
        <div
          id="modal-content-4"
          className="bg-cardLight dark:bg-cardDark w-full max-w-2xl rounded-3xl border border-blue-100 dark:border-gray-800 shadow-2xl transform scale-100 transition-transform duration-300 max-h-[90vh] flex flex-col"
        >
          <div className="bg-slate-100 dark:bg-gray-900 px-6 py-4 flex items-center justify-between border-b border-blue-100 dark:border-gray-800 rounded-t-3xl">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
              <span className="ml-4 text-xs text-slate-500 dark:text-gray-500 font-mono">
                {"sweetbite_detalles.json"}
              </span>
            </div>
            <button
              onClick={closeModal}
              aria-label="Cerrar proyecto"
              className="text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors"
            >
              <i className="fa-solid fa-xmark text-lg"></i>
            </button>
          </div>
          <div className="p-6 md:p-8 overflow-y-auto flex-grow text-slate-700 dark:text-gray-300">
            <div className="w-full h-48 md:h-64 mb-6 overflow-hidden rounded-2xl border border-blue-100 dark:border-gray-800 bg-slate-100 dark:bg-gray-900">
              <img
                src="/assets/img/icono_sweet.png"
                onError={(event) => {
                  event.currentTarget.onerror = null;
                  event.currentTarget.src = "/assets/img/project-fallback.svg";
                }}
                alt="Vista previa SweetBite"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">
              {"SWEETBITE - PYME DE GALLETAS"}
            </h3>
            <p className="text-xs font-bold text-accentBlue dark:text-accentLight tracking-wider uppercase mb-4">
              {"Landing Page Comercial (2026)"}
            </p>
            <div className="space-y-4 text-sm leading-relaxed">
              <p>
                {
                  "Este proyecto esta en progreso para el diseño y desarrollo de una Landing Page estratégica y altamente optimizada para una pyme local de galletas caseras ubicada en **Quilpué**."
                }
              </p>
              <p>
                {
                  "Desarrollada durante este año 2026, la pagina esta siendo desarrollada para digitalizar el catálogo de productos de la pyme y agilizar el proceso de captación de pedidos, logrando cumplir exitosamente con las metas de conversión y ventas establecidas para abastecer a una panadería local de la zona."
                }
              </p>
            </div>
            <div className="mt-6">
              <h4 className="text-xs font-bold text-slate-400 dark:text-gray-500 uppercase tracking-widest mb-2">
                {"Tecnologías e Impacto"}
              </h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-xs font-semibold rounded-md border border-orange-200 dark:border-orange-800/50">
                  {"HTML5"}
                </span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-semibold rounded-md border border-blue-200 dark:border-blue-800/50">
                  {"TailwindCSS"}
                </span>
                <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-yellow-400 text-xs font-semibold rounded-md border border-orange-200 dark:border-yellow-800/50">
                  {"JavaScript"}
                </span>
                <span className="px-3 py-1 bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 text-xs font-semibold rounded-md border border-pink-200 dark:border-pink-800/50">
                  {"UI/UX Sales Design"}
                </span>
              </div>
            </div>
          </div>
          <div className="p-6 bg-slate-50 dark:bg-gray-900/40 border-t border-blue-100 dark:border-gray-800 rounded-b-3xl flex items-center justify-between gap-4">
            <a
              rel="noopener noreferrer"
              target="_blank"
              title="Ver Repositorio"
              href={activeModal?.github || undefined}
              className={
                "modal-github-link text-slate-500 hover:text-slate-800 dark:text-gray-400 dark:hover:text-white text-2xl transition-colors" +
                (activeModal?.github ? "" : " opacity-50 cursor-not-allowed")
              }
              aria-disabled={!activeModal?.github}
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href={activeModal?.site || undefined}
              className={
                "modal-site-link flex items-center justify-center gap-2 bg-transparent border-2 border-accentBlue dark:border-accentLight text-accentBlue dark:text-accentLight hover:bg-accentBlue hover:text-white dark:hover:bg-accentLight dark:hover:text-gray-900 px-6 py-2 rounded-full text-sm font-bold transition-all shadow-sm" +
                (activeModal?.site ? "" : " opacity-50 cursor-not-allowed")
              }
              aria-disabled={!activeModal?.site}
            >
              {activeModal?.site ? (
                <>
                  VER SITIO - PROYECTO{" "}
                  <i className="fa-solid fa-globe text-xs" />
                </>
              ) : (
                <>
                  SITIO NO DISPONIBLE <i className="fa-solid fa-lock text-xs" />
                </>
              )}
            </a>
          </div>
        </div>
      </div>
      <div
        id="modal5"
        className={
          "fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm   transition-opacity duration-300" +
          (activeModal?.id === "modal5"
            ? " opacity-100"
            : " opacity-0 pointer-events-none")
        }
        onClick={(event) => {
          if (event.target === event.currentTarget) closeModal();
        }}
        role="dialog"
        aria-modal="true"
        aria-label="Detalles del proyecto"
        aria-hidden={activeModal?.id !== "modal5"}
        inert={activeModal?.id !== "modal5"}
      >
        <div
          id="modal-content-5"
          className="bg-cardLight dark:bg-cardDark w-full max-w-2xl rounded-3xl border border-blue-100 dark:border-gray-800 shadow-2xl transform scale-100 transition-transform duration-300 max-h-[90vh] flex flex-col"
        >
          <div className="bg-slate-100 dark:bg-gray-900 px-6 py-4 flex items-center justify-between border-b border-blue-100 dark:border-gray-800 rounded-t-3xl">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
              <span className="ml-4 text-xs text-slate-500 dark:text-gray-500 font-mono">
                {"todofreakstore_architecture.wp"}
              </span>
            </div>
            <button
              onClick={closeModal}
              aria-label="Cerrar proyecto"
              className="text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors"
            >
              <i className="fa-solid fa-xmark text-lg"></i>
            </button>
          </div>
          <div className="p-6 md:p-8 overflow-y-auto flex-grow text-slate-700 dark:text-gray-300">
            <div className="w-full aspect-[2.74/1] mb-6 overflow-hidden rounded-2xl border border-blue-100 dark:border-gray-800 bg-slate-100 dark:bg-white-900">
              <img
                src="/assets/img/icono_tdfk.png"
                alt="Vista previa Todo Freak Store"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex items-center gap-3 mb-2 flex-wrap">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white">
                {"TODOFREAKSTORE | TIENDA"}
              </h3>
              <span className="px-2.5 py-0.5 bg-green-500/20 text-green-600 dark:text-green-400 text-[10px] font-extrabold uppercase rounded-full tracking-wider animate-pulse">
                {"Proyecto Actual"}
              </span>
            </div>
            <p className="text-xs font-bold text-accentBlue dark:text-accentLight tracking-wider uppercase mb-4">
              {"E-Commerce & SaaS"}
            </p>
            <div className="space-y-4 text-sm leading-relaxed">
              <p>
                {
                  "Actualmente, se encuentra en desarrollo el proyecto **Todo Freak Store**, una plataforma web de comercio electrónico (e-commerce) orientada a la comercialización de productos relacionados con el entretenimiento y los juegos, tales como cartas TCG, juegos de cartas, juegos de rol y juegos de mesa, entre otros. La plataforma utiliza un enfoque **omnicanal**, permitiendo centralizar y gestionar distintos procesos asociados al comercio electrónico desde un mismo sistema. Asimismo, el proyecto se encuentra desarrollado bajo un modelo **SaaS (Software as a Service)**, con una arquitectura orientada a ofrecer sus funcionalidades como un servicio web. En cuanto a las tecnologías utilizadas, el sistema emplea **Node.js y Django** principalmente para el desarrollo del backend, mientras que **Nginx** cumple funciones de servidor y comunicación entre los distintos componentes de la aplicación. Además, se incorporan servicios de **Cloudflare** para fortalecer la seguridad y protección de la plataforma. La infraestructura se encuentra desplegada en un **VPS de OVHcloud**, permitiendo administrar directamente los recursos y servicios necesarios para el funcionamiento de la aplicación. "
                }
              </p>
            </div>
            <div className="mt-6">
              <h4 className="text-xs font-bold text-slate-400 dark:text-gray-500 uppercase tracking-widest mb-2">
                {"Stack de Desarrollo"}
              </h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-xs font-semibold rounded-md border border-green-200 dark:border-green-800/50">
                  {"Django"}
                </span>
                <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 text-xs font-semibold rounded-md border border-yellow-200 dark:border-yellow-800/50">
                  {"Node.js"}
                </span>
                <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-xs font-semibold rounded-md border border-orange-200 dark:border-orange-800/50">
                  {"Cloudflare"}
                </span>
                <span className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-xs font-semibold rounded-md border border-red-200 dark:border-red-800/50">
                  {"Nginx"}
                </span>
                <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-xs font-semibold rounded-md border border-indigo-200 dark:border-indigo-800/50">
                  {"OVHcloud"}
                </span>
              </div>
            </div>
          </div>
          <div className="p-6 bg-slate-50 dark:bg-gray-900/40 border-t border-blue-100 dark:border-gray-800 rounded-b-3xl flex items-center justify-between gap-4">
            <a
              rel="noopener noreferrer"
              target="_blank"
              title="Ver Repositorio"
              href={activeModal?.github || undefined}
              className={
                "modal-github-link text-slate-500 hover:text-slate-800 dark:text-gray-400 dark:hover:text-white text-2xl transition-colors" +
                (activeModal?.github ? "" : " opacity-50 cursor-not-allowed")
              }
              aria-disabled={!activeModal?.github}
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href={activeModal?.site || undefined}
              className={
                "modal-site-link flex items-center justify-center gap-2 bg-transparent border-2 border-accentBlue dark:border-accentLight text-accentBlue dark:text-accentLight hover:bg-accentBlue hover:text-white dark:hover:bg-accentLight dark:hover:text-gray-900 px-6 py-2 rounded-full text-sm font-bold transition-all shadow-sm" +
                (activeModal?.site ? "" : " opacity-50 cursor-not-allowed")
              }
              aria-disabled={!activeModal?.site}
            >
              {activeModal?.site ? (
                <>
                  VER SITIO - PROYECTO{" "}
                  <i className="fa-solid fa-globe text-xs" />
                </>
              ) : (
                <>
                  SITIO NO DISPONIBLE <i className="fa-solid fa-lock text-xs" />
                </>
              )}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
