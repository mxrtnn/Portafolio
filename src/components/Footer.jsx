import { usePortfolio } from "../context/PortfolioContext";

export default function Footer() {
  const { translate } = usePortfolio();

  return (
    <>
      <footer data-page-surface className="relative bg-slate-950 border-t border-slate-900 overflow-hidden py-12 md:py-16 font-mono text-xs text-slate-400">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-40"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-500/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="relative max-w-6xl mx-auto px-6 z-10 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-start">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-white font-extrabold tracking-wider text-sm">
              <span className="w-2.5 h-2.5 bg-green-400 rounded-sm animate-pulse shadow-[0_0_8px_#4ade80]"></span>
              {" MARTIN_JARA.dev "}
            </div>
            <p className="text-[11px] text-slate-500 leading-relaxed max-w-xs">
              {
                " // Ingeniería, arquitecturas de datos escalables e interfaces inteligentes combinadas en un ecosistema digital de alto rendimiento. "
              }
            </p>
            <div className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-3 flex items-center justify-between max-w-xs">
              <div className="flex items-center gap-2 text-[10px]">
                <i
                  className="fa-solid fa-microchip text-purple-400 animate-spin"
                  style={{ animationDuration: "6s" }}
                ></i>
                <span className="text-slate-400">{"CORE_STATUS:"}</span>
                <span className="text-emerald-400 font-bold">{"ONLINE"}</span>
              </div>
              <span className="text-[9px] text-slate-600 bg-slate-950 px-1.5 py-0.5 rounded border border-slate-800">
                {"v2.0.26"}
              </span>
            </div>
          </div>
          <div className="space-y-4">
            <div className="text-slate-500 uppercase tracking-widest text-[10px] font-bold flex items-center gap-2">
              <i className="fa-solid fa-shield-halved text-blue-400"></i>
              {" [ VERIFIED_CREDENTIALS ] "}
            </div>
            <div className="space-y-2.5 text-[11px]">
              <div className="flex items-start gap-2 group">
                <span className="text-blue-500 group-hover:translate-x-0.5 transition-transform">
                  {">"}
                </span>
                <p className="text-slate-300">
                  {"Desarrollador Full Stack / Ingeniero Informático"}
                </p>
              </div>
              <div className="flex items-start gap-2 group">
                <span className="text-purple-500 group-hover:translate-x-0.5 transition-transform">
                  {">"}
                </span>
                <p className="text-slate-400">
                  {"ScrumMaster Certified "}
                  <span className="text-purple-400/80 text-[10px] font-bold">
                    {"[Certiprof]"}
                  </span>
                </p>
              </div>
              <div className="flex items-start gap-2 group">
                <span className="text-purple-500 group-hover:translate-x-0.5 transition-transform">
                  {">"}
                </span>
                <p className="text-slate-400">
                  {"Artificial Intelligence Professional "}
                  <span className="text-purple-400/80 text-[10px] font-bold">
                    {"[Certiprof]"}
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-4 md:text-right md:flex md:flex-col md:items-end">
            <div>
              <div className="text-slate-500 uppercase tracking-widest text-[10px] font-bold flex items-center md:justify-end gap-2 mb-3">
                <i className="fa-solid fa-network-wired text-purple-400"></i>
                {" [ CONNECT_CHANNELS ] "}
              </div>
              <div className="flex gap-3 justify-start md:justify-end">
                <a
                  href="https://linkedin.com/in/tu-usuario"
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label="LinkedIn"
                  className="w-9 h-9 flex items-center justify-center rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-blue-400 hover:border-blue-500/40 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] transition-all duration-300 group"
                >
                  <i className="fa-brands fa-linkedin-in text-sm group-hover:scale-110 transition-transform"></i>
                </a>
                <a
                  href="https://github.com/tu-usuario"
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label="GitHub"
                  className="w-9 h-9 flex items-center justify-center rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-600 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-300 group"
                >
                  <i className="fa-brands fa-github text-sm group-hover:scale-110 transition-transform"></i>
                </a>
                <a
                  href="https://www.duoc.cl"
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label="Duoc UC"
                  title="Duoc UC"
                  className="h-9 px-3 flex items-center justify-center gap-1.5 rounded-xl bg-slate-900 border border-slate-800 text-[10px] font-bold text-slate-400 hover:text-amber-400 hover:border-amber-500/40 hover:shadow-[0_0_15px_rgba(245,158,11,0.15)] transition-all duration-300 group"
                >
                  <i className="fa-solid fa-graduation-cap text-xs group-hover:animate-bounce"></i>
                  <span>{"DUOC UC"}</span>
                </a>
              </div>
            </div>
            <div className="hidden md:block text-[9px] text-slate-600 font-mono text-right mt-2 bg-slate-950 p-2 rounded-lg border border-slate-900 select-none">
              <span className="animate-pulse text-purple-600/60 block">
                {"🤖 BOT_DECOR_MODULE"}
              </span>
              <span>{"[o_o] < Keep building. //"}</span>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-6 mt-10 pt-6 border-t border-slate-900/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-slate-600">
          <div className="flex items-center gap-1">
            <span>{"© 2026 Martin Jara."}</span>
            <span className="text-slate-700">{"|"}</span>
            <span>{"Todos los derechos reservados."}</span>
          </div>
          <div className="flex items-center gap-2 font-mono">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-ping"></span>
            <span>{"BUILT_WITH_AI_AESTHETIC_STACK"}</span>
          </div>
        </div>
      </footer>
    </>
  );
}
