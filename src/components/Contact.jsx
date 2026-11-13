import { usePortfolio } from "../context/PortfolioContext";
import { useEffect, useState } from "react";
import { priceDatabase } from "../data/pricing";

const complexityStates = {
  1: {
    text: "Básico",
    colorClass: "bg-blue-950/60 border-blue-800/50 text-blue-400",
  },
  2: {
    text: "Intermedio (Escalable)",
    colorClass: "bg-amber-950/60 border-amber-800/50 text-amber-400",
  },
  3: {
    text: "Avanzado (SaaS / IA Core)",
    colorClass: "bg-purple-950/60 border-purple-800/50 text-purple-400",
  },
};

export default function Contact() {
  const { translate } = usePortfolio();
  const [projectType, setProjectType] = useState("");
  const [complexity, setComplexity] = useState("1");
  const [pricesOpen, setPricesOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const pricing = priceDatabase[projectType] || priceDatabase.Otro;
  useEffect(() => {
    if (!pricesOpen) return;
    const onKey = (event) => {
      if (event.key === "Escape") setPricesOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [pricesOpen]);
  function handleSubmit(event) {
    if (!event.currentTarget.checkValidity()) return;
    setSubmitting(true);
  }

  return (
    <>
      <section data-page-surface
        id="contacto"
        className="relative py-16 md:py-24 overflow-hidden transition-colors duration-500 bg-slate-900 border-t border-slate-800"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-60"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse"
          style={{ animationDuration: "4s" }}
        ></div>
        <div className="relative max-w-3xl mx-auto px-6 z-10">
          <div className="text-center mb-12">
            <p className="text-blue-400 tracking-widest text-xs font-semibold mb-3 flex items-center justify-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping"></span>
              {" [ DEPLOY_YOUR_IDEA ] "}
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              {" COTIZA TU PROYECTO "}
            </h2>
            <p className="text-sm text-slate-400 mt-2 max-w-lg mx-auto font-mono">
              {" // Los valores varían según la complejidad del proyecto "}
            </p>
          </div>
          <div className="bg-slate-950/80 backdrop-blur-xl rounded-3xl border border-slate-800 shadow-[0_0_50px_rgba(37,99,235,0.1)] overflow-hidden transform hover:scale-[1.01] transition-all duration-300">
            <div className="bg-slate-900/90 px-6 py-4 flex items-center justify-between border-b border-slate-800">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                <span className="ml-4 text-xs text-blue-400/80 font-mono">
                  {"setup-project.sh"}
                </span>
              </div>
              <div className="text-xs font-mono text-slate-500 flex items-center gap-1">
                <i className="fa-solid fa-brain text-purple-400 animate-pulse"></i>
                {" AI_READY "}
              </div>
            </div>
            <form
              action="https://formspree.io/f/maqzyayy"
              method="POST"
              id="projectForm"
              className="p-6 md:p-10 space-y-6"
              onSubmit={handleSubmit}
            >
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="block text-xs font-bold text-slate-400 uppercase tracking-wider font-mono"
                >
                  {" >_ Tu Nombre / Empresa "}
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-slate-500">
                    <i className="fa-solid fa-user text-sm"></i>
                  </span>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    autoComplete="off"
                    placeholder="Ej. Juan Pérez"
                    className="w-full pl-11 pr-4 py-3 bg-slate-900/50 border border-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-slate-600 transition-all duration-300"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-xs font-bold text-slate-400 uppercase tracking-wider font-mono"
                  >
                    {" >_ Correo Electrónico "}
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-slate-500">
                      <i className="fa-solid fa-envelope text-sm"></i>
                    </span>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      autoComplete="email"
                      placeholder="contacto@empresa.com"
                      className="w-full pl-11 pr-4 py-3 bg-slate-900/50 border border-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-slate-600 transition-all duration-300"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="phone"
                    className="block text-xs font-bold text-slate-400 uppercase tracking-wider font-mono"
                  >
                    {" >_ WhatsApp / Teléfono "}
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-slate-500">
                      <i className="fa-brands fa-whatsapp text-sm"></i>
                    </span>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      autoComplete="tel"
                      placeholder="+56 9 1234 5678"
                      className="w-full pl-11 pr-4 py-3 bg-slate-900/50 border border-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-slate-600 transition-all duration-300"
                    />
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="project_type"
                  className="block text-xs font-bold text-slate-400 uppercase tracking-wider font-mono"
                >
                  {" >_ Idea de Proyecto "}
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-slate-500">
                    <i className="fa-solid fa-lightbulb text-sm"></i>
                  </span>
                  <select
                    id="project_type"
                    name="project_type"
                    required
                    className="w-full pl-11 pr-4 py-3 bg-slate-900/50 border border-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white transition-all duration-300 appearance-none cursor-pointer"
                    value={projectType}
                    onChange={(event) => setProjectType(event.target.value)}
                  >
                    <option value="" disabled className="text-slate-600">
                      {"Selecciona una opción"}
                    </option>
                    <option
                      value="Landing Page Comercial"
                      className="bg-slate-950"
                    >
                      {"Landing Page Comercial (Pyme)"}
                    </option>
                    <option
                      value="Plataforma Web / SaaS"
                      className="bg-slate-950"
                    >
                      {"Plataforma Web Corporativa / SaaS"}
                    </option>
                    <option
                      value="Modelo de Inteligencia Artificial"
                      className="bg-slate-950"
                    >
                      {"Modelo Predictivo / IA"}
                    </option>
                    <option
                      value="E-commerce / Tienda Online"
                      className="bg-slate-950"
                    >
                      {"E-commerce / Tienda Online"}
                    </option>
                    <option value="Otro" className="bg-slate-950">
                      {"Otro requerimiento a medida"}
                    </option>
                  </select>
                  <span className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-slate-500">
                    <i className="fa-solid fa-chevron-down text-xs"></i>
                  </span>
                </div>
              </div>
              <div className="space-y-2 bg-slate-900/30 p-4 rounded-xl border border-slate-800/60">
                <div className="flex justify-between items-center mb-1">
                  <label
                    htmlFor="complexity"
                    className="text-xs font-bold text-slate-400 uppercase tracking-wider font-mono"
                  >
                    {" >_ Nivel de Complejidad "}
                  </label>
                  <span
                    id="complexity-badge"
                    className={`px-2.5 py-0.5 text-[11px] font-extrabold rounded-md uppercase tracking-wider border transition-all duration-300 ${complexityStates[complexity].colorClass}`}
                  >
                    {complexityStates[complexity].text}
                  </span>
                </div>
                <input
                  type="range"
                  id="complexity"
                  name="complexity"
                  min="1"
                  max="3"
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                  value={complexity}
                  onChange={(event) => setComplexity(event.target.value)}
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono pt-1">
                  <span>{"[1] MVP / Básico"}</span>
                  <span>{"[2] Intermedio"}</span>
                  <span>{"[3] Avanzado / SaaS"}</span>
                </div>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="block text-xs font-bold text-slate-400 uppercase tracking-wider font-mono"
                >
                  {" >_ Detalles del Requerimiento "}
                </label>
                <div className="relative">
                  <span className="absolute top-3 left-4 text-slate-500">
                    <i className="fa-solid fa-comment-dots text-sm"></i>
                  </span>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="4"
                    autoComplete="off"
                    placeholder="Describe integraciones de datos, flujos de usuario, automatizaciones..."
                    className="w-full pl-11 pr-4 py-3 bg-slate-900/50 border border-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-slate-600 transition-all duration-300 resize-none"
                  ></textarea>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <button
                  type="button"
                  id="openPricesBtn"
                  className="sm:w-1/3 flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-850 text-blue-400 border border-slate-800 hover:border-blue-500/50 font-bold px-4 py-4 rounded-xl shadow-md transition-all duration-300 group font-mono text-sm tracking-wide"
                  onClick={() => setPricesOpen(true)}
                >
                  <i className="fa-solid fa-robot text-xs text-purple-400 animate-bounce"></i>
                  <span>{"VER VALORES"}</span>
                </button>
                <button
                  type="submit"
                  id="submitBtn"
                  className="flex-1 flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-blue-900/20 hover:shadow-purple-900/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 group"
                  disabled={submitting}
                >
                  {submitting ? (
                    <span className="font-mono">SENDING_DATA...</span>
                  ) : (
                    <>
                      <span className="font-mono tracking-wide">
                        ENVIAR MENSAJE
                      </span>
                      <i className="fa-solid fa-paper-plane text-sm transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <div
        id="pricesModal"
        className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md transition-opacity duration-300 ${pricesOpen ? "opacity-100" : "hidden opacity-0"}`}
        onClick={(event) => {
          if (event.target === event.currentTarget) setPricesOpen(false);
        }}
        role="dialog"
        aria-modal="true"
        aria-label="Valores de proyectos"
      >
        <div
          className="bg-slate-900 border border-slate-800 w-full max-w-lg rounded-2xl shadow-[0_0_50px_rgba(168,85,247,0.15)] overflow-hidden transform scale-100 transition-transform duration-300 font-mono"
          id="modalContainer"
        >
          <div className="bg-slate-950 px-6 py-4 flex items-center justify-between border-b border-slate-800">
            <div className="flex items-center gap-2 text-xs text-purple-400">
              <i className="fa-solid fa-terminal"></i>
              <span>{"PRICING_BOT.exe"}</span>
            </div>
            <button
              id="closePricesBtn"
              className="text-slate-500 hover:text-white transition-colors"
              onClick={() => setPricesOpen(false)}
            >
              <i className="fa-solid fa-xmark text-lg"></i>
            </button>
          </div>
          <div className="p-6 space-y-4">
            <div className="flex items-start gap-4 bg-slate-950/50 p-4 rounded-xl border border-slate-800/60">
              <div className="bg-purple-500/10 border border-purple-500/30 p-3 rounded-xl relative flex-shrink-0">
                <i className="fa-solid fa-robot text-2xl text-purple-400"></i>
                <span className="absolute top-1 right-1 w-2 h-2 bg-green-500 rounded-full animate-ping"></span>
              </div>
              <div className="text-xs space-y-1">
                <span className="text-slate-500 block">
                  {"[ SYSTEM_BOT_v1.0 ]"}
                </span>
                <p className="text-slate-300 leading-relaxed">
                  {
                    " Saludos. He analizado el requerimiento actual en tu formulario. Aquí tienes el desglose base estimado para este tipo de arquitectura: "
                  }
                </p>
              </div>
            </div>
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-4">
              <div>
                <span className="text-[10px] text-slate-500 uppercase block tracking-wider">
                  {"// Tipo Detectado"}
                </span>
                <span
                  id="bot-project-title"
                  className="text-sm font-bold text-blue-400"
                >
                  {"> " + pricing.title}
                </span>
              </div>
              <div className="border-t border-slate-800/80 pt-3">
                <span className="text-[10px] text-slate-500 uppercase block tracking-wider">
                  {"// Rango Estimado (USD)"}
                </span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span
                    id="bot-price"
                    className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500"
                  >
                    {pricing.price}
                  </span>
                  <span className="text-[10px] text-slate-400">{"Base"}</span>
                </div>
              </div>
              <div className="border-t border-slate-800/80 pt-3 space-y-1">
                <span className="text-[10px] text-slate-500 uppercase block tracking-wider">
                  {"// Qué incluye este valor"}
                </span>
                <ul
                  id="bot-features"
                  className="text-[11px] text-slate-400 space-y-1.5 list-none pl-0"
                >
                  {pricing.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <span className="text-purple-400">&gt;</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="text-[10px] text-center text-slate-500">
              {
                " *Los costos finales se ajustan según integraciones extras y plazos de entrega. "
              }
            </p>
          </div>
          <div className="bg-slate-950/40 p-4 border-t border-slate-800 text-right">
            <button
              id="closePricesBtn2"
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold rounded-lg transition-colors"
              onClick={() => setPricesOpen(false)}
            >
              {" CERRAR_CONSOLA "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
