import { useEffect } from "react";

// Progressive enhancement: content stays visible if IntersectionObserver is unavailable.
export function useScrollReveal(rootRef) {
  useEffect(() => {
    const root = rootRef.current;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!root || !("IntersectionObserver" in window)) return;
    const targets = root.querySelectorAll(
      [
        ".profile-stack-heading",
        ".technology-card",
        ".profile-intro",
        "#propuesta-valor .text-center",
        "#propuesta-valor .grid > div",
        ".editor-container",
        "#certificaciones > .text-center",
        "#certificaciones > .grid > div",
        "#experiencia .text-center",
        ".timeline-item",
        ".projects-heading",
        ".project-featured",
        ".gx-project-card",
        "#proyectos [data-github]",
        "#contacto > .relative",
        "footer > .relative",
      ].join(","),
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ target, isIntersecting }) => {
          if (!isIntersecting) return;
          target.classList.add("reveal-visible");
          observer.unobserve(target);
        });
      },
      { threshold: 0.06, rootMargin: "0px 0px -24px 0px" },
    );
    function configure() {
      observer.disconnect();
      targets.forEach((target, index) => {
        if (preference.matches) {
          target.classList.remove("reveal-pending", "reveal-visible");
          return;
        }
        target.style.setProperty("--reveal-delay", `${(index % 3) * 65}ms`);
        target.classList.add("reveal-pending");
        // Anchor links and keyboard focus must never leave content hidden.
        if (target.getBoundingClientRect().top < window.innerHeight - 24)
          target.classList.add("reveal-visible");
        else observer.observe(target);
      });
    }
    configure();
    preference.addEventListener("change", configure);
    return () => {
      observer.disconnect();
      preference.removeEventListener("change", configure);
      targets.forEach((target) => {
        target.classList.remove("reveal-pending", "reveal-visible");
        target.style.removeProperty("--reveal-delay");
      });
    };
  }, [rootRef]);
}
