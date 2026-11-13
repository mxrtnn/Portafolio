const tech = {
  HTML5: ["html5", "orange"],
  CSS3: ["css3", "blue"],
  JavaScript: ["javascript", "yellow"],
  TypeScript: ["typescript", "violet"],
  SCSS: ["sass", "pink"],
  Vue: ["vuejs", "green"],
  React: ["react", "cyan"],
  Python: ["python", "blue"],
  Django: ["django", "green"],
  MySQL: ["mysql", "blue"],
  "Node.js": ["nodejs", "yellow"],
  Cloudflare: ["cloudflare", "orange"],
  Nginx: ["nginx", "red"],
  "TiDB Cloud": [null, "red"],
  OVHcloud: [null, "indigo"],
  "IA / ML": [null, "violet"],
  PowerShell: [null, "blue"],
  Scrum: [null, "violet"],
};

export default function ProjectTechTags({ technologies }) {
  return (
    <span className="project-tech-list">
      {technologies.map((name) => {
        const [logo, color] = tech[name] || [null, "violet"];
        return (
          <span className={`project-tech-tag tech-${color}`} key={name}>
            {logo ? (
              <img
                src={`/assets/technologies/${logo}.svg`}
                alt=""
                width="16"
                height="16"
              />
            ) : (
              <i
                className={`fa-solid ${name === "Scrum" ? "fa-arrows-rotate" : name === "PowerShell" ? "fa-terminal" : name === "IA / ML" ? "fa-brain" : "fa-cloud"}`}
                aria-hidden="true"
              />
            )}
            {name}
          </span>
        );
      })}
    </span>
  );
}
