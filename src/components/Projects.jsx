import { usePortfolio } from "../context/PortfolioContext";

export default function Projects() {
  const { translate, dark, openModal } = usePortfolio();

  return (
    <>
      <section data-page-surface
        id="proyectos"
        className="py-16 md:py-24 transition-colors duration-500"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center lg:text-left mb-12">
            <p
              className="text-accentBlue dark:text-accentLight tracking-widest text-xs font-semibold mb-3"
              data-lang="work_sub"
            >
              {translate("work_sub", <>{" MI TRABAJO "}</>)}
            </p>
            <h2
              className="text-3xl md:text-4xl font-extrabold text-slate-800 dark:text-white"
              data-lang="work_heading"
            >
              {translate("work_heading", <>{" PROYECTOS RECIENTES "}</>)}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              onClick={(event) =>
                openModal("modal1", event.currentTarget.dataset)
              }
              role="button"
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  openModal("modal1", event.currentTarget.dataset);
                }
              }}
              data-github="https://github.com/gustavogongora-dev/duocdesk-django"
              data-site="https://github.com/gustavogongora-dev/duocdesk-django"
              data-site-available="false"
              className="cursor-pointer bg-cardLight dark:bg-cardDark rounded-xl overflow-hidden border border-blue-100 dark:border-gray-700 shadow-xl hover:-translate-y-2 transition duration-300 flex flex-col group"
            >
              <div className="bg-slate-100 dark:bg-gray-900 px-4 py-3 flex items-center gap-2 border-b border-blue-100 dark:border-gray-800">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                <div className="ml-4 text-xs text-slate-500 dark:text-gray-500 font-mono">
                  {"duoc-desk-dara.exe"}
                </div>
              </div>
              <div className="h-48 bg-slate-200 dark:bg-gray-800 overflow-hidden relative border-b border-blue-100 dark:border-gray-800">
                <img
                  src="/assets/img/icono_duoc_negro.jpg"
                  alt="Duoc Desk Dara Funcionado"
                  className="w-full h-full object-cover opacity-90 dark:opacity-80 group-hover:opacity-100 transition group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-accentBlue/0 group-hover:bg-accentBlue/20 transition duration-300 flex items-center justify-center">
                  <i className="fa-solid fa-expand text-white text-3xl opacity-0 group-hover:opacity-100 transition transform scale-50 group-hover:scale-100"></i>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-3 text-slate-800 dark:text-white">
                  {"DUOC-DESK DARA"}
                </h3>
                <p
                  className="text-sm text-slate-600 dark:text-textSubDark mb-6 flex-grow line-clamp-3"
                  data-lang="proj1_desc"
                >
                  {translate(
                    "proj1_desc",
                    <>
                      {
                        "Duoc Desk Dara fue un proyecto realizado para optimizar la gestión de requerimientos y mesas de ayuda, implementando metodologías ágiles (Scrum) y un dashboard intuitivo para los usuarios."
                      }
                    </>,
                  )}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
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
            <div
              onClick={(event) =>
                openModal("modal2", event.currentTarget.dataset)
              }
              role="button"
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  openModal("modal2", event.currentTarget.dataset);
                }
              }}
              data-github="https://github.com/mxrtnn/mystikal-ai"
              data-site="https://mystikal-ai.vercel.app/"
              data-site-available="true"
              className="cursor-pointer bg-cardLight dark:bg-cardDark rounded-xl overflow-hidden border border-blue-100 dark:border-gray-700 shadow-xl hover:-translate-y-2 transition duration-300 flex flex-col group"
            >
              <div className="bg-slate-100 dark:bg-gray-900 px-4 py-3 flex items-center gap-2 border-b border-blue-100 dark:border-gray-800">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                <div className="ml-4 text-xs text-slate-500 dark:text-gray-500 font-mono">
                  {"mystikal.vercel.app"}
                </div>
              </div>
              <div className="h-48 bg-slate-200 dark:bg-gray-800 overflow-hidden relative border-b border-blue-100 dark:border-gray-800">
                <img
                  src="/assets/img/mystikal_ai_icon.jpg"
                  alt="Proyecto 2"
                  className="w-full h-full object-cover opacity-90 dark:opacity-80 group-hover:opacity-100 transition group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-accentBlue/0 group-hover:bg-accentBlue/20 transition duration-300 flex items-center justify-center">
                  <i className="fa-solid fa-expand text-white text-3xl opacity-0 group-hover:opacity-100 transition transform scale-50 group-hover:scale-100"></i>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-3 text-slate-800 dark:text-white">
                  {"MYSTIKAL-AI | GENERADOR"}
                </h3>
                <p
                  className="text-sm text-slate-600 dark:text-textSubDark mb-6 flex-grow line-clamp-3"
                  data-lang="proj2_desc"
                >
                  {translate(
                    "proj2_desc",
                    <>
                      {
                        " Generador de imágenes con motor FLUX 1.1 PRO con integración de React y base de datos MySQL. "
                      }
                    </>,
                  )}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
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
            <div
              onClick={(event) =>
                openModal("modal3", event.currentTarget.dataset)
              }
              role="button"
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  openModal("modal3", event.currentTarget.dataset);
                }
              }}
              data-github="https://github.com/mxrtnn/Kinedict"
              data-site="https://kinedict.vercel.app"
              data-site-available="true"
              className="cursor-pointer bg-cardLight dark:bg-cardDark rounded-xl overflow-hidden border border-blue-100 dark:border-gray-700 shadow-xl hover:-translate-y-2 transition duration-300 flex flex-col group"
            >
              <div className="bg-slate-100 dark:bg-gray-900 px-4 py-3 flex items-center gap-2 border-b border-blue-100 dark:border-gray-800">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                <div className="ml-4 text-xs text-slate-500 dark:text-gray-500 font-mono">
                  {"kine-predict.web"}
                </div>
              </div>
              <div className="h-48 bg-slate-200 dark:bg-gray-800 overflow-hidden relative border-b border-blue-100 dark:border-gray-800">
                <img
                  src="/assets/img/logo_kinedict.png"
                  onError={(event) => {
                    event.currentTarget.onerror = null;
                    event.currentTarget.src =
                      "/assets/img/project-fallback.svg";
                  }}
                  alt="Proyecto 3"
                  className="w-full h-full object-cover opacity-90 dark:opacity-80 group-hover:opacity-100 transition group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-accentBlue/0 group-hover:bg-accentBlue/20 transition duration-300 flex items-center justify-center">
                  <i className="fa-solid fa-expand text-white text-3xl opacity-0 group-hover:opacity-100 transition transform scale-50 group-hover:scale-100"></i>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3
                  className="text-xl font-bold mb-3 text-slate-800 dark:text-white"
                  data-lang="proj3_title"
                >
                  {translate("proj3_title", <>{"KINEDICT | PAUSADO"}</>)}
                </h3>
                <p
                  className="text-sm text-slate-600 dark:text-textSubDark mb-6 flex-grow line-clamp-3"
                  data-lang="proj3_desc"
                >
                  {translate(
                    "proj3_desc",
                    <>
                      {
                        "Plataforma web enfocada en predecir lesiones deportivas y calcular el índice lesivo de atletas mediante análisis de datos y cargas de entrenamiento."
                      }
                    </>,
                  )}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
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
            <div
              onClick={(event) =>
                openModal("modal4", event.currentTarget.dataset)
              }
              role="button"
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  openModal("modal4", event.currentTarget.dataset);
                }
              }}
              data-github="https://github.com/mxrtnn/SweetBiteWP"
              data-site="https://sweetbite-quilpue.base44.app"
              data-site-available="true"
              className="cursor-pointer bg-cardLight dark:bg-cardDark rounded-xl overflow-hidden border border-blue-100 dark:border-gray-700 shadow-xl hover:-translate-y-2 transition duration-300 flex flex-col group"
            >
              <div className="bg-slate-100 dark:bg-gray-900 px-4 py-3 flex items-center gap-2 border-b border-blue-100 dark:border-gray-800">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                <div className="ml-4 text-xs text-slate-500 dark:text-gray-500 font-mono">
                  {"sweetbite_page.html"}
                </div>
              </div>
              <div className="h-48 bg-slate-200 dark:bg-gray-800 overflow-hidden relative border-b border-blue-100 dark:border-gray-800">
                <img
                  src="/assets/img/icono_sweet.png"
                  onError={(event) => {
                    event.currentTarget.onerror = null;
                    event.currentTarget.src =
                      "/assets/img/project-fallback.svg";
                  }}
                  alt="SweetBite Pyme"
                  className="w-full h-full object-cover opacity-90 dark:opacity-80 group-hover:opacity-100 transition group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-accentBlue/0 group-hover:bg-accentBlue/20 transition duration-300 flex items-center justify-center">
                  <i className="fa-solid fa-expand text-white text-3xl opacity-0 group-hover:opacity-100 transition transform scale-50 group-hover:scale-100"></i>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3
                  className="text-xl font-bold mb-3 text-slate-800 dark:text-white"
                  data-lang="proj4_title"
                >
                  {translate("proj4_title", <>{"SWEETBITE - EN PROGRESO"}</>)}
                </h3>
                <p
                  className="text-sm text-slate-600 dark:text-textSubDark mb-6 flex-grow line-clamp-3"
                  data-lang="proj4_desc"
                >
                  {translate(
                    "proj4_desc",
                    <>
                      {
                        " Landing Page comercial estratégica y optimizada para una pyme de galletas caseras en Quilpué, automatizando el catálogo y la captación de pedidos locales. "
                      }
                    </>,
                  )}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-xs font-semibold rounded-md border border-orange-200 dark:border-orange-800/50">
                    {"HTML5"}
                  </span>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-semibold rounded-md border border-blue-200 dark:border-blue-800/50">
                    {"TailwindCSS"}
                  </span>
                  <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-yellow-400 text-xs font-semibold rounded-md border border-orange-200 dark:border-yellow-800/50">
                    {"JavaScript"}
                  </span>
                </div>
              </div>
            </div>
            <div
              onClick={(event) =>
                openModal("modal5", event.currentTarget.dataset)
              }
              role="button"
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  openModal("modal5", event.currentTarget.dataset);
                }
              }}
              data-github="#"
              data-site="#"
              data-site-available="false"
              className="cursor-pointer bg-cardLight dark:bg-cardDark rounded-xl overflow-hidden border border-blue-100 dark:border-gray-700 shadow-xl hover:-translate-y-2 transition duration-300 flex flex-col group"
            >
              <div className="bg-slate-100 dark:bg-gray-900 px-4 py-3 flex items-center gap-2 border-b border-blue-100 dark:border-gray-800">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                <div className="ml-4 text-xs text-slate-500 dark:text-gray-500 font-mono">
                  {"todofreakstore.com"}
                </div>
              </div>
              <div className="aspect-[2.74/1] bg-slate-200 light:bg-white-900 overflow-hidden relative border-b border-blue-100 dark:border-gray-800">
                <img
                  src="/assets/img/icono_tdfk.png"
                  alt="Todo Freak Store"
                  className="w-full h-full object-contain opacity-90 dark:opacity-80 group-hover:opacity-100 transition group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-accentBlue/0 group-hover:bg-accentBlue/20 transition duration-300 flex items-center justify-center">
                  <i className="fa-solid fa-expand text-white text-3xl opacity-0 group-hover:opacity-100 transition transform scale-50 group-hover:scale-100"></i>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3
                  className="text-xl font-bold mb-3 text-slate-800 dark:text-white"
                  data-lang="proj5_title"
                >
                  {translate("proj5_title", <>{"TODOFREAKSTORE | TIENDA"}</>)}
                </h3>
                <p
                  className="text-sm text-slate-600 dark:text-textSubDark mb-6 flex-grow line-clamp-3"
                  data-lang="proj5_desc"
                >
                  {translate(
                    "proj5_desc",
                    <>
                      {
                        " Actualmente, se encuentra en desarrollo el proyecto Todo Freak Store, una plataforma web de comercio electrónico (e-commerce) orientada a la comercialización de productos relacionados con el entretenimiento y los juegos de mesa. "
                      }
                    </>,
                  )}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
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
          </div>
        </div>
      </section>
    </>
  );
}
