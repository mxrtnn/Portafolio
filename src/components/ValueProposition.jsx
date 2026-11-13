import { usePortfolio } from "../context/PortfolioContext";
import { useState } from "react";
import { useCodeTyping } from "../hooks/useCodeTyping";

export default function ValueProposition() {
  const { translate, dark } = usePortfolio();
  const [activeTab, setActiveTab] = useState("escalabilidad");
  const codeHtml = useCodeTyping(activeTab);
  return (
    <>
      <section data-page-surface
        id="propuesta-valor"
        className="bg-white dark:bg-darkBg py-16 md:py-24 transition-colors duration-500 relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-400/10 dark:bg-blue-600/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 -left-24 w-72 h-72 bg-accentBlue/5 dark:bg-accentLight/5 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <p
              className="text-accentBlue dark:text-accentLight tracking-widest text-xs font-bold mb-3 uppercase"
              data-lang="value_sub"
            >
              {translate("value_sub", <>{" ¿Por qué elegirme? "}</>)}
            </p>
            <h2
              className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-800 dark:text-white mb-4 leading-tight"
              data-lang="value_heading"
            >
              {translate(
                "value_heading",
                <>{" EL IMPULSO QUE TU EMPRESA NECESITA "}</>,
              )}
            </h2>
            <p
              className="text-slate-600 dark:text-gray-400 text-sm md:text-base font-medium max-w-2xl mx-auto"
              data-lang="value_desc"
            >
              {translate(
                "value_desc",
                <>
                  {
                    " Combino desarrollo técnico de alto nivel con visión estratégica. No solo escribo código; diseño soluciones orientadas a resolver problemas reales, optimizar tus recursos y acelerar tu llegada al mercado. "
                  }
                </>,
              )}
            </p>
          </div>
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
            <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="group bg-blue-50 dark:bg-cardDark p-6 rounded-2xl border border-blue-100 dark:border-gray-800 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10 flex flex-col items-center text-center h-full justify-center">
                <div className="w-14 h-14 bg-white dark:bg-[#16233d] rounded-full flex items-center justify-center shadow-md mb-4 border border-blue-50 dark:border-gray-700">
                  <i
                    className="fa-solid fa-laptop-code text-2xl text-accentBlue dark:text-accentLight fa-beat"
                    style={{ "--fa-animation-duration": "2.5s" }}
                    aria-hidden="true"
                  ></i>
                </div>
                <h3
                  className="text-lg font-bold text-slate-800 dark:text-white mb-2"
                  data-lang="val1_title"
                >
                  {translate("val1_title", <>{"Desarrollo Escalable"}</>)}
                </h3>
                <p
                  className="text-slate-600 dark:text-gray-400 text-sm font-medium italic"
                  data-lang="val1_sub"
                >
                  {translate(
                    "val1_sub",
                    <>{"¿Tu software actual frena tu crecimiento?"}</>,
                  )}
                </p>
              </div>
              <div className="group bg-blue-50 dark:bg-cardDark p-6 rounded-2xl border border-blue-100 dark:border-gray-800 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10 flex flex-col items-center text-center h-full justify-center">
                <div className="w-14 h-14 bg-white dark:bg-[#16233d] rounded-full flex items-center justify-center shadow-md mb-4 border border-blue-50 dark:border-gray-700">
                  <i
                    className="fa-solid fa-network-wired text-2xl text-accentBlue dark:text-accentLight fa-fade"
                    style={{ "--fa-animation-duration": "2s" }}
                    aria-hidden="true"
                  ></i>
                </div>
                <h3
                  className="text-lg font-bold text-slate-800 dark:text-white mb-2"
                  data-lang="val2_title"
                >
                  {translate("val2_title", <>{"IA & Ciencia de Datos"}</>)}
                </h3>
                <p
                  className="text-slate-600 dark:text-gray-400 text-sm font-medium italic"
                  data-lang="val2_sub"
                >
                  {translate(
                    "val2_sub",
                    <>{"¿Tomas decisiones corporativas a ciegas?"}</>,
                  )}
                </p>
              </div>
              <div className="group bg-blue-50 dark:bg-cardDark p-6 rounded-2xl border border-blue-100 dark:border-gray-800 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10 flex flex-col items-center text-center h-full justify-center">
                <div className="w-14 h-14 bg-white dark:bg-[#16233d] rounded-full flex items-center justify-center shadow-md mb-4 border border-blue-50 dark:border-gray-700">
                  <i
                    className="fa-solid fa-users-gear text-2xl text-accentBlue dark:text-accentLight fa-spin"
                    style={{ "--fa-animation-duration": "4s" }}
                    aria-hidden="true"
                  ></i>
                </div>
                <h3
                  className="text-lg font-bold text-slate-800 dark:text-white mb-2"
                  data-lang="val3_title"
                >
                  {translate("val3_title", <>{"Gestión Ágil"}</>)}
                </h3>
                <p
                  className="text-slate-600 dark:text-gray-400 text-sm font-medium italic"
                  data-lang="val3_sub"
                >
                  {translate(
                    "val3_sub",
                    <>{"¿Proyectos fuera de presupuesto o plazo?"}</>,
                  )}
                </p>
              </div>
              <div className="group bg-blue-50 dark:bg-cardDark p-6 rounded-2xl border border-blue-100 dark:border-gray-800 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10 flex flex-col items-center text-center h-full justify-center">
                <div className="w-14 h-14 bg-white dark:bg-[#16233d] rounded-full flex items-center justify-center shadow-md mb-4 border border-blue-50 dark:border-gray-700">
                  <i
                    className="fa-solid fa-rocket text-2xl text-accentBlue dark:text-accentLight fa-bounce"
                    style={{ "--fa-animation-duration": "3s" }}
                    aria-hidden="true"
                  ></i>
                </div>
                <h3
                  className="text-lg font-bold text-slate-800 dark:text-white mb-2"
                  data-lang="val4_title"
                >
                  {translate("val4_title", <>{"Creación de MVP"}</>)}
                </h3>
                <p
                  className="text-slate-600 dark:text-gray-400 text-sm font-medium italic"
                  data-lang="val4_sub"
                >
                  {translate(
                    "val4_sub",
                    <>{"¿Inviertes sin validar el mercado real?"}</>,
                  )}
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 relative">
              <div className="absolute inset-0 bg-accentBlue/20 dark:bg-accentLight/10 blur-[80px] rounded-full"></div>
              <div className="flex justify-center md:justify-start mb-3 relative z-10 pl-2">
                <span className="text-[11px] font-bold tracking-wide text-accentBlue dark:text-accentLight bg-blue-100/80 dark:bg-blue-900/40 px-3 py-1 rounded-full animate-bounce shadow-sm border border-blue-200 dark:border-blue-800">
                  {" Presiona una pestaña "}
                </span>
              </div>
              <div className="editor-container w-full relative z-10 mx-auto">
                <div className="editor-tabs">
                  <button
                    className={
                      "tab-btn" +
                      (activeTab === "escalabilidad" ? " active" : "")
                    }
                    onClick={() => setActiveTab("escalabilidad")}
                    aria-pressed={activeTab === "escalabilidad"}
                  >
                    {"escalabilidad.ts"}
                  </button>
                  <button
                    className={
                      "tab-btn" + (activeTab === "ia_datos" ? " active" : "")
                    }
                    onClick={() => setActiveTab("ia_datos")}
                    aria-pressed={activeTab === "ia_datos"}
                  >
                    {"modelos_ia.py"}
                  </button>
                  <button
                    className={
                      "tab-btn" + (activeTab === "agilidad" ? " active" : "")
                    }
                    onClick={() => setActiveTab("agilidad")}
                    aria-pressed={activeTab === "agilidad"}
                  >
                    {"scrum.yml"}
                  </button>
                  <button
                    className={
                      "tab-btn" + (activeTab === "mvp" ? " active" : "")
                    }
                    onClick={() => setActiveTab("mvp")}
                    aria-pressed={activeTab === "mvp"}
                  >
                    {"mvp_build.jsx"}
                  </button>
                </div>
                <div className="editor-content">
                  <pre>
                    <code
                      id="typing-output"
                      dangerouslySetInnerHTML={{ __html: codeHtml }}
                    ></code>
                    <span className="typed-cursor">{"|"}</span>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
