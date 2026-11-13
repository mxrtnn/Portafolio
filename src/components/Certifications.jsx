import { usePortfolio } from "../context/PortfolioContext";

export default function Certifications() {
  const { translate, dark } = usePortfolio();

  return (
    <>
      <section data-page-surface
        id="certificaciones"
        className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24"
      >
        <div className="text-center mb-12 lg:mb-16">
          <p
            className="text-accentBlue dark:text-accentLight tracking-widest text-xs font-semibold mb-3"
            data-lang="certs_sub"
          >
            {translate("certs_sub", <>{" LOGROS VALIDADOS "}</>)}
          </p>
          <h2
            className="text-3xl md:text-4xl font-extrabold text-slate-800 dark:text-white leading-tight"
            data-lang="certs_heading"
          >
            {translate(
              "certs_heading",
              <>
                {" INSIGNIAS Y "}
                <span className="text-accentBlue">{"CERTIFICACIONES"}</span>
              </>,
            )}
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-cardLight dark:bg-cardDark p-8 rounded-3xl border border-blue-100 dark:border-gray-800 shadow-sm hover:shadow-[0_10px_30px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:border-accentBlue/50 transition-all duration-500 transform hover:-translate-y-2 flex flex-col items-center group">
            <div
              className="w-32 h-32 mb-6 relative flex justify-center items-center float-anim"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="absolute inset-0 bg-accentBlue/20 dark:bg-accentLight/10 blur-xl rounded-full z-0 group-hover:scale-110 transition-transform duration-500"></div>
              <img
                src="/assets/img/badge_scr.png"
                alt="Scrum Master Professional Certification"
                className="relative z-10 w-full h-full object-contain drop-shadow-md group-hover:rotate-3 transition-transform duration-500"
              />
            </div>
            <h3 className="text-xl font-bold text-slate-800 dark:text-white text-center mb-4 min-h-[56px] flex items-center justify-center">
              {" Scrum Master Professional Certification - SMPC® "}
            </h3>
            <div className="mt-auto w-full flex flex-col items-center gap-3">
              <a
                href="https://www.credly.com/badges/6844e459-1ff9-4688-8238-be3d6621d8c6/public_url"
                rel="noopener noreferrer"
                target="_blank"
                className="flex items-center justify-center gap-2 bg-transparent border-2 border-accentBlue dark:border-accentLight text-accentBlue dark:text-accentLight hover:bg-accentBlue hover:text-white dark:hover:bg-accentLight dark:hover:text-gray-900 px-6 py-2.5 rounded-full text-sm font-bold transition-all w-full md:w-4/5 shadow-sm"
              >
                {" Ver Insignia "}
                <i className="fa-solid fa-arrow-up-right-from-square text-xs"></i>
              </a>
              <a
                href="/assets/cv/Scrum Master Professional Certificate.pdf"
                download
                className="flex items-center justify-center gap-2 text-xs font-bold text-slate-500 dark:text-gray-400 hover:text-accentBlue dark:hover:text-accentLight transition-colors py-1"
              >
                <i className="fa-solid fa-file-pdf"></i>
                {" Ver Certificado "}
              </a>
              <p className="text-[11px] font-extrabold text-accentBlue dark:text-accentLight tracking-widest text-center mt-3 uppercase">
                {" Metodologías Ágiles - Certiprof "}
              </p>
            </div>
          </div>
          <div className="bg-cardLight dark:bg-cardDark p-8 rounded-3xl border border-blue-100 dark:border-gray-800 shadow-sm hover:shadow-[0_10px_30px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:border-accentBlue/50 transition-all duration-500 transform hover:-translate-y-2 flex flex-col items-center group">
            <div
              className="w-32 h-32 mb-6 relative flex justify-center items-center float-anim"
              style={{ animationDelay: "0.15s" }}
            >
              <div className="absolute inset-0 bg-accentBlue/20 dark:bg-accentLight/10 blur-xl rounded-full z-0 group-hover:scale-110 transition-transform duration-500"></div>
              <img
                src="/assets/img/badge_scrum_fd.png"
                alt="Scrum Foundation Professional Certification"
                className="relative z-10 w-full h-full object-contain drop-shadow-md group-hover:rotate-3 transition-transform duration-500"
              />
            </div>
            <h3 className="text-xl font-bold text-slate-800 dark:text-white text-center mb-4 min-h-[56px] flex items-center justify-center">
              {" Scrum Foundation Professional Certification - SFPC™ "}
            </h3>
            <div className="mt-auto w-full flex flex-col items-center gap-3">
              <a
                href="https://www.credly.com/badges/96863aac-9354-4255-a494-f9bbb4910809/linked_in_profile"
                rel="noopener noreferrer"
                target="_blank"
                className="flex items-center justify-center gap-2 bg-transparent border-2 border-accentBlue dark:border-accentLight text-accentBlue dark:text-accentLight hover:bg-accentBlue hover:text-white dark:hover:bg-accentLight dark:hover:text-gray-900 px-6 py-2.5 rounded-full text-sm font-bold transition-all w-full md:w-4/5 shadow-sm"
              >
                {" Ver Insignia "}
                <i className="fa-solid fa-arrow-up-right-from-square text-xs"></i>
              </a>
              <a
                href="/assets/cv/Scrum Foundation Professional Certificate.pdf"
                download
                className="flex items-center justify-center gap-2 text-xs font-bold text-slate-500 dark:text-gray-400 hover:text-accentBlue dark:hover:text-accentLight transition-colors py-1"
              >
                <i className="fa-solid fa-file-pdf"></i>
                {" Ver Certificado "}
              </a>
              <p className="text-[11px] font-extrabold text-accentBlue dark:text-accentLight tracking-widest text-center mt-3 uppercase">
                {" Metodologías Ágiles - Certiprof "}
              </p>
            </div>
          </div>
          <div className="bg-cardLight dark:bg-cardDark p-8 rounded-3xl border border-blue-100 dark:border-gray-800 shadow-sm hover:shadow-[0_10px_30px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:border-accentBlue/50 transition-all duration-500 transform hover:-translate-y-2 flex flex-col items-center group">
            <div
              className="w-32 h-32 mb-6 relative flex justify-center items-center float-anim"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="absolute inset-0 bg-accentBlue/20 dark:bg-accentLight/10 blur-xl rounded-full z-0 group-hover:scale-110 transition-transform duration-500"></div>
              <img
                src="/assets/img/scrum_developer.png"
                alt="Scrum Developer Professional Certification"
                className="relative z-10 w-full h-full object-contain drop-shadow-md group-hover:rotate-3 transition-transform duration-500"
              />
            </div>
            <h3 className="text-xl font-bold text-slate-800 dark:text-white text-center mb-4 min-h-[56px] flex items-center justify-center">
              {" Scrum Developer Professional Certification - SDPC "}
            </h3>
            <div className="mt-auto w-full flex flex-col items-center gap-3">
              <a
                href="https://www.credly.com/badges/7858ea03-88fa-4434-9de3-2e3088534f54/public_url"
                rel="noopener noreferrer"
                target="_blank"
                className="flex items-center justify-center gap-2 bg-transparent border-2 border-accentBlue dark:border-accentLight text-accentBlue dark:text-accentLight hover:bg-accentBlue hover:text-white dark:hover:bg-accentLight dark:hover:text-gray-900 px-6 py-2.5 rounded-full text-sm font-bold transition-all w-full md:w-4/5 shadow-sm"
              >
                {" Ver Insignia "}
                <i className="fa-solid fa-arrow-up-right-from-square text-xs"></i>
              </a>
              <a
                href="/assets/cv/Certificate-Martin-JaraCastanedaScrum.pdf"
                download
                className="flex items-center justify-center gap-2 text-xs font-bold text-slate-500 dark:text-gray-400 hover:text-accentBlue dark:hover:text-accentLight transition-colors py-1"
              >
                <i className="fa-solid fa-file-pdf"></i>
                {" Ver Certificado "}
              </a>
              <p className="text-[11px] font-extrabold text-accentBlue dark:text-accentLight tracking-widest text-center mt-3 uppercase">
                {" Metodologías Ágiles - Certiprof "}
              </p>
            </div>
          </div>
          <div className="bg-cardLight dark:bg-cardDark p-8 rounded-3xl border border-blue-100 dark:border-gray-800 shadow-sm hover:shadow-[0_10px_30px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:border-accentBlue/50 transition-all duration-500 transform hover:-translate-y-2 flex flex-col items-center group">
            <div
              className="w-32 h-32 mb-6 relative flex justify-center items-center float-anim"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="absolute inset-0 bg-accentBlue/20 dark:bg-accentLight/10 blur-xl rounded-full z-0 group-hover:scale-110 transition-transform duration-500"></div>
              <img
                src="/assets/img/badge_lf.png"
                alt="LifeLong Learning"
                className="relative z-10 w-full h-full object-contain drop-shadow-md group-hover:rotate-3 transition-transform duration-500"
              />
            </div>
            <h3 className="text-xl font-bold text-slate-800 dark:text-white text-center mb-4 min-h-[56px] flex items-center justify-center">
              {" LifeLong Learning "}
            </h3>
            <div className="mt-auto w-full flex flex-col items-center gap-3">
              <a
                href="https://profiles.badgeclaimed.com/user-47050/badges/urn:uuid:693c52a3-b076-42b7-82f2-9eacdfe51576.html"
                rel="noopener noreferrer"
                target="_blank"
                className="flex items-center justify-center gap-2 bg-transparent border-2 border-accentBlue dark:border-accentLight text-accentBlue dark:text-accentLight hover:bg-accentBlue hover:text-white dark:hover:bg-accentLight dark:hover:text-gray-900 px-6 py-2.5 rounded-full text-sm font-bold transition-all w-full md:w-4/5 shadow-sm"
              >
                {" Ver Insignia "}
                <i className="fa-solid fa-arrow-up-right-from-square text-xs"></i>
              </a>
              <a
                href="https://profiles.badgeclaimed.com/user-47050/badges/urn:uuid:693c52a3-b076-42b7-82f2-9eacdfe51576.html"
                download
                className="flex items-center justify-center gap-2 text-xs font-bold text-slate-500 dark:text-gray-400 hover:text-accentBlue dark:hover:text-accentLight transition-colors py-1"
              >
                <i className="fa-solid fa-file-pdf"></i>
                {" Ver Certificado "}
              </a>
              <p className="text-[11px] font-extrabold text-accentBlue dark:text-accentLight tracking-widest text-center mt-3 uppercase">
                {" Desarrollo Continuo - Certiprof "}
              </p>
            </div>
          </div>
          <div className="bg-cardLight dark:bg-cardDark p-8 rounded-3xl border border-blue-100 dark:border-gray-800 shadow-sm hover:shadow-[0_10px_30px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:border-accentBlue/50 transition-all duration-500 transform hover:-translate-y-2 flex flex-col items-center group">
            <div
              className="w-32 h-32 mb-6 relative flex justify-center items-center float-anim"
              style={{ animationDelay: "0.25s" }}
            >
              <div className="absolute inset-0 bg-accentBlue/20 dark:bg-accentLight/10 blur-xl rounded-full z-0 group-hover:scale-110 transition-transform duration-500"></div>
              <img
                src="/assets/img/badge_ia.png"
                alt="Artificial Intelligence Professional Certification"
                className="relative z-10 w-full h-full object-contain drop-shadow-md group-hover:rotate-3 transition-transform duration-500"
              />
            </div>
            <h3 className="text-xl font-bold text-slate-800 dark:text-white text-center mb-4 min-h-[56px] flex items-center justify-center">
              {" Artificial Intelligence Professional Certification - CAIPC® "}
            </h3>
            <div className="mt-auto w-full flex flex-col items-center gap-3">
              <a
                href="https://www.credly.com/badges/30548248-89aa-4b88-be3f-86e516213db6/linked_in_profile"
                rel="noopener noreferrer"
                target="_blank"
                className="flex items-center justify-center gap-2 bg-transparent border-2 border-accentBlue dark:border-accentLight text-accentBlue dark:text-accentLight hover:bg-accentBlue hover:text-white dark:hover:bg-accentLight dark:hover:text-gray-900 px-6 py-2.5 rounded-full text-sm font-bold transition-all w-full md:w-4/5 shadow-sm"
              >
                {" Ver Insignia "}
                <i className="fa-solid fa-arrow-up-right-from-square text-xs"></i>
              </a>
              <a
                href="/assets/cv/Artificial Inteligence Expert Certificate.pdf"
                download
                className="flex items-center justify-center gap-2 text-xs font-bold text-slate-500 dark:text-gray-400 hover:text-accentBlue dark:hover:text-accentLight transition-colors py-1"
              >
                <i className="fa-solid fa-file-pdf"></i>
                {" Ver Certificado "}
              </a>
              <p className="text-[11px] font-extrabold text-accentBlue dark:text-accentLight tracking-widest text-center mt-3 uppercase">
                {" Inteligencia Artificial - Certiprof "}
              </p>
            </div>
          </div>
          <div className="bg-cardLight dark:bg-cardDark p-8 rounded-3xl border border-blue-100 dark:border-gray-800 shadow-sm hover:shadow-[0_10px_30px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:border-accentBlue/50 transition-all duration-500 transform hover:-translate-y-2 flex flex-col items-center group">
            <div
              className="w-32 h-32 mb-6 relative flex justify-center items-center float-anim"
              style={{ animationDelay: "0.25s" }}
            >
              <div className="absolute inset-0 bg-accentBlue/20 dark:bg-accentLight/10 blur-xl rounded-full z-0 group-hover:scale-110 transition-transform duration-500"></div>
              <img
                src="/assets/img/generative_ia.png"
                alt="Generative AI Professional Certification"
                className="relative z-10 w-full h-full object-contain drop-shadow-md group-hover:rotate-3 transition-transform duration-500"
              />
            </div>
            <h3 className="text-xl font-bold text-slate-800 dark:text-white text-center mb-4 min-h-[56px] flex items-center justify-center">
              {" Generative AI Professional Certification - GAIPC™ "}
            </h3>
            <div className="mt-auto w-full flex flex-col items-center gap-3">
              <a
                href="https://www.credly.com/badges/30548248-89aa-4b88-be3f-86e516213db6/linked_in_profile"
                rel="noopener noreferrer"
                target="_blank"
                className="flex items-center justify-center gap-2 bg-transparent border-2 border-accentBlue dark:border-accentLight text-accentBlue dark:text-accentLight hover:bg-accentBlue hover:text-white dark:hover:bg-accentLight dark:hover:text-gray-900 px-6 py-2.5 rounded-full text-sm font-bold transition-all w-full md:w-4/5 shadow-sm"
              >
                {" Ver Insignia "}
                <i className="fa-solid fa-arrow-up-right-from-square text-xs"></i>
              </a>
              <a
                href="/assets/cv/Certificate-Martin-JaraCastanedaGenerative.pdf"
                download
                className="flex items-center justify-center gap-2 text-xs font-bold text-slate-500 dark:text-gray-400 hover:text-accentBlue dark:hover:text-accentLight transition-colors py-1"
              >
                <i className="fa-solid fa-file-pdf"></i>
                {" Ver Certificado "}
              </a>
              <p className="text-[11px] font-extrabold text-accentBlue dark:text-accentLight tracking-widest text-center mt-3 uppercase">
                {" Inteligencia Artificial - Certiprof "}
              </p>
            </div>
          </div>
          <div className="bg-cardLight dark:bg-cardDark p-8 rounded-3xl border border-blue-100 dark:border-gray-800 shadow-sm hover:shadow-[0_10px_30px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:border-accentBlue/50 transition-all duration-500 transform hover:-translate-y-2 flex flex-col items-center group">
            <div
              className="w-32 h-32 mb-6 relative flex justify-center items-center float-anim"
              style={{ animationDelay: "0.25s" }}
            >
              <div className="absolute inset-0 bg-accentBlue/20 dark:bg-accentLight/10 blur-xl rounded-full z-0 group-hover:scale-110 transition-transform duration-500"></div>
              <img
                src="/assets/img/generative_ia.png"
                alt="Generative AI Professional Certification"
                className="relative z-10 w-full h-full object-contain drop-shadow-md group-hover:rotate-3 transition-transform duration-500"
              />
            </div>
            <h3 className="text-xl font-bold text-slate-800 dark:text-white text-center mb-4 min-h-[56px] flex items-center justify-center">
              {" DevOps Essentials Professional Certification - DEPC® "}
            </h3>
            <div className="mt-auto w-full flex flex-col items-center gap-3">
              <a
                href="https://www.credly.com/earner/earned/badge/4f569038-3318-4756-ac7b-48f7d85254bc"
                rel="noopener noreferrer"
                target="_blank"
                className="flex items-center justify-center gap-2 bg-transparent border-2 border-accentBlue dark:border-accentLight text-accentBlue dark:text-accentLight hover:bg-accentBlue hover:text-white dark:hover:bg-accentLight dark:hover:text-gray-900 px-6 py-2.5 rounded-full text-sm font-bold transition-all w-full md:w-4/5 shadow-sm"
              >
                {" Ver Insignia "}
                <i className="fa-solid fa-arrow-up-right-from-square text-xs"></i>
              </a>
              <a
                href="/assets/cv/Certificate-MartinJara-CastanedaDevops.pdf"
                download
                className="flex items-center justify-center gap-2 text-xs font-bold text-slate-500 dark:text-gray-400 hover:text-accentBlue dark:hover:text-accentLight transition-colors py-1"
              >
                <i className="fa-solid fa-file-pdf"></i>
                {" Ver Certificado "}
              </a>
              <p className="text-[11px] font-extrabold text-accentBlue dark:text-accentLight tracking-widest text-center mt-3 uppercase">
                {" Dev0ps - Certiprof "}
              </p>
            </div>
          </div>
          <div className="bg-cardLight dark:bg-cardDark p-8 rounded-3xl border border-blue-100 dark:border-gray-800 shadow-sm hover:shadow-[0_10px_30px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:border-accentBlue/50 transition-all duration-500 transform hover:-translate-y-2 flex flex-col items-center group">
            <div
              className="w-32 h-32 mb-6 relative flex justify-center items-center float-anim"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="absolute inset-0 bg-accentBlue/20 dark:bg-accentLight/10 blur-xl rounded-full z-0 group-hover:scale-110 transition-transform duration-500"></div>
              <img
                src="/assets/img/badge_python.png"
                alt="Python Essentials 1"
                className="relative z-10 w-full h-full object-contain drop-shadow-md group-hover:rotate-3 transition-transform duration-500"
              />
            </div>
            <h3 className="text-xl font-bold text-slate-800 dark:text-white text-center mb-4 min-h-[56px] flex items-center justify-center">
              {" Python Essentials I "}
            </h3>
            <div className="mt-auto w-full flex flex-col items-center gap-3">
              <a
                href="https://www.credly.com/badges/11be5261-0c4e-4e82-8e92-f5b775c93fc5/public_url"
                rel="noopener noreferrer"
                target="_blank"
                className="flex items-center justify-center gap-2 bg-transparent border-2 border-accentBlue dark:border-accentLight text-accentBlue dark:text-accentLight hover:bg-accentBlue hover:text-white dark:hover:bg-accentLight dark:hover:text-gray-900 px-6 py-2.5 rounded-full text-sm font-bold transition-all w-full md:w-4/5 shadow-sm"
              >
                {" Ver Insignia "}
                <i className="fa-solid fa-arrow-up-right-from-square text-xs"></i>
              </a>
              <a
                href="/assets/cv/Python Essentials I Certificate.pdf"
                download
                className="flex items-center justify-center gap-2 text-xs font-bold text-slate-500 dark:text-gray-400 hover:text-accentBlue dark:hover:text-accentLight transition-colors py-1"
              >
                <i className="fa-solid fa-file-pdf"></i>
                {" Ver Certificado "}
              </a>
              <p className="text-[11px] font-extrabold text-accentBlue dark:text-accentLight tracking-widest text-center mt-3 uppercase">
                {" Programación Python - Cisco Academy "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
