import { usePortfolio } from "../context/PortfolioContext";
import { useTypewriter } from "../hooks/useTypewriter";

export default function Hero() {
  const { language, translate, dark } = usePortfolio();
  const typedText = useTypewriter(language);
  return (
    <>
      <header
        id="inicio"
        className="max-w-7xl mx-auto px-6 md:px-10 pt-10 md:pt-16 pb-16 md:pb-24 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center text-center lg:text-left"
      >
        <div className="order-2 lg:order-1">
          <p
            className="text-accentBlue tracking-widest text-sm font-semibold mb-2"
            data-lang="header_sub"
          >
            {translate("header_sub", <>{"Portafolio Web"}</>)}
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight text-slate-900 dark:text-white">
            {" Martín Jara "}
            <br className="hidden lg:block" />
            <span
              className="text-accentBlue text-3xl md:text-5xl"
              id="typewriter"
            >
              {typedText}
            </span>
            <span className="cursor"></span>
          </h1>
          <p
            className="text-slate-600 dark:text-gray-400 mt-4 mb-8 text-sm leading-relaxed max-w-md mx-auto lg:mx-0"
            data-lang="header_desc"
          >
            {translate(
              "header_desc",
              <>
                {
                  " Ingeniero Informático | Especialista en IA & Data Science | Scrum Master Transformo ideas complejas en soluciones digitales eficientes, en donde cada desarrollo represente un encaje perfecto con la identidad visual y los objetivos de la empresa "
                }
              </>,
            )}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <a
              href="#contacto"
              className="bg-accentBlue hover:bg-blue-700 text-white px-6 py-3 rounded-full text-sm font-semibold flex items-center gap-2 transition w-full sm:w-auto justify-center"
              data-lang="header_btn"
            >
              {translate("header_btn", <>{" Mis Redes → "}</>)}
            </a>
            <div className="flex gap-4">
              <a
                href="https://github.com/mxrtnn"
                rel="noopener noreferrer"
                target="_blank"
                aria-label="Github"
                className="w-10 h-10 rounded-full border border-slate-400 dark:border-gray-600 flex items-center justify-center text-slate-700 dark:text-white hover:bg-slate-200 dark:hover:bg-gray-800 transition"
              >
                <i className="fa-brands fa-github text-lg"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/martín-jara-castañeda-0bb552148/"
                rel="noopener noreferrer"
                target="_blank"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full border border-slate-400 dark:border-gray-600 flex items-center justify-center text-slate-700 dark:text-white hover:bg-[#0077b5] hover:text-white dark:hover:bg-[#0077b5] transition hover:border-[#0077b5]"
              >
                <i className="fa-brands fa-linkedin-in text-lg"></i>
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=martinjara580@gmail.com"
                aria-label="Enviar correo"
                className="w-10 h-10 rounded-full border border-slate-400 dark:border-gray-600 flex items-center justify-center text-slate-700 dark:text-white hover:bg-[#ea4335] hover:text-white dark:hover:bg-[#ea4335] transition hover:border-[#ea4335]"
              >
                <i className="fa-solid fa-envelope text-lg"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-2 relative flex justify-center items-center w-full min-h-[350px] md:min-h-[450px]">
          <div className="relative flex justify-center items-center transform scale-[0.70] sm:scale-90 md:scale-100 origin-center">
            <div className="absolute inset-0 flex items-center justify-center opacity-40 dark:opacity-30 -z-10">
              <div className="absolute w-[450px] h-[450px] border-[1px] border-blue-400 dark:border-white/30 rounded-full animate-spin-slow"></div>
              <div className="absolute w-[350px] h-[350px] border-[1px] border-accentBlue/40 dark:border-accentLight/30 rounded-full animate-spin-medium"></div>
            </div>
            <div className="absolute w-[450px] h-[450px] flex items-center justify-center animate-spin-slow -z-10">
              <div className="absolute -top-4 text-3xl text-accentBlue dark:text-accentLight font-bold animate-counter-spin-slow">
                {"∑"}
              </div>
              <div className="absolute bottom-6 -right-2 text-2xl text-slate-600 dark:text-white font-mono animate-counter-spin-slow">
                {"∫"}
              </div>
              <div className="absolute -left-4 top-[35%] text-2xl text-accentBlue animate-counter-spin-slow">
                <i className="fa-solid fa-code"></i>
              </div>
              <div className="absolute -bottom-4 left-[30%] text-3xl text-slate-500 dark:text-gray-300 animate-counter-spin-slow">
                <i className="fa-solid fa-microchip"></i>
              </div>
              <div className="absolute top-12 -right-4 text-2xl text-accentBlue dark:text-accentLight animate-counter-spin-slow">
                <i className="fa-solid fa-network-wired"></i>
              </div>
            </div>
            <div className="relative w-80 h-80 rounded-full overflow-hidden border-[12px] border-lightBg dark:border-darkBg shadow-2xl z-10 flex-shrink-0 bg-slate-200 dark:bg-gray-800 transition-colors duration-500">
              <img
                src="/assets/img/perfil.jpg"
                alt="Martín Jara"
                className="object-cover w-full h-full scale-105"
              />
            </div>
            <div className="absolute top-10 left-10 w-8 h-8 bg-gradient-to-br from-blue-400 dark:from-gray-700 to-blue-800 dark:to-black rounded-full shadow-lg float-anim z-0"></div>
            <div
              className="absolute bottom-10 right-10 w-12 h-12 bg-gradient-to-br from-accentBlue to-blue-900 dark:to-black rounded-full shadow-lg float-anim z-0"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>
        </div>
      </header>
    </>
  );
}
